# Bourges 2028 — démonstrateur professionnel V5

Démonstrateur fictif conçu pour illustrer une réponse au marché n° 2026-43 « Évolution de la plateforme participation Bourges 2028 : CRI & Bénévoles ».

## Ce que montre cette version

La V5 ne se limite plus à un dashboard. Elle propose de vrais parcours séparés et navigables :

- **Bénévole** : missions recommandées, espace personnel, profil durable, compétences et disponibilités.
- **Mon profil** : identité, coordonnées, langues, compétences, préférences, complétude et rôles cumulables.
- **Mon agenda** : calendrier mensuel + vue liste, missions, rencontres, statuts et contrôle des conflits.
- **Candidat CRI** : complétude du dossier, étapes, pièces justificatives et échéances.
- **Lauréat CRI** : convention, jalons, livrables et échanges de suivi.
- **Jury / équipe** : dossiers affectés, grille pondérée, note consolidée et traçabilité.
- **Administration** : indicateurs, dossiers récents, priorités et exports.
- **Sécurité** : RBAC, 2FA simulée et journalisation.
- **Mission zéro papier** : briefing, acceptation et présence.
- **Résilience** : health checks et bascule applicative A/B simulée.
- **Écoconception** : budgets de performance et indicateurs avant/après.

Toutes les données sont fictives.

## Comptes de démonstration

Mot de passe commun : `Demo2028!`

| Profil | Identifiant | Point d'entrée |
|---|---|---|
| Bénévole | `demo.benevole@bourges2028.fr` | `/benevole` |
| Candidat CRI | `demo.candidat@bourges2028.fr` | `/candidat` |
| Lauréat CRI | `demo.laureat@bourges2028.fr` | `/laureat` |
| Jury / équipe | `demo.jury@bourges2028.fr` | `/jury` |

Code 2FA de démonstration pour l'espace privilégié : `202828`.

## Lancement

```bash
npm install
npm run dev
```

Puis ouvrir `http://localhost:3000`.

## Vérifications avant publication

```bash
npm run typecheck
npm run build
npm run test:e2e
```

Le dépôt livré ne contient aucun secret ni donnée Bourges 2028 réelle. La bascule A/B, les scores environnementaux et les données métier sont présentés comme des simulations de démonstration, pas comme des mesures de production.


## V5 — profils réellement interactifs
- Centre de profil multi-rôles avec changement de contexte.
- Édition et sauvegarde locale du profil.
- Compétences ajoutables/supprimables.
- Disponibilités modifiables et complétude recalculée.
- Coffre documentaire, préférences, sessions et sécurité.
- Agenda avec filtres, ajout d’événement et interactions.

## Pages de confiance ajoutées
- `/accessibilite` : démarche RGAA, contrôles visibles, recette proposée et démonstration du focus clavier.
- `/confidentialite` : RGPD, privacy by design/default, minimisation, droits des personnes et registre simplifié.

## Vérification avant remise
1. Tester `/`, `/connexion`, `/benevole`, `/candidat`, `/laureat`, `/jury`, `/profil`, `/agenda`, `/admin`, `/security`, `/incident`, `/eco`, `/accessibilite`, `/confidentialite`, `/about` en navigation privée.
2. Vérifier `npm run typecheck` puis `npm run build`.
3. Vérifier au clavier : lien d’évitement, menu, formulaires, modales et boutons.
4. Garder le déploiement HTTPS disponible pendant toute la période d’analyse de l’offre.

## V8 — navigation et parcours mission
- `/mission` est une route dédiée avec briefing opérationnel, consignes, contact coordonnateur, acceptation et check-in simulé.
- Le logo Bourges 2028 et le lien « Accueil » permettent de revenir à `/` depuis chaque écran.
- Sur mobile/tablette, le bouton de menu ouvre une navigation réellement fonctionnelle.
- Le lien d’évitement « Aller au contenu » cible `#contenu`, rendu focalisable (`tabIndex=-1`) pour un comportement clavier testable.
- Les tests Playwright couvrent la route `/mission`, le retour à l’accueil, le lien d’évitement et le cloisonnement d’accès par rôle.
