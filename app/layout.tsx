import type { Metadata } from "next";
import { DM_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "个人介绍",
    template: "%s · Portfolio",
  },
  description:
    "苹果风格个人介绍站点 — Next.js、极简留白与清晰排版。",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "个人介绍",
    description:
      "苹果风格个人介绍站点 — Next.js、极简留白与清晰排版。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${dmMono.variable} font-display min-h-screen bg-[#f5f5f7] text-[#1d1d1f] antialiased dark:bg-[#1d1d1f] dark:text-[#f5f5f7]`}
      >
        {children}
      </body>
    </html>
  );
}
