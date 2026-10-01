import Link from "next/link";
import { ActivityIcon, ArrowRightIcon, CalendarIcon, CheckIcon, ClipboardIcon, DashboardIcon, LeafIcon, ShieldIcon, UsersIcon } from "@/components/icons";

const proofCards = [
  {href:"/connexion", icon:<UsersIcon/>, kicker:"Profils & rôles", title:"Quatre espaces métiers réellement distincts", text:"Bénévole, candidat CRI, lauréat CRI et jury avec droits, statuts, informations et actions adaptés."},
  {href:"/profil", icon:<CheckIcon/>, kicker:"Profil durable", title:"Un vrai espace Mon profil", text:"Identité, coordonnées, compétences, langues, préférences, complétude, historique et rôles cumulables."},
  {href:"/agenda", icon:<CalendarIcon/>, kicker:"Agenda", title:"Missions et rencontres dans une vue unique", text:"Calendrier mensuel, vue liste, statuts d'inscription, conflits horaires et historique individuel."},
  {href:"/benevole", icon:<UsersIcon/>, kicker:"Parcours usager", title:"Une expérience bénévole claire et mobile", text:"Profil, compétences, disponibilités et missions recommandées avec une hiérarchie d'information simple."},
  {href:"/admin", icon:<DashboardIcon/>, kicker:"Pilotage", title:"Décider en un coup d'œil", text:"Indicateurs, dossiers à traiter, filtres et priorités opérationnelles réunis dans un même tableau de bord."},
  {href:"/security", icon:<ShieldIcon/>, kicker:"Sécurité", title:"Des accès maîtrisés", text:"RBAC, 2FA des comptes privilégiés, journal d'audit et principes de sécurité by design."},
  {href:"/incident", icon:<ActivityIcon/>, kicker:"Résilience", title:"Une panne rendue visible et maîtrisée", text:"Simulation de health checks et de bascule A → B avec chronologie d'incident et preuves observables."},
  {href:"/mission", icon:<ClipboardIcon/>, kicker:"Zéro papier", title:"Une mission, de l'inscription au check-in", text:"Parcours complet sans impression obligatoire : briefing, acceptation, présence et retour."},
  {href:"/eco", icon:<LeafIcon/>, kicker:"Écoconception", title:"Mesurer avant d'affirmer", text:"Budgets de performance, suivi avant/après et indicateurs compatibles avec une démarche RGESN."},
];

export default function HomePage() {
  return <>
    <section className="heroPro">
      <div className="heroCopy">
        <div className="heroLabel"><span className="statusDot"/> DÉMONSTRATEUR INTERACTIF · DISPONIBLE</div>
        <h1>Faire évoluer une plateforme existante <em>sans casser ce qui fonctionne.</em></h1>
        <p>Une démonstration conçue pour rendre visibles les engagements de l'offre : continuité technique, expérience utilisateur, sécurité, résilience et sobriété numérique.</p>
        <div className="heroActions">
          <Link className="button buttonPrimary" href="/benevole">Lancer le parcours guidé <ArrowRightIcon/></Link>
          <Link className="button buttonSecondary" href="/about">Voir la méthode et les limites</Link>
        </div>
        <div className="trustRow">
          <div><strong>9</strong><span>scénarios testables</span></div>
          <div><strong>4</strong><span>profils métiers</span></div>
          <div><strong>100 %</strong><span>données fictives</span></div>
        </div>
      </div>
      <div className="heroProduct" aria-label="Aperçu du tableau de bord">
        <div className="mockWindow">
          <div className="mockTop"><span/><span/><span/><div className="mockUrl">participation.bourges2028.fr</div></div>
          <div className="mockApp">
            <aside className="mockSidebar"><div className="mockBrand">28</div>{[1,2,3,4,5].map(i=><span key={i}/>)}</aside>
            <div className="mockMain">
              <div className="mockHeader"><div><small>Bonjour Camille</small><strong>Mes missions</strong></div><div className="mockAvatar">CM</div></div>
              <div className="mockKpis"><div><small>Profil</small><b>92%</b></div><div><small>Missions</small><b>3</b></div><div><small>Prochaine</small><b>12 fév.</b></div></div>
              <div className="mockFeature"><div className="mockDate"><b>12</b><span>FÉV</span></div><div><small>MAISON DE LA CULTURE</small><strong>Accueil public — Parcours d'ouverture</strong><p>16h00 — 21h00 · 5 places restantes</p></div><span className="mockCta">Voir →</span></div>
              <div className="mockRows"><span/><span/><span/></div>
            </div>
          </div>
        </div>
        <div className="floatingProof proofA"><span className="proofIcon">✓</span><div><small>Disponibilité</small><strong>99,5 %</strong></div></div>
        <div className="floatingProof proofB"><span className="pulseMini"/><div><small>Nœud actif</small><strong>B · healthy</strong></div></div>
      </div>
    </section>

    <section className="proofIntro">
      <p className="overline">UNE DÉMO QUI SERT LA NOTATION</p>
      <h2>Chaque écran répond à un risque concret du marché.</h2>
      <p>Pas de prototype décoratif : chaque scénario illustre une méthode, un contrôle ou un engagement vérifiable.</p>
    </section>
    <section className="proofGrid">
      {proofCards.map((card,i)=><Link href={card.href} className="proofCard" key={card.href}>
        <div className="proofCardTop"><span className="proofCardIcon">{card.icon}</span><span className="proofIndex">0{i+1}</span></div>
        <p className="proofKicker">{card.kicker}</p><h3>{card.title}</h3><p>{card.text}</p><span className="proofLink">Tester ce scénario <ArrowRightIcon/></span>
      </Link>)}
    </section>

    <section className="evidenceStrip">
      <div><p className="overline">CONTEXTE PUBLIC DU DOSSIER</p><h2>Les ordres de grandeur sont affichés sans les confondre avec des mesures réelles.</h2></div>
      <div className="evidenceMetrics">
        <div><strong>~600</strong><span>utilisateurs actifs annoncés</span></div>
        <div><strong>200–1 000</strong><span>missions à terme</span></div>
        <div><strong>≤ 7 j</strong><span>passation sortant → entrant</span></div>
        <div><strong>&lt; 60 s</strong><span>cible bascule nœud isolé</span></div>
      </div>
    </section>
  </>;
}
