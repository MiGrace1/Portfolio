# Modifier le contenu

Ce guide explique comment changer le contenu du site sans toucher aux composants. Chaque texte existe en français et en anglais : **modifie toujours les deux langues**.

## Où trouver quoi

| Pour changer                                           | Fichier                                                  |
| ------------------------------------------------------ | -------------------------------------------------------- |
| Nom, e-mail, téléphone, GitHub, LinkedIn               | `src/lib/site-config.ts`                                 |
| Titre, accroche, à propos, disponibilité               | `src/content/{fr,en}/index.ts`, `profile`                |
| Expérience                                             | `src/content/{fr,en}/index.ts`, `experience`             |
| Formation et langues                                   | `src/content/{fr,en}/index.ts`, `education`, `languages` |
| Compétences                                            | `src/content/{fr,en}/index.ts`, `skills`                 |
| Fiche d'un projet (résumé, rôle, statut, stack, liens) | `src/content/{fr,en}/index.ts`, `projects`               |
| Texte d'une étude de cas                               | `src/content/{fr,en}/projects/<slug>.mdx`                |
| Boutons, titres de sections, messages d'erreur         | `src/i18n/messages/{fr,en}.json`                         |
| Photo                                                  | `public/images/profile.png`                              |

## Vérifier après une modification

```powershell
npm run dev
npm run check:content
npm run build
```

- Le serveur de développement affiche tes changements sur <http://localhost:3000>.
- `check:content` liste les `[À COMPLÉTER]` restants et les clés absentes d'une langue.
- `build` échoue si une donnée ne respecte pas le format attendu, avec le nom du champ en cause.

## Tâches courantes

### Ajouter une expérience

Ajoute un bloc en tête de `experience`, dans les deux fichiers `index.ts`. La liste s'affiche dans l'ordre du fichier.

```ts
{
  company: "Nom de l'entreprise",
  role: "Intitulé du poste",
  location: "Ville", // facultatif
  period: "Janv. - juin 2027",
  highlights: ["Première réalisation", "Deuxième réalisation"],
},
```

### Changer une compétence

Dans `skills`, place-la dans `daily` (au quotidien) ou `notions`. Une liste peut être vide, avec `[]`.

### Ajouter un projet

1. Ajoute un bloc dans `projects`, avec le **même `slug` et la même position** dans les deux fichiers `index.ts`. Le slug s'écrit en minuscules, chiffres et tirets.
2. Crée `src/content/fr/projects/<slug>.mdx` et `src/content/en/projects/<slug>.mdx`.
3. Utilise ces titres de sections : Contexte, Problème, Ma contribution, Défis techniques, Résultat. En anglais : Context, Problem, My contribution, Technical challenges, Outcome.

Les trois premiers projets de la liste s'affichent sur la page d'accueil.

### Ajouter un lien vers un projet

```ts
links: {
  repository: "https://github.com/MiGrace1/mon-projet",
  demo: "https://mon-projet.example.com",
},
```

Avant de lier un dépôt, vérifie qu'il ne contient ni fichier `.env`, ni base de données, ni données réelles.

Un projet avec `confidential: true` ne peut pas avoir de lien : le build échoue. C'est volontaire.

### Remplacer la photo

Remplace `public/images/profile.png` par une image portrait du même nom. Next.js crée lui-même les versions AVIF et WebP. Si le cadrage ne convient plus, ajuste `object-[50%_12%]` dans `src/components/sections/hero.tsx`.

### Changer le texte alternatif de la photo

Modifie `home.hero.photoAlt` dans `src/i18n/messages/fr.json` et `en.json`.

## Projets confidentiels

- Aucune donnée réelle, adresse IP, aucun identifiant, lien vers du code privé ou capture non anonymisée.
- N'écris jamais l'URL ni le nom du client dans le dépôt tant que l'autorisation écrite n'a pas été reçue : le dépôt est public, et l'historique Git garde tout.

Après une autorisation écrite de ton encadrant, pour le lien en production :

1. Renseigne la variable `GEP_LIVE_URL` sur Vercel.
2. Passe `showLiveLink` à `true` dans `src/lib/site-config.ts`.
3. Redéploie, puis vérifie que le lien apparaît sur la page du projet.

`showScreenshots` ne pilote encore rien : l'affichage de captures reste à développer.

## Marqueurs

`[À COMPLÉTER: description]` signale une information manquante. Le site peut être prévisualisé avec ces marqueurs, mais **le build de production échoue tant qu'il en reste**. N'écris pas ce marqueur dans un autre sens, et remplace-le par du contenu vrai.
