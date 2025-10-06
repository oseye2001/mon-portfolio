# 🚀 Portfolio - Babou Seye

Portfolio moderne et élégant d'un Ingénieur IA spécialisé en Gen AI (LLM), développé avec Next.js 15, React 19 et Tailwind CSS.

[![Déployé avec Vercel](https://vercel.com/button)](https://vercel.com)

## ✨ Fonctionnalités

### 🎨 Design moderne
- **Palette Tech Blue** : Interface épurée avec fond blanc et accents bleu/violet
- **Animations subtiles** : Particules flottantes, effets de hover élégants
- **Responsive design** : Optimisé pour desktop, tablette et mobile
- **Dark mode ready** : Architecture prête pour le mode sombre

### 🌍 Internationalisation (i18n)
- **Bilingue FR/EN** : Bascule instantanée entre français et anglais
- **Sélecteur de langue** : Bouton dans la navbar avec sauvegarde locale
- **Traductions complètes** : Tous les contenus traduits (hero, projets, skills, formations, contact)

### 🎭 Animations & Interactions
- **Effet typing** : Animation machine à écrire sur le hero
- **Particules flottantes** : Fond animé subtil et élégant
- **Hover élégants** : Cartes qui s'élèvent, icônes qui tournent, badges qui grossissent
- **Transitions fluides** : Animations Framer Motion optimisées

### 📁 Sections
1. **Hero** : Introduction avec effet typing
2. **Skills** : Compétences techniques organisées par catégories (LLM & RAG, Computer Vision, Agents IA, Data Ops)
3. **Formations** : Parcours académique détaillé
4. **Projects** : Projets avec contexte, objectif et solution + badges confidentiels pour projets entreprise
5. **Contact** : CTA avec email direct

### 🔒 Gestion de confidentialité
- **Badges automatiques** : Détection des projets confidentiels
- **Icône cadenas** : Indication visuelle pour projets entreprise
- **Flexibilité** : Possibilité d'ajouter des liens pour projets publics

## 🛠️ Technologies utilisées

### Core
- **Next.js 15.3.5** - Framework React avec App Router
- **React 19** - Bibliothèque UI
- **TypeScript 5** - Typage statique
- **Tailwind CSS 4** - Styling utility-first

### Animations & UI
- **Framer Motion 12.23.3** - Animations fluides
- **Lucide React 0.525.0** - Icônes modernes
- **Radix UI** - Composants accessibles (Button, Card)

### Styling
- **class-variance-authority** - Gestion des variants
- **clsx** & **tailwind-merge** - Composition de classes CSS

## 🚀 Installation & Développement

### Prérequis
- Node.js 20+
- npm, yarn, pnpm ou bun

### Installation

```bash
# Cloner le repo
git clone https://github.com/Babou001/mon-portfolio.git
cd mon-portfolio

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Développement

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 📂 Structure du projet

```
mon-portfolio/
├── src/
│   ├── app/                 # App Router Next.js
│   │   ├── layout.tsx       # Layout racine
│   │   ├── page.tsx         # Page d'accueil
│   │   └── globals.css      # Styles globaux
│   ├── components/          # Composants React
│   │   ├── Hero.tsx         # Section hero avec typing
│   │   ├── Skills.tsx       # Compétences
│   │   ├── Formations.tsx   # Formations académiques
│   │   ├── Projects.tsx     # Liste des projets
│   │   ├── ProjectCard.tsx  # Carte projet individuelle
│   │   ├── Contact.tsx      # Section contact
│   │   ├── Navbar.tsx       # Navbar avec i18n
│   │   ├── FloatingMenu.tsx # Menu flottant
│   │   ├── FloatingParticles.tsx # Particules animées
│   │   └── ui/              # Composants UI (Button, Card)
│   ├── contexts/            # Contextes React
│   │   └── LanguageProvider.tsx # Provider i18n
│   ├── locales/             # Traductions
│   │   ├── fr.ts            # Français
│   │   └── en.ts            # Anglais
│   └── data/                # Données statiques
│       └── projects.ts      # Liste des projets
├── public/                  # Assets statiques
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Personnalisation

### Modifier les traductions

Éditer les fichiers dans `src/locales/` :
- `fr.ts` pour le français
- `en.ts` pour l'anglais

### Ajouter/Modifier des projets

Éditer `src/data/projects.ts` :

```typescript
{
  title: "Titre du projet",
  organization: "Organisation",
  tags: ["Tag1", "Tag2"],
  year: 2025,
  context: "Contexte du projet",
  objective: "Objectif principal",
  solution: "Solution mise en place",
  technologies: ["Tech1", "Tech2"],
  link: "https://github.com/...", // Optionnel
  confidential: false, // Optionnel
}
```

### Changer les couleurs

Modifier `tailwind.config.ts` pour ajuster la palette de couleurs.

### Ajuster les animations

Les animations sont configurées dans les composants via Framer Motion. Voir la [documentation Framer Motion](https://www.framer.com/motion/).

## 📝 SEO & Metadata

Les métadonnées sont configurées dans `src/app/layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: "Babou Seye - AI Engineer",
  description: "AI Engineer specialized in Gen AI (LLM)",
};
```

## 🚀 Déploiement

### Vercel (recommandé)

[![Déployer avec Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Babou001/mon-portfolio)

### Autres plateformes

Ce projet Next.js peut être déployé sur :
- [Netlify](https://www.netlify.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)
- Tout service supportant Next.js

Voir la [documentation Next.js deployment](https://nextjs.org/docs/app/building-your-application/deploying) pour plus d'infos.

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

**Babou Seye**
- Email: e.b.seye@gmail.com
- Portfolio: [En ligne bientôt]

---

🤖 Développé avec l'aide de [Claude Code](https://claude.com/claude-code)
