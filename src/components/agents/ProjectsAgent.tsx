import { useState, useRef, useEffect, createRef, RefObject } from "react";
import { ChevronDown, ExternalLink, Sparkles, Database, X, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface Project {
  id: string;
  title: string;
  summary: string;
  details: string;
  tags: string[];
}

const agenticProjects: Project[] = [
  {
    id: "fx-intelligence",
    title: "FX Intelligence Platform",
    summary: "Real-time currency analytics with multi-agent orchestration for institutional traders.",
    details: "FX Intelligence Platform is a full-stack analytics app that ingests invoice/transaction files, normalizes multi-currency amounts using FX rates, and serves clean, standardized outputs via REST APIs. It includes forecasting workflows (ARIMA/LSTM/Prophet-style) with accuracy metrics (MAE/RMSE), plus dashboard-ready modules for FX exposure insights, variance/FX-loss alerts, and supplier/region drilldowns, packaged with deployment-ready configuration (CORS/env) for a web UI.",
    tags: ["LangChain", "Multi-Agent", "Real-time", "Python"]
  },
  {
    id: "carbon-analytics",
    title: "Multi-Agent Carbon & Market Analytics",
    summary: "Autonomous agents analyzing carbon credit markets and environmental data.",
    details: "Multi-Agent Carbon / Market Analytics System is a research-grade agentic analytics workflow that turns carbon-market questions into reproducible analysis by orchestrating structured stages—validation, parsing, planning, execution, and verification. It supports quantitative methods (correlation, regression, time-series analysis) while enforcing reliability through guardrails, sanity checks, and trace/cost logging, making outputs consistent, auditable, and easy to iterate on.",
    tags: ["CrewAI", "RAG", "Analytics", "FastAPI"]
  },
  {
    id: "wiki-rag",
    title: "Wikipedia RAG + Knowledge Graph QA",
    summary: "Hybrid retrieval system combining vector search with knowledge graphs for accurate QA.",
    details: "Wikipedia RAG + Knowledge Graph QA is a Wikipedia-based QA system that supports both single-hop fact retrieval and multi-hop reasoning across linked entities by combining vector retrieval (RAG) with a knowledge-graph layer. It evaluates retrieval/answer quality using a small test set with accuracy-style scoring (e.g., single-hop vs multi-hop success rate) and tracks failure cases to improve grounding and consistency.",
    tags: ["RAG", "Neo4j", "LlamaIndex", "OpenAI"]
  },
  {
    id: "air-quality",
    title: "Air Quality Index Prediction",
    summary: "ML pipeline for AQI forecasting with interpretable model explanations.",
    details: "Air Quality Index (AQI) Prediction is an ML project that predicts AQI bands/categories under two complementary setups: (1) models that use raw pollutant measurements as direct predictors, and (2) models that predict AQI without raw pollutant levels using other environmental/context features. It compares both approaches with standard regression/classification evaluation and analyzes which feature groups drive AQI band changes.",
    tags: ["Scikit-learn", "SHAP", "Time Series", "Dashboard"]
  },
  {
    id: "llm-biblio",
    title: "LLM Bibliographic Categorization",
    summary: "Automated academic paper categorization using fine-tuned language models.",
    details: "LLM Bibliographic Paper Categorization (CARLab) is an LLM-assisted research automation pipeline that extracts structured metadata from papers and categorizes them into consistent topic/method/venue buckets. It uses schema-guided outputs and validation checks to keep classifications reliable for downstream bibliometric analysis.",
    tags: ["Fine-tuning", "NLP", "Classification", "HuggingFace"]
  }
];

const appProjects: Project[] = [
  {
    id: "ngo-app",
    title: "React Native NGO App",
    summary: "Mobile application connecting volunteers with local non-profit organizations.",
    details: "React Native NGO Activity App is a mobile app that organizes NGO activities into clear user flows—discovering events, viewing activity details, and participating/confirming involvement—built with React Native navigation, reusable UI components, and app-style state handling for a smooth, responsive experience.",
    tags: ["React Native", "Firebase", "TypeScript"]
  },
  {
    id: "auction-site",
    title: "Auction Website",
    summary: "Real-time bidding platform with live updates and secure payment processing.",
    details: "Auction Website (Web App) is a web-based auction platform that implements core marketplace flows—listing items, browsing/searching, viewing item detail pages, and placing bids—focused on clean UI structure, interactive client-side behavior, and a scalable page/component layout.",
    tags: ["React", "Node.js", "WebSocket", "Stripe"]
  },
  {
    id: "hackathon-matcher",
    title: "Hackathon Team Matcher",
    summary: "Skill-based matching algorithm to form balanced hackathon teams.",
    details: "Hackathon Team Matcher (Full-Stack CRUD Micro-App) is a full-stack web app backed by a fabricated dataset (seeded profiles, skills, availability, and project ideas) that supports authentication, role-based access, and CRUD workflows for creating teams, posting ideas, and managing applications—deployed with a REST API + database.",
    tags: ["Python", "Algorithm", "React", "PostgreSQL"]
  },
  {
    id: "events-aggregator",
    title: "Campus Events Aggregator",
    summary: "Centralized platform aggregating events from multiple campus sources.",
    details: "Campus Events + Opportunities Aggregator (Data Ingestion Mini-Pipeline) is an ETL pipeline built on a fabricated multi-source dataset (mock RSS/ICS/CSV inputs) that ingests and standardizes listings into a unified schema, deduplicates records, logs each run for traceability, and outputs clean tables ready for search/filtering later.",
    tags: ["Web Scraping", "REST API", "React", "MongoDB"]
  }
];

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: () => void;
  cardRef?: RefObject<HTMLDivElement>;
}

