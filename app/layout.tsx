import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flow Indicators - MAX MÜLLER",
  description: "Professional flow indicators and sight glasses for industrial applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
