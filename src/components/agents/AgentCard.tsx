import { LucideIcon, ArrowRight, Star } from "lucide-react";
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

const AgentCard = ({ 
  title, 
  description, 
  icon: Icon, 
  isActive, 
  isRecommended,
  onClick 
}: AgentCardProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "agent-card text-left w-full group",
        isActive && "active",
        isRecommended && !isActive && "ring-1 ring-cosmic-purple/30"
      )}
    >
      {/* Recommended Badge */}
      {isRecommended && (
        <div className="absolute -top-3 left-4 flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-xs font-medium text-white">
          <Star className="w-3 h-3" />
          Start Here
        </div>
      )}

      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center transition-all shrink-0",
          isActive 
            ? "bg-gradient-to-br from-cosmic-purple to-cosmic-blue" 
            : "bg-muted group-hover:bg-muted/80"
        )}>
          <Icon className={cn(
            "w-6 h-6 transition-colors",
            isActive ? "text-white" : "text-muted-foreground group-hover:text-foreground"
          )} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className={cn(
            "font-display font-semibold text-lg mb-1 transition-colors",
            isActive ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
          )}>
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </div>

        {/* Arrow */}
        <ArrowRight className={cn(
          "w-5 h-5 shrink-0 transition-all",
          isActive 
            ? "text-cosmic-purple translate-x-0" 
            : "text-muted-foreground -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        )} />
      </div>
    </button>
  );
};

export default AgentCard;
