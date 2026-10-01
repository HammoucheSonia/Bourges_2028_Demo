"use client";

import { useState } from "react";
import { CheckIcon, InfoIcon, LockIcon } from "@/components/icons";

export default function PrivacyPage() {
  const [analytics, setAnalytics] = useState(false);
  const [message, setMessage] = useState("");
  const action = (text: string) => { setMessage(text); window.setTimeout(() => setMessage(""), 3200); };

  return (
    <section>
      <div className="trustHero privacyHero">
        <div>
          <p className="overline">RGPD · PROTECTION DES DONNÉES</p>
          <h1>Minimiser les données, maîtriser les accès, documenter les traitements.</h1>
          <p>La démo ne contient que des données fictives. Elle illustre une approche « privacy by design / privacy by default » : collecte limitée au besoin métier, habilitations par rôle, traçabilité et préférences optionnelles désactivées par défaut.</p>
        </div>
        <div className="trustHeroCard">
          <LockIcon />
          <strong>Données fictives uniquement</strong>
          <p>Aucune donnée personnelle réelle n’est nécessaire pour parcourir ce démonstrateur.</p>
        </div>
      </div>

      <div className="privacyPrinciples">
        <article><span>01</span><h2>Minimisation</h2><p>Chaque champ doit avoir une finalité explicite. Les informations non nécessaires ne sont pas collectées.</p></article>
        <article><span>02</span><h2>Accès au besoin d’en connaître</h2><p>Les droits sont séparés entre bénévole, candidat, lauréat, jury et administration.</p></article>
        <article><span>03</span><h2>Durées maîtrisées</h2><p>Les règles de conservation sont documentées par catégorie de données et adaptées aux obligations métier.</p></article>
        <article><span>04</span><h2>Droits des personnes</h2><p>Accès, rectification, export et suppression sont intégrés au parcours cible et tracés côté administration.</p></article>
      </div>

      <div className="privacyWorkspace">
        <article className="panelPro privacySettings">
          <p className="overline">CENTRE DE CONFIDENTIALITÉ · SIMULATION</p>
          <h2>Mes préférences</h2>
          <div className="settingRow"><div><strong>Fonctionnement essentiel</strong><span>Nécessaire à la session et à la sécurité.</span></div><span className="lockedSetting">Toujours actif</span></div>
          <div className="settingRow"><div><strong>Mesure d’usage optionnelle</strong><span>Désactivée par défaut dans ce démonstrateur.</span></div><button className={analytics ? "toggle on" : "toggle"} aria-pressed={analytics} onClick={() => setAnalytics(!analytics)}><span/></button></div>
          <div className="settingRow"><div><strong>Communication ciblée</strong><span>Préférences gérées depuis le profil selon le contexte.</span></div><span className="evidenceTag good">Maîtrisable</span></div>
        </article>

        <article className="panelPro rightsPanel">
          <p className="overline">DROITS · SIMULATION</p>
          <h2>Agir sur mes données</h2>
          <p>Ces boutons simulent le parcours utilisateur attendu ; aucune donnée réelle n’est exportée ni supprimée.</p>
          <div className="rightsActions">
            <button className="button buttonSecondary" onClick={() => action("Simulation : une demande d’export a été enregistrée.")}>Demander un export</button>
            <button className="button buttonSecondary" onClick={() => action("Simulation : une demande de rectification a été ouverte.")}>Demander une rectification</button>
            <button className="button buttonTertiary dangerText" onClick={() => action("Simulation : une demande de suppression a été enregistrée pour examen.")}>Demander la suppression</button>
          </div>
          {message && <div className="actionToast" role="status"><CheckIcon />{message}</div>}
        </article>
      </div>

      <article className="panelPro dataMap">
        <div><p className="overline">TRAÇABILITÉ</p><h2>Exemple de registre simplifié</h2></div>
        <div className="dataTable" role="table" aria-label="Exemple de registre des traitements">
          <div className="dataRow dataHead" role="row"><span>Finalité</span><span>Données</span><span>Base / justification</span><span>Principe de conservation</span></div>
          <div className="dataRow" role="row"><strong>Gestion bénévoles</strong><span>Identité, contact, compétences, disponibilités</span><span>Gestion du parcours demandé</span><span>Durée définie avec Bourges 2028</span></div>
          <div className="dataRow" role="row"><strong>Candidatures CRI</strong><span>Dossier, pièces et échanges</span><span>Instruction du dispositif</span><span>Politique liée aux sessions et obligations</span></div>
          <div className="dataRow" role="row"><strong>Jury</strong><span>Affectations, notes, commentaires, journal</span><span>Évaluation et traçabilité</span><span>Accès restreint et archivage cadré</span></div>
        </div>
      </article>

      <div className="honestyNote"><InfoIcon/><p>Les durées exactes, bases juridiques et modalités d’exercice des droits seront confirmées avec le responsable de traitement lors de la reprise. La démo illustre l’architecture de conformité sans inventer des règles qui ne sont pas encore validées.</p></div>
    </section>
  );
}
