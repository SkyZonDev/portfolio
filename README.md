# Portfolio - Site Web Personnel

Portfolio professionnel développé avec Next.js, présentant mes projets, compétences et expériences.

## 🚀 Technologies

- **[Next.js 16](https://nextjs.org/)** - Framework React pour la production
- **[React 19](https://react.dev/)** - Bibliothèque JavaScript pour les interfaces utilisateur
- **[TypeScript](https://www.typescriptlang.org/)** - Typage statique pour JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitaire
- **[Biome](https://biomejs.dev/)** - Linter et formateur de code rapide
- **[Husky](https://typicode.github.io/husky/)** - Git hooks pour automatiser les tâches

## 📋 Prérequis

- **Node.js** 18+
- **pnpm** (gestionnaire de paquets recommandé)

## 🛠️ Installation

1. Clonez le repository :

```bash
git clone https://github.com/SkyZonDev/portfolio.git
cd portfolio
```

2. Installez les dépendances :

```bash
pnpm install
```

3. Configurez les variables d'environnement (optionnel) :
   Créez un fichier `.env.local` à la racine du projet :

```env
NEXT_PUBLIC_SITE_NAME=Portfolio | Votre Nom
NEXT_PUBLIC_SITE_DESC=Votre description
NEXT_PUBLIC_SITE_KEYWORDS=mots,clés,portfolio
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
```

## 🎯 Scripts Disponibles

- `pnpm dev` - Démarre le serveur de développement sur [http://localhost:3000](http://localhost:3000)
- `pnpm build` - Compile l'application pour la production
- `pnpm start` - Démarre le serveur de production (nécessite `pnpm build` au préalable)
- `pnpm lint` - Vérifie le code avec Biome
- `pnpm lint:fix` - Corrige automatiquement les erreurs de linting
- `pnpm format` - Formate le code avec Biome
- `pnpm typecheck` - Vérifie les types TypeScript sans compiler

## 📁 Structure du Projet

```
portfolio/
├── src/
│   └── app/              # App Router de Next.js
│       ├── layout.tsx    # Layout principal
│       ├── page.tsx      # Page d'accueil
│       └── globals.css   # Styles globaux
├── public/               # Fichiers statiques
├── .husky/              # Git hooks
├── biome.json           # Configuration Biome
├── next.config.ts       # Configuration Next.js
└── package.json         # Dépendances et scripts
```

## 🎨 Fonctionnalités

- ✅ Mode sombre/clair
- ✅ Design responsive
- ✅ Optimisation des performances (Next.js Image, etc.)
- ✅ SEO optimisé avec métadonnées
- ✅ Qualité de code assurée (Biome + Husky)

## 📝 Git Hooks

Le projet utilise Husky pour automatiser certaines vérifications :

- **pre-commit** : Vérifie le code avant chaque commit
- **pre-push** : Exécute des tests avant chaque push
- **commit-msg** : Valide le format des messages de commit

## 🤝 Contribution

Ce projet est personnel, mais les suggestions et améliorations sont les bienvenues !

## 📄 Licence

Tous droits réservés - Portfolio personnel

---

Développé avec ❤️ par Jean-Pierre Dupuis
