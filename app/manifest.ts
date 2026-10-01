import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Bourges 2028 — Démonstrateur technique",
    short_name: "B28 Demo",
    description: "Démonstrateur fictif pour la plateforme CRI & Bénévoles",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f5ef",
    theme_color: "#17251f"
  };
}
