// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio - El Hadji Ousmane Seye",
  description: "Portfolio Full-Stack & IA - FR/EN",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Lang par défaut côté serveur. Tes composants peuvent ensuite
  // mettre à jour document.documentElement.lang côté client.
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
