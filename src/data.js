export const personalInfo = {
  name: "Shikhar Veeramachineni",
  title: "AI/ML & Backend Engineer",
  location: "Hyderabad, India",
  email: "shikharveer01@gmail.com",
  phone: "+91 93813 13981",
  github: "https://github.com/ShikharVeer10",
  linkedin: "https://www.linkedin.com/in/shikhar-veeramachineni",
  bio: "I build robust, validated backend APIs, stateful agentic workflows, and real-time computer vision inference systems. Specializing in strict Pydantic parsing and high-performance server structures.",
  manifesto: [
    "I work at the intersection of backend systems, machine learning pipelines, and structured API design.",
    "My focus is on translating complex system requirements into scalable, validated codebases — putting data integrity and functional performance over marketing hype.",
    "Currently looking for internship and developer roles starting Summer 2026."
  ],
  availability: "Available for internships & developer roles"
};

export const stats = [
  { label: "Pushed", val: "4 AI Systems" },
  { label: "Eff. Gain", val: "70% reduction" },
  { label: "Stack", val: "AI & Backend" }
];

export const projects = [
  {
    id: "emotio",
    title: "Emotio — Multimodal Emotion & Sentiment AI",
    tag: "NLP & Sentiment AI",
    year: "2025",
    desc: "A hybrid NLP system integrating text expression parsing with transformer-based sentiment classification.",
    bullets: [
      "Built a text inference pipeline that parses user expressions to perform contextual mood scoring and user behavioral classification.",
      "Designed modular NLP pipelines including preprocessing, keyword extraction (KeyBERT), and structured sentiment scoring to improve interpretability and relevance.",
      "Implemented optimized inference workflows using PyTorch and HuggingFace for scalable, low-latency deployment in lightweight environments."
    ],
    stack: ["PyTorch", "TensorFlow", "HuggingFace", "OpenCV", "KeyBERT", "FAISS"],
    github: "https://github.com/ShikharVeer10/Emotio"
  },
  {
    id: "unipath",
    title: "UniPath — AI Graduate Admissions Intelligence Platform",
    tag: "Admissions Intelligence & RAG",
    year: "2025",
    desc: "AI admissions intelligence platform orchestrating applicant evaluations, dynamic university matching, and mock interview simulations.",
    bullets: [
      "Architected an end-to-end admissions intelligence system with Next.js 16 and FastAPI, serving domain-driven routers for profile scoring, university matching, and mock interviews.",
      "Engineered structured RAG workflows and resume parsing pipelines using PydanticAI and pgvector embeddings to extract validated applicant profiles from multi-page PDFs.",
      "Implemented dynamic heuristic scoring engines and mock interview simulators with async SQLAlchemy and PostgreSQL, generating tailored admission probabilities and feedback."
    ],
    stack: ["FastAPI", "PydanticAI", "Next.js", "PostgreSQL", "SQLModel", "SQLAlchemy", "pgvector"],
    github: "https://github.com/ShikharVeer10/UniPath"
  },
  {
    id: "traction",
    title: "Traction AI — AI-Driven Revenue Operations Platform",
    tag: "Revenue Operations",
    year: "2025",
    desc: "AI corporate planner translating a single text prompt into pitch decks and nine business documents.",
    bullets: [
      "Designed backend workflows that convert a single prompt into investor-ready pitch decks and nine structured business documents with organized content generation.",
      "Built scalable document handling systems including secure APIs, user authentication, and automated slide export features for seamless content delivery.",
      "Developed planning generator engine that reduces manual business preparation and spreadsheet forecasting efforts by 70%."
    ],
    stack: ["FastAPI", "Pydantic", "Python-pptx", "Groq API", "SQLite", "Uvicorn"],
    github: "https://github.com/ShikharVeer10/Traction-AI"
  },
  {
    id: "synapsearena",
    title: "SynapseArena — Multi-Agent AI Debate System",
    tag: "AI Agents",
    year: "2025",
    desc: "A structured multi-agent debate arena where specialized AI agents argue opposing positions, synthesize evidence, and produce a verdict through a moderated workflow.",
    bullets: [
      "Architected a multi-agent orchestration system using PydanticAI where Proposer, Opposer, Moderator, and Judge agents collaborate through strict role-based turn-taking logic.",
      "Implemented Pydantic-validated message contracts between agents to ensure type-safe inter-agent communication and deterministic debate flow.",
      "Designed a stateful debate lifecycle manager that tracks argument rounds, synthesizes cross-agent evidence, and produces structured verdicts with reasoning traces."
    ],
    stack: ["PydanticAI", "Pydantic", "Python", "Groq API", "FastAPI", "Uvicorn"],
    github: "https://github.com/ShikharVeer10/SynapseArena"
  }
];

