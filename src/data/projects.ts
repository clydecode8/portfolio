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

  category: "AI / Web App  (May 2026 - Ongoing)",

  short:
    "Resume-aware mock interviews using retrieval augmented AI feedback.",

  overview:
    "A full-stack AI interview preparation platform exploring Retrieval-Augmented Generation (RAG) to improve personalization. Instead of relying only on a language model's internal knowledge, the system retrieves resume-specific context before generating questions and feedback.",

  problem:
    "Research by Ji et al. (2023) highlights that Large Language Models can generate fluent but unsupported responses when relying only on their internal parameters, commonly known as the hallucination problem. In interview preparation, a general-purpose AI assistant lacks candidate-specific context, which can lead to questions and feedback that are not personalized to the candidate's resume, projects, and experience.",
  
  solution:
    "I implemented a RAG pipeline that processes resumes through parsing, semantic chunking, embedding generation, vector similarity search, and context-based prompting. Retrieved resume information is provided to the LLM to generate more relevant interview questions and evaluations.",

  highlights: [
    "Resume parsing and semantic retrieval",
    "Vector similarity search with embeddings",
    "Context-aware LLM prompting",
    "AI response evaluation and endpoint protection"
  ],

  architecture: [
    "Resume Upload",
    "Semantic Chunks",
    "Embeddings",
    "Vector Database",
    "Context Retrieval",
    "LLM Evaluation"
  ],

  stack: [
    "React",
    "Node.js",
    "Express",
    "Gemini API",
    "Pinecone",
    "Tailwind"
  ],

  references: [
    {
      title:
        "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks",
      authors:
        "Lewis et al., 2020",
      url:
        "https://arxiv.org/abs/2005.11401"
    },
    {
      title:
        "A Survey on Hallucination in Large Language Models",
      authors:
        "Ji et al., 2023",
      url:
        "https://arxiv.org/abs/2311.05232"
    },
    {
      title:
        "Retrieval-Augmented Generation for Large Language Models: A Survey",
      authors:
        "Gao et al., 2023",
      url:
        "https://arxiv.org/abs/2312.10997"
    }
  ],
  image: "/images/ai-interview.svg",

  accent: "blue",
},
  {
  slug: "transcript-verification-system",

  title: "Decentralized Academic Transcript System",

  category: "Blockchain / Self-Sovereign Identity (May 2025 - April 2026)",

  short:
    "Tamper-resistant academic credential verification using SSI, DID, IPFS, and blockchain.",


  overview:
    "A blockchain-based academic credential platform exploring Self-Sovereign Identity (SSI) to modernize transcript issuance and verification. The system allows institutions to issue verifiable credentials, students to manage their digital identity, and employers to verify academic records without relying on manual verification workflows.",


  problem:
    "Research by Casino et al. (2018) highlights that traditional certificate verification processes can be time-consuming and inefficient, while Obilikwu et al. (2019) discusses how advances in digital editing technologies increase risks of credential forgery. Traditional institution-controlled credential systems also limit user ownership and transparency over academic records.",


  solution:
    "I developed a decentralized verification system using Hyperledger Aries for DID-based identity management, IPFS for distributed transcript storage, and smart contracts for credential verification and revocation. The architecture separates identity, storage, and verification layers to improve trust, traceability, and credential ownership.",


  highlights: [
    "Self-Sovereign Identity credential flow",
    "DID-based issuer and holder architecture",
    "IPFS decentralized transcript storage",
    "Role-based access control",
    "Employer verification portal"
  ],


  architecture: [
    "Institution",
    "Issue Credential",
    "DID",
    "Aries Wallet",
    "IPFS",
    "Employer Verification"
  ],


  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Hyperledger Aries",
    "Hyperledger Indy (von-network)",
    "IPFS",
    "Docker",
  ],

  demos: [
    {
      title: "Admin Credential Issuing Flow",
      description:
        "Uploading transcripts, issuing credentials, managing DID records, and handling credential revocation.",
      video: "/videos/BLOCKTAR-ADMIN.mp4",
    },
    {
      title: "Employer Verification Flow",
      description:
        "Verifying student credentials, retrieving transcript records, and checking credential validity.",
      video: "/videos/BLOCKTAR-STD+VERIFIER.mkv",
    },
  ],

  references: [
    {
      title:
        "A systematic literature review of blockchain-based applications",
      authors:
        "Casino et al., 2018",
      url:
        "https://doi.org/10.1016/j.tele.2018.11.006"
    },
    {
      title:
        "Blockchain Technology in Education",
      authors:
        "Alammary et al., 2019",
      url:
        "https://doi.org/10.3390/app9122400"
    },
    {
      title:
        "Self-Sovereign Identity Principles and Blockchain Identity Management",
      authors:
        "Shuaib et al., 2022",
      url:
        "#"
    }
  ],

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
