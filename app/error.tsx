"use client";

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className="panel" role="alert">
      <p className="eyebrow">Erreur du démonstrateur</p>
      <h1>Un écran n'a pas pu être chargé.</h1>
      <p>Cette erreur est isolée. Vous pouvez relancer l'écran sans recharger toute la navigation.</p>
      <button className="button buttonPrimary" onClick={() => reset()}>Réessayer</button>
    </section>
  );
}