export const journey = {
  experience: [
    {
      company: "Deloitte",
      role: "AI Intern",
      date: "May 2026 – July 2026",
      bullets: [
        "Built an AI-powered document intelligence pipeline for extracting complex engineering documents and presentation slides into structured JSON while preserving layout, typography, styling, and semantic structure.",
        "Developed reconstruction and validation frameworks to regenerate documents from structured representations, analyze extraction fidelity, identify reconstruction failures, and improve end-to-end document understanding using OCR post-processing, layout reasoning, and multi-agent AI workflows.",
        "Designed a template-aware PowerPoint generation system using a multi-agent workflow to map unstructured text and JSON into native presentation layouts without compromising visual formatting.",
        "Implemented custom rendering and text-run manipulation modules to dynamically generate presentations from multimodal inputs while preserving fonts, margins, shape constraints, and slide aesthetics."
      ]
    },
    {
      company: "Grant Thornton Bharat LLP",
      role: "Summer Trainee",
      date: "June 2025 – July 2025",
      bullets: [
        "Analyzed large-scale PMAY beneficiary and housing allocation datasets, supporting recurring reviews and stakeholder reporting.",
        "Developed Python-based visualizations and analytics components to translate business requirements into insights.",
        "Designed and implemented structured SQL schemas for reliable data storage, aggregation, and standardized reporting."
      ]
    },
    {
      company: "Coschool",
      role: "AI Intern",
      date: "April 2023 – June 2023",
      bullets: [
        "Designed structured prompt sets to evaluate generative AI robustness and benchmarked model phrasing sensitivities.",
        "Conducted systematic evaluation of model robustness by testing edge cases and instruction phrasing.",
        "Documented prompt engineering workflows and standardized best practices for ChatGPT and Copilot adoption."
      ]
    }
  ],
  education: [
    {
      company: "Vellore Institute of Technology",
      role: "B.Tech, Computer Science (AI & ML)",
      date: "Sept 2023 – Aug 2027",
      bullets: [
        "Specialization in Artificial Intelligence and Machine Learning.",
        "Coursework in deep learning, computer vision, natural language processing, and databases."
      ],
      tagline: "Developing the systems intuition that transforms theoretical logic into concrete, production-grade software."
    },
    {
      company: "Oakridge International School",
      role: "Secondary & Senior Secondary Education",
      date: "2011 – 2023",
      bullets: [
        "Built an early foundation in Python and MySQL — writing scripts before understanding why they worked, and breaking things to figure that out.",
        "Where structured thinking started: learning to decompose problems, reason through logic, and treat a blank editor as an invitation rather than an obstacle."
      ],
      tagline: "The kind of school years that don't teach you what to build — but quietly wire the instinct to build it anyway."
    }
  ]

};

export const bentoToolkit = [
  {
    title: "AI & Machine Learning",
    techs: ["PyTorch", "TensorFlow", "HuggingFace", "Scikit-Learn", "YOLO", "OpenCV", "FAISS", "KeyBERT"]
  },
  {
    title: "Backend Engineering",
    techs: ["FastAPI", "Pydantic", "Pydantic-AI", "LangGraph", "Uvicorn", "Async APIs", "SQLModel", "SQLAlchemy"]
  },
  {
    title: "Languages & Runtimes",
    techs: ["Python", "SQL", "JavaScript", "C++", "Java", "Node.js"]
  },
  {
    title: "Developer Workflows",
    techs: ["Git / GitHub", "Docker", "VS Code", "Vercel", "Groq API", "REST APIs", "PostgreSQL", "SQLite"]
  }
];
export const technologies = {
  aiml: ["PyTorch", "TensorFlow", "HuggingFace", "Scikit-Learn", "YOLO", "OpenCV", "FAISS"],
  backend: ["FastAPI", "Pydantic", "Pydantic-AI", "LangGraph", "Uvicorn", "Groq API", "Async APIs"],
  languages: ["Python", "SQL", "JavaScript", "C++", "Java"],
  domains: ["NLP", "Computer Vision", "AI Agents", "RAG Systems", "Model Deployment"]
};
export const competencies = [
  {
    domain: "AI & Machine Learning",
    desc: "Developing multimodal models integrating computer vision and NLP, implementing transformer pipelines, facial emotion recognition, and fine-tuning lightweight models."
  },
  {
    domain: "Backend Systems",
    desc: "Building production FastAPI servers with strict Pydantic/Pydantic-AI schema validation, asynchronous database layers, SQLModel configurations, and secure authorization flows."
  },
  {
    domain: "AI Agents & RAG",
    desc: "Designing stateful agentic workflows using LangGraph and Groq APIs, implementing custom tool call interfaces, PDF document parsing, and vector search embeddings."
  }
];
export const statsInfo = [
  { label: "Pushed", val: "4 AI Projects" },
  { label: "Eff. Gain", val: "70% reduction" },
  { label: "Stack", val: "AI & Backend" }
];

