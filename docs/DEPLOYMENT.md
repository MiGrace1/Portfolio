# Déployer le site

Ce guide décrit la mise en ligne sur Vercel depuis le dépôt GitHub.

## 1. Avant de commencer

- Le dernier commit de `main` a une CI verte dans l'onglet **Actions**.
- `npm run check:content` n'affiche plus aucun marqueur.
- Les anciens projets Vercel reliés à ce dépôt sont supprimés : dans chaque projet, **Settings**, puis la zone de suppression en bas de page. Cette action est définitive. Il ne doit rester qu'un seul projet : chaque projet relié déploie le dépôt à chaque push.

## 2. Importer le dépôt

1. Sur [vercel.com/new](https://vercel.com/new), importe `MiGrace1/Portfolio`.
2. Garde le framework Next.js, détecté automatiquement, et les commandes par défaut.
3. Vérifie que la branche de production est `main`.
4. Ajoute les variables de la section 3, puis lance le déploiement.

Si des marqueurs restent, le déploiement de production échoue avec leur liste : c'est le comportement voulu.

## 3. Variables d'environnement

À renseigner dans **Settings**, puis **Environment Variables**.

| Variable               | Valeur                                     | Obligatoire        |
| ---------------------- | ------------------------------------------ | ------------------ |
| `NEXT_PUBLIC_SITE_URL` | URL publique, sans `/` final               | Oui                |
| `RESEND_API_KEY`       | Clé API Resend                             | Pour le formulaire |
| `CONTACT_TO_EMAIL`     | Adresse qui reçoit les messages            | Pour le formulaire |
| `CONTACT_FROM_EMAIL`   | Expéditeur sur ton domaine vérifié         | Pour le formulaire |
| `GEP_LIVE_URL`         | Laisser vide jusqu'à l'autorisation écrite | Non                |

- Ne préfixe jamais les secrets par `NEXT_PUBLIC_` : cela les rendrait visibles dans le navigateur.
- Après un changement de variable, redéploie pour l'appliquer.
- Si tu changes d'URL publique, mets à jour `NEXT_PUBLIC_SITE_URL` : elle sert aux URL canoniques, au sitemap et à l'image de partage.

## 4. Configurer Resend

**Cette étape est facultative.** Tant que les trois variables du formulaire ne sont pas renseignées, le site déployé masque le formulaire et affiche seulement l'e-mail et le téléphone. Il apparaît sans changer le code une fois les variables renseignées et le site redéployé. En local, `npm run dev` garde toujours le formulaire : sans Resend, le message est signalé dans le terminal, sans e-mail envoyé.

**Un domaine vérifié est nécessaire pour activer le formulaire en production.** `onboarding@resend.dev` est réservé aux tests d'après la documentation de Resend, et un domaine `*.vercel.app` ne t'appartient pas : tu ne peux pas y ajouter les enregistrements DNS requis.

1. Crée un compte sur [resend.com](https://resend.com).
2. Dans **Domains**, ajoute ton domaine. Un sous-domaine, par exemple `mail.mondomaine.com`, fonctionne aussi.
3. Copie chez ton fournisseur DNS les enregistrements DKIM et SPF affichés par Resend, exactement à l'identique. Sur un CNAME, désactive tout proxy, comme le nuage orange de Cloudflare.
4. Attends la vérification : elle peut prendre jusqu'à 72 heures.
5. Crée une clé API avec le droit d'envoi uniquement, et place-la dans `RESEND_API_KEY`.
6. Renseigne `CONTACT_FROM_EMAIL`, par exemple `Portfolio <contact@mondomaine.com>`, puis redéploie.

Le plan gratuit de Resend indique 100 e-mails par jour et 3 000 par mois, ce qui suffit pour un portfolio. Vérifie ces limites sur leur page de tarifs, car elles peuvent changer.

## 5. Domaine personnalisé

1. Dans le projet Vercel : **Settings**, puis **Domains**, et ajoute ton domaine.
2. Ajoute chez ton fournisseur DNS les enregistrements recommandés par Vercel.
3. Attends la vérification : le certificat SSL est créé automatiquement.
4. Mets `NEXT_PUBLIC_SITE_URL` à jour avec le nouveau domaine, puis redéploie.

## 6. Déploiements de prévisualisation

- Un push sur une branche autre que `main`, ou une pull request, crée une URL de prévisualisation.
- Les marqueurs n'y bloquent pas le build, ce qui permet de relire le site avant sa mise en production.
- Vercel ajoute `X-Robots-Tag: noindex` à ces déploiements pour les exclure des moteurs de recherche. Cela ne les rend pas privés : active **Deployment Protection** si tu veux en restreindre l'accès.
- La CSP du site peut bloquer la barre d'outils de Vercel sur ces URL. Le site n'est pas affecté.

## 7. Checklist de mise en production

### Confidentialité

- [ ] Les dépôts contenant des projets confidentiels ou des données réelles sont privés.
- [ ] Tout secret déjà publié dans un dépôt a été changé.
- [ ] `showLiveLink` et `showScreenshots` restent à `false`, sauf autorisation écrite.
- [ ] Aucun nom de client non autorisé n'apparaît sur le site.

### Contenu

- [ ] `npm run check:content` n'affiche aucun marqueur.
- [ ] Les défis techniques des études de cas correspondent au travail réellement fait.
- [ ] Le contenu est relu en français et en anglais.

### Technique

- [ ] La CI de `main` est verte.
- [ ] Les variables de la section 3 sont renseignées en production.
- [ ] Si le formulaire est activé : le domaine Resend est vérifié, et un message test arrive bien dans ta boîte.
- [ ] Si le formulaire est activé : le bouton « Répondre » de ce message vise l'adresse saisie.

### Vérification sur l'URL finale

- [ ] `/`, `/fr`, `/en`, `/fr/projets`, `/en/projects` et les études de cas s'affichent.
- [ ] Le sélecteur de langue et le thème fonctionnent, sur téléphone aussi.
- [ ] `/sitemap.xml` et `/robots.txt` utilisent la bonne URL.
- [ ] Un test de partage LinkedIn, via le Post Inspector, montre le bon titre et la bonne image.
- [ ] La console du navigateur ne montre aucune erreur.
- [ ] Lighthouse atteint au moins 95 dans les quatre catégories.

### Pour finir

- [ ] L'URL du site est ajoutée à ton CV et à ton profil LinkedIn.
- [ ] Le champ **Website** du dépôt GitHub pointe vers le site.
