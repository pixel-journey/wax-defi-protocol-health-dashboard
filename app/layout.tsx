import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Labels from three integers",
  description: "TVL 1000, volume 100, and 2 LPs is few-lps and 1000 bps of turnover. Volume with zero TVL is named, not scored. No pool is read.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
