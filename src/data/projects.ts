export const projects = [
  {
    title: "Plateforme Web de Gestion de Tâches (Full-Stack)",
    organization: "Projet personnel",
    tags: ["Full-Stack", "Web App"],
    year: 2025,
    context:
      "Besoin d’une application simple et intuitive pour organiser les tâches, avec accès sécurisé.",
    objective:
      "Développer une application complète (Front + Back + DB) avec authentification et persistance.",
    solution:
      "Interface responsive (React) + API REST (Node.js/Express). Authentification JWT, rôles basiques, CRUD tâches, filtres et recherche.",
    technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "GitHub"]
  },
  {
    title: "Système de Classification Autisme – Screening Adultes",
    organization: "Projet académique (Machine Learning)",
    tags: ["Machine Learning", "Classification"],
    year: 2025,
    context:
      "Aider au repérage précoce des traits autistiques chez l’adulte à partir d’un dataset structuré.",
    objective:
      "Construire un modèle fiable et interprétable pour distinguer profils neurotypiques et autistes.",
    solution:
      "Prétraitement et feature engineering, comparaison Logistic Regression / Random Forest / SVM, validation croisée, matrice de confusion et courbes PR/ROC.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn"
    ]
  },
  {
    title: "Base de Données d’une Bibliothèque Universitaire",
    organization: "Projet académique – INFO 3114",
    tags: ["SQL", "Base de données"],
    year: 2024,
    context:
      "Gestion des prêts, des usagers et de l’inventaire d’une bibliothèque universitaire.",
    objective:
      "Concevoir et implémenter une base relationnelle robuste et interroger les données efficacement.",
    solution:
      "Modélisation MER/UML, schéma SQL normalisé, requêtes CRUD, vues, procédures, index. Jeux de tests et scénarios d’usage.",
    technologies: ["MySQL", "SQL", "UML/MER", "phpMyAdmin"]
  },
  {
    title: "Simulation d’un Réseau Informatique",
    organization: "Projet académique – INFO 3221",
    tags: ["Réseaux", "Cisco"],
    year: 2024,
    context:
      "Comprendre la communication inter-sous-réseaux et la segmentation du trafic.",
    objective:
      "Construire une topologie avec routage, VLAN, DHCP et tester la connectivité.",
    solution:
      "Configuration routeurs/switches, VLAN, routage statique et inter-VLAN, DHCP, DNS. Débogage de la connectivité (ping, traceroute).",
    technologies: ["Cisco Packet Tracer", "TCP/IP", "VLAN", "Routage statique"]
  },
  {
    title: "Jeu 2D en C++ — Infographie & Jeux Vidéo",
    organization: "Projet académique – INFO 4900 (en cours)",
    tags: ["C++", "POO", "Game Dev"],
    year: 2025,
    context:
      "Mettre en pratique la programmation orientée objet et les bases de l’infographie/jeu vidéo vues en cours.",
    objective:
      "Développer un mini-jeu 2D avec moteur simple, sprites animés et gestion des collisions.",
    solution:
      "Système d’entités (joueur/ennemis), boucle de jeu, gestion des inputs, collisions AABB, états (menu/jeu/fin). Packaging exécutable.",
    technologies: ["C++", "SFML ou SDL2", "POO", "CMake", "Git"]
  },
  {
    title: "Boutique E-commerce Full-Stack (Panier + Paiement test)",
    organization: "Projet personnel",
    tags: ["Full-Stack", "E-commerce"],
    year: 2025,
    context:
      "Créer une boutique en ligne moderne avec gestion des produits, panier, paiement et tableau de bord admin.",
    objective:
      "Concevoir une application prête à déployer : front SEO-friendly, API sécurisée, base SQL, paiements (mode test).",
    solution:
      "Front Next.js (pages produits, recherche, filtre, responsive). Back Node/Express (ou NestJS), PostgreSQL/Prisma, cache Redis. Auth JWT + RBAC (admin/user), checkout Stripe (mode test), dashboard admin (CRUD produits, stocks, commandes).",
    technologies: [
      "Next.js",
      "React",
      "Node.js/Express ou NestJS",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Stripe (test)",
      "JWT",
      "Docker",
      "GitHub Actions",
      "Vercel"
    ]
  }
];
