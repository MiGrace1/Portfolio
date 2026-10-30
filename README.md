# Portfolio — Metheu Sadeu Michelle Grace

Portfolio professionnel bilingue (FR/EN), construit avec Next.js, TypeScript et Tailwind CSS. Déploiement prévu sur Vercel.

## Démarrer en local

Prérequis : Node.js 24 (voir `.nvmrc`).

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Le site est alors disponible sur <http://localhost:3000>.

## Scripts

| Commande               | Rôle                                 |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Serveur de développement             |
| `npm run build`        | Build de production                  |
| `npm run start`        | Lance le build de production         |
| `npm run lint`         | Vérifie le code avec ESLint          |
| `npm run typecheck`    | Vérifie les types avec TypeScript    |
| `npm run format`       | Formate le code avec Prettier        |
| `npm run format:check` | Vérifie le formatage sans le changer |

L'ancienne version Django est conservée sur la branche `legacy-django`.
