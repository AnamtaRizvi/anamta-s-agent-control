import { Cpu, Code, Database, Cloud, Wrench, Brain } from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI & ML Frameworks",
    icon: <Brain className="w-5 h-5" />,
    skills: ["LangChain", "LlamaIndex", "CrewAI", "AutoGen", "HuggingFace", "OpenAI API", "Anthropic", "PyTorch", "TensorFlow"],
    color: "from-cosmic-purple to-cosmic-pink"
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: <Code className="w-5 h-5" />,
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "R"],
    color: "from-cosmic-blue to-cosmic-cyan"
  },
  {
    id: "backend",
    title: "Backend & APIs",
    icon: <Database className="w-5 h-5" />,
    skills: ["FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"],
    color: "from-cosmic-pink to-cosmic-purple"
  },
  {
    id: "frontend",
    title: "Frontend & UI",
    icon: <Cpu className="w-5 h-5" />,
    skills: ["React", "Next.js", "React Native", "Tailwind CSS", "Streamlit", "Gradio"],
    color: "from-cosmic-cyan to-cosmic-blue"
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "GitHub Actions", "Vercel"],
    color: "from-cosmic-purple to-cosmic-blue"
  },
  {
    id: "tools",
    title: "Tools & Practices",
    icon: <Wrench className="w-5 h-5" />,
    skills: ["Git", "MLflow", "Weights & Biases", "Jupyter", "VS Code", "Postman"],
    color: "from-cosmic-blue to-cosmic-pink"
  }
];

const SkillsAgent = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-cyan to-cosmic-blue flex items-center justify-center">
          <Cpu className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-foreground">Technical Skills</h3>
          <p className="text-sm text-muted-foreground">Tools, languages, and frameworks I work with</p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={category.id} 
            className="cosmic-border rounded-xl p-6 animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white`}>
                {category.icon}
              </div>
              <h4 className="font-display font-semibold text-foreground">{category.title}</h4>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 text-sm rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Core Strengths */}
      <div className="mt-8 cosmic-border rounded-xl p-6">
        <h4 className="font-display font-semibold text-foreground mb-4">Core Strengths</h4>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-gradient-to-br from-cosmic-purple/10 to-transparent border border-cosmic-purple/20">
            <h5 className="font-medium text-foreground mb-2">Agentic Systems</h5>
            <p className="text-sm text-muted-foreground">Designing multi-agent architectures that solve complex, real-world problems</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-cosmic-blue/10 to-transparent border border-cosmic-blue/20">
            <h5 className="font-medium text-foreground mb-2">Full-Stack ML</h5>
            <p className="text-sm text-muted-foreground">End-to-end ML pipelines from data to deployed production systems</p>
          </div>
          <div className="p-4 rounded-lg bg-gradient-to-br from-cosmic-pink/10 to-transparent border border-cosmic-pink/20">
            <h5 className="font-medium text-foreground mb-2">Explainable AI</h5>
            <p className="text-sm text-muted-foreground">Building interpretable models that stakeholders can trust and understand</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAgent;
