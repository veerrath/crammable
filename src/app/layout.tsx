import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crammable - AI-Powered AP Study Reviews",
  description: "Transform YouTube transcripts into comprehensive AP study guides with AI-powered organization, condensation, and review generation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}