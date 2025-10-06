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
    title: "Babou Seye",
    subtitle: "AI Engineer specialized in RAG, LLM and Computer Vision",
    description: "I design generative AI systems and intelligent agents that transform your data into concrete solutions.",
  },
  skills: {
    title: "Skills",
    llmRag: "LLM & RAG",
    computerVision: "Computer Vision",
    aiAgents: "AI Agents",
    dataOps: "Data Engineering & Ops",
    items: {
      llmRag: [
        "LangChain / LangGraph",
        "OpenAI / Azure OpenAI",
        "Llama.cpp, ollama",
        "ChromaDB, Weaviate, RedisVector",
        "Prompt engineering & eval",
      ],
      computerVision: [
        "YOLOv8 / RT-DETR",
        "OpenCV & cv2 cuda",
        "torchvision / ultralytics",
        "Fine-tuning, label-studio",
      ],
      aiAgents: [
        "Tool routing (ToolSelector)",
        "SQL & Pandas agents",
        "Multi-modal agents (vision + text)",
        "FastAPI + WebSocket gateways",
      ],
      dataOps: [
        "Docker / Docker-compose",
        "AWS (ECS, Fargate, S3)",
        "Streamlit / Gradio",
        "CI/CD Vercel & GitHub Actions",
      ],
    },
  },
  formations: {
    title: "Education",
    focus: "Focus",
    formations: [
      {
        degree: "Bachelor's Degree in Computer Science",
        institution: "Aix‑Marseille University",
        years: "2019‑2022",
        focus: "General Computer Science",
        courses: [
          "Networks",
          "Software Development",
          "Complexity",
          "Statistics",
          "Probability",
          "Clean code",
        ],
      },
      {
        degree: "Master's Degree in AI & Machine/Deep Learning",
        institution: "AMU & École Centrale Marseille",
        years: "2022‑2024",
        focus: "Artificial Intelligence Research",
        courses: [
          "Advanced Probability & Statistics",
          "Machine Learning (SVM, XGBoost, RF…)",
          "Deep Learning (CNN, RNN, Transformers, GAN…)",
          "Optimization & Operations Research",
          "Computer Vision",
          "Signal Processing",
          "Reinforcement Learning",
        ],
      },
      {
        degree: "Master's Degree in AI Project Management",
        institution: "Groupe Gema — IA School",
        years: "2024‑2025",
        focus: "AI Project Management",
        courses: [
          "Cloud (AWS)",
          "Project Management",
          "Legal Aspects of AI",
          "Machine Learning",
          "Deep Learning",
        ],
      },
    ],
  },
  projects: {
    title: "My projects",
    context: "Context",
    objective: "Objective",
    solution: "Solution",
    confidential: "Confidential",
    viewProject: "View project",
    projects: [
      {
        title: "Document search system with integrated RAG chatbot",
        organization: "IDEMIA France SAS",
        tags: ["GenAI", "Retrieval Augmented Generation"],
        year: 2025,
        context:
          "CPS support engineers spend a lot of time searching for information in internal documentation.",
        objective:
          "Speed up information access and increase team productivity.",
        solution:
          "Combination of lexical (BM25) and semantic search, then generation of contextualized responses by LLaMA-3.2-3B via LlamaCPP.",
        technologies: [
          "Redis",
          "LangChain",
          "Chroma DB",
          "Streamlit",
          "FastAPI",
          "Uvicorn",
          "Docker",
          "spaCy",
          "pymupdf",
          "RecursiveCharacterTextSplitter",
          "BERT",
        ],
      },
      {
        title: "Social attitudes classification from temporal data",
        organization: "LIS-Lab – CNRS",
        tags: ["Research", "Interpretability"],
        year: 2024,
        context:
          "Analysis of confrontation videos to detect social attitudes (hot anger, cold anger, conciliatory).",
        objective:
          "Build robust and interpretable models to predict social attitudes.",
        solution:
          "Preprocessing, strict Train/Test separation, comparison of SVM, random forests, neural networks; SHAP explanations of features.",
        technologies: [
          "Pandas",
          "NumPy",
          "Scikit-Learn",
          "Matplotlib",
          "Seaborn",
          "Docker",
          "OpenSmile",
          "OpenFace",
        ],
      },
      {
        title: "Unsupervised classification of Toyota models",
        organization: "Euranova (Hackathon)",
        tags: ["Hackathon", "Clustering"],
        year: 2023,
        context: "Rich and heterogeneous technical specifications of Toyota vehicles.",
        objective:
          "Automatically group vehicles into major families without pre-existing labels.",
        solution:
          "Mixed vectorization (numerical fields + LLM embeddings), hierarchical clustering K-Means++, t-SNE visualization.",
        technologies: [
          "Scikit-Learn",
          "spaCy",
          "Hugging Face LLMs",
          "Python",
        ],
      },
      {
        title: "Multimodal turn-taking detection",
        organization: "Personal project",
        tags: ["Multimodal", "Speech Segmentation"],
        year: 2024,
        context: "Prerequisite for structured transcription 'speaker: text'.",
        objective: "Automatically delimit speaking turns.",
        solution:
          "Fusion of BERT text embeddings and audio features (MFCC, pitch, energy) in a transformer classifier; FastAPI microservice on AWS.",
        technologies: [
          "HuggingFace Transformers",
          "librosa",
          "spaCy",
          "BERT",
          "FastAPI",
          "AWS ECS/Fargate",
        ],
      },
      {
        title: "AI agent for DataFrame analysis",
        organization: "LangChain / Pandas",
        tags: ["AI Agent", "DataFrames"],
        year: 2025,
        status: "in progress",
        context:
          "Enable business teams to query tabular datasets in natural language.",
        objective:
          "Dynamically route user query to the appropriate analysis tool.",
        solution:
          "Declaration of LangChain tools (query_df, describe_df, plot_df) and routing via ToolSelector; FastAPI microservice.",
        technologies: [
          "LangChain",
          "pandas",
          "pandasql",
          "Matplotlib",
          "Python",
          "FastAPI",
        ],
      },
      {
        title: "Waste detection with YOLOv8",
        organization: "Personal project",
        tags: ["Computer Vision", "YOLOv8"],
        year: 2024,
        context:
          "Recognize and locate types of waste for environmental use.",
        objective:
          "Deploy a real-time detection service on images or video streams.",
        solution:
          "Fine-tune YOLOv8 on TACO + custom dataset; FastAPI API; Streamlit visualization; Docker containerization (GPU/CPU).",
        technologies: [
          "YOLOv8",
          "OpenCV",
          "Streamlit",
          "FastAPI",
          "Python",
          "Docker",
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
