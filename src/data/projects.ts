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
  date: "May 2026 - Ongoing",

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

  links: [
    {
      title: "Source Code",
      url: "https://github.com/clydecode8/interview-assistant",
      type: "GitHub",
      icon: "/icons/github.webp"
    }
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
  date: "Nov 2024 - May 2025",
  category: "Blockchain / Self-Sovereign Identity",

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

  
  links: [
    {
      title: "Source Code",
      url: "https://github.com/clydecode8/BlockTAR_v2",
      type: "GitHub",
      icon: "/icons/github.webp"
    }
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

  title: "Wildfire Size Prediction",

  category: "Machine Learning / Data Science Research",
  date: "Nov 2024 - Dec 2024",
  short:
    "AI-based wildfire size prediction using environmental data, spatial features, and optimized machine learning models.",

  overview:
    "A machine learning research project that explores wildfire size prediction using environmental, geographical, and weather-related factors. The study applies data preprocessing, exploratory data analysis, machine learning, deep learning, and hyperparameter optimization techniques to improve wildfire prediction accuracy (Moghim & Mehrabi, 2024).",

  problem:
    "Wildfire prediction remains challenging because wildfire behaviour depends on complex interactions between climate conditions, vegetation, location, and human activities. Existing AI models also face limitations in explainability, data availability, and integration of diverse environmental factors (Taylor et al., 2013; Bugallo et al., 2022).",

  solution:
    "Processed a wildfire dataset containing 55,367 records and 43 attributes by filtering data from 2000–2015, handling missing values, engineering temporal and environmental features, and preserving meaningful extreme wildfire events. Multiple classification and regression models were developed and compared, including MLP, DNN, GCN-LSTM, CNN-LSTM, GP-LSTM, and GMM-stacking models.",

  highlights: [
    "Cleaned and prepared 38,750 wildfire records after dataset filtering",
    "Performed exploratory analysis on wildfire causes, climate trends, vegetation impact, and spatial distribution",
    "Applied feature engineering on weather, time, geographical, and fire characteristics",
    "Implemented classification models including MLP, DNN, and GCN-LSTM",
    "Implemented regression models including CNN-LSTM, GP-LSTM, and GMM-stacking",
    "Optimized models using Optuna, Bayesian Optimization, Random Search, and Hyperband",
    "Deployed prediction interface using Streamlit"
  ],

  architecture: [
    "Kaggle Dataset",
    "Data Cleaning",
    "Feature Engineering",
    "Exploratory Analysis",
    "Model Training",
    "Hyperparameter Optimization",
    "Model Evaluation",
    "Streamlit Deployment"
  ],

  links: [
    {
      title: "Source Code",
      url: "https://github.com/clydecode8/WildfirePrediction",
      type: "GitHub",
      icon: "/icons/github.webp"
    },
    {
      title: "Live Demo",
      url: "https://wildfire-prediction.streamlit.app/",
      type: "Streamlit",
      icon: "/icons/streamlit.webp"
    }
  ],

  models: [
    {
      name: "GCN-LSTM",
      purpose:
        "Captured spatial wildfire relationships using graph-based learning combined with temporal modelling (Chen et al., 2024)"
    },
    {
      name: "CNN-LSTM",
      purpose:
        "Extracted spatial patterns and temporal dependencies from wildfire features using hybrid deep learning (Alizadeh et al., 2024)"
    },
    {
      name: "GP-LSTM",
      purpose:
        "Combined evolutionary feature optimization with sequence modelling for nonlinear prediction (Al-Hajj et al., 2021)"
    },
    {
      name: "MLP / DNN",
      purpose:
        "Used neural network models to identify complex relationships between wildfire features and size classification"
    }
  ],

  results: [
    "DNN achieved 83.60% classification accuracy after random hyperparameter tuning",
    "MLP improved from 80.44% accuracy to 83.54% after optimization",
    "CNN-LSTM demonstrated strong regression performance with improved R² and reduced error metrics"
  ],

references: [
  {
    title:
      "Explainable Global Wildfire Prediction Models using Graph Neural Networks",
    authors:
      "Chen et al., 2024",
    url:
      "https://doi.org/10.1016/j.envsoft.2024.106077"
  },
  {
    title:
      "FusionFireNet: A Hybrid CNN-LSTM Approach for Wildfire Prediction",
    authors:
      "Alizadeh et al., 2024",
    url:
      "https://doi.org/10.1016/j.eswa.2024.123452"
  },
  {
    title:
      "A Hybrid LSTM-Based Genetic Programming Approach for Wildfire Spread Prediction",
    authors:
      "Al-Hajj et al., 2021",
    url:
      "https://doi.org/10.1016/j.asoc.2021.107652"
  },
  {
    title:
      "Random Forests for Global and Regional Wildfire Prediction",
    authors:
      "Moghim & Mehrabi, 2024",
    url:
      "https://doi.org/10.1016/j.scitotenv.2024.170438"
  },
  {
    title:
      "A Review of Machine Learning Applications in Wildfire Science and Management",
    authors:
      "Jain et al., 2020",
    url:
      "https://doi.org/10.1016/j.envsoft.2020.104735"
  },
  {
    title:
      "Wildfire Prediction and Modelling using Machine Learning Techniques",
    authors:
      "Bugallo et al., 2022",
    url:
      "https://doi.org/10.3390/fire5010006"
  }
],

  stack: [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "PyTorch",
    "TensorFlow",
    "Optuna",
    "Streamlit",
    "Matplotlib",
    "Seaborn"
  ],

  image: "/images/wildfire-study.svg",

  accent: "green",
},
 {
  slug: "gdm-corporate-website",
  title: "GDM Corporate Website",
  category: "Client Project / Web Development",
  date: "June 2025 - May 2026",

  short:
    "Mobile-first corporate website built from client requirements with optimized deployment.",

  overview:
    "Production-ready corporate website developed for a client to showcase products and company information. The website was designed around a QR-code customer journey, where most visitors access the site through smartphones.",

  problem:
    "The client relied on a third-party QR landing page service that increased operational costs and had limited customization. Initial requirements were also incomplete, consisting mainly of WhatsApp discussions, meetings, and PowerPoint concepts without detailed UI/UX planning.",

  solution:
    "I transformed rough business ideas into interactive Figma prototypes, refined the design through stakeholder feedback, and developed a responsive mobile-first website. The final solution used Cloudflare hosting with custom domain configuration, reducing hosting expenses while improving maintainability.",

  highlights: [
    "Real client requirement gathering",
    "Mobile-first responsive design",
    "Figma prototype to production",
    "Cost-optimized Cloudflare deployment"
  ],

  architecture: [
    "Client Requirements",
    "Figma Prototype",
    "Frontend Development",
    "Responsive Testing",
    "Cloudflare Deployment"
  ],

  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "Figma",
    "Responsively App",
    "Cloudflare"
  ],

  links: [
    {
      title: "Visit Website",
      url: "https://gdmcorporate.my/",
      type: "Live Site",
      icon: "/icons/cloudflare.webp"
    },
    {
      title: "View Source Code",
      url: "https://github.com/clydecode8/GDMCorporation",
      type: "GitHub",
      icon: "/icons/github.webp"
    }
  ],

  image: "/images/gdm-site.svg",
  accent: "gold",
},
];
