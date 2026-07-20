// ============================================================================
// Portfolio Content Data — Single Source of Truth
// Naveen R — Robotics AI Engineer
// ============================================================================

import type {
  NavLink,
  SocialLink,
  SkillCategory,
  Project,
  Certification,
  BlogPost,
  Experience,
  CounterStat,
} from "@/types";

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------
export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Blogs", href: "#blogs" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

// ---------------------------------------------------------------------------
// Social Links
// ---------------------------------------------------------------------------
export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/naveentnj",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rs-naveen-engineer",
    icon: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:rnaveen.tkt@gmail.com",
    icon: "mail",
  },
];

// ---------------------------------------------------------------------------
// Hero Stats
// ---------------------------------------------------------------------------
export const HERO_STATS: CounterStat[] = [
  { label: "Certifications", value: 60, suffix: "+" },
  { label: "AI Projects", value: 15, suffix: "+" },
  { label: "Robotics Research", value: 5, suffix: "+" },
  { label: "Technical Articles", value: 20, suffix: "+" },
];

// ---------------------------------------------------------------------------
// Skills
// ---------------------------------------------------------------------------
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "ai",
    title: "Artificial Intelligence",
    icon: "brain",
    description: "LLMs, VLMs, VLAs, and Multi-Agent Systems",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "LLM" },
      { name: "VLM" },
      { name: "VLA" },
      { name: "Agentic AI" },
      { name: "Multi-Agent Systems" },
      { name: "GraphRAG" },
      { name: "LangGraph" },
      { name: "CrewAI" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    id: "cv",
    title: "Computer Vision",
    icon: "eye",
    description: "Detection, Segmentation, and Generative Models",
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "OpenCV" },
      { name: "YOLO" },
      { name: "SAM" },
      { name: "Diffusion Models" },
    ],
  },
  {
    id: "robotics",
    title: "Robotics",
    icon: "bot",
    description: "Simulation, Control, and Reinforcement Learning",
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "ROS2" },
      { name: "Isaac Sim" },
      { name: "Isaac Lab" },
      { name: "Gazebo" },
      { name: "Genesis" },
      { name: "Reinforcement Learning" },
    ],
  },
  {
    id: "edge",
    title: "Embedded AI & Edge",
    icon: "cpu",
    description: "On-device AI with Qualcomm and NVIDIA platforms",
    color: "from-orange-500 to-amber-600",
    skills: [
      { name: "Qualcomm AI Hub" },
      { name: "Snapdragon" },
      { name: "TensorRT" },
      { name: "ONNX" },
      { name: "Edge AI" },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    icon: "code",
    description: "Systems and scripting languages for AI & Robotics",
    color: "from-pink-500 to-rose-600",
    skills: [
      { name: "Python" },
      { name: "C++" },
      { name: "SQL" },
      { name: "Git" },
      { name: "Docker" },
    ],
  },
  {
    id: "cloud",
    title: "Cloud",
    icon: "cloud",
    description: "Multi-cloud AI infrastructure",
    color: "from-sky-500 to-indigo-600",
    skills: [
      { name: "Azure" },
      { name: "AWS" },
      { name: "Google Cloud" },
    ],
  },
  {
    id: "semiconductor",
    title: "Semiconductor & VLSI",
    icon: "circuit-board",
    description: "Hardware architecture and chip design fundamentals",
    color: "from-red-500 to-orange-600",
    skills: [
      { name: "Embedded Systems" },
      { name: "ARM" },
      { name: "SoC Architecture" },
      { name: "I3C" },
      { name: "PCIe" },
      { name: "VLSI Basics" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Projects
// ---------------------------------------------------------------------------
export const PROJECTS: Project[] = [
  {
    id: "robobrain",
    title: "RoboBrain-Agent",
    description:
      "An intelligent robotic agent that combines vision-language models with reinforcement learning for autonomous manipulation and navigation in unstructured environments.",
    techStack: ["Python", "ROS2", "Isaac Sim", "VLM", "RL", "Docker"],
    githubUrl: "https://github.com/naveenr/robobrain-agent",
    category: "Robotics",
    featured: true,
  },
  {
    id: "world-action",
    title: "World Action Models for Robotics",
    description:
      "Implementation of world models and action prediction architectures that enable robots to simulate outcomes before acting in the physical world.",
    techStack: ["Python", "PyTorch", "Isaac Lab", "Genesis", "VLA"],
    githubUrl: "https://github.com/naveenr/world-action-models",
    category: "Physical AI",
    featured: true,
  },
  {
    id: "graphrag",
    title: "GraphRAG Evaluation Framework",
    description:
      "A comprehensive evaluation framework for Graph-based Retrieval Augmented Generation systems, measuring faithfulness, relevance, and multi-hop reasoning.",
    techStack: ["Python", "LangGraph", "Neo4j", "LLM", "GraphRAG"],
    githubUrl: "https://github.com/naveenr/graphrag-eval",
    category: "Agentic AI",
    featured: true,
  },
  {
    id: "qualcomm-edge",
    title: "Qualcomm Edge AI Learning",
    description:
      "End-to-end guide for deploying AI models on Qualcomm Snapdragon platforms using AI Hub, ONNX, and QNN SDK for real-time edge inference.",
    techStack: ["Qualcomm AI Hub", "Snapdragon", "ONNX", "TensorRT", "Python"],
    githubUrl: "https://github.com/naveenr/qualcomm-edge-ai",
    category: "Edge AI",
    featured: true,
  },
  {
    id: "robotics-hub",
    title: "Robotics Learning Hub",
    description:
      "A curated repository of tutorials, research summaries, and code examples covering ROS2, simulation, SLAM, path planning, and robot learning.",
    techStack: ["ROS2", "Gazebo", "Python", "C++", "SLAM"],
    githubUrl: "https://github.com/naveenr/robotics-hub",
    category: "Robotics",
    featured: true,
  },
  {
    id: "genai-visual",
    title: "Generative AI Visual Learning Series",
    description:
      "Visual explainers and interactive notebooks covering diffusion models, GANs, VAEs, transformers, and prompt engineering techniques.",
    techStack: ["Python", "Diffusion", "Stable Diffusion", "ComfyUI", "LLM"],
    githubUrl: "https://github.com/naveenr/genai-visual",
    category: "Generative AI",
    featured: true,
  },
];

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------
export const CERTIFICATIONS: Certification[] = [
  {
    id: "qualcomm-1",
    title: "Qualcomm AI Upskilling — On-Device AI",
    issuer: "Qualcomm",
    category: "Edge AI",
    date: "2024",
  },
  {
    id: "ms-ai",
    title: "Microsoft AI Fundamentals",
    issuer: "Microsoft",
    category: "AI",
    date: "2024",
  },
  {
    id: "anthropic",
    title: "Anthropic AI Fluency",
    issuer: "Anthropic",
    category: "AI",
    date: "2024",
  },
  {
    id: "google-agent",
    title: "Google Agentspace",
    issuer: "Google",
    category: "Agentic AI",
    date: "2024",
  },
  {
    id: "coursera-dl",
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    category: "AI",
    date: "2024",
  },
  {
    id: "linkedin-learn",
    title: "AI & Machine Learning Path",
    issuer: "LinkedIn Learning",
    category: "AI",
    date: "2024",
  },
  {
    id: "dlai",
    title: "LangChain for LLM Application Development",
    issuer: "DeepLearning.AI",
    category: "Agentic AI",
    date: "2024",
  },
  {
    id: "prs-semicon",
    title: "VLSI & Semiconductor Fundamentals",
    issuer: "PRS Semicon Technologies",
    category: "VLSI",
    date: "2024",
  },
  {
    id: "qualcomm-2",
    title: "Qualcomm — Snapdragon AI Engine",
    issuer: "Qualcomm",
    category: "Edge AI",
    date: "2024",
  },
  {
    id: "nvidia-jetson",
    title: "NVIDIA DLI — Jetson AI",
    issuer: "NVIDIA",
    category: "Edge AI",
    date: "2024",
  },
  {
    id: "aws-ml",
    title: "AWS Machine Learning Foundations",
    issuer: "AWS",
    category: "Cloud",
    date: "2024",
  },
  {
    id: "azure-ai",
    title: "Azure AI Engineer Associate",
    issuer: "Microsoft",
    category: "Cloud",
    date: "2024",
  },
];

export const CERT_ISSUERS = [
  "All",
  "Qualcomm",
  "Microsoft",
  "Google",
  "Anthropic",
  "Coursera",
  "LinkedIn Learning",
  "DeepLearning.AI",
  "PRS Semicon Technologies",
  "NVIDIA",
  "AWS",
];

// ---------------------------------------------------------------------------
// Blog Posts
// ---------------------------------------------------------------------------
export const BLOG_POSTS: BlogPost[] = [
  {
    id: "graphrag-blog",
    title: "Understanding GraphRAG: Graph-Based Retrieval Augmented Generation",
    excerpt:
      "Deep dive into how knowledge graphs supercharge RAG pipelines with multi-hop reasoning and structured context retrieval.",
    topic: "GraphRAG",
    date: "2024-12-15",
    readTime: "8 min",
    tags: ["GraphRAG", "LLM", "Knowledge Graphs"],
  },
  {
    id: "physical-ai",
    title: "Physical AI: Bridging Intelligence and the Real World",
    excerpt:
      "Exploring how vision-language-action models and world models are enabling robots to understand, reason, and act in physical environments.",
    topic: "Physical AI",
    date: "2024-11-20",
    readTime: "10 min",
    tags: ["Physical AI", "Robotics", "VLA"],
  },
  {
    id: "world-models",
    title: "World Action Models: Teaching Robots to Predict the Future",
    excerpt:
      "How world models allow robots to simulate outcomes internally before executing actions in the real world.",
    topic: "World Action Models",
    date: "2024-10-10",
    readTime: "7 min",
    tags: ["World Models", "Robotics", "Simulation"],
  },
  {
    id: "robotics-blog",
    title: "Getting Started with ROS2 and Isaac Sim for Robot Learning",
    excerpt:
      "A practical guide to setting up ROS2 with NVIDIA Isaac Sim for training robotic policies using reinforcement learning.",
    topic: "Robotics",
    date: "2024-09-05",
    readTime: "12 min",
    tags: ["ROS2", "Isaac Sim", "RL"],
  },
  {
    id: "edge-ai-blog",
    title: "Deploying AI on Qualcomm Snapdragon: A Complete Guide",
    excerpt:
      "Step-by-step walkthrough for optimizing and deploying neural networks on Qualcomm edge platforms using AI Hub and QNN SDK.",
    topic: "Qualcomm Edge AI",
    date: "2024-08-15",
    readTime: "9 min",
    tags: ["Qualcomm", "Edge AI", "ONNX"],
  },
  {
    id: "llm-blog",
    title: "Building Agentic AI Systems with LangGraph and CrewAI",
    excerpt:
      "How to architect multi-agent systems that reason, plan, and collaborate using modern agentic frameworks.",
    topic: "LLMs",
    date: "2024-07-20",
    readTime: "11 min",
    tags: ["Agentic AI", "LangGraph", "CrewAI"],
  },
  {
    id: "vlsi-blog",
    title: "VLSI Basics for AI Engineers: SoC Architecture Demystified",
    excerpt:
      "Understanding SoC architecture, ARM cores, and hardware accelerators that power on-device AI inference.",
    topic: "VLSI",
    date: "2024-06-01",
    readTime: "8 min",
    tags: ["VLSI", "SoC", "ARM"],
  },
  {
    id: "cv-blog",
    title: "From YOLO to SAM: Evolution of Real-Time Computer Vision",
    excerpt:
      "Tracing the evolution of object detection and segmentation from YOLO to the Segment Anything Model.",
    topic: "Computer Vision",
    date: "2024-05-10",
    readTime: "7 min",
    tags: ["Computer Vision", "YOLO", "SAM"],
  },
  {
    id: "agentic-blog",
    title: "The Rise of Agentic AI: Beyond Chat to Autonomous Action",
    excerpt:
      "Why agentic AI represents the next frontier — systems that autonomously plan, execute, and learn from feedback.",
    topic: "Agentic AI",
    date: "2024-04-18",
    readTime: "6 min",
    tags: ["Agentic AI", "Agents", "LLM"],
  },
];

// ---------------------------------------------------------------------------
// Experience Timeline
// ---------------------------------------------------------------------------
export const EXPERIENCES: Experience[] = [
  {
    id: "ai-journey",
    title: "AI & Machine Learning Journey",
    period: "2022 — Present",
    description:
      "Deep-dived into machine learning, deep learning, and generative AI. Built projects spanning NLP, computer vision, and reinforcement learning.",
    highlights: [
      "Mastered PyTorch, TensorFlow, and JAX",
      "Built end-to-end ML pipelines",
      "Explored LLMs, VLMs, and diffusion models",
    ],
    icon: "brain",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: "robotics-research",
    title: "Robotics Research & Development",
    period: "2023 — Present",
    description:
      "Focused on autonomous robotics using ROS2, NVIDIA Isaac Sim, and reinforcement learning for manipulation and navigation tasks.",
    highlights: [
      "Built autonomous navigation systems with ROS2",
      "Trained robotic policies in Isaac Sim & Isaac Lab",
      "Explored sim-to-real transfer techniques",
    ],
    icon: "bot",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "qualcomm-edge",
    title: "Qualcomm Edge AI Specialization",
    period: "2024 — Present",
    description:
      "Specialized in deploying optimized AI models on Qualcomm Snapdragon platforms for real-time edge inference.",
    highlights: [
      "Deployed models via Qualcomm AI Hub",
      "Optimized with ONNX and TensorRT",
      "Achieved real-time inference on edge devices",
    ],
    icon: "cpu",
    color: "from-orange-500 to-amber-600",
  },
  {
    id: "genai",
    title: "Generative AI & Agentic Systems",
    period: "2024 — Present",
    description:
      "Built multi-agent systems, RAG pipelines, and generative AI applications using LangGraph, CrewAI, and modern LLM frameworks.",
    highlights: [
      "Developed GraphRAG evaluation frameworks",
      "Built multi-agent orchestration systems",
      "Created visual learning content for GenAI",
    ],
    icon: "sparkles",
    color: "from-violet-500 to-purple-600",
  },
  {
    id: "vlsi",
    title: "VLSI & Semiconductor Learning",
    period: "2024 — Present",
    description:
      "Studied semiconductor engineering fundamentals including SoC architecture, ARM processors, and hardware-software co-design.",
    highlights: [
      "Learned SoC architecture and ARM cores",
      "Studied I3C, PCIe protocols",
      "Explored hardware accelerators for AI",
    ],
    icon: "circuit-board",
    color: "from-red-500 to-orange-600",
  },
  {
    id: "future",
    title: "Future: Building Physical AI Products",
    period: "2025 →",
    description:
      "Working toward building production-ready Physical AI systems — intelligent robots that understand, reason, and act in the real world.",
    highlights: [
      "Vision-Language-Action models for robots",
      "End-to-end Physical AI pipelines",
      "Production-grade embedded AI systems",
    ],
    icon: "rocket",
    color: "from-pink-500 to-rose-600",
  },
];

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export const SITE_CONFIG = {
  name: "Naveen R",
  title: "Naveen R | Robotics AI Engineer",
  description:
    "Portfolio of Naveen R — Robotics AI Engineer specializing in Physical AI, Intelligent Robotics, Edge AI Systems, Generative AI, Computer Vision, and VLSI Engineering.",
  url: "https://naveenr.dev",
  locale: "en_US",
  keywords: [
    "Robotics AI Engineer",
    "Physical AI",
    "Edge AI",
    "Generative AI",
    "Computer Vision",
    "VLSI",
    "Embedded AI",
    "Qualcomm",
    "ROS2",
    "Isaac Sim",
  ],
};
