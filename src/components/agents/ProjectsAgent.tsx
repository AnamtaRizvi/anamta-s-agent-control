import { useState } from "react";
import { ChevronDown, ExternalLink, Sparkles, Database } from "lucide-react";
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
    details: "Built a comprehensive FX analytics platform using LangChain agents, real-time data streaming, and predictive models. The system uses specialized agents for market analysis, risk assessment, and trade recommendations, all coordinated through a meta-agent architecture.",
    tags: ["LangChain", "Multi-Agent", "Real-time", "Python"]
  },
  {
    id: "carbon-analytics",
    title: "Multi-Agent Carbon & Market Analytics",
    summary: "Autonomous agents analyzing carbon credit markets and environmental data.",
    details: "Developed a multi-agent system that ingests environmental datasets, carbon market prices, and regulatory information. Agents collaborate to generate market insights, predict pricing trends, and identify arbitrage opportunities in carbon credit trading.",
    tags: ["CrewAI", "RAG", "Analytics", "FastAPI"]
  },
  {
    id: "wiki-rag",
    title: "Wikipedia RAG + Knowledge Graph QA",
    summary: "Hybrid retrieval system combining vector search with knowledge graphs for accurate QA.",
    details: "Implemented a sophisticated RAG system that uses both dense vector retrieval and knowledge graph traversal. The system extracts entities, builds relationship graphs, and provides explainable answers with source citations from Wikipedia articles.",
    tags: ["RAG", "Neo4j", "LlamaIndex", "OpenAI"]
  },
  {
    id: "air-quality",
    title: "Air Quality Index Prediction",
    summary: "ML pipeline for AQI forecasting with interpretable model explanations.",
    details: "Built an end-to-end ML pipeline that predicts Air Quality Index using meteorological data, traffic patterns, and industrial activity. Includes SHAP-based explainability and a dashboard for stakeholders to understand prediction drivers.",
    tags: ["Scikit-learn", "SHAP", "Time Series", "Dashboard"]
  },
  {
    id: "llm-biblio",
    title: "LLM Bibliographic Categorization",
    summary: "Automated academic paper categorization using fine-tuned language models.",
    details: "Fine-tuned LLMs to automatically categorize research papers into hierarchical taxonomies. The system handles multi-label classification, generates summaries, and extracts key contributions from academic literature.",
    tags: ["Fine-tuning", "NLP", "Classification", "HuggingFace"]
  }
];

const appProjects: Project[] = [
  {
    id: "ngo-app",
    title: "React Native NGO App",
    summary: "Mobile application connecting volunteers with local non-profit organizations.",
    details: "Full-stack mobile app with event management, volunteer matching, and impact tracking features.",
    tags: ["React Native", "Firebase", "TypeScript"]
  },
  {
    id: "auction-site",
    title: "Auction Website",
    summary: "Real-time bidding platform with live updates and secure payment processing.",
    details: "WebSocket-powered auction platform with real-time bid updates, user authentication, and Stripe integration.",
    tags: ["React", "Node.js", "WebSocket", "Stripe"]
  },
  {
    id: "hackathon-matcher",
    title: "Hackathon Team Matcher",
    summary: "Skill-based matching algorithm to form balanced hackathon teams.",
    details: "Algorithmic team formation tool that considers skills, experience, and preferences to create optimal hackathon teams.",
    tags: ["Python", "Algorithm", "React", "PostgreSQL"]
  },
  {
    id: "events-aggregator",
    title: "Campus Events Aggregator",
    summary: "Centralized platform aggregating events from multiple campus sources.",
    details: "Web scraping and API integration to aggregate campus events with filtering, calendar sync, and notifications.",
    tags: ["Web Scraping", "REST API", "React", "MongoDB"]
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="cosmic-border rounded-xl p-5 transition-all hover:border-cosmic-purple/30">
      <div 
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
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

const ProjectsAgent = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Agentic Systems */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-purple to-cosmic-blue flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-foreground">Agentic & Analytics Systems</h3>
            <p className="text-sm text-muted-foreground">AI-powered systems with autonomous capabilities</p>
          </div>
        </div>
        <div className="space-y-4">
          {agenticProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Apps & Pipelines */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-blue to-cosmic-cyan flex items-center justify-center">
            <Database className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-display font-bold text-xl text-foreground">Apps & Data Pipelines</h3>
            <p className="text-sm text-muted-foreground">Full-stack applications and data infrastructure</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {appProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsAgent;
