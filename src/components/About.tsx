import { Heart, Coffee, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative bg-bg-page">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              <span className="cosmic-gradient-text">About Me</span>
            </h2>
            <p className="text-text-secondary">
              Beyond the code and algorithms
            </p>
          </div>

          {/* Main Content */}
          <div className="cosmic-border rounded-2xl p-8 md:p-10 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-magenta flex items-center justify-center">
                    <span className="text-5xl font-bold font-display text-white">A</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-bg-card flex items-center justify-center">
                    <span className="text-xs">👋</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-text-primary mb-4">
                  Hi, I'm Anamta!
                </h3>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I'm an Agentic AI & ML Engineer focused on building intelligent systems that ship and work reliably in the real world. I design agent-based workflows, RAG systems, and evaluation loops that turn messy data and vague questions into dependable, explainable outputs.
                  </p>
                  <p>
                    I like breaking complex problems into clean, testable components and turning them into products people can trust, with a strong focus on guardrails, observability, and production readiness.
                  </p>
                  <p>
                    Outside of work, I recharge by spending time outdoors, exploring new places, and doing things that balance out all the screen time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values/Interests */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Lightbulb, label: "Problem Solving", desc: "Love complex challenges", bgColor: "bg-accent-primary/20", textColor: "text-accent-primary" },
              { icon: Users, label: "Collaboration", desc: "Team-first mindset", bgColor: "bg-accent-secondary/20", textColor: "text-accent-secondary" },
              { icon: Heart, label: "Curiosity", desc: "Forever asking \"what if?\"", bgColor: "bg-accent-magenta/20", textColor: "text-accent-magenta" },
              { icon: Coffee, label: "Continuous Learning", desc: "Always improving", bgColor: "bg-accent-secondary/20", textColor: "text-accent-secondary" },
            ].map((item, index) => (
              <div 
                key={item.label}
                className="cosmic-border rounded-xl p-5 text-center animate-fade-in hover:border-accent-primary/30 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bgColor} flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className={`w-6 h-6 ${item.textColor}`} />
                </div>
                <h4 className="font-display font-semibold text-text-primary mb-1">{item.label}</h4>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