export const achievements = [
  {
    id: "postathon",
    title: "3rd Place — VIT-AP Post-a-thon Hackathon",
    date: "2025",
    organization: "VIT-AP University",
    details: [
      "Awarded 3rd place for engineering IntelliPost, an asynchronous document intelligence platform designed to extract structured schemas from policy documents.",
      "Selected to showcase the system's strict Pydantic validation workflow and multi-agent reasoning architecture directly to Union Minister Shri Chandra Sekhar Pemmasani."
    ]
  }
];


export const blogs = [
  {
    "slug": "slideforge",
    "title": "How I built SlideForge: Universal Multi-Agent PowerPoint Generation",
    "date": "February 2026",
    "readingTime": "6 min read",
    "description": "Generative AI presentation tools rewrite entire files and ruin handcrafted typography. Here is how I built a multi-agent engine that injects structured data while preserving every python-pptx run and master style.",
    "tags": [
      "python-pptx",
      "multi-agent",
      "pydantic",
      "fastapi",
      "document-ai"
    ],
    "sections": [
      {
        "type": "lead",
        "content": "I wanted a presentation generator I could actually trust with corporate pitch decks, from the exact pixel-level geometry to the text run formatting. Most AI slide generators take a prompt and spit out a newly synthesized, generic slide that destroys existing brand templates, mangles margins, and scrambles color palettes. Two goals shaped SlideForge: treat existing PowerPoint master templates as immutable contracts, and build a deterministic multi-agent pipeline that inserts content without rewriting the underlying PPTX XML structure."
      },
      {
        "type": "heading",
        "title": "The problem with standard LLM slide generation"
      },
      {
        "type": "paragraph",
        "content": "When people try to automate slide creation with LLMs, they usually make one of two mistakes. Either they let an LLM emit code that generates shapes from scratch, or they parse a template into raw text, replace the text, and recreate the file. Both approaches destroy the template. A corporate deck has hours of manual alignment: exact column widths, font hierarchies, line spacings, solid fills, and accent shapes. The moment you regenerate a shape in python-pptx from scratch, you lose shape IDs, layer order (z-index), and subtle visual formatting."
      },
      {
        "type": "paragraph",
        "content": "SlideForge approaches it backwards: the template PPTX package is preserved as an embedded binary source. The system extracts an intermediate representation (PresentationIR), lets specialized agents map user content to existing text containers, and then performs surgical in-place mutations on the original shape text frames."
      },
      {
        "type": "code",
        "code": "class SlideForgeEngine:\n    def __init__(self, config: SlideForgeConfig = None):\n        self.config = config or SlideForgeConfig()\n        self.extractor = UniversalExtractor(self.llm_client)\n        self.analyzer = SlideAnalysisPipeline()\n        self.mapper = ContentMapper(self.llm_client)\n        self.generator = PPTXGenerator()\n        self.image_renderer = ImageRenderer()",
        "caption": "The multi-agent orchestration pipeline inside SlideForge"
      },
      {
        "type": "heading",
        "title": "Decomposing the pipeline into specialized agents"
      },
      {
        "type": "paragraph",
        "content": "Instead of asking one monolithic prompt to read a template and fill it with content, SlideForge breaks the process into five discrete agents with strict boundaries:"
      },
      {
        "type": "bullets",
        "items": [
          "TemplateAgent (Deterministic Extractor): Walks the PPTX shape tree using python-pptx. Extracts bounding boxes in EMUs (English Metric Units), paragraph hierarchies, bullet types, and font runs without making any LLM calls.",
          "ContentAgent: Analyzes raw unstructured user input (notes, docs, or OCR transcripts from GPT-4o Vision) and structures them into atomic semantic sections with headings, key metrics, and supporting bullet points.",
          "MappingAgent: Compares the semantic sections against the available slide text frames (box_id, width, height, position) and binds each content block to the most suitable physical box.",
          "LayoutAgent: Enforces spatial and character-budget constraints. If an extracted text box only fits 120 characters at 14pt, it prevents text overflow before anything touches the file.",
          "RenderingAgent: Injects the content directly into the preserved slide package and regenerates the PPTX file."
        ]
      },
      {
        "type": "heading",
        "title": "The run-splitting bug: why simple text replacement failed"
      },
      {
        "type": "paragraph",
        "content": "The biggest bug I encountered looked completely fine in standard mock tests but broke the moment a user opened PowerPoint. In PowerPoint, a single paragraph can contain multiple text runs\u2014for example, when the first word is bold and orange, and the rest is regular dark grey:"
      },
      {
        "type": "code",
        "code": "def _write_text(self, text_frame, text_body) -> None:\n    # BUG: If you do paragraph.text = new_text, PowerPoint erases all\n    # runs and resets the entire paragraph to default unstyled font!\n    for index, source_paragraph in enumerate(text_body.paragraphs):\n        if index < len(text_frame.paragraphs):\n            paragraph = text_frame.paragraphs[index]\n            runs = paragraph.runs\n            if not runs:\n                paragraph.text = source_paragraph.text\n            elif len(runs) == 1:\n                runs[0].text = source_paragraph.text\n            else:\n                # Proportional token allocation across existing font runs\n                self._distribute_runs(runs, source_paragraph.text)",
        "caption": "Surgically updating multi-run paragraphs without losing run-level styles"
      },
      {
        "type": "paragraph",
        "content": "Assigning directly to paragraph.text in python-pptx wipes out all run definitions, leaving the text unstyled. To fix this, I engineered a proportional token distribution algorithm: when a paragraph contains multiple styled runs, SlideForge computes the length ratios of the original runs, tokenizes the new incoming text, and allocates tokens across the existing runs so the initial accent styling is preserved."
      },
      {
        "type": "heading",
        "title": "EMU coordinate math and pixel-perfect placement"
      },
      {
        "type": "paragraph",
        "content": "PowerPoint measures shapes in EMUs (1 inch = 914,400 EMUs, 1 px \u2248 9,525 EMUs). The intermediate representation converts all bounding boxes into normalized coordinates so the Placement engine can calculate aspect ratios, column alignments, and reading order across 16:9 and 4:3 widescreen decks."
      },
      {
        "type": "paragraph",
        "content": "Because the source package is retained in base64 within the PresentationIR schema, non-text objects\u2014such as vector logos, custom SVG icons, background gradient fills, and shadow layers\u2014remain 100% untouched. The generated output is not an imitation; it is the original template file with only the copy upgraded."
      },
      {
        "type": "heading",
        "title": "What I learnt"
      },
      {
        "type": "bullets",
        "items": [
          "Never generate documents from scratch when you can mutate an existing AST or DOM in place.",
          "In python-pptx, setting paragraph.text destroys all run formatting. Protect individual runs or calculate proportional allocation.",
          "Strict Pydantic schemas (PresentationIR) decouple layout extraction from LLM mapping logic, making pipeline errors immediately catchable.",
          "EMU math has rounding quirks; normalize early in the pipeline to prevent layout drift."
        ]
      }
    ]
  },
  {
    "slug": "aethermind",
    "title": "How I built AetherMind: Layout-Aware Document Intelligence & Reconstruction",
    "date": "March 2026",
    "readingTime": "7 min read",
    "description": "Extracting raw text from complex PDFs and decks throws away 80% of human intent: bounding boxes, flowcharts, tables, and visual hierarchy. Here is how I engineered an agentic layout reconstruction engine with automated SSIM validation.",
    "tags": [
      "computer-vision",
      "document-ai",
      "multi-agent",
      "opencv",
      "pydantic"
    ],
    "sections": [
      {
        "type": "lead",
        "content": "Most document parsers treat a slide or a PDF like a single string of markdown. The moment a document contains a three-column comparison table, an arrow-linked flowchart, or a complex visual dashboard, flat text extraction collapses into useless noise. With AetherMind, I wanted a system that treats documents as geometric and visual entities: extracting shapes, tables, and reading order into structured blueprints, reconstructing them, and proving accuracy with computer vision."
      },
      {
        "type": "heading",
        "title": "Treating layout as first-class data"
      },
      {
        "type": "paragraph",
        "content": "Human beings do not read documents like sequential strings. We read headers, scan visual regions, follow flowchart arrows, and interpret data rows in tables. To capture that intent, AetherMind builds a unified DocumentModel containing spatial geometry, visual hierarchies, and semantic relationships."
      },
      {
        "type": "paragraph",
        "content": "Rather than letting a single vision-language model hallucinate coordinates, AetherMind pairs programmatic parsers (extracting ground-truth bounding boxes, colors, and font runs) with specialized agents that handle semantic interpretation."
      },
      {
        "type": "code",
        "code": "class AgentOrchestrator:\n    def __init__(self, summarization_agent=None, presentation_metadata=None):\n        self.text_agent = TextExtractionAgent()\n        self.header_footer_agent = HeaderFooterAgent()\n        self.layout_agent = LayoutStructureAgent()\n        self.table_agent = TableExtractionAgent()\n        self.flowchart_agent = FlowchartAnalysisAgent()\n        self.diagram_agent = DiagramUnderstandingAgent()\n        self.relationship_agent = RelationshipMappingAgent()",
        "caption": "Agent orchestration layer separating spatial extraction from semantic analysis"
      },
      {
        "type": "heading",
        "title": "The multi-agent extraction pipeline"
      },
      {
        "type": "paragraph",
        "content": "Each agent in AetherMind owns an exact domain within the document lifecycle:"
      },
      {
        "type": "bullets",
        "items": [
          "TextExtractionAgent: Extracts verbatim text points without paraphrasing or summarizing, strictly preserving indentation hierarchies and bullet styles.",
          "TableExtractionAgent: Detects grid boundaries, cell spanning, and header rows, converting visual tables into structured 2D matrices.",
          "FlowchartAnalysisAgent & DiagramAgent: Identifies nodes, directional arrows, and decision diamonds, building a connected graph of step transitions.",
          "HeaderFooterAgent: Isolates recurring boilerplate elements (page numbers, confidentiality notices, slide categories) so core slide content is clean.",
          "RelationshipMappingAgent: Computes topological connections between titles, descriptive text blocks, and associated visual icons or charts."
        ]
      },
      {
        "type": "heading",
        "title": "The reading order problem: Euclidean distance vs topological sort"
      },
      {
        "type": "paragraph",
        "content": "The hardest problem in document layout is determining true reading order. A standard top-to-bottom sorting algorithm completely fails when a slide has a two-column layout: it reads line 1 of column A, then line 1 of column B, then line 2 of column A, resulting in gibberish."
      },
      {
        "type": "paragraph",
        "content": "I solved this by designing a semantic region detection service. Bounding boxes are first clustered into distinct spatial regions (headers, columns, callout cards). Inside each region, elements are sorted top-to-bottom; between regions, columns are traversed according to language reading direction. This reduced reading-order scrambling on multi-column layouts to zero."
      },
      {
        "type": "heading",
        "title": "Proving extraction quality with computer vision validation"
      },
      {
        "type": "paragraph",
        "content": "How do you know if an extraction pipeline actually worked? Most projects test with manual spot checks. In AetherMind, I built an automated end-to-end validation loop (run_validation.py):"
      },
      {
        "type": "code",
        "code": "class ExtractionValidator:\n    @staticmethod\n    def compare_images(original_path: str, reconstructed_path: str) -> Dict[str, float]:\n        original = cv2.imread(original_path)\n        reconstructed = cv2.imread(reconstructed_path)\n        \n        # Structural Similarity Index (SSIM)\n        ssim_score, _ = ssim(gray_orig, gray_recon, full=True)\n        \n        # Canny edge intersection for layout alignment\n        edges_orig = cv2.Canny(gray_orig, 50, 150)\n        edges_recon = cv2.Canny(gray_recon, 50, 150)\n        edge_overlap = np.sum(np.logical_and(edges_orig, edges_recon)) / np.sum(np.logical_or(edges_orig, edges_recon))\n        \n        return {\"ssim\": ssim_score, \"layout_similarity\": edge_overlap}",
        "caption": "Automated OpenCV + SSIM evaluation comparing reconstructed layouts with original inputs"
      },
      {
        "type": "paragraph",
        "content": "The pipeline renders the extracted JSON blueprint back into high-resolution images via a headless canvas, and then runs OpenCV Canny edge detection and Structural Similarity (SSIM) metrics against the original input. This provides an objective, automated score of spatial fidelity."
      },
      {
        "type": "heading",
        "title": "What I learnt"
      },
      {
        "type": "bullets",
        "items": [
          "Text without coordinates is lossy compression. Always capture bounding boxes and parent-child hierarchies.",
          "Single-pass LLMs hallucinate layout coordinates. Use programmatic libraries (python-pptx, pdfplumber) for ground truth geometry and agents for semantic categorization.",
          "Reading order is a graph problem, not a sorting problem.",
          "Building an automated visual validator (SSIM + edge comparison) cuts debugging time in half by immediately flagging displaced elements."
        ]
      }
    ]
  }
];
