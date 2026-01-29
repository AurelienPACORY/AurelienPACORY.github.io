# [AP] PORTFOLIO - BRUTALIST DESIGN

Portfolio brutalist ultra-moderne pour Aurélien Pacory, étudiant en BUT Réseaux et Télécommunications.

## 🎨 DESIGN PHILOSOPHY

**BRUTALIST/RAW** - Design agressif et minimaliste inspiré du mouvement brutaliste

### Caractéristiques principales

- **Typographie harsh**: IBM Plex Mono (headings) + Courier New (body)
- **Palette monochrome**: Noir (#000000) + Blanc (#FFFFFF) + Acid Green (#00FF41)
- **Borders épaisses**: 4px solid borders partout
- **Grilles strictes**: Layout géométrique et asymétrique
- **Animations brusques**: Pas d'easing, transitions linéaires
- **Custom cursor**: Curseur personnalisé avec accent vert
- **Hover states agressifs**: Effets de transformation instantanés
- **Box shadows**: Ombres plates et décalées (brutal-box-shadow)

## 🚀 TECHNOLOGIES

- **React 18** - Framework UI
- **TypeScript** - Typage statique
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utilitaire (customisé)
- **Lucide React** - Icônes minimalistes

## 📦 INSTALLATION

```bash
npm install
```

## 🔧 DÉVELOPPEMENT

```bash
npm run dev
```

Le site sera disponible sur `http://localhost:5173`

## 🏗️ BUILD

```bash
npm run build
```

## 👀 PREVIEW

```bash
npm run preview
```

## 📁 STRUCTURE

```
src/
├── components/
│   ├── Navigation.tsx    # Nav sticky avec borders
│   ├── Hero.tsx          # Section hero avec glitch effect
│   ├── CV.tsx            # Timeline + Skills bars
│   ├── Projects.tsx      # Grille asymétrique de projets
│   ├── Contact.tsx       # Form brutal + social links
│   ├── Footer.tsx        # Footer avec ASCII art
│   └── ui/
│       ├── Button.tsx    # Boutons brutalist
│       └── Card.tsx      # Cartes avec box-shadow
├── hooks/
│   └── useScrollAnimation.ts
├── utils/
│   └── constants.ts
└── styles/
    └── globals.css       # Styles brutalist custom
```

## 🎯 FEATURES BRUTALIST

### Custom Cursor
- Cursor dot personnalisé (vert fluo)
- Cursor square sur les liens et boutons

### Glitch Effects
- Text glitch au hover sur le titre principal
- Effets de décalage de couleur (cyan/green)

### Box Shadows
- Ombres plates et décalées (8px offset)
- Animation au hover (12px offset + translate)

### Textures
- Background noise pattern
- Grid background pattern (50px x 50px)

### Transitions
- Toutes en `linear` (pas d'easing)
- Durée fixe de 0.15s
- Changements brusques et intentionnels

### Typography
- Tout en UPPERCASE pour les headings
- Espacement de lettres large (tracking-widest)
- Poids bold pour emphase
- Numérotation des sections (01, 02, 03, 04)

## 🎨 PALETTE DE COULEURS

```css
--brutal-black: #000000
--brutal-white: #FFFFFF
--brutal-accent: #00FF41 (Acid Green)
--brutal-accent2: #00FFFF (Neon Cyan - pour glitch)
--brutal-gray: #1A1A1A
--brutal-border: 4px
```

## ✨ SECTIONS

1. **HERO** - Intro avec titre massif + corners accent
2. **CV** - Timeline de formation + Skills avec barres de progression
3. **PROJECTS** - Grille asymétrique de projets filtrables
4. **CONTACT** - Formulaire brutal + liens sociaux
5. **FOOTER** - ASCII art + informations

## 📱 RESPONSIVE

- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Menu burger pour mobile
- Grilles adaptatives

## 🔧 CUSTOMIZATION

Pour modifier les couleurs ou le style, éditer:
- `tailwind.config.js` - Config Tailwind
- `src/styles/globals.css` - Styles brutalist custom

## 📝 LICENSE

© 2026 Aurélien Pacory - Tous droits réservés

---

**[BUILT_WITH]** REACT + TAILWIND + TYPESCRIPT + BRUTALISM
