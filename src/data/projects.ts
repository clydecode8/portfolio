export type Accent = "blue" | "purple" | "green" | "gold";

export interface Project {
  slug: string;
  title: string;
  category: string;
  short: string;
  overview: string;
  problem: string;
  solution: string;
  highlights: string[];
  architecture: string[];
  stack: string[];
  image: string;
  accent: Accent;
}

export const projects: Project[] = [
  {
    slug: "ai-interview-assistant",
    title: "AI Interview Assistant",
    category: "AI / Web App",
    short: "Resume-aware mock interviews with AI feedback.",
    overview: "An AI-powered interview platform that reads candidate resumes, retrieves relevant context, generates personalized questions, and evaluates answers with structured feedback.",
    problem: "Normal AI interview tools often generate generic questions because they do not understand the candidate's actual resume or project background.",
    solution: "I designed a RAG-style flow using resume parsing, semantic chunking, embeddings, vector retrieval, and LLM prompting so the generated questions stay closer to the candidate's experience.",
    highlights: ["Resume parsing and semantic search", "Personalized question generation", "Answer evaluation with AI scoring", "Rate limiting to protect AI endpoints"],
    architecture: ["Resume", "Chunks", "Embeddings", "Vector DB", "LLM", "Feedback"],
    stack: ["React", "Node.js", "Express", "Gemini", "Pinecone", "Tailwind"],
    image: "/images/ai-interview.svg",
    accent: "blue",
  },
  {
    slug: "transcript-verification-system",
    title: "Transcript Verification System",
    category: "Blockchain / Credential Trust",
    short: "Academic credential verification with DID, IPFS, and revocation.",
    overview: "A decentralized academic transcript system designed to help employers verify academic records without relying only on manual document checking.",
    problem: "Academic transcripts can be forged or manually altered, making verification slow and dependent on institution-side checking.",
    solution: "The system stores transcript files through IPFS, maps credential metadata through DID-based identity flows, and supports revocation so employers can check whether a record is still valid.",
    highlights: ["DID-based credential flow", "IPFS document storage", "Employer verification portal", "Revocation-ready design"],
    architecture: ["Admin", "DID", "IPFS", "Smart Contract", "Employer"],
    stack: ["React", "Node.js", "MongoDB", "IPFS", "SSI", "Smart Contracts"],
    image: "/images/transcript-system.svg",
    accent: "purple",
  },
  {
    slug: "wildfire-prediction-study",
    title: "Wildfire Prediction Study",
    category: "Machine Learning / Research",
    short: "Data cleaning, spatial features, and ML model comparison.",
    overview: "A machine learning study focused on preprocessing noisy wildfire data, handling missing values, building spatial relationships, and comparing predictive models.",
    problem: "The wildfire dataset contained missing containment dates, noisy weather fields, and spatial variables that needed careful preprocessing before model training.",
    solution: "I cleaned and transformed the dataset, engineered temporal and location-based features, built model pipelines, and compared performance using practical metrics.",
    highlights: ["Missing data strategy", "Spatial feature preparation", "Model comparison", "Clear evaluation metrics"],
    architecture: ["Raw Data", "Clean", "Features", "Train", "Evaluate"],
    stack: ["Python", "Pandas", "PyTorch", "Scikit-learn", "Matplotlib"],
    image: "/images/wildfire-study.svg",
    accent: "green",
  },
  {
    slug: "gdm-corporate-website",
    title: "GDM Corporate Website",
    category: "Business Website",
    short: "Clean company site focused on credibility and simple deployment.",
    overview: "A responsive corporate website built to present company information clearly, improve trust, and stay easy to maintain.",
    problem: "Small business sites often become cluttered or difficult to update, reducing credibility for visitors.",
    solution: "I created a clean static website structure with clear sections, responsive layout, and simple deployment so the site stays lightweight and maintainable.",
    highlights: ["Responsive layout", "Simple content structure", "Low-maintenance deployment", "Business-first presentation"],
    architecture: ["Content", "UI", "Build", "Deploy"],
    stack: ["HTML", "CSS", "JavaScript", "Cloudflare"],
    image: "/images/gdm-site.svg",
    accent: "gold",
  },
];
