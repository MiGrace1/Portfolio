# Portfolio — Metheu Sadeu Michelle Grace

Portfolio professionnel bilingue (français et anglais) d'une ingénieure en génie logiciel basée à Yaoundé, au Cameroun.

## Stack

- Next.js (App Router), React et TypeScript en mode strict
- Tailwind CSS
- next-intl pour les routes `/fr` et `/en`, avec des URL traduites
- MDX pour les études de cas et Zod pour valider le contenu
- Resend pour le formulaire de contact
- ESLint, Prettier et GitHub Actions

## Démarrer en local

Prérequis : Node.js 24 (voir `.nvmrc`).

```powershell
npm install
Copy-Item .env.example .env.local
npm run dev
```

Le site est alors disponible sur <http://localhost:3000>. Sans clé Resend dans `.env.local`, le formulaire de contact fonctionne quand même : le message est signalé dans le terminal, sans e-mail envoyé.

## Scripts

| Commande                | Rôle                                                     |
| ----------------------- | -------------------------------------------------------- |
| `npm run dev`           | Serveur de développement                                 |
| `npm run build`         | Contrôle du contenu, puis build de production            |
| `npm run start`         | Lance le build de production                             |
| `npm run lint`          | Vérifie le code avec ESLint                              |
| `npm run typecheck`     | Vérifie les types avec TypeScript                        |
| `npm run format`        | Formate le code avec Prettier                            |
| `npm run format:check`  | Vérifie le formatage sans le changer                     |
| `npm run check:content` | Liste les contenus à compléter et les clés non traduites |

## Structure

```text
src/
  app/[locale]/     Pages et layout
  app/actions/      Envoi du formulaire de contact
  components/       Composants ui, layout et sections
  content/          Contenu FR et EN, études de cas en MDX
  i18n/             Routage et textes de l'interface
  lib/              Configuration du site, schémas, SEO, utilitaires
  styles/           Tokens de design, polices, styles globaux
public/images/      Images
scripts/            Contrôle du contenu
docs/               Guides
```

## Documentation

- [Modifier le contenu](docs/CONTENT_GUIDE.md)
- [Déployer le site](docs/DEPLOYMENT.md)

L'ancienne version Django est conservée sur la branche `legacy-django`.
