import { useState, useRef, RefObject } from "react";
import { Cpu, Code, Database, Cloud, Wrench, Brain, X, RotateCcw, Layers, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

// Base skills inventory - single source of truth
const baseSkills = {
  languages: ["Python", "JavaScript", "SQL", "Java"],
  agenticAI: ["LangGraph", "LangChain", "tool calling", "guardrails", "RAG", "evaluation", "prompt engineering"],
  mlData: ["time-series forecasting", "feature engineering", "metrics", "pandas", "NumPy", "scikit-learn"],
  backend: ["FastAPI", "Django", "REST APIs"],
  frontend: ["React", "HTML/CSS", "Tailwind"],
  databases: ["SQLite/PostgreSQL", "FAISS/Milvus (vector)", "Neo4j/Memgraph (graph)"],
  cloudDevOps: ["AWS (EC2/S3/IAM)", "Linux", "Git", "Postman"],
};

interface ChatMessage {
  id: string;
  type: "assistant" | "user";
  content: string;
  showButtons?: boolean;
}

const initialGreeting: ChatMessage = {
  id: "greeting",
  type: "assistant",
  content: "Hi! I'm the Skills Agent ⚡\nI can show you Anamta's stack in different ways.\nWhat would you like to see?",
  showButtons: true,
};

const SkillsAgent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([initialGreeting]);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [savedChatState, setSavedChatState] = useState<ChatMessage[] | null>(null);
  const [visibleViews, setVisibleViews] = useState<Set<"snapshot" | "agentic" | "fullstack" | "layers" | "everything">>(new Set());
  const [highlightedView, setHighlightedView] = useState<"snapshot" | "agentic" | "fullstack" | "layers" | "everything" | null>(null);
  const chatPanelRef = useRef<HTMLDivElement>(null);
  const snapshotRef = useRef<HTMLDivElement>(null);
  const agenticRef = useRef<HTMLDivElement>(null);
  const fullstackRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const everythingRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: "snapshot" | "agentic" | "fullstack" | "layers" | "everything") => {
    const optionLabels = {
      snapshot: "Tech Stack Snapshot",
      agentic: "Best Fit for AI / Agentic Roles",
      fullstack: "Full-Stack Engineering View",
      layers: "By Layer (System View)",
      everything: "Show Everything",
    };

    const responseMessages = {
      snapshot: "Here's the high-level stack Anamta works with day-to-day 👇",
      agentic: "For agentic AI and LLM-heavy roles, these are the most relevant capabilities:",
      fullstack: "If you're looking at me as a full-stack / product engineer, here's the slice that matters most:",
      layers: "Here's my stack organized by system layer 👇",
      everything: "Here's the full skills inventory in one place 👇",
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

    // Reveal view
    setVisibleViews(prev => new Set(prev).add(option));

    // Add assistant response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          type: "assistant",
          content: responseMessages[option],
        },
      ]);

      // Scroll to view and highlight
      setTimeout(() => {
        let refToScroll: RefObject<HTMLDivElement> | null = null;
        if (option === "snapshot" && snapshotRef.current) {
          refToScroll = snapshotRef;
        } else if (option === "agentic" && agenticRef.current) {
          refToScroll = agenticRef;
        } else if (option === "fullstack" && fullstackRef.current) {
          refToScroll = fullstackRef;
        } else if (option === "layers" && layersRef.current) {
          refToScroll = layersRef;
        } else if (option === "everything" && everythingRef.current) {
          refToScroll = everythingRef;
        }

        if (refToScroll?.current) {
          refToScroll.current.scrollIntoView({ behavior: "smooth", block: "start" });
          setHighlightedView(option);
          setTimeout(() => setHighlightedView(null), 2000);
        }
      }, 200);
    }, 100);
  };

  const handleReset = () => {
    setMessages([initialGreeting]);
    setVisibleViews(new Set());
    setHighlightedView(null);
    if (chatPanelRef.current) {
      chatPanelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClose = () => {
    setSavedChatState([...messages]);
    setIsChatOpen(false);
    // When closing, show snapshot as fallback
    setVisibleViews(new Set(["snapshot"]));
  };

  const handleReopen = () => {
    setIsChatOpen(true);
    if (savedChatState && savedChatState.length > 0) {
      setMessages(savedChatState);
    } else {
      setMessages([initialGreeting]);
      setVisibleViews(new Set());
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Reopen Button - shown when chat is closed */}
      {!isChatOpen && (
        <div className="mb-6">
          <button
            onClick={handleReopen}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-magenta/20 to-accent-primary/20 border-2 border-accent-magenta/50 hover:border-accent-magenta hover:from-accent-magenta/30 hover:to-accent-primary/30 hover:shadow-[0_0_15px_rgba(255,111,224,0.25)] transition-all text-sm font-medium text-accent-magenta"
          >
            💬 Reopen Skills Agent
          </button>
        </div>
      )}

      {/* Chat Panel */}
      {isChatOpen && (
        <div 
          ref={chatPanelRef}
          className="bg-bg-card border-2 border-border-subtle rounded-xl mb-8 overflow-hidden transition-all duration-300 hover:border-accent-magenta/40 hover:shadow-[0_0_20px_rgba(255,111,224,0.15)]"
        >
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-border-subtle bg-gradient-to-r from-accent-magenta/10 to-accent-primary/10 flex items-center justify-between">
        <div>
              <h3 className="font-display font-semibold text-foreground">Skills Agent</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Guided view of my tech stack</p>
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
                      ? "bg-gradient-to-br from-accent-magenta/20 to-accent-primary/20 border-2 border-accent-magenta/40 shadow-[0_0_20px_rgba(255,111,224,0.15)]"
                      : "bg-bg-subtle border-2 border-border-subtle"
                  )}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    
                    {/* Action Buttons */}
                    {message.showButtons && (
                      <div className="flex flex-col gap-3 mt-4">
                        <button
                          onClick={() => handleOptionClick("snapshot")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border-2 border-accent-primary/50 hover:border-accent-primary hover:from-accent-primary/30 hover:to-accent-secondary/30 hover:shadow-[0_0_20px_rgba(76,111,255,0.3)] transition-all text-sm font-medium text-accent-primary"
                        >
                          Tech Stack Snapshot
                        </button>
                        <button
                          onClick={() => handleOptionClick("agentic")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-magenta/20 to-accent-primary/20 border-2 border-accent-magenta/50 hover:border-accent-magenta hover:from-accent-magenta/30 hover:to-accent-primary/30 hover:shadow-[0_0_20px_rgba(255,111,224,0.3)] transition-all text-sm font-medium text-accent-magenta"
                        >
                          Best Fit for AI / Agentic Roles
                        </button>
                        <button
                          onClick={() => handleOptionClick("fullstack")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-secondary/20 to-chart-4/20 border-2 border-accent-secondary/50 hover:border-accent-secondary hover:from-accent-secondary/30 hover:to-chart-4/30 hover:shadow-[0_0_20px_rgba(34,184,207,0.3)] transition-all text-sm font-medium text-accent-secondary"
                        >
                          Full-Stack Engineering View
                        </button>
                        <button
                          onClick={() => handleOptionClick("layers")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-magenta/20 to-chart-3/20 border-2 border-accent-magenta/50 hover:border-accent-magenta hover:from-accent-magenta/30 hover:to-chart-3/30 hover:shadow-[0_0_20px_rgba(255,111,224,0.3)] transition-all text-sm font-medium text-accent-magenta"
                        >
                          By Layer (System View)
                        </button>
                        <button
                          onClick={() => handleOptionClick("everything")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-magenta/20 border-2 border-accent-primary/50 hover:border-accent-primary hover:from-accent-primary/30 hover:via-accent-secondary/30 hover:to-accent-magenta/30 hover:shadow-[0_0_20px_rgba(76,111,255,0.3)] transition-all text-sm font-medium text-accent-primary"
                        >
                          Show Everything
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Skills Views */}
      <div className="space-y-8">
        {/* Tech Stack Snapshot */}
        {(visibleViews.has("snapshot") || visibleViews.has("everything")) && (
          <div 
            ref={visibleViews.has("snapshot") ? snapshotRef : everythingRef}
            className={cn(
              "animate-fade-in transition-all duration-500",
              (highlightedView === "snapshot" || highlightedView === "everything") && "animate-pulse-glow"
            )}
          >
            <div className={cn(
              "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
              (highlightedView === "snapshot" || highlightedView === "everything") && "border-accent-primary/60 shadow-[0_0_25px_rgba(76,111,255,0.25)]"
            )}>
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-accent-primary" />
                Tech Stack Snapshot
              </h4>
      <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-foreground mb-3">Languages</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.languages.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-3">Agentic AI / LLM</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.agenticAI.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-3">ML / Data</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.mlData.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-3">Backend</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.backend.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-3">Frontend</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.frontend.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-3">Databases</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.databases.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h5 className="font-medium text-foreground mb-3">Cloud/DevOps</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.cloudDevOps.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Best Fit for AI / Agentic Roles */}
        {visibleViews.has("agentic") && (
          <div 
            ref={agenticRef}
            className={cn(
              "animate-fade-in transition-all duration-500",
              highlightedView === "agentic" && "animate-pulse-glow"
            )}
          >
            <div className={cn(
              "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
              highlightedView === "agentic" && "border-accent-magenta/60 shadow-[0_0_25px_rgba(255,111,224,0.25)]"
            )}>
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-accent-magenta" />
                Best Fit for AI / Agentic Roles
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-foreground mb-2">Agentic workflows:</h5>
                  <p className="text-sm text-muted-foreground">
                    LangGraph, LangChain, tool calling, multi-step pipelines, guardrails, evaluation
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">RAG & retrieval:</h5>
                  <p className="text-sm text-muted-foreground">
                    vector DBs (FAISS/Milvus), hybrid retrieval patterns, evaluation of retrieval quality
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">ML & data:</h5>
                  <p className="text-sm text-muted-foreground">
                    time-series forecasting, feature engineering, metrics, pandas, NumPy, scikit-learn
                  </p>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">Serving & integration:</h5>
                  <p className="text-sm text-muted-foreground">
                    FastAPI, REST APIs, AWS, Postman, Git
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full-Stack Engineering View */}
        {visibleViews.has("fullstack") && (
          <div 
            ref={fullstackRef}
            className={cn(
              "animate-fade-in transition-all duration-500",
              highlightedView === "fullstack" && "animate-pulse-glow"
            )}
          >
            <div className={cn(
              "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
              highlightedView === "fullstack" && "border-accent-secondary/60 shadow-[0_0_25px_rgba(34,184,207,0.25)]"
            )}>
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-accent-secondary" />
                Full-Stack Engineering View
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-foreground mb-3">Frontend</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.frontend.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-3">Backend</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.backend.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-3">Data & persistence</h5>
            <div className="flex flex-wrap gap-2">
                    {baseSkills.databases.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                  {skill}
                </span>
              ))}
            </div>
          </div>
                <div>
                  <h5 className="font-medium text-foreground mb-3">Infra & tooling</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.cloudDevOps.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
        ))}
      </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* By Layer (System View) */}
        {visibleViews.has("layers") && (
          <div 
            ref={layersRef}
            className={cn(
              "animate-fade-in transition-all duration-500",
              highlightedView === "layers" && "animate-pulse-glow"
            )}
          >
            <div className={cn(
              "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
              highlightedView === "layers" && "border-accent-magenta/60 shadow-[0_0_25px_rgba(255,111,224,0.25)]"
            )}>
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-accent-magenta" />
                By Layer (System View)
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="font-medium text-foreground mb-2">Data / Storage</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.databases.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">Computation / Models</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.languages.filter(s => s === "Python").map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                    {baseSkills.mlData.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">Intelligence / Agents</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.agenticAI.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">APIs / Services</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.backend.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">Interface</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.frontend.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-2">Platform & Tooling</h5>
                  <div className="flex flex-wrap gap-2">
                    {baseSkills.cloudDevOps.map(skill => (
                      <span key={skill} className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
          </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsAgent;
