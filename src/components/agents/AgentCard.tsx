import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AgentCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  isRecommended?: boolean;
  onClick: () => void;
}

// Agent-specific accent colors
const agentAccents: { [key: string]: { border: string; icon: string; status: string } } = {
  projects: {
    border: "border-accent-primary/30",
    icon: "text-accent-primary",
    status: "text-accent-primary",
  },
  research: {
    border: "border-accent-secondary/30",
    icon: "text-accent-secondary",
    status: "text-accent-secondary",
  },
  career: {
    border: "border-chart-4/30",
    icon: "text-chart-4",
    status: "text-chart-4",
  },
  skills: {
    border: "border-accent-magenta/30",
    icon: "text-accent-magenta",
    status: "text-accent-magenta",
  },
};

const AgentCard = ({ 
  id,
  title, 
  description, 
  icon: Icon, 
  isActive, 
  isRecommended,
  onClick 
}: AgentCardProps) => {
  const accent = agentAccents[id] || agentAccents.projects;
  
  // Get border color class based on agent type
  const getBorderClass = () => {
    if (isActive) {
      switch(id) {
        case "projects": return "border-accent-primary/30 border-2 shadow-[0_0_30px_rgba(47,244,200,0.15)]";
        case "research": return "border-accent-secondary/30 border-2 shadow-[0_0_30px_rgba(185,255,102,0.15)]";
        case "career": return "border-chart-4/30 border-2 shadow-[0_0_30px_rgba(255,230,109,0.15)]";
        case "skills": return "border-accent-magenta/30 border-2 shadow-[0_0_30px_rgba(255,111,224,0.15)]";
        default: return "border-accent-primary/30 border-2 shadow-[0_0_30px_rgba(47,244,200,0.15)]";
      }
    }
    switch(id) {
      case "projects": return "border-border-subtle hover:border-accent-primary/30 hover:border-2 hover:shadow-[0_0_20px_rgba(47,244,200,0.1)]";
      case "research": return "border-border-subtle hover:border-accent-secondary/30 hover:border-2 hover:shadow-[0_0_20px_rgba(185,255,102,0.1)]";
      case "career": return "border-border-subtle hover:border-chart-4/30 hover:border-2 hover:shadow-[0_0_20px_rgba(255,230,109,0.1)]";
      case "skills": return "border-border-subtle hover:border-accent-magenta/30 hover:border-2 hover:shadow-[0_0_20px_rgba(255,111,224,0.1)]";
      default: return "border-border-subtle hover:border-accent-primary/30 hover:border-2 hover:shadow-[0_0_20px_rgba(47,244,200,0.1)]";
    }
  };
  
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative w-full text-left group",
        "bg-bg-card rounded-lg overflow-hidden",
        "transition-all duration-300",
        getBorderClass()
      )}
    >
      {/* Header Bar */}
      <div className={cn(
        "px-4 py-2.5 bg-bg-subtle border-b border-border-subtle",
        "flex items-center justify-between"
      )}>
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <Icon className={cn("w-4 h-4 shrink-0 transition-colors", accent.icon)} />
          <span className="text-sm font-mono text-text-primary truncate">{title}</span>
        </div>
        <div className={cn(
          "text-xs uppercase tracking-wider font-mono px-2 py-0.5 rounded",
          "bg-bg-card border border-border-subtle",
          accent.status,
          isActive ? "opacity-100" : "opacity-60"
        )}>
          {isActive ? "ACTIVE" : "READY"}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className={cn(
          "text-sm leading-relaxed",
          "text-text-secondary",
          "font-sans"
        )}>
          {description}
        </p>
        
        {/* Hover indicator */}
        <div className={cn(
          "mt-3 text-xs font-mono text-text-muted",
          "opacity-0 group-hover:opacity-100 transition-opacity",
          "flex items-center gap-2"
        )}>
          <span className={accent.status}>&gt;</span>
          <span>Enter module</span>
        </div>
      </div>

      {/* Recommended indicator */}
      {isRecommended && !isActive && (
        <div className="absolute top-2 right-2">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
        </div>
      )}
    </button>
  );
};

export default AgentCard;
