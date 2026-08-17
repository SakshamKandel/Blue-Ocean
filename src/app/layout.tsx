import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Ocean Inco Pvt. Ltd. | Strategic Investments & Meaningful Growth",
  description:
    "Blue Ocean Inco Pvt. Ltd. is an investment company based in Kathmandu, Nepal, combining capital, insight, and strategic partnerships to identify opportunities with sustainable long-term value.",
  icons: {
    icon: "/Logo.png",
    shortcut: "/Logo.png",
    apple: "/Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-[#f8fafc] text-slate-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
