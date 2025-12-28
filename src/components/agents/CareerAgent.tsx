import { Briefcase, GraduationCap, Calendar } from "lucide-react";

interface TimelineItem {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights?: string[];
}

const timelineData: TimelineItem[] = [
  {
    id: "current",
    type: "education",
    title: "Master's in Computer Science",
    organization: "University Name",
    period: "2023 - Present",
    description: "Focusing on AI/ML systems, with research in agentic architectures and RAG systems.",
    highlights: [
      "Graduate Research Assistant in AI Lab",
      "Coursework in Advanced ML, NLP, Distributed Systems"
    ]
  },
  {
    id: "internship",
    type: "work",
    title: "ML Engineering Intern",
    organization: "Tech Company",
    period: "Summer 2023",
    description: "Developed and deployed ML pipelines for production systems.",
    highlights: [
      "Built real-time inference pipeline serving 10K+ requests/day",
      "Implemented A/B testing framework for ML models"
    ]
  },
  {
    id: "undergrad",
    type: "education",
    title: "Bachelor's in Computer Science",
    organization: "University Name",
    period: "2019 - 2023",
    description: "Strong foundation in CS fundamentals with focus on AI/ML.",
    highlights: [
      "Dean's List, GPA: 3.8+",
      "Senior thesis on multi-agent systems"
    ]
  }
];

const CareerAgent = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-blue to-cosmic-cyan flex items-center justify-center">
          <Briefcase className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-foreground">Professional Journey</h3>
          <p className="text-sm text-muted-foreground">Education and experience timeline</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cosmic-purple via-cosmic-blue to-cosmic-pink" />

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={item.id} className="relative pl-16">
              {/* Timeline Node */}
              <div className="absolute left-4 -translate-x-1/2 w-5 h-5 rounded-full border-2 border-cosmic-purple bg-background flex items-center justify-center">
                {item.type === "work" ? (
                  <Briefcase className="w-2.5 h-2.5 text-cosmic-purple" />
                ) : (
                  <GraduationCap className="w-2.5 h-2.5 text-cosmic-blue" />
                )}
              </div>

              {/* Content Card */}
              <div 
                className="cosmic-border rounded-xl p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                    <p className="text-cosmic-purple">{item.organization}</p>
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
                        <span className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan mt-1.5 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Placeholder note */}
      <p className="text-center text-muted-foreground text-sm mt-8 opacity-60">
        💡 Update with your actual experience details
      </p>
    </div>
  );
};

export default CareerAgent;
