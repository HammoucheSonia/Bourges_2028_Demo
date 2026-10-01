import { CheckIcon, LeafIcon } from "@/components/icons";

const metrics = [
  { l: "Poids médian", a: 410, b: 282, u: "kB", d: "−31 %" },
  { l: "Requêtes HTTP", a: 34, b: 24, u: "", d: "−29 %" },
  { l: "JavaScript", a: 215, b: 146, u: "kB", d: "−32 %" },
  { l: "Images / parcours", a: 620, b: 355, u: "kB", d: "−43 %" },
];

export default function EcoPage() {
  return (
    <section>
      <div className="ecoHero">
        <div>
          <span className="ecoMark"><LeafIcon /></span>
          <p className="overline">PERFORMANCE ENVIRONNEMENTALE</p>
          <h1>La sobriété numérique devient un indicateur de pilotage.</h1>
          <p>La démo illustre une démarche : établir un état zéro, fixer des budgets, mesurer à chaque version et documenter les écarts.</p>
        </div>
        <div className="ecoScore">
          <span>EcoIndex</span><strong>B</strong><small>illustratif · à mesurer après reprise</small>
        </div>
      </div>

      <div className="ecoKpis">
        <div><small>Poids médian cible</small><strong>282 <span>kB</span></strong><em>−31 %</em></div>
        <div><small>Requêtes médianes</small><strong>24</strong><em>−29 %</em></div>
        <div><small>Impressions obligatoires</small><strong>0</strong><em>parcours mission</em></div>
        <div><small>Revue de suivi</small><strong>Trimestrielle</strong><em>+ contrôle release</em></div>
      </div>

      <article className="panelPro ecoCompare">
        <div className="panelProHeader">
          <div>
            <p className="overline">BUDGETS DE PERFORMANCE</p>
            <h2>Exemple de trajectoire avant / après</h2>
            <p>Valeurs fictives utilisées uniquement pour montrer la méthode.</p>
          </div>
          <span className="demoTag">ILLUSTRATIF</span>
        </div>
        <div className="metricBars">
          {metrics.map((m) => (
            <div className="metricBarRow" key={m.l}>
              <div>
                <strong>{m.l}</strong>
                <span>{m.d}</span>
              </div>
              <div className="barCompare">
                <label>État zéro <b>{m.a} {m.u}</b></label>
                <span className="barZero" style={{ width: "100%" }} />
              </div>
              <div className="barCompare">
                <label>Cible <b>{m.b} {m.u}</b></label>
                <span className="barTarget" style={{ width: `${(m.b / m.a) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>
      </article>

      <div className="ecoMethod">
        <article><span>01</span><h3>Mesurer</h3><p>État zéro sur les parcours les plus utilisés.</p></article>
        <article><span>02</span><h3>Budgéter</h3><p>Seuils de poids, requêtes et JavaScript.</p></article>
        <article><span>03</span><h3>Optimiser</h3><p>Images, cache, lazy-loading, requêtes utiles.</p></article>
        <article><span>04</span><h3>Contrôler</h3><p>Non-régression à chaque mise en production.</p></article>
      </div>

      <div className="ecoCommitments">
        <div><p className="overline">PRINCIPES RGESN ILLUSTRÉS</p><h2>Des choix concrets plutôt qu'un label décoratif.</h2></div>
        <ul className="cleanList twoColList">
          <li><CheckIcon />Fonctionnalités utiles uniquement</li>
          <li><CheckIcon />Formats d'image adaptés au contexte</li>
          <li><CheckIcon />Pas d'autoplay média</li>
          <li><CheckIcon />Réduction des scripts non essentiels</li>
          <li><CheckIcon />Cache et compression systématiques</li>
          <li><CheckIcon />Parcours mobile frugal</li>
        </ul>
      </div>
    </section>
  );
}
