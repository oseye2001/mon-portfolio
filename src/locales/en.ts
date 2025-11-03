import { Translations } from "./fr";

export const en: Translations = {
  nav: {
    home: "Home",
    skills: "Skills",
    formations: "Education",
    projects: "Projects",
    contact: "Contact",
  },
  hero: {
    title: "El Hadji Ousmane Seye",
    subtitle: "Junior Full-Stack Developer",
    description:
      "Junior Full-Stack Developer, motivated and passionate about web development, I am building my first projects to strengthen my skills from Front-End to Back-End.",
  },
  skills: {
    title: "Skills",
    software: "Software Development & Computer Science",
    fullStack: "Full-Stack Web Development",
    systems: "Systems & Security",
    tools: "Tools & Environment",
    softSkills: "Soft Skills",
    items: {
      software: [
        "Object-oriented programming (C++, Java)",
        "Algorithms & data structures",
        "Software design and development",
        "Information systems analysis",
      ],
      fullStack: [
        "HTML5, CSS3, JavaScript",
        "Node.js & Express (basics)",
        "REST APIs",
        "MySQL / MongoDB",
        "React (beginner)",
      ],
      systems: [
        "Computer architecture & organization (Assembly)",
        "Computer networks (TCP/IP, OSI model, protocols)",
        "Cryptography (key concepts)",
        "Computer security – basics",
      ],
      tools: [
        "Git & GitHub",
        "VS Code",
        "Postman",
        "Figma (UI/wireframes)",
        "Linux / Shell (basics)",
      ],
      softSkills: [
        "Analytical thinking & problem-solving",
        "Autonomy & fast learning",
        "Communication & teamwork",
        "Adaptability",
      ],
    },
  },
  formations: {
    title: "Education",
    focus: "Focus",
    formations: [
      {
        degree: "Bachelor’s in Applied Computer Science",
        institution: "University of Moncton, Canada",
        years: "2022-2025",
        focus: "Software Development & Applied Computer Science",
        courses: [
          "Programming (C++, Java)",
          "Algorithms & advanced algorithms",
          "Software development",
          "Databases",
          "Computer networks",
          "Cryptography",
          "Computer architecture & organization",
          "Programming paradigms",
          "Web development",
          "Statistics & probability",
          "Computer vision",
          "Machine Learning",
        ],
      },
    ],
  },
  projects: {
    title: "My Projects",
    context: "Context",
    objective: "Objective",
    solution: "Solution",
    confidential: "Confidential",
    viewProject: "View project",
    projects: [
      {
        title: "Task Management Web Platform (Full-Stack)",
        organization: "Personal project",
        tags: ["Full-Stack", "Web App"],
        year: 2025,
        context:
          "Need for a simple and intuitive application to organize tasks with secure access.",
        objective:
          "Develop a complete application (Front + Back + DB) with authentication and data persistence.",
        solution:
          "Responsive interface (React) + REST API (Node.js/Express). JWT authentication, basic user roles, task CRUD, filters and search.",
        technologies: ["React", "Node.js", "Express", "MySQL", "JWT", "GitHub"],
      },
      {
        title: "Autism Screening System – Adult Classification",
        organization: "Academic project (Machine Learning)",
        tags: ["Machine Learning", "Classification"],
        year: 2025,
        context:
          "Support early identification of autistic traits in adults using a structured dataset.",
        objective:
          "Build a reliable and interpretable model to differentiate between neurotypical and autistic profiles.",
        solution:
          "Preprocessing and feature engineering, comparison of Logistic Regression / Random Forest / SVM, cross-validation, confusion matrix and PR/ROC curves.",
        technologies: [
          "Python",
          "Pandas",
          "NumPy",
          "Scikit-Learn",
          "Matplotlib",
          "Seaborn",
        ],
      },
      {
        title: "University Library Database",
        organization: "Academic project – INFO 3114",
        tags: ["SQL", "Database"],
        year: 2024,
        context:
          "Management of book loans, users, and inventory for a university library.",
        objective:
          "Design and implement a robust relational database and query data efficiently.",
        solution:
          "MER/UML modeling, normalized SQL schema, CRUD queries, views, procedures, indexing. Test cases and usage scenarios.",
        technologies: ["MySQL", "SQL", "UML/MER", "phpMyAdmin"],
      },
      {
        title: "Computer Network Simulation",
        organization: "Academic project – INFO 3221",
        tags: ["Networks", "Cisco"],
        year: 2024,
        context:
          "Understanding communication between subnets and traffic segmentation.",
        objective:
          "Build a network topology with routing, VLANs, DHCP and test connectivity.",
        solution:
          "Router/switch configuration, VLANs, static and inter-VLAN routing, DHCP, DNS. Connectivity debugging (ping, traceroute).",
        technologies: [
          "Cisco Packet Tracer",
          "TCP/IP",
          "VLAN",
          "Static routing",
        ],
      },
      {
        title: "2D Game in C++ — Graphics & Video Games",
        organization: "Academic project – INFO 4900 (ongoing)",
        tags: ["C++", "OOP", "Game Dev"],
        year: 2025,
        context:
          "Apply object-oriented programming and the basics of graphics/video games learned in the course.",
        objective:
          "Develop a 2D mini-game with a simple engine, animated sprites, and collision handling.",
        solution:
          "Entity system (player/enemies), game loop, input handling, AABB collision, states (menu/game/end). Executable packaging.",
        technologies: ["C++", "SFML or SDL2", "OOP", "CMake", "Git"],
      },
      {
        title: "Full-Stack E-commerce Store (Cart + Test Payment)",
        organization: "Personal project",
        tags: ["Full-Stack", "E-commerce"],
        year: 2025,
        context:
          "Create a modern online store with product management, cart, payment and admin dashboard.",
        objective:
          "Build a deploy-ready app: SEO-friendly front-end, secure API, SQL database, test payments.",
        solution:
          "Front: Next.js (product pages, search, filtering, responsive). Back: Node/Express (or NestJS), PostgreSQL/Prisma, Redis caching. JWT + RBAC (admin/user), Stripe test checkout, admin dashboard (CRUD products, stock, orders).",
        technologies: [
          "Next.js",
          "React",
          "Node.js/Express or NestJS",
          "PostgreSQL",
          "Prisma",
          "Redis",
          "Stripe (test)",
          "JWT",
          "Docker",
          "GitHub Actions",
          "Vercel",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    description: "A project, a question? Let's talk!",
    cta: "Email me",
  },
};
