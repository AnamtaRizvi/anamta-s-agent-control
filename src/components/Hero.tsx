import { Button } from "@/components/ui/button";
import { FileText, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import anamtaProfile from "@/assets/anamta-profile.jpg";
import resumePDF from "@/assets/Anamta_Rizvi_AI_Resume.pdf";

const Hero = () => {
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-bg-page">
      <div className="container mx-auto px-6 relative z-10">
        {/* System Boot Panel */}
        <div className="max-w-4xl mx-auto">
          <div className={cn(
            "hero-system-panel bg-bg-card border border-border-subtle rounded-lg overflow-hidden relative",
            "[data-theme='dark']:shadow-[0_0_40px_rgba(47,244,200,0.08)]",
            "hero-accent-top-border"
          )}>

            {/* Header Bar */}
            <div className="px-6 py-3 bg-bg-subtle border-b border-accent-primary/10 flex items-center justify-between relative">
              <div className="flex items-center gap-3">
                <span className="text-xs uppercase tracking-wider text-text-muted font-mono">
                  SYSTEM STATUS
                </span>
                <span className="text-accent-primary">▸</span>
                <span className="text-xs uppercase tracking-wider text-accent-primary font-mono font-semibold">
                  ONLINE
                </span>
              </div>
              <div className="w-2 h-2 rounded-full bg-accent-primary online-pulse [data-theme='dark']:animate-pulse" />
            </div>

            {/* System Accent Line - Light theme only */}
            <div className="h-px bg-transparent system-accent-line" />

            {/* Panel Content */}
            <div className="p-6 md:p-8 lg:p-10">
              {/* Two-column layout: Identity Panel + System Details */}
              <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
                {/* LEFT: Identity Photo Panel */}
                <div className="w-full md:w-2/5 flex-shrink-0 min-w-[220px] max-w-xs md:max-w-none">
                  <div className="relative">
                    {/* Label above panel */}
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-xs uppercase tracking-wider text-accent-primary/80 font-mono">
                        PROFILE MODULE
                      </span>
                      {/* Micro tag - Light theme only */}
                      <span className="text-[10px] uppercase tracking-wider text-text-muted/60 font-mono profile-module-secondary-label">
                        PRIMARY OPERATOR
                      </span>
                    </div>
                    
                    {/* Identity Card */}
                    <div className={cn(
                      "profile-module-card profile-module-enhanced relative bg-bg-card rounded-xl overflow-hidden"
                    )}>
                      {/* Profile Image */}
                      <div className="relative w-full aspect-[3/4] bg-bg-subtle overflow-hidden">
                        <img 
                          src={anamtaProfile} 
                          alt="Anamta Rizvi" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                      
                      {/* Status Strip at bottom */}
                      <div className={cn(
                        "profile-module-identity-strip px-4 py-2.5 bg-bg-card border-t border-border-subtle flex items-center justify-between"
                      )}>
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-primary identity-dot-breathe [data-theme='dark']:animate-none"></span>
                          <span className="text-xs uppercase tracking-wider text-text-secondary font-mono">
                            <span className="text-accent-primary/90">IDENTITY:</span> ANAMTA RIZVI · <span className="text-accent-secondary/90">VERIFIED</span>
                          </span>
                        </div>
                      </div>
                      
                      {/* ID Badge in corner */}
                      <div className="absolute top-3 right-3 bg-bg-card/90 backdrop-blur-sm border border-accent-primary/30 rounded px-2 py-1 id-badge-border">
                        <span className="text-xs uppercase tracking-wider text-accent-primary font-mono id-badge-text">
                          ID: AR-01
                        </span>
                      </div>
                      
                      {/* Status dot - using accent-secondary as green alternative */}
                      <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-accent-secondary border-2 border-bg-card shadow-[0_0_8px_rgba(34,184,207,0.4)]" />
                    </div>
                  </div>
                </div>

                {/* RIGHT: System Details */}
                <div className="w-full md:w-3/5 flex-1 flex flex-col justify-center items-center md:items-start md:mt-0 mt-0">
                  {/* System Labels - Grouped with better hierarchy */}
                  <div className="w-full space-y-5">
                    {/* Primary Group: NAME */}
                    <div className="system-detail-group">
                      <div className="system-detail-label-small">NAME:</div>
                      <div className="system-detail-value-secondary">Anamta Rizvi</div>
                    </div>

                    {/* Primary Group: ROLE (emphasized) */}
                    <div className="system-detail-group">
                      <div className="system-detail-label-small">ROLE:</div>
                      <div className="system-detail-value-primary">Software Engineer — Agentic AI & Intelligent Systems</div>
                    </div>

                    {/* Secondary Group: Location & Status */}
                    <div className="space-y-3.5">
                      <div className="system-detail-group">
                        <div className="system-detail-label-small">LOCATION:</div>
                        <div className="system-detail-value-normal">New Jersey, USA</div>
                      </div>
                      <div className="system-detail-group">
                        <div className="system-detail-label-small">STATUS:</div>
                        <div className="system-detail-value-normal">Building production-grade AI systems</div>
                      </div>
                    </div>

                    {/* Availability Group */}
                    <div className="system-detail-group">
                      <div className="system-detail-label-small">AVAILABILITY:</div>
                      <div className="system-detail-value-normal">Immediate start • Open to relocate • Remote OK</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-border-subtle my-6 md:my-8 system-accent-line" />

              {/* System Message */}
              <div>
                <div className="text-xs uppercase tracking-wider text-text-muted font-mono mb-3">
                  System Message:
                </div>
                <p className="text-text-secondary leading-relaxed text-base font-sans">
                  "Building agentic workflows, RAG systems, and reliable, explainable AI systems 
                  that transform complex data into actionable intelligence."
                </p>
              </div>

              {/* CTA Row */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                {/* Primary Button - Projects Agent */}
                <Button
                  size="lg"
                  className={cn(
                    "bg-bg-card border-2 border-accent-primary/40 text-accent-primary",
                    "hover:border-accent-primary hover:bg-accent-primary/10 hover:text-accent-primary",
                    "hover:shadow-[0_0_20px_rgba(76,111,255,0.2)]",
                    "focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2",
                    "transition-all font-medium px-6"
                  )}
                  onClick={() => {
                    const agentsSection = document.getElementById("agents");
                    agentsSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Open Projects Agent
                </Button>
                {/* Resume Button */}
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    "bg-bg-card border-2 border-accent-secondary/40 text-accent-secondary",
                    "hover:border-accent-secondary hover:bg-accent-secondary/10 hover:text-accent-secondary",
                    "hover:shadow-[0_0_20px_rgba(34,184,207,0.2)]",
                    "transition-all px-6"
                  )}
                  onClick={() => window.open(resumePDF, "_blank")}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </Button>
                {/* LinkedIn Button */}
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    "bg-bg-card border-2 border-accent-primary/40 text-accent-primary",
                    "hover:border-accent-primary hover:bg-accent-primary/10 hover:text-accent-primary",
                    "hover:shadow-[0_0_20px_rgba(76,111,255,0.2)]",
                    "transition-all px-6"
                  )}
                  onClick={() => window.open("https://www.linkedin.com/in/anamta-rizvi-491bb523a/", "_blank")}
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
                {/* GitHub Button */}
                <Button
                  size="lg"
                  variant="outline"
                  className={cn(
                    "bg-bg-card border-2 border-accent-magenta/40 text-accent-magenta",
                    "hover:border-accent-magenta hover:bg-accent-magenta/10 hover:text-accent-magenta",
                    "hover:shadow-[0_0_20px_rgba(255,111,224,0.2)]",
                    "transition-all px-6"
                  )}
                  onClick={() => window.open("https://github.com/AnamtaRizvi/", "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </div>
            </div>

            {/* Boot Subtext */}
            <div className="px-6 py-3 bg-bg-subtle border-t border-accent-primary/10">
              <div className="flex items-center gap-2 text-xs text-text-muted font-mono system-boot-text">
                <span className="text-accent-primary">&gt;</span>
                <span>AI Control System initialized · Secure environment active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded border border-accent-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 rounded-full bg-accent-primary/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;




