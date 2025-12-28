import { Button } from "@/components/ui/button";
import { MapPin, FileText, Linkedin, Github } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(280_60%_20%/0.4),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,hsl(220_80%_30%/0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,hsl(320_70%_30%/0.15),transparent_40%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Avatar */}
          <div className="relative mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="glow-avatar">
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-cosmic-purple via-cosmic-blue to-cosmic-pink flex items-center justify-center animate-float">
                <span className="text-5xl font-bold font-display text-white">A</span>
              </div>
            </div>
          </div>

          {/* Name & Title */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="cosmic-gradient-text">Anamta Rizvi</span>
          </h1>
          
          <h2 
            className="text-xl md:text-2xl text-muted-foreground font-display mb-6 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Agentic AI Engineer & Full-Stack ML Developer
          </h2>

          {/* Description */}
          <p 
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-6 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Building agentic workflows, RAG systems, and reliable, explainable AI systems 
            that transform complex data into actionable intelligence.
          </p>

          {/* Location */}
          <div 
            className="flex items-center gap-2 text-muted-foreground mb-4 animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <MapPin className="w-4 h-4 text-cosmic-purple" />
            <span>New Jersey, USA</span>
          </div>

          {/* Availability */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cosmic-purple/10 border border-cosmic-purple/30 mb-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm text-foreground/80">
              Open to internships / new-grad roles in Agentic AI, Applied ML, and Full-Stack AI Engineering
            </span>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-wrap items-center justify-center gap-4 animate-fade-in"
            style={{ animationDelay: "0.7s" }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:opacity-90 transition-opacity text-white font-medium px-8"
            >
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-border hover:border-cosmic-blue hover:bg-cosmic-blue/10 transition-all"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-border hover:border-cosmic-pink hover:bg-cosmic-pink/10 transition-all"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
