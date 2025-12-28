import { useState, useEffect } from "react";
import { Folder, BookOpen, Briefcase, Cpu, UserCheck } from "lucide-react";
import AgentCard from "./agents/AgentCard";
import ProjectsAgent from "./agents/ProjectsAgent";
import ResearchAgent from "./agents/ResearchAgent";
import CareerAgent from "./agents/CareerAgent";
import SkillsAgent from "./agents/SkillsAgent";
import RecruiterAgent from "./agents/RecruiterAgent";

const agents = [
  {
    id: "projects",
    title: "Projects Agent",
    description: "Explore my technical builds and AI systems",
    icon: Folder,
    isRecommended: true,
  },
  {
    id: "research",
    title: "Research Agent",
    description: "Papers, evaluations & academic work",
    icon: BookOpen,
  },
  {
    id: "career",
    title: "Career Agent",
    description: "My professional journey",
    icon: Briefcase,
  },
  {
    id: "skills",
    title: "Skills Agent",
    description: "Tech stack & capabilities",
    icon: Cpu,
  },
  {
    id: "recruiter",
    title: "Recruiter Assistant",
    description: "TL;DR why you should hire me",
    icon: UserCheck,
  },
];

interface AgentsSectionProps {
  autoOpen?: boolean;
}

const AgentsSection = ({ autoOpen = false }: AgentsSectionProps) => {
  const [activeAgent, setActiveAgent] = useState("projects");

  useEffect(() => {
    if (autoOpen) {
      setActiveAgent("projects");
    }
  }, [autoOpen]);

  const renderAgentContent = () => {
    switch (activeAgent) {
      case "projects":
        return <ProjectsAgent />;
      case "research":
        return <ResearchAgent />;
      case "career":
        return <CareerAgent />;
      case "skills":
        return <SkillsAgent />;
      case "recruiter":
        return <RecruiterAgent />;
      default:
        return <ProjectsAgent />;
    }
  };

  return (
    <section id="agents" className="py-24 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(220_80%_20%/0.1),transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            <span className="cosmic-gradient-text">Explore My Work Through Agents</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each agent is a specialized view of my work. If you're new, start with Projects 👇
          </p>
        </div>

        {/* Agent Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {agents.map((agent, index) => (
            <div 
              key={agent.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AgentCard
                {...agent}
                isActive={activeAgent === agent.id}
                onClick={() => setActiveAgent(agent.id)}
              />
            </div>
          ))}
        </div>

        {/* Agent Content Panel */}
        <div className="cosmic-border rounded-2xl p-6 md:p-8 min-h-[400px]">
          {renderAgentContent()}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;
