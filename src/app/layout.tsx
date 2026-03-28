import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import Chatbot from "@/components/Chatbot";
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
  title: "Blue Ocean Inco | About Us",
  description: "The Union of Precision and Vision.",
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
      <body className="font-sans min-h-full flex flex-col bg-surface-lowest text-on-surface">
        <SmoothScroll>
          {children}
          <Chatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