const ProjectCard = ({ project, isExpanded, onToggle, cardRef }: ProjectCardProps) => {
  return (
    <div 
      ref={cardRef}
      id={`project-${project.id}`}
      className="bg-bg-card border-2 border-border-subtle rounded-xl p-5 transition-all hover:border-accent-primary/50 hover:shadow-[0_0_15px_rgba(76,111,255,0.2)] scroll-mt-4"
    >
      <div 
        className="flex items-start justify-between cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex-1">
          <h4 className="font-display font-semibold text-foreground mb-2 flex items-center gap-2">
            {project.title}
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </h4>
          <p className="text-sm text-muted-foreground">{project.summary}</p>
        </div>
        <ChevronDown className={cn(
          "w-5 h-5 text-muted-foreground transition-transform shrink-0 ml-4",
          isExpanded && "rotate-180"
        )} />
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-border animate-fade-in">
          <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span 
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface ChatMessage {
  id: string;
  type: "assistant" | "user";
  content: string;
  showButtons?: boolean;
  projects?: Project[];
  category?: "agentic" | "apps" | "all";
}

const initialGreeting: ChatMessage = {
  id: "greeting",
  type: "assistant",
  content: "Hi! I'm the Projects Agent 👋\nI'll walk you through Anamta's work.\nWhat would you like to explore?",
  showButtons: true,
};

const ProjectsAgent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([initialGreeting]);
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set());
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [savedChatState, setSavedChatState] = useState<ChatMessage[] | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<"agentic" | "apps">>(new Set());
  const [highlightedSection, setHighlightedSection] = useState<"agentic" | "apps" | null>(null);
  const projectRefs = useRef<{ [key: string]: RefObject<HTMLDivElement> }>({});
  const chatPanelRef = useRef<HTMLDivElement>(null);
  const agenticSectionRef = useRef<HTMLDivElement>(null);
  const appsSectionRef = useRef<HTMLDivElement>(null);

  // Initialize refs for all projects
  useEffect(() => {
    [...agenticProjects, ...appProjects].forEach(project => {
      if (!projectRefs.current[project.id]) {
        projectRefs.current[project.id] = createRef<HTMLDivElement>();
      }
    });
  }, []);

  const handleOptionClick = (option: "agentic" | "apps" | "all") => {
    const optionLabels = {
      agentic: "Agentic & Analytics Systems",
      apps: "Apps & Data Pipelines",
      all: "Show Everything",
    };

    // Add user message
    setMessages(prev => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        type: "user",
        content: optionLabels[option],
      },
    ]);

    // Determine response message, projects, and sections to reveal
    let responseContent = "";
    let projects: Project[] = [];
    let sectionsToReveal: ("agentic" | "apps")[] = [];

    if (option === "agentic") {
      responseContent = "Great choice — these are Anamta's most advanced agentic and analytics systems. I've opened them for you below 👇";
      projects = agenticProjects;
      sectionsToReveal = ["agentic"];
    } else if (option === "apps") {
      responseContent = "Nice — here are the apps and data pipelines Anamta has built. I've opened them for you below 👇";
      projects = appProjects;
      sectionsToReveal = ["apps"];
    } else {
      responseContent = "Here's the full project list, organized by type 👇";
      projects = [...agenticProjects, ...appProjects];
      sectionsToReveal = ["agentic", "apps"];
    }

    // Reveal sections
    setVisibleSections(prev => {
      const newSet = new Set(prev);
      sectionsToReveal.forEach(section => newSet.add(section));
      return newSet;
    });

    // Add assistant response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          type: "assistant",
          content: responseContent,
          projects,
          category: option,
        },
      ]);

      // Scroll to the appropriate section and highlight it
      setTimeout(() => {
        if (option === "agentic" && agenticSectionRef.current) {
          agenticSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          setHighlightedSection("agentic");
          setTimeout(() => setHighlightedSection(null), 2000);
        } else if (option === "apps" && appsSectionRef.current) {
          appsSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          setHighlightedSection("apps");
          setTimeout(() => setHighlightedSection(null), 2000);
        } else if (option === "all" && agenticSectionRef.current) {
          agenticSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
          setHighlightedSection("agentic");
          setTimeout(() => setHighlightedSection(null), 2000);
        }
      }, 200);
    }, 100);
  };

  const handleProjectClick = (projectId: string) => {
    const cardElement = document.getElementById(`project-${projectId}`);
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;

      if (isVisible) {
        // Expand if already visible
        setExpandedProjects(prev => {
          const newSet = new Set(prev);
          if (newSet.has(projectId)) {
            newSet.delete(projectId);
          } else {
            newSet.add(projectId);
          }
          return newSet;
        });
      } else {
        // Scroll to card and expand
        cardElement.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          setExpandedProjects(prev => new Set(prev).add(projectId));
        }, 500);
      }
    }
  };

  const toggleProject = (projectId: string) => {
    setExpandedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(projectId)) {
        newSet.delete(projectId);
      } else {
        newSet.add(projectId);
      }
      return newSet;
    });
  };

  // Project title mappings - using exact titles from the data
  const getProjectDisplayTitle = (project: Project): string => {
    // Map to user's preferred display names while keeping data intact
    const titleMap: { [key: string]: string } = {
      "Multi-Agent Carbon & Market Analytics": "Multi-Agent Carbon / Market Analytics System",
      "Air Quality Index Prediction": "Air Quality Index (AQI) Prediction",
      "LLM Bibliographic Categorization": "LLM Bibliographic Paper Categorization (CARLab)",
      "React Native NGO App": "React Native NGO Activity App",
      "Auction Website": "Auction Website (Web App)",
      "Hackathon Team Matcher": "Hackathon Team Matcher (Full-Stack CRUD Micro-App)",
      "Campus Events Aggregator": "Campus Events + Opportunities Aggregator (Data Ingestion Mini-Pipeline)",
    };
    return titleMap[project.title] || project.title;
  };

  const handleReset = () => {
    setMessages([initialGreeting]);
    setVisibleSections(new Set());
    setHighlightedSection(null);
    // Scroll chat panel to top
    if (chatPanelRef.current) {
      chatPanelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClose = () => {
    // Save current chat state and section visibility
    setSavedChatState([...messages]);
    setIsChatOpen(false);
  };

  const handleReopen = () => {
    setIsChatOpen(true);
    // Restore saved state if available, otherwise use initial greeting
    if (savedChatState && savedChatState.length > 0) {
      setMessages(savedChatState);
      // If we're restoring a state with messages, keep sections visible
      // (user has already interacted)
    } else {
      setMessages([initialGreeting]);
      setVisibleSections(new Set());
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Reopen Button - shown when chat is closed */}
      {!isChatOpen && (
        <div className="mb-6">
          <button
            onClick={handleReopen}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border-2 border-accent-primary/50 hover:border-accent-primary hover:from-accent-primary/30 hover:to-accent-secondary/30 hover:shadow-[0_0_15px_rgba(76,111,255,0.25)] transition-all text-sm font-medium text-accent-primary"
          >
            💬 Reopen Projects Agent
          </button>
        </div>
      )}

      {/* Chat Panel */}
      {isChatOpen && (
        <div 
          ref={chatPanelRef}
          className="bg-bg-card border-2 border-border-subtle rounded-xl mb-8 overflow-hidden transition-all duration-300 hover:border-accent-primary/40 hover:shadow-[0_0_20px_rgba(76,111,255,0.15)]"
        >
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-border-subtle bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 flex items-center justify-between">
            <div>
              <h3 className="font-display font-semibold text-foreground">Projects Agent</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Guided view of Anamta's work</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-muted/50 flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
              <button
                onClick={handleClose}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-md hover:bg-muted/50 flex items-center gap-1.5"
              >
                <X className="w-3.5 h-3.5" />
                Close
              </button>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6">
            <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={cn(
              "flex",
              message.type === "user" ? "justify-end" : "justify-start"
            )}>
              <div className={cn(
                "max-w-[85%] rounded-2xl px-4 py-3",
                message.type === "assistant"
                  ? "bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border-2 border-accent-primary/40 shadow-[0_0_20px_rgba(76,111,255,0.15)]"
                  : "bg-bg-subtle border-2 border-border-subtle"
              )}>
                <p className="text-sm whitespace-pre-line">{message.content}</p>
                
                {/* Action Buttons */}
                {message.showButtons && (
                  <div className="flex flex-col gap-3 mt-4">
                    <button
                      onClick={() => handleOptionClick("agentic")}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border-2 border-accent-primary/50 hover:border-accent-primary hover:from-accent-primary/30 hover:to-accent-secondary/30 hover:shadow-[0_0_20px_rgba(76,111,255,0.3)] transition-all text-sm font-medium text-accent-primary"
                    >
                      Agentic & Analytics Systems
                    </button>
                    <button
                      onClick={() => handleOptionClick("apps")}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-secondary/20 to-chart-3/20 border-2 border-accent-secondary/50 hover:border-accent-secondary hover:from-accent-secondary/30 hover:to-chart-3/30 hover:shadow-[0_0_20px_rgba(34,184,207,0.3)] transition-all text-sm font-medium text-accent-secondary"
                    >
                      Apps & Data Pipelines
                    </button>
                    <button
                      onClick={() => handleOptionClick("all")}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-magenta/20 border-2 border-accent-primary/50 hover:border-accent-primary hover:from-accent-primary/30 hover:via-accent-secondary/30 hover:to-accent-magenta/30 hover:shadow-[0_0_20px_rgba(76,111,255,0.3)] transition-all text-sm font-medium text-accent-primary"
                    >
                      Show Everything
                    </button>
                  </div>
                )}

                {/* Project List */}
                {message.projects && message.projects.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {message.category === "all" ? (
                      <>
                        <div className="mt-3">
                          <p className="text-xs font-semibold text-accent-primary mb-2">Agentic & Analytics Systems</p>
                          <ul className="space-y-1.5">
                            {agenticProjects.map(project => (
                              <li key={project.id}>
                                <button
                                  onClick={() => handleProjectClick(project.id)}
                                  className="text-sm text-left hover:text-accent-primary transition-colors underline decoration-dotted underline-offset-4"
                                >
                                  {getProjectDisplayTitle(project)}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-3">
                          <p className="text-xs font-semibold text-accent-secondary mb-2">Apps & Data Pipelines</p>
                          <ul className="space-y-1.5">
                            {appProjects.map(project => (
                              <li key={project.id}>
                                <button
                                  onClick={() => handleProjectClick(project.id)}
                                  className="text-sm text-left hover:text-accent-secondary transition-colors underline decoration-dotted underline-offset-4"
                                >
                                  {getProjectDisplayTitle(project)}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <ul className="space-y-1.5">
                        {message.projects.map(project => (
                          <li key={project.id}>
                            <button
                              onClick={() => handleProjectClick(project.id)}
                              className={cn(
                                "text-sm text-left hover:transition-colors underline decoration-dotted underline-offset-4",
                                message.category === "agentic"
                                  ? "hover:text-accent-primary"
                                  : "hover:text-accent-secondary"
                              )}
                            >
                              {getProjectDisplayTitle(project)}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      )}

      {/* Agentic Systems - Only visible when revealed */}
      {visibleSections.has("agentic") && (
        <div 
          ref={agenticSectionRef}
          className={cn(
            "animate-fade-in transition-all duration-500",
            highlightedSection === "agentic" && "animate-pulse-glow"
          )}
        >
          <div className={cn(
            "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
            highlightedSection === "agentic" && "border-accent-primary/60 shadow-[0_0_25px_rgba(76,111,255,0.25)]"
          )}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-[0_0_15px_rgba(76,111,255,0.3)]">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">Agentic & Analytics Systems</h3>
                <p className="text-sm text-muted-foreground">AI-powered systems with autonomous capabilities</p>
              </div>
            </div>
            <div className="space-y-4">
              {agenticProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isExpanded={expandedProjects.has(project.id)}
                  onToggle={() => toggleProject(project.id)}
                  cardRef={projectRefs.current[project.id]}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Apps & Pipelines - Only visible when revealed */}
      {visibleSections.has("apps") && (
        <div 
          ref={appsSectionRef}
          className={cn(
            "animate-fade-in transition-all duration-500",
            highlightedSection === "apps" && "animate-pulse-glow"
          )}
        >
          <div className={cn(
            "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
            highlightedSection === "apps" && "border-accent-secondary/60 shadow-[0_0_25px_rgba(34,184,207,0.25)]"
          )}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-secondary to-chart-3 flex items-center justify-center shadow-[0_0_15px_rgba(34,184,207,0.3)]">
                <Database className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground">Apps & Data Pipelines</h3>
                <p className="text-sm text-muted-foreground">Full-stack applications and data infrastructure</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {appProjects.map(project => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isExpanded={expandedProjects.has(project.id)}
                  onToggle={() => toggleProject(project.id)}
                  cardRef={projectRefs.current[project.id]}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsAgent;
