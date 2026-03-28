import { motion, Variants } from "framer-motion";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
  variants?: Variants;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  dark = false,
  variants,
}: SectionIntroProps) {
  return (
    <motion.div variants={variants} className="max-w-3xl">
      <span
        className={`inline-block px-4 py-2 rounded-full border text-xs font-semibold uppercase tracking-widest mb-8 ${
          dark
            ? "border-white/20 text-white/80"
            : "border-outline-variant/20 text-secondary"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-4xl md:text-6xl font-bold tracking-tight leading-tight ${
          dark ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-8 text-lg leading-relaxed ${
            dark ? "text-white/65" : "text-on-surface-variant"
          }`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
