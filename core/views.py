from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
import json

PROJETS_DATA = [
    {
        "id": 1,
        "titre": "Système d'Administration des Utilisateurs via LDAP",
        "description": "Interface web conviviale pour la gestion centralisée des accès utilisateurs via LDAP. Développée en collaboration avec l'équipe IT pour résoudre les problèmes d'administration et assurer le suivi des modifications de comptes.",
        "technologies": ["Django", "Python", "LDAP", "PostgreSQL", "Git"],
        "categorie": "Backend",
        "annee": "2025",
        "entreprise": "DOWHILE AWAE Laverie",
        "icone": "🔐",
        "features": ["Gestion des accès LDAP", "Suivi des modifications", "Interface admin intuitive", "Journalisation des actions"]
    },
    {
        "id": 2,
        "titre": "Système Intelligent de Suivi et d'Orientation Scolaire",
        "description": "Plateforme IA analysant les résultats scolaires et la discipline des élèves pour suggérer une orientation adaptée. Inclut un questionnaire personnalisé pour les élèves de terminale et un backend Django robuste.",
        "technologies": ["Django", "Python", "MySQL", "UML", "IA", "HTML5/CSS3"],
        "categorie": "Full Stack + IA",
        "annee": "2024",
        "entreprise": "WELLDONE&CO",
        "icone": "🎓",
        "features": ["Analyse IA des résultats", "Questionnaire d'orientation", "Suivi personnalisé", "Conception UML"]
    },
    {
        "id": 3,
        "titre": "AxeNova — Startup Informatique",
        "description": "Co-fondatrice et membre fondatrice d'AxeNova, une startup tech camerounaise créée en janvier 2026. Développement de solutions numériques innovantes pour les entreprises et administrations locales.",
        "technologies": ["Python", "Django", "Flutter", "PostgreSQL", "Docker", "Git"],
        "categorie": "Entrepreneuriat Tech",
        "annee": "2026",
        "entreprise": "AxeNova",
        "icone": "🚀",
        "features": ["Solutions numériques sur mesure", "Applications mobiles", "Systèmes de gestion", "Consulting IT"]
    },
    {
        "id": 4,
        "titre": "Application de Gestion Administrative",
        "description": "Système de gestion des dossiers clients avec numérisation, archivage électronique et gestion du standard téléphonique. Interface intuitive pour la saisie et le classement des documents.",
        "technologies": ["Python", "MySQL", "Word", "Excel"],
        "categorie": "Gestion",
        "annee": "2023",
        "entreprise": "Collins Eclairage Mobile",
        "icone": "📁",
        "features": ["Archivage numérique", "Gestion des dossiers", "Interface de saisie", "Classement automatique"]
    },
]

COMPETENCES_DATA = {
    "Backend": [
        {"nom": "Python / Django", "niveau": 85},
        {"nom": "PHP", "niveau": 65},
        {"nom": "Java", "niveau": 60},
    ],
    "Bases de données": [
        {"nom": "MySQL / PostgreSQL", "niveau": 80},
        {"nom": "MongoDB", "niveau": 60},
        {"nom": "SQLite", "niveau": 75},
    ],
    "Frontend": [
        {"nom": "HTML5 / CSS3", "niveau": 80},
        {"nom": "Flutter", "niveau": 65},
    ],
    "DevOps & Outils": [
        {"nom": "Git / GitHub / GitLab", "niveau": 80},
        {"nom": "Docker", "niveau": 60},
        {"nom": "Linux / Windows Server", "niveau": 75},
    ],
    "Méthodes": [
        {"nom": "Agile / Scrum", "niveau": 75},
        {"nom": "UML", "niveau": 80},
        {"nom": "LDAP / Administration Système", "niveau": 70},
    ],
}

def home(request):
    return render(request, 'core/home.html', {
        'projets': PROJETS_DATA[:3],
        'competences': COMPETENCES_DATA,
        'projets_count': len(PROJETS_DATA),
    })

def projets(request):
    categorie = request.GET.get('cat', 'tous')
    if categorie != 'tous':
        projets_filtres = [p for p in PROJETS_DATA if p['categorie'] == categorie]
    else:
        projets_filtres = PROJETS_DATA
    categories = list(set(p['categorie'] for p in PROJETS_DATA))
    return render(request, 'core/projets.html', {
        'projets': projets_filtres,
        'categories': categories,
        'categorie_active': categorie,
    })

@require_POST
def contact(request):
    try:
        data = json.loads(request.body)
        nom = data.get('nom', '')
        email = data.get('email', '')
        message = data.get('message', '')
        # Ici vous pouvez ajouter l'envoi d'email
        return JsonResponse({'success': True, 'message': 'Message envoyé avec succès !'})
    except Exception as e:
        return JsonResponse({'success': False, 'message': str(e)}, status=400)
