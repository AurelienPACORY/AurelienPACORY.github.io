# Portfolio Universitaire - Aurélien Pacory

## Vue d'ensemble

Portfolio moderne et interactif pour Aurélien Pacory, étudiant en BUT Réseaux et Télécommunications.

## Objectifs

Créer un portfolio universitaire professionnel avec :
- Design moderne et tech
- Animations fluides et captivantes
- Navigation intuitive
- Responsive design

## Stack Technologique

### Frontend
- **React 18** - Framework UI moderne
- **Vite** - Build tool ultra-rapide
- **TypeScript** - Typage statique pour plus de robustesse
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides et performantes
- **React Router** - Navigation SPA
- **Lucide React** - Icônes modernes

## Structure du Site

### 1. Page d'accueil / Hero Section
- Animation d'entrée spectaculaire
- Nom et titre avec effet de typing
- Particules animées en arrière-plan
- Call-to-action vers les sections principales

### 2. Navigation
- Menu sticky avec effet glassmorphism
- Navigation smooth scroll
- Indicateur de section active
- Menu burger responsive pour mobile

### 3. Section CV
- Timeline interactive de parcours académique
- Compétences techniques avec barres de progression animées
- Langues
- Centres d'intérêt
- Téléchargement CV en PDF

### 4. Section Projets
- Grille de projets avec hover effects
- Filtrage par catégorie (Réseaux, Développement, Systèmes)
- Modal pour détails de chaque projet
- Tags de technologies utilisées
- Liens GitHub/démos

### 5. Section Contact
- Formulaire de contact animé
- Validation en temps réel
- Réseaux sociaux avec icônes animées
- Email, LinkedIn, GitHub
- Animation de confirmation d'envoi

## Design System

### Palette de couleurs (Tech Theme)
- **Primary**: Bleu électrique (#0EA5E9, #06B6D4)
- **Secondary**: Violet/Purple (#8B5CF6, #A855F7)
- **Accent**: Cyan (#22D3EE)
- **Background**: Noir profond (#0A0A0A, #111111)
- **Surface**: Gris foncé (#1A1A1A, #1F1F1F)
- **Text**: Blanc (#FFFFFF) et gris clair (#E5E5E5)

### Typographie
- **Headings**: Inter ou Space Grotesk (moderne, géométrique)
- **Body**: Inter (lisibilité optimale)
- **Code/Tech**: JetBrains Mono ou Fira Code

### Animations

#### Micro-interactions
- Hover effects sur tous les éléments cliquables
- Transitions fluides entre sections
- Parallax scrolling subtil
- Particles background animées
- Glitch effects sur le titre
- Gradient animé sur les boutons

#### Animations de scroll
- Fade in elements
- Slide in from sides
- Scale animations
- Stagger children animations

#### Effects spéciaux
- Glassmorphism sur la navigation
- Gradient mesh backgrounds
- Glow effects sur les cartes
- Ripple effect sur les boutons
- Loading skeleton screens

## Fonctionnalités

### Core Features
- ✅ Navigation fluide entre sections
- ✅ Design responsive (Mobile, Tablet, Desktop)
- ✅ Mode sombre (par défaut)
- ✅ Animations performantes
- ✅ SEO optimisé
- ✅ Performance optimisée (Lighthouse score >90)

### Nice to Have
- Particles.js ou similaire pour background
- Cursor personnalisé avec effet de trainée
- Préloader animé
- Easter eggs interactifs
- Formulaire de contact fonctionnel (EmailJS)

## Structure des Fichiers

```
portefolio_aurelien/
├── src/
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── CV.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Modal.tsx
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   ├── utils/
│   │   └── constants.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── public/
│   └── assets/
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Installation et Lancement

### Prérequis
- Node.js >= 18
- npm ou yarn

### Commandes

```bash
# Installation des dépendances
npm install

# Lancement en développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview
```

## Sections à Remplir Plus Tard

### CV
- [ ] Formation détaillée
- [ ] Expériences professionnelles/stages
- [ ] Compétences techniques détaillées
- [ ] Certifications

### Projets
- [ ] Projets réseaux (configuration routeurs, VLANs, etc.)
- [ ] Projets développement
- [ ] Projets systèmes
- [ ] Descriptions et screenshots

### Contact
- [ ] Email professionnel
- [ ] LinkedIn
- [ ] GitHub
- [ ] Autres réseaux sociaux

## Optimisations Futures

- [ ] Ajouter un blog technique
- [ ] Système de thème clair/sombre toggle
- [ ] Internationalisation (FR/EN)
- [ ] Analytics (Google Analytics ou Plausible)
- [ ] PWA support
- [ ] Formulaire de contact avec backend

## Notes Techniques

### Performance
- Lazy loading des images
- Code splitting par route
- Optimisation des animations (GPU acceleration)
- Compression des assets

### Accessibilité
- Navigation au clavier
- ARIA labels
- Contraste suffisant
- Focus visible

### SEO
- Meta tags appropriées
- Open Graph pour partage social
- Sitemap
- Structured data

---

**Développé pour**: Aurélien Pacory
**BUT**: Réseaux et Télécommunications
**Année**: 2026
