"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckIcon, InfoIcon } from "@/components/icons";

const controls = [
  { title: "Navigation au clavier", detail: "Ordre de tabulation logique, lien d’évitement et actions accessibles sans souris.", status: "Vérifié sur la démo" },
  { title: "Focus visible", detail: "Chaque élément interactif conserve un indicateur de focus perceptible.", status: "Vérifié sur la démo" },
  { title: "Structure sémantique", detail: "Titres hiérarchisés, zones de navigation, contenu principal et libellés explicites.", status: "Vérifié sur la démo" },
  { title: "Formulaires", detail: "Libellés associés, messages compréhensibles et absence d’information portée uniquement par la couleur.", status: "Vérifié sur la démo" },
  { title: "Responsive et zoom", detail: "Parcours conçus pour rester utilisables sur mobile et avec agrandissement du texte.", status: "À confirmer sur produit repris" },
  { title: "Lecteurs d’écran", detail: "Composants structurés pour une restitution cohérente ; recette complète à réaliser après reprise.", status: "À confirmer sur produit repris" }
];

export default function AccessibilityPage() {
  const [mode, setMode] = useState<"normal" | "focus">("normal");
  return (
    <section className={mode === "focus" ? "a11yFocusDemo" : ""}>
      <div className="trustHero">
        <div>
          <p className="overline">ACCESSIBILITÉ · DÉMARCHE RGAA</p>
          <h1>Des parcours utilisables, compréhensibles et testables.</h1>
          <p>Le démonstrateur applique dès la conception plusieurs bonnes pratiques d’accessibilité. La conformité réglementaire complète sera mesurée sur la plateforme réellement reprise, après audit du code et des contenus existants.</p>
        </div>
        <div className="trustHeroCard" aria-label="Positionnement accessibilité">
          <span className="trustScore">RGAA</span>
          <strong>Démarche intégrée</strong>
          <p>Pas de déclaration de conformité artificielle avant audit du produit réel.</p>
        </div>
      </div>

      <div className="trustActions" aria-label="Outils de démonstration accessibilité">
        <button className="button buttonPrimary" onClick={() => setMode(mode === "focus" ? "normal" : "focus")}>
          {mode === "focus" ? "Quitter la démonstration du focus" : "Afficher le focus renforcé"}
        </button>
        <Link className="button buttonSecondary" href="/benevole">Tester un parcours au clavier</Link>
      </div>

      <div className="complianceGrid">
        {controls.map((item) => (
          <article className="complianceCard" key={item.title}>
            <div className="complianceIcon"><CheckIcon /></div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.detail}</p>
              <span className={item.status.startsWith("Vérifié") ? "evidenceTag good" : "evidenceTag pending"}>{item.status}</span>
            </div>
          </article>
        ))}
      </div>

      <article className="panelPro trustMethod">
        <div>
          <p className="overline">RECETTE PROPOSÉE</p>
          <h2>Contrôler l’accessibilité à chaque évolution.</h2>
        </div>
        <ol className="methodSteps">
          <li><strong>1. Audit initial</strong><span>Établir le niveau réel après reprise du socle existant.</span></li>
          <li><strong>2. Critères dans la Definition of Done</strong><span>Clavier, focus, contraste, formulaires, titres, alternatives et zoom.</span></li>
          <li><strong>3. Tests automatisés + manuels</strong><span>Les outils automatiques complètent, mais ne remplacent pas, les vérifications humaines.</span></li>
          <li><strong>4. Non-régression</strong><span>Contrôles sur les parcours critiques avant chaque mise en production.</span></li>
        </ol>
      </article>

      <div className="honestyNote"><InfoIcon/><p><strong>Ce que cette page affirme :</strong> une méthode et des choix visibles dans le démonstrateur. <strong>Ce qu’elle n’affirme pas :</strong> une conformité RGAA du futur service avant audit de la plateforme existante.</p></div>
    </section>
  );
}
