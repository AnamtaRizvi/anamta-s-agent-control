import { useState, useRef, RefObject } from "react";
import { Briefcase, GraduationCap, Calendar, X, RotateCcw, Target } from "lucide-react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

const educationData: TimelineItem[] = [
  {
    id: "masters",
    type: "education",
    title: "Master's in Information Technology & Analytics",
    organization: "Rutgers University",
    period: "2025 – Present",
    description: "Focused on AI/ML systems and building reliable, production-ready intelligent applications.",
    highlights: [
      "Coursework: Machine Learning, Data Mining, Big Data & Cloud Computing"
    ]
  }
];

const experienceData: TimelineItem[] = [
  {
    id: "carlab",
    type: "work",
    title: "Software Engineer",
    organization: "Rutgers University — CARLab",
    period: "10/2025 – Present",
    description: "Shipped product features for the SWAM BYOC platform",
    highlights: [
      "Built AI-driven capabilities (Module Recommender, Virtual TA)"
    ]
  },
  {
    id: "research-assistant",
    type: "work",
    title: "Research Assistant",
    organization: "Rutgers University",
    period: "05/2025 – Present",
    description: "Built agent-based systems for research automation",
    highlights: [
      "Added guardrails, evaluation, and data processing components"
    ]
  },
  {
    id: "veach-intern",
    type: "work",
    title: "Software Engineer Intern",
    organization: "Veach AI",
    period: "09/2025 – 11/2025",
    description: "Built an agent-based system for market due diligence",
    highlights: [
      "Integrated retrieval, tool-use, and reliability layers"
    ]
  }
];

interface ChatMessage {
  id: string;
  type: "assistant" | "user";
  content: string;
  showButtons?: boolean;
}

