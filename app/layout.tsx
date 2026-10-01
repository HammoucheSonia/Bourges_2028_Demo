import type { Metadata } from "next";
import "./globals.css";
import { DemoBanner } from "@/components/demo-banner";
import { SiteHeader } from "@/components/site-header";
import { DemoSessionProvider } from "@/components/demo-session";

export const metadata: Metadata = {
  title: "Bourges 2028 — Démonstrateur CRI & Bénévoles",
  description: "Démonstrateur professionnel : parcours bénévoles, administration, sécurité, résilience et écoconception.",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <DemoSessionProvider>
        <DemoBanner />
        <SiteHeader />
        <main id="contenu" className="shell">{children}</main>
        <footer className="footer">
          <div><strong>Bourges 2028 · démonstrateur technique</strong><p>Réponse au marché n° 2026-43 — CRI & Bénévoles</p></div>
          <div className="footerRight"><span>Données fictives</span><span>·</span><span>Next.js / React / TypeScript</span><span>·</span><a href="/about">À propos & limites</a></div>
        </footer>
        </DemoSessionProvider>
      </body>
    </html>
  );
}
