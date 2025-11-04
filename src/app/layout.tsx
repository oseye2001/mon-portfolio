// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - El Hadji Ousmane Seye",
  description: "Portfolio Full-Stack & IA - FR/EN",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Sync initiale du lang AVANT le rendu pour éviter un mauvais attribut */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try {
    var l = localStorage.getItem("lang");
    if(l === "en" || l === "fr"){ document.documentElement.setAttribute("lang", l); }
  } catch(e){}
})();
`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
