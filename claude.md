# Portfolio Universitaire - Aurélien Pacory

## Vue d'ensemble

Portfolio d'Aurélien Pacory, étudiant en cybersécurité (BUT Réseaux & Télécommunications, alternance CTI chez Sopra Steria). Site en production sur GitHub Pages : https://aurelienpacory.github.io/

## Stack Technologique

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** (thème custom "luxury" glassmorphism, voir `tailwind.config.js`)
- **Framer Motion** pour les animations et transitions
- **react-i18next** pour l'internationalisation FR/EN (`src/locales/fr` et `src/locales/en`)
- **Lucide React** pour les icônes
- **@tsparticles** pour le fond animé (particules)
- **next-themes** pour le mode clair/sombre
- **EmailJS** pour le formulaire de contact (protection anti-spam : honeypot uniquement — `react-google-recaptcha` était installé mais jamais utilisé, retiré le 2026-07-15)

## Structure réelle des fichiers

```
src/
├── App.tsx                    # Ordre des sections : Navigation, About, CV, Projects, Experiences, Contact, Footer
├── components/
│   ├── Navigation.tsx         # Nav sticky glassmorphism, i18n + theme switcher
│   ├── About.tsx              # Section "À propos" : intro + réseaux sociaux + "Mes Domaines d'Expertise" (3 cartes)
│   ├── CV.tsx                 # Timeline formation, compétences, langues, passions, téléchargement CV PDF
│   ├── Projects.tsx           # Grille filtrable par catégorie + modale de détails par projet
│   ├── Experiences.tsx        # Expériences professionnelles / alternance
│   ├── Contact.tsx            # Formulaire de contact (EmailJS + honeypot). Clé publique EmailJS restreinte au domaine de prod (voir section Sécurité) : le formulaire ne fonctionne PAS en localhost, uniquement sur le site déployé.
│   ├── Footer.tsx
│   ├── ThemeProvider.tsx
│   └── ui/
│       ├── Button.tsx         # Accepte aria-label (le transmet bien au <button> HTML)
│       ├── Card.tsx
│       ├── Modal.tsx          # Modale générique réutilisable (Projects.tsx l'utilise)
│       ├── LanguageSwitcher.tsx
│       ├── ThemeSwitcher.tsx
│       └── ParticlesBackground.tsx
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useActiveSection.ts
├── locales/
│   ├── fr/translation.json    # Source de vérité pour tout le contenu texte (FR)
│   └── en/translation.json    # Équivalent EN (garder les deux synchronisés à chaque changement de contenu)
└── styles/globals.css
```

**Il n'y a pas de section Hero** : elle a été supprimée. La page "À propos" (`About.tsx`) fait office d'ouverture du site.

## Design System (réel, pas le thème "tech" bleu/cyan d'origine)

- **Thème "luxury"** : dégradés violet/rose (`luxury-accent` `#6366f1`, `luxury-accent2` `#ec4899`, `luxury-accent3` `#f59e0b`), fond très sombre.
- **Glassmorphism** : classes utilitaires `.glass` / `.glass-strong` (fond flouté semi-transparent) utilisées partout (cartes, nav, badges).
- **Typo headings** : `font-display` (police "Clash Display" configurée mais jamais chargée sur le site → fallback système). Un `letter-spacing: -0.02em` global sur h1-h6 (`globals.css`) peut rendre certains titres trop resserrés ; ajouter `tracking-wide` au cas par cas si besoin (déjà fait sur les titres de projet).
- **Fond animé** : `ParticlesBackground.tsx` (tsparticles) + `mesh-gradient` en overlay sur les sections.

## Système de projets (`Projects.tsx` + `locales/*/translation.json` → clé `projects`)

