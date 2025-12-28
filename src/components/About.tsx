import { Heart, Coffee, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,hsl(280_60%_15%/0.2),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              <span className="cosmic-gradient-text">About Me</span>
            </h2>
            <p className="text-muted-foreground">
              Beyond the code and algorithms
            </p>
          </div>

          {/* Main Content */}
          <div className="cosmic-border rounded-2xl p-8 md:p-10 mb-8">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="relative">
                  <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-cosmic-purple via-cosmic-blue to-cosmic-pink flex items-center justify-center">
                    <span className="text-5xl font-bold font-display text-white">A</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-green-500 border-4 border-background flex items-center justify-center">
                    <span className="text-xs">👋</span>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="flex-1">
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Hi, I'm Anamta!
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm an Agentic AI Engineer passionate about building intelligent systems that 
                    actually work in the real world. My focus is on creating AI that's not just 
                    powerful, but also <span className="text-foreground">reliable, explainable, and trustworthy</span>.
                  </p>
                  <p>
                    From multi-agent orchestration to RAG pipelines, I love tackling complex problems 
                    and turning them into elegant, production-ready solutions. I believe the best AI 
                    systems are ones that augment human capabilities rather than replace them.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new research papers, contributing to 
                    open-source projects, or thinking about the next big challenge to solve.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values/Interests */}
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Lightbulb, label: "Problem Solving", desc: "Love complex challenges", color: "cosmic-purple" },
              { icon: Users, label: "Collaboration", desc: "Team-first mindset", color: "cosmic-blue" },
              { icon: Heart, label: "Open Source", desc: "Giving back to community", color: "cosmic-pink" },
              { icon: Coffee, label: "Continuous Learning", desc: "Always improving", color: "cosmic-cyan" },
            ].map((item, index) => (
              <div 
                key={item.label}
                className="cosmic-border rounded-xl p-5 text-center animate-fade-in hover:border-cosmic-purple/30 transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-${item.color}/20 flex items-center justify-center mx-auto mb-3`}>
                  <item.icon className={`w-6 h-6 text-${item.color}`} />
                </div>
                <h4 className="font-display font-semibold text-foreground mb-1">{item.label}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