const initialGreeting: ChatMessage = {
  id: "greeting",
  type: "assistant",
  content: "Hi! I'm the Career Agent 👋\nI can walk you through Anamta's professional journey.\nWhat would you like to explore?",
  showButtons: true,
};

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => (
  <div key={item.id} className="relative pl-16">
    {/* Timeline Node */}
    <div className="absolute left-4 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-accent-primary bg-bg-card flex items-center justify-center shadow-[0_0_8px_rgba(76,111,255,0.3)]">
      {item.type === "work" ? (
        <Briefcase className="w-2.5 h-2.5 text-accent-primary" />
      ) : (
        <GraduationCap className="w-2.5 h-2.5 text-accent-secondary" />
      )}
    </div>

    {/* Content Card */}
    <div 
      className="bg-bg-card border-2 border-border-subtle rounded-xl p-6 animate-fade-in hover:border-accent-primary/40 hover:shadow-[0_0_15px_rgba(76,111,255,0.2)] transition-all"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
        <div>
          <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
          <p className="text-accent-primary">{item.organization}</p>
        </div>
        <span className="flex items-center gap-1 text-sm text-muted-foreground px-3 py-1 rounded-full bg-muted">
          <Calendar className="w-3 h-3" />
          {item.period}
        </span>
      </div>
      
      <p className="text-muted-foreground mb-4">{item.description}</p>
      
      {item.highlights && (
        <ul className="space-y-2">
          {item.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary mt-1.5 shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

const CareerAgent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([initialGreeting]);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [savedChatState, setSavedChatState] = useState<ChatMessage[] | null>(null);
  const [visibleSections, setVisibleSections] = useState<Set<"education" | "experience" | "candidate">>(new Set());
  const [showAll, setShowAll] = useState(false);
  const [highlightedSection, setHighlightedSection] = useState<"education" | "experience" | "candidate" | null>(null);
  const chatPanelRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const candidateRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: "education" | "experience" | "candidate") => {
    const optionLabels = {
      education: "Education",
      experience: "Experience",
      candidate: "Why I'm a Strong Candidate",
    };

    const responseMessages = {
      education: "Here's Anamta's academic foundation 👇",
      experience: "Here's Anamta's hands-on experience across software engineering and research 👇",
      candidate: "Here's a quick summary of why Anamta is a strong fit for AI-heavy engineering roles 👇",
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
        if (option === "education" && educationRef.current) {
          refToScroll = educationRef;
        } else if (option === "experience" && experienceRef.current) {
          refToScroll = experienceRef;
        } else if (option === "candidate" && candidateRef.current) {
          refToScroll = candidateRef;
        }

        if (refToScroll?.current) {
          refToScroll.current.scrollIntoView({ behavior: "smooth", block: "start" });
          setHighlightedSection(option);
          setTimeout(() => setHighlightedSection(null), 2000);
        }
      }, 200);
    }, 100);
  };

  const handleShowAll = () => {
    setMessages(prev => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        type: "user",
        content: "Show Full Journey",
      },
    ]);

    setVisibleSections(new Set(["education", "experience", "candidate"]));
    setShowAll(true);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          type: "assistant",
          content: "Here's Anamta's full professional journey in one view 👇",
        },
      ]);

      setTimeout(() => {
        if (timelineRef.current) {
          timelineRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 200);
    }, 100);
  };

  const handleReset = () => {
    setMessages([initialGreeting]);
    setVisibleSections(new Set());
    setShowAll(false);
    setHighlightedSection(null);
    if (chatPanelRef.current) {
      chatPanelRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleClose = () => {
    setSavedChatState([...messages]);
    setIsChatOpen(false);
    // When closing, show all sections as fallback
    setVisibleSections(new Set(["education", "experience", "candidate"]));
    setShowAll(true);
  };

  const handleReopen = () => {
    setIsChatOpen(true);
    if (savedChatState && savedChatState.length > 0) {
      setMessages(savedChatState);
    } else {
      setMessages([initialGreeting]);
      setVisibleSections(new Set());
      setShowAll(false);
    }
  };

  const hasInteracted = messages.length > 1;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Reopen Button - shown when chat is closed */}
      {!isChatOpen && (
        <div className="mb-6">
          <button
            onClick={handleReopen}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-chart-4/20 to-accent-primary/20 border-2 border-chart-4/50 hover:border-chart-4 hover:from-chart-4/30 hover:to-accent-primary/30 hover:shadow-[0_0_15px_rgba(255,230,109,0.25)] transition-all text-sm font-medium text-chart-4"
          >
            💬 Reopen Career Agent
          </button>
        </div>
      )}

      {/* Chat Panel */}
      {isChatOpen && (
        <div 
          ref={chatPanelRef}
          className="bg-bg-card border-2 border-border-subtle rounded-xl mb-8 overflow-hidden transition-all duration-300 hover:border-chart-4/40 hover:shadow-[0_0_20px_rgba(255,230,109,0.15)]"
        >
          {/* Chat Header */}
          <div className="px-6 py-4 border-b border-border-subtle bg-gradient-to-r from-chart-4/10 to-accent-primary/10 flex items-center justify-between">
            <div>
              <h3 className="font-display font-semibold text-foreground">Career Agent</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Guided view of my professional journey</p>
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
                      ? "bg-gradient-to-br from-chart-4/20 to-accent-primary/20 border-2 border-chart-4/40 shadow-[0_0_20px_rgba(255,230,109,0.15)]"
                      : "bg-bg-subtle border-2 border-border-subtle"
                  )}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                    
                    {/* Action Buttons */}
                    {message.showButtons && (
                      <div className="flex flex-col gap-3 mt-4">
                        <button
                          onClick={() => handleOptionClick("education")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-chart-4/20 to-accent-secondary/20 border-2 border-chart-4/50 hover:border-chart-4 hover:from-chart-4/30 hover:to-accent-secondary/30 hover:shadow-[0_0_20px_rgba(255,230,109,0.3)] transition-all text-sm font-medium text-chart-4"
                        >
                          Education
                        </button>
                        <button
                          onClick={() => handleOptionClick("experience")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 border-2 border-accent-primary/50 hover:border-accent-primary hover:from-accent-primary/30 hover:to-accent-secondary/30 hover:shadow-[0_0_20px_rgba(76,111,255,0.3)] transition-all text-sm font-medium text-accent-primary"
                        >
                          Experience
                        </button>
                        <button
                          onClick={() => handleOptionClick("candidate")}
                          className="px-6 py-3 rounded-full bg-gradient-to-r from-accent-secondary/20 to-chart-4/20 border-2 border-accent-secondary/50 hover:border-accent-secondary hover:from-accent-secondary/30 hover:to-chart-4/30 hover:shadow-[0_0_20px_rgba(34,184,207,0.3)] transition-all text-sm font-medium text-accent-secondary"
                        >
                          Why I'm a Strong Candidate
                        </button>
                        {hasInteracted && (
                          <button
                            onClick={handleShowAll}
                            className="px-6 py-3 rounded-full bg-gradient-to-r from-chart-4/20 via-accent-primary/20 to-accent-magenta/20 border-2 border-chart-4/50 hover:border-chart-4 hover:from-chart-4/30 hover:via-accent-primary/30 hover:to-accent-magenta/30 hover:shadow-[0_0_20px_rgba(255,230,109,0.3)] transition-all text-sm font-medium text-chart-4 mt-2"
                          >
                            Show Full Journey
                          </button>
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

      {/* Professional Journey Container */}
      <div ref={timelineRef} className="space-y-8">
        {/* Education Section - Only visible when revealed */}
        {visibleSections.has("education") && (
          <div 
            ref={educationRef}
            className={cn(
              "animate-fade-in transition-all duration-500",
              highlightedSection === "education" && "animate-pulse-glow"
            )}
          >
            <div className={cn(
              "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
              highlightedSection === "education" && "border-chart-4/60 shadow-[0_0_25px_rgba(255,230,109,0.25)]"
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-chart-4 to-accent-secondary flex items-center justify-center shadow-[0_0_15px_rgba(255,230,109,0.3)]">
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">Education</h3>
                  <p className="text-sm text-muted-foreground">Academic foundation</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-chart-4 to-accent-secondary" />
                <div className="space-y-8">
                  {educationData.map((item, index) => (
                    <TimelineCard key={item.id} item={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section - Only visible when revealed */}
        {visibleSections.has("experience") && (
          <div 
            ref={experienceRef}
            className={cn(
              "animate-fade-in transition-all duration-500",
              highlightedSection === "experience" && "animate-pulse-glow"
            )}
          >
            <div className={cn(
              "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
              highlightedSection === "experience" && "border-accent-primary/60 shadow-[0_0_25px_rgba(76,111,255,0.25)]"
            )}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center shadow-[0_0_15px_rgba(76,111,255,0.3)]">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl text-foreground">Experience</h3>
                  <p className="text-sm text-muted-foreground">Professional roles and contributions</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-primary via-accent-secondary to-accent-magenta" />
                <div className="space-y-8">
                  {experienceData.map((item, index) => (
                    <TimelineCard key={item.id} item={item} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Why I'm a Strong Candidate - Only visible when revealed */}
        {visibleSections.has("candidate") && (
          <div 
            ref={candidateRef}
            className={cn(
              "animate-fade-in transition-all duration-500",
              highlightedSection === "candidate" && "animate-pulse-glow"
            )}
          >
            <div className={cn(
              "bg-bg-card border-2 border-border-subtle rounded-xl p-6 transition-all duration-500",
              highlightedSection === "candidate" && "border-accent-secondary/60 shadow-[0_0_25px_rgba(34,184,207,0.25)]"
            )}>
              <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent-secondary" />
                Why I'm a Strong Candidate
              </h4>
              <div className="space-y-6">
                <div>
                  <h5 className="font-medium text-foreground mb-3">Key Strengths</h5>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary mt-2 shrink-0" />
                      <span><strong>Agentic AI systems</strong>: design and implementation of multi-agent workflows that are reliable and production-ready</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0" />
                      <span><strong>RAG & knowledge integration</strong>: retrieval-augmented generation with knowledge graphs for grounded, explainable outputs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-chart-4 mt-2 shrink-0" />
                      <span><strong>Evaluation & reliability</strong>: benchmarking, guardrails, and observability for multi-step AI systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-magenta mt-2 shrink-0" />
                      <span><strong>End-to-end engineering</strong>: building, deploying, and operating full-stack ML systems in production</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-foreground mb-3">Best-Fit Roles</h5>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-secondary mt-2 shrink-0" />
                      <span><strong>Software Engineer (AI Systems)</strong>: building and shipping intelligent, production-grade systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-primary mt-2 shrink-0" />
                      <span><strong>Applied ML Engineer</strong>: model development, evaluation, and deployment at scale</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-chart-4 mt-2 shrink-0" />
                      <span><strong>Agentic AI / LLM Platform Engineer</strong>: multi-agent orchestration, tooling, and system reliability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CareerAgent;
