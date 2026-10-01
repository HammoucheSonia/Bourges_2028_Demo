import Link from "next/link";

export default function NotFound() {
  return (
    <section className="panel">
      <p className="eyebrow">Erreur 404</p>
      <h1>Écran introuvable</h1>
      <p>Le scénario demandé n'existe pas dans ce démonstrateur.</p>
      <Link className="button buttonPrimary" href="/">Retour à l'accueil</Link>
    </section>
  );
}
