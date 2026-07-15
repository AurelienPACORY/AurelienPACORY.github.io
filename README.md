# Portfolio - Aurélien Pacory

Portfolio d'Aurélien Pacory, étudiant en cybersécurité (BUT Réseaux & Télécommunications, alternance CTI chez Sopra Steria). En production sur GitHub Pages : https://aurelienpacory.github.io/

## 🎨 Design

**Thème "luxury" glassmorphism** — dégradés violet/rose/ambre sur fond très sombre, cartes en verre dépoli.

- **Palette d'accent** : Indigo `#6366f1`, Rose `#ec4899`, Ambre `#f59e0b` (dégradé "aurora")
- **Glassmorphism** : classes utilitaires `.glass` / `.glass-strong` (fond flouté semi-transparent), utilisées sur les cartes, la nav et les badges
- **Fond animé** : particules (`@tsparticles`) + overlay `mesh-gradient` sur les sections
- **Typographie** : `Inter` (texte courant) + `Clash Display` configurée pour les titres (`font-display`), avec repli système si la police externe ne charge pas
- **Animations** : Framer Motion — fade-in, slide-up, scale-in, effets de flottement et de lueur (`glow`, `float`, `aurora`)
- **Mode clair/sombre** : géré via `next-themes`

## 🚀 Technologies

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** (thème custom, voir `tailwind.config.js`)
- **Framer Motion** — animations et transitions
- **react-i18next** — internationalisation FR/EN
- **Lucide React** — icônes
- **EmailJS** — formulaire de contact (protection anti-spam par honeypot)

## 📦 Installation

```bash
npm install
```

## 🔧 Développement

```bash
npm run dev
```

Le site est alors disponible sur `http://localhost:5173` (ou le prochain port libre).

> ⚠️ Le formulaire de contact ne fonctionne qu'en production (`https://aurelienpacory.github.io`) : la clé publique EmailJS est restreinte à ce domaine dans le dashboard EmailJS. Un test d'envoi en local échouera, ce n'est pas un bug.

## 🏗️ Build

```bash
npm run build
```

## 👀 Preview

```bash
npm run preview
```

## 🌐 Déploiement

Le site est servi par **GitHub Pages depuis la branche `gh-pages`** :

```bash
npm run deploy     # build + publie dist/ sur gh-pages (flag --dotfiles indispensable pour .nojekyll)
```

## 📁 Structure

```
src/
├── App.tsx                    # Navigation, About, CV, Projects, Experiences, Contact, Footer
├── components/
│   ├── Navigation.tsx         # Nav sticky glassmorphism, i18n + theme switcher
│   ├── About.tsx              # Ouverture du site : intro + réseaux sociaux + domaines d'expertise
│   ├── CV.tsx                 # Timeline formation, compétences, langues, passions, CV PDF
│   ├── Projects.tsx           # Grille filtrable par catégorie + modale de détails
│   ├── Experiences.tsx        # Expériences professionnelles / alternance
│   ├── Contact.tsx            # Formulaire de contact (EmailJS + honeypot)
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Modal.tsx          # Modale générique (utilisée par Projects.tsx)
│       ├── LanguageSwitcher.tsx
│       ├── ThemeSwitcher.tsx
│       └── ParticlesBackground.tsx
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useActiveSection.ts
├── locales/
│   ├── fr/translation.json    # Source de vérité du contenu texte (FR)
│   └── en/translation.json    # Équivalent EN
└── styles/globals.css
```

Il n'y a pas de section Hero séparée : la section "À propos" fait office d'ouverture du site.

## 🔒 Sécurité

- Content-Security-Policy et Referrer-Policy définies via balises `<meta>` dans `index.html`
- Clé publique EmailJS restreinte par allowlist de domaine (prod uniquement)
- Licence "tous droits réservés" (voir `LICENSE`)
- Dependabot activé pour les alertes de dépendances npm

## 📝 Licence

© 2026 Aurélien Pacory — Tous droits réservés. Voir [LICENSE](./LICENSE).
