import { useState, useRef, RefObject } from "react";
import { FileText, Award, BookOpen, X, RotateCcw, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessage {
  id: string;
  type: "assistant" | "user";
  content: string;
  showButtons?: boolean;
}

const initialGreeting: ChatMessage = {
  id: "greeting",
  type: "assistant",
  content: "Hi! I'm the Research Agent 👋\nI can walk you through Anamta's academic work.\nWhat would you like to explore?",
  showButtons: true,
};

const ResearchAgent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([initialGreeting]);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [savedChatState, setSavedChatState] = useState<ChatMessage[] | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<"publications" | "evaluation" | "interests" | "journey">>(new Set());
  const [highlightedSection, setHighlightedSection] = useState<"publications" | "evaluation" | "interests" | "journey" | null>(null);
  const chatPanelRef = useRef<HTMLDivElement>(null);
  const publicationsRef = useRef<HTMLDivElement>(null);
  const evaluationRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);
  const journeyRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: "publications" | "evaluation" | "interests" | "journey") => {
    const optionLabels = {
      publications: "Publications",
      evaluation: "Evaluation & Benchmarking",
      interests: "Research Interests",
      journey: "Research Journey",
    };

    const responseMessages = {
      publications: "Here are Anamta's current publications:",
      evaluation: "Here's an overview of Anamta's evaluation and benchmarking work:",
      interests: "These are Anamta's current research interests and focus areas:",
      journey: "Here's how Anamta's research evolved over time:",
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

    // Reveal section
    setVisibleSections(prev => new Set(prev).add(option));

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

      // Scroll to section and highlight
      setTimeout(() => {
        let refToScroll: RefObject<HTMLDivElement> | null = null;
        if (option === "publications" && publicationsRef.current) {
          refToScroll = publicationsRef;
        } else if (option === "evaluation" && evaluationRef.current) {
          refToScroll = evaluationRef;
        } else if (option === "interests" && interestsRef.current) {
          refToScroll = interestsRef;
        } else if (option === "journey" && journeyRef.current) {
          refToScroll = journeyRef;
        }

        if (refToScroll?.current) {
          refToScroll.current.scrollIntoView({ behavior: "smooth", block: "start" });
          setHighlightedSection(option);
          setTimeout(() => setHighlightedSection(null), 2000);
        }
      }, 200);
    }, 100);
  };

  const handleReset = () => {
    setMessages([initialGreeting]);
    setVisibleSections(new Set());
    setHighlightedSection(null);
    if (chatPanelRef.current) {
      chatPanelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClose = () => {
    setSavedChatState([...messages]);
    setIsChatOpen(false);
    // When closing, show all sections as fallback
    setVisibleSections(new Set(["publications", "evaluation", "interests", "journey"]));
  };

  const handleReopen = () => {
    setIsChatOpen(true);
    if (savedChatState && savedChatState.length > 0) {
      setMessages(savedChatState);
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent-secondary/20 to-accent-magenta/20 border-2 border-accent-secondary/50 hover:border-accent-secondary hover:from-accent-secondary/30 hover:to-accent-magenta/30 hover:shadow-[0_0_15px_rgba(34,184,207,0.25)] transition-all text-sm font-medium text-accent-secondary"
          >
            💬 Reopen Research Agent
          </button>
        </div>
      )}

      {/* Chat Panel */}
      {isChatOpen && (
        <div 
          ref={chatPanelRef}
          className="bg-bg-card border-2 border-border-subtle rounded-xl mb-8 overflow-hidden transition-all duration-300 hover:border-accent-secondary/40 hover:shadow-[0_0_20px_rgba(34,184,207,0.15)]"
        >
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-border-subtle bg-gradient-to-r from-accent-secondary/10 to-accent-magenta/10 flex items-center justify-between">
        <div>
              <h3 className="font-display font-semibold text-foreground">Research Agent</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Guided view of Anamta's academic work</p>
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
                      ? "bg-gradient-to-br from-accent-secondary/20 to-accent-magenta/20 border-2 border-accent-secondary/40 shadow-[0_0_20px_rgba(34,184,207,0.15)]"
                      : "bg-bg-subtle border-2 border-border-subtle"
                  )}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    
                    {/* Action Buttons */}
                    {message.showButtons && (
                      <div className="flex flex-col gap-3 mt-4">
                        <button
                          onClick={() => handleOptionClick("publications")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border-2 border-accent-primary/50 hover:border-accent-primary hover:from-accent-primary/30 hover:to-accent-secondary/30 hover:shadow-[0_0_20px_rgba(76,111,255,0.3)] transition-all text-sm font-medium text-accent-primary"
                        >
                          Publications
                        </button>
                        <button
                          onClick={() => handleOptionClick("evaluation")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-secondary/20 to-chart-4/20 border-2 border-accent-secondary/50 hover:border-accent-secondary hover:from-accent-secondary/30 hover:to-chart-4/30 hover:shadow-[0_0_20px_rgba(34,184,207,0.3)] transition-all text-sm font-medium text-accent-secondary"
                        >
                          Evaluation & Benchmarking
                        </button>
                        <button
                          onClick={() => handleOptionClick("interests")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-magenta/20 to-accent-primary/20 border-2 border-accent-magenta/50 hover:border-accent-magenta hover:from-accent-magenta/30 hover:to-accent-primary/30 hover:shadow-[0_0_20px_rgba(255,111,224,0.3)] transition-all text-sm font-medium text-accent-magenta"
                        >
                          Research Interests
                        </button>
                        <button
                          onClick={() => handleOptionClick("journey")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary/20 via-accent-secondary/20 to-accent-magenta/20 border-2 border-accent-primary/50 hover:border-accent-primary hover:from-accent-primary/30 hover:via-accent-secondary/30 hover:to-accent-magenta/30 hover:shadow-[0_0_20px_rgba(76,111,255,0.3)] transition-all text-sm font-medium text-accent-primary"
                        >
                          Research Journey
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

      {/* Publications - Only visible when revealed */}
      {visibleSections.has("publications") && (
        <div 
          ref={publicationsRef}
          className={cn(
            "animate-fade-in transition-all duration-500",
            highlightedSection === "publications" && "animate-pulse-glow"
          )}
        >
          <div className={cn(
            "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
            highlightedSection === "publications" && "border-accent-primary/60 shadow-[0_0_25px_rgba(76,111,255,0.25)]"
          )}>
          <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent-primary" />
              Selected Publications
          </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <h5 className="font-medium text-foreground mb-2 italic">
                  Exploring the Potentials of Robotic Process Automation: A Review
                </h5>
                <p className="text-sm text-muted-foreground mb-2">
                  Journal of Informatics Electrical and Electronics Engineering (JIEEE), 4(2), November 2023
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span>DOI: 10.54060/jieee.2023.100</span>
                </div>
                <a
                  href="https://www.researchgate.net/publication/375790676_Exploring_the_Potentials_of_Robotic_Process_Automation_A_Review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-accent-primary hover:text-accent-primary/80 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  View on ResearchGate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Evaluation & Benchmarking - Only visible when revealed */}
      {visibleSections.has("evaluation") && (
        <div 
          ref={evaluationRef}
          className={cn(
            "animate-fade-in transition-all duration-500",
            highlightedSection === "evaluation" && "animate-pulse-glow"
          )}
        >
          <div className={cn(
            "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
            highlightedSection === "evaluation" && "border-accent-secondary/60 shadow-[0_0_25px_rgba(34,184,207,0.25)]"
          )}>
          <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-accent-secondary" />
            Evaluation & Benchmarking
          </h4>
          <p className="text-muted-foreground mb-4">
            Experienced in designing and implementing evaluation frameworks for AI systems:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h5 className="font-medium text-foreground mb-2">RAG Evaluation</h5>
              <p className="text-sm text-muted-foreground">
                Developed metrics for retrieval quality, answer faithfulness, and citation accuracy
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h5 className="font-medium text-foreground mb-2">Agent Benchmarks</h5>
              <p className="text-sm text-muted-foreground">
                Created task-completion benchmarks for multi-agent system evaluation
              </p>
            </div>
          </div>
        </div>
        </div>
      )}

      {/* Research Interests - Only visible when revealed */}
      {visibleSections.has("interests") && (
        <div 
          ref={interestsRef}
          className={cn(
            "animate-fade-in transition-all duration-500",
            highlightedSection === "interests" && "animate-pulse-glow"
          )}
        >
          <div className={cn(
            "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
            highlightedSection === "interests" && "border-accent-magenta/60 shadow-[0_0_25px_rgba(255,111,224,0.25)]"
          )}>
            <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent-primary" />
              Research Interests
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0" />
                <span>Multi-agent orchestration and coordination strategies for complex task decomposition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary mt-2 shrink-0" />
                <span>Retrieval-Augmented Generation with hybrid search and knowledge graph integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-magenta mt-2 shrink-0" />
                <span>Explainable AI methods for production ML systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-chart-4 mt-2 shrink-0" />
                <span>LLM evaluation frameworks and benchmark design</span>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Research Journey - Only visible when revealed */}
      {visibleSections.has("journey") && (
        <div 
          ref={journeyRef}
          className={cn(
            "animate-fade-in transition-all duration-500",
            highlightedSection === "journey" && "animate-pulse-glow"
          )}
        >
          <div className={cn(
            "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
            highlightedSection === "journey" && "border-accent-primary/60 shadow-[0_0_25px_rgba(76,111,255,0.25)]"
          )}>
            <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-accent-magenta" />
              Research Journey
            </h4>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Anamta's research journey began with foundational work in classical Robotic Process Automation (RPA), 
                focusing on rule-based automation systems and workflow optimization. This early work provided a solid 
                understanding of process automation and system integration challenges.
              </p>
              <p>
                The research focus has since evolved toward cutting-edge agentic AI systems. Current work emphasizes 
                multi-agent orchestration and coordination strategies for complex task decomposition, enabling more 
                sophisticated and autonomous systems. This shift reflects the transition from deterministic automation 
                to intelligent, adaptive agent-based architectures.
              </p>
              <p>
                Today, the research portfolio spans several interconnected domains: retrieval-augmented generation 
                with hybrid search and knowledge graph integration for improved information access, explainable AI 
                methods for production ML systems to ensure transparency and trust, and comprehensive LLM evaluation 
                frameworks and benchmark design to rigorously assess system capabilities.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchAgent;
