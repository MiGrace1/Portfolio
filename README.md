# 🚀 Portfolio — Metheu Sadeu Michelle Grace

Portfolio professionnel développé avec **Django** · Déployé sur **Vercel**

## Stack
- **Backend**: Python Django 4.2
- **Frontend**: HTML5 / CSS3 / Vanilla JS
- **Déploiement**: Vercel + WhiteNoise
- **Versionning**: Git / GitHub

## Lancer en local

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

## Déployer sur Vercel

```bash
# 1. Push sur GitHub
git init
git add .
git commit -m "feat: portfolio initial"
git remote add origin https://github.com/MiGrace1/portfolio.git
git push -u origin main

# 2. Sur vercel.com → Import depuis GitHub
# 3. Ajouter la variable d'environnement:
#    SECRET_KEY = votre-clé-secrète
#    DEBUG = False
```

## Auteure
**Michelle Grace** · gracesadeu@gmail.com · [@MiGrace1](https://github.com/MiGrace1)  
Co-fondatrice **AxeNova** · IAI-Cameroun · Yaoundé 🇨🇲