Chaque entrée de `projects.list` peut avoir :
- `title`, `description` (courte, carte), `long_description` (optionnelle, modale — sinon fallback sur `description`)
- `category` (doit correspondre à une valeur de `projects.categories`)
- `tags` (chips affichées sur la carte et en haut de la modale)
- `image` (optionnelle ; chemin `./assets/...` vers `public/assets/`). **Toujours cropper l'image source pour ne garder que le contenu utile** (pas de marges blanches/éléments hors-cadre) : les images s'affichent en `object-contain` (jamais recadrées par CSS), donc une image mal cadrée à la source reste mal cadrée à l'écran.
- `skills_used` / `skills_acquired` (listes optionnelles → sections "Compétences mobilisées" / "Compétences acquises" dans la modale)
- `deliverables` (liste optionnelle → section "Traces & Livrables")
- `gallery` (liste optionnelle d'images secondaires `{ src, caption }`, ex. schéma additionnel)
- `pdf` (optionnel, `{ url, label }` → lien de téléchargement, ex. rapport de projet)

Sans image ni catégorie correspondante, une carte retombe sur un fallback numéroté (dégradé + `01`/`02`...).

### État actuel des projets (2026)
1. **Infrastructure Réseau Multi-Sites Sécurisée** — projet réseau réel (Cisco, VPN IPsec, DMZ, Centreon), complet avec image + compétences.
2. **Réagir Face à une Cyber-Attaque** — projet SOC réel (Wazuh/MISP/n8n), complet avec image, galerie (workflow n8n), et DIC en PDF téléchargeable.
3. **État de la Menace (EDM)** — projet entreprise (catégorie "Entreprise"), complet avec description, `long_description`, image (`image_edm.png`, illustration générique cyber/CTI) et compétences mobilisées/acquises (sujet : menace Kali365, PhaaS ciblant Microsoft 365, alternance CTI Sopra Steria). Contenu volontairement limité aux éléments publics (alertes FBI/IC3, rapports d'éditeurs, framework MITRE ATT&CK) — pas de galerie ni de PDF, car le rapport interne complet est confidentiel. Ne pas y ajouter de détails internes (règles de détection précises, échanges avec l'équipe de détection, outils/documents internes) sans validation explicite du sujet.

Les anciens projets fictifs (Serveur Web HA, Analyseur de Trafic, VoIP) ont été supprimés — ne pas les réintroduire.

## Déploiement

Le site est servi par **GitHub Pages depuis la branche `gh-pages`** (pas via GitHub Actions).

```bash
npm run build      # build Vite → dist/
npm run deploy     # gh-pages -d dist --dotfiles → publie dist/ sur la branche gh-pages
```

**Important** : le flag `--dotfiles` est indispensable. Le paquet `gh-pages` exclut les fichiers commençant par un point par défaut, donc sans ce flag, `.nojekyll` (présent dans `public/`) n'est jamais publié → GitHub Pages tente de builder le site avec Jekyll → échec de build. Ce bug a déjà été rencontré et corrigé (commit `e2237b8`) ; ne jamais retirer ce flag.

Après un déploiement, le CDN de GitHub Pages peut mettre plusieurs minutes à se rafraîchir (`Cache-Control: max-age=600`). Pour vérifier qu'un déploiement a bien pris sans attendre le cache CDN, comparer le hash du bundle JS référencé par `https://raw.githubusercontent.com/AurelienPACORY/AurelienPACORY.github.io/gh-pages/index.html` avec celui du dernier build local.

Workflow habituel après une session de modifications : `git push origin main` (sauvegarde du code source) puis `npm run deploy` (publication du site).

## Sécurité (durci le 2026-07-15)

Le site est un SPA statique sans backend (pas de serveur, base de données, ou port exposé propre à l'utilisateur) — la surface d'attaque type scan Shodan/botnet est structurellement très faible. Le travail de durcissement s'est concentré sur ce qui restait vraiment exploitable :

- **CSP + Referrer-Policy** — balises `<meta>` dans `index.html` (GitHub Pages ne permet pas d'en-têtes HTTP custom, donc pas de vraies en-têtes serveur). `default-src 'self'` + autorisations scopées à Google Fonts, Fontshare et `api.emailjs.com`. **Si un nouveau service externe est ajouté (script, police, appel API), il faut penser à l'ajouter à cette CSP sous peine de le voir bloqué silencieusement.**
- **Formulaire de contact (`Contact.tsx`)** : clé publique EmailJS restreinte par allowlist de domaine dans le dashboard EmailJS (Account → Security → Domains) à `https://aurelienpacory.github.io` uniquement — **pas de `localhost`**. Conséquence : tester l'envoi du formulaire en `npm run dev` échouera toujours, ce n'est pas une régression. Pour tester un changement sur `Contact.tsx`, il faut soit déployer, soit ajouter temporairement un `localhost:port` à l'allowlist EmailJS (dashboard, hors dépôt).
- **`LICENSE`** (racine du repo) : tous droits réservés (FR/EN), + `"license": "UNLICENSED"` dans `package.json` + mention "Tous droits réservés"/"All rights reserved" dans le footer (clé `footer.rights_reserved`). Protection légale, pas technique — le repo GitHub reste public (voir ci-dessous), donc le code source reste consultable/clonable par n'importe qui.
- **`.github/dependabot.yml`** : PR automatiques hebdomadaires si une dépendance npm a une faille connue.
- **`npm audit`** : à jour au 2026-07-15, il reste volontairement 2 vulnérabilités (`esbuild`/`vite`, dev-only, aucun impact sur le build de prod) — corrigibles seulement via `npm audit fix --force` qui bump vers Vite 8 (breaking change), à faire dans une session dédiée si besoin.
- **Risque accepté sciemment, ne pas re-suggérer sans que l'utilisateur en parle lui-même** : le repo `AurelienPACORY/AurelienPACORY.github.io` est **public**. Passer en privé casserait GitHub Pages sur le plan gratuit (nécessite GitHub Pro/Team). L'utilisateur a explicitement refusé de payer pour ça — le code source TypeScript/React complet (pas juste le bundle minifié) reste donc clonable par tous ; seule la `LICENSE` protège juridiquement contre la réutilisation.
- Pas de `.env` ni secret committé, HTTPS/HSTS forcé par GitHub Pages par défaut, aucun `X-Frame-Options` possible (limite de GitHub Pages, risque clickjacking résiduel très faible et non corrigible gratuitement).

## Prochaines étapes connues

- La balise `<meta name="description">` dans `index.html` décrit encore l'ancien design "brutalist" (`"[PORTFOLIO] Aurélien Pacory - Étudiant en cybersécurité | Brutalist Design"`) — à corriger pour refléter le thème "luxury" réel (le `README.md`, lui, a été corrigé le 2026-07-15).

---

**Développé pour** : Aurélien Pacory
**BUT** : Réseaux et Télécommunications
**Année** : 2026
