# Sécurité du démonstrateur

Ce dépôt contient un **prototype public et fictif**. Il ne doit contenir aucun secret, aucune donnée réelle de Bourges 2028 et aucune clé d'API de production.

## Règles

- Secrets uniquement via variables d'environnement, jamais dans Git.
- Pas de données personnelles réelles.
- En-têtes de sécurité activés dans `next.config.ts`.
- Les identifiants visibles dans le README sont volontairement fictifs.
- L'écran 2FA est une simulation UX : il ne doit pas être réutilisé comme mécanisme de production.
- Avant toute vraie mise en production : branchement à un fournisseur d'identité, stockage sécurisé des sessions, limitation de débit, journalisation, rotation des secrets, durcissement uploads et audit des dépendances.
