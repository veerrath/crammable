import type { Metadata } from "next";
import { GeistSans } from "@vercel/geist/font/sans";
import { GeistMono } from "@vercel/geist/font/mono";
import "./globals.css";  // <--- your global CSS import

export const metadata: Metadata = {
  title: "Crammable - AI-Powered AP Study Reviews",
  description: "Transform YouTube transcripts into comprehensive AP study guides with AI-powered organization, condensation, and review generation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
