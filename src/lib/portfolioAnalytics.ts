export type RiskProfile = "low" | "moderate" | "high";

export type PortfolioAnalyticsInput = {
  aum: string;
  risk: RiskProfile;
  equities: number;
  fixedIncome: number;
  realAssets: number;
  cash: number;
  monthlyContribution: number;
  horizonYears: number;
};

type AssetClass = "equities" | "fixedIncome" | "realAssets" | "cash";

const EXPECTED_RETURNS: Record<RiskProfile, Record<AssetClass, number>> = {
  low: {
    equities: 0.1,
    fixedIncome: 0.072,
    realAssets: 0.085,
    cash: 0.045,
  },
  moderate: {
    equities: 0.125,
    fixedIncome: 0.078,
    realAssets: 0.097,
    cash: 0.05,
  },
  high: {
    equities: 0.16,
    fixedIncome: 0.085,
    realAssets: 0.11,
    cash: 0.052,
  },
};

const VOLATILITY: Record<RiskProfile, Record<AssetClass, number>> = {
  low: {
    equities: 0.18,
    fixedIncome: 0.06,
    realAssets: 0.11,
    cash: 0.01,
  },
  moderate: {
    equities: 0.24,
    fixedIncome: 0.07,
    realAssets: 0.13,
    cash: 0.012,
  },
  high: {
    equities: 0.32,
    fixedIncome: 0.09,
    realAssets: 0.16,
    cash: 0.015,
  },
};

const LIQUIDITY: Record<AssetClass, number> = {
  equities: 0.8,
  fixedIncome: 0.72,
  realAssets: 0.42,
  cash: 1,
};

const CORRELATION_MATRIX: Record<AssetClass, Record<AssetClass, number>> = {
  equities: { equities: 1, fixedIncome: 0.28, realAssets: 0.45, cash: 0.05 },
  fixedIncome: { equities: 0.28, fixedIncome: 1, realAssets: 0.22, cash: 0.1 },
  realAssets: { equities: 0.45, fixedIncome: 0.22, realAssets: 1, cash: 0.04 },
  cash: { equities: 0.05, fixedIncome: 0.1, realAssets: 0.04, cash: 1 },
};

const ASSET_KEYS: AssetClass[] = ["equities", "fixedIncome", "realAssets", "cash"];

export type PortfolioAnalyticsResult = {
  parsedAum: number;
  normalizedWeights: Record<AssetClass, number>;
  allocationTotal: number;
  expectedAnnualReturn: number;
  expectedAnnualVolatility: number;
  liquidityScore: number;
  diversificationScore: number;
  resilienceScore: number;
  efficiencyScore: number;
  projectedValue: number;
  monthlyContributionImpact: number;
};

export function parseCurrencyInput(value: string): number {
  const normalized = value.trim().toLowerCase().replace(/,/g, "");
  const numeric = Number.parseFloat(normalized.replace(/[^0-9.]/g, ""));

  if (Number.isNaN(numeric)) {
    return 0;
  }

  if (normalized.includes("cr")) {
    return numeric * 10_000_000;
  }

  if (normalized.includes("m")) {
    return numeric * 1_000_000;
  }

  if (normalized.includes("l")) {
    return numeric * 100_000;
  }

  if (normalized.includes("k")) {
    return numeric * 1_000;
  }

  return numeric;
}

export function formatNprCompact(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NPR",
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function computePortfolioAnalytics(
  input: PortfolioAnalyticsInput,
): PortfolioAnalyticsResult {
  const parsedAum = parseCurrencyInput(input.aum);
  const allocationTotal =
    input.equities + input.fixedIncome + input.realAssets + input.cash;

  const safeTotal = allocationTotal > 0 ? allocationTotal : 100;
  const normalizedWeights = {
    equities: input.equities / safeTotal,
    fixedIncome: input.fixedIncome / safeTotal,
    realAssets: input.realAssets / safeTotal,
    cash: input.cash / safeTotal,
  };

  const expectedAnnualReturn = ASSET_KEYS.reduce((sum, key) => {
    return sum + normalizedWeights[key] * EXPECTED_RETURNS[input.risk][key];
  }, 0);

  const variance = ASSET_KEYS.reduce((outerSum, firstKey) => {
    return (
      outerSum +
      ASSET_KEYS.reduce((innerSum, secondKey) => {
        return (
          innerSum +
          normalizedWeights[firstKey] *
            normalizedWeights[secondKey] *
            VOLATILITY[input.risk][firstKey] *
            VOLATILITY[input.risk][secondKey] *
            CORRELATION_MATRIX[firstKey][secondKey]
        );
      }, 0)
    );
  }, 0);

  const expectedAnnualVolatility = Math.sqrt(Math.max(variance, 0));

  const liquidityScore =
    ASSET_KEYS.reduce((sum, key) => sum + normalizedWeights[key] * LIQUIDITY[key], 0) *
    100;

  const hhi = ASSET_KEYS.reduce((sum, key) => sum + normalizedWeights[key] ** 2, 0);
  const diversificationScore = Math.max(0, Math.min(100, ((1 - hhi) / 0.75) * 100));

  const stabilityMix =
    normalizedWeights.fixedIncome * 0.9 +
    normalizedWeights.cash * 1 +
    normalizedWeights.realAssets * 0.55 +
    normalizedWeights.equities * 0.3;
  const volatilityPenalty = Math.min(1, expectedAnnualVolatility / 0.3);
  const resilienceScore = Math.max(
    0,
    Math.min(100, (stabilityMix * 70 + (1 - volatilityPenalty) * 30) * 100),
  );

  const years = Math.max(1, input.horizonYears);
  const monthlyRate = expectedAnnualReturn / 12;
  const months = years * 12;
  const projectedPrincipal = parsedAum * (1 + expectedAnnualReturn) ** years;
  const projectedSip =
    input.monthlyContribution > 0
      ? input.monthlyContribution *
        (((1 + monthlyRate) ** months - 1) / Math.max(monthlyRate, 0.0001))
      : 0;
  const projectedValue = projectedPrincipal + projectedSip;
  const monthlyContributionImpact = projectedSip;

  const returnScore = Math.min(100, (expectedAnnualReturn / 0.18) * 100);
  const volatilityScore = Math.max(0, 100 - (expectedAnnualVolatility / 0.32) * 100);

  const efficiencyScore = Math.round(
    Math.max(
      1,
      Math.min(
        100,
        returnScore * 0.3 +
          volatilityScore * 0.2 +
          diversificationScore * 0.2 +
          liquidityScore * 0.15 +
          resilienceScore * 0.15,
      ),
    ),
  );

  return {
    parsedAum,
    normalizedWeights,
    allocationTotal,
    expectedAnnualReturn,
    expectedAnnualVolatility,
    liquidityScore: Math.round(liquidityScore),
    diversificationScore: Math.round(diversificationScore),
    resilienceScore: Math.round(resilienceScore),
    efficiencyScore,
    projectedValue,
    monthlyContributionImpact,
  };
}
