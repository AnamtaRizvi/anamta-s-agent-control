import { UserCheck, Target, Rocket, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const RecruiterAgent = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
          <UserCheck className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-foreground">Why Hire Anamta?</h3>
          <p className="text-sm text-muted-foreground">The TL;DR for busy recruiters</p>
        </div>
      </div>

      {/* Quick Summary Card */}
      <div className="cosmic-border rounded-xl p-6 mb-6 border-green-500/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-blue flex items-center justify-center text-white font-bold text-xl shrink-0">
            A
          </div>
          <div>
            <h4 className="font-display font-bold text-xl text-foreground mb-2">Anamta Rizvi</h4>
            <p className="text-cosmic-purple font-medium mb-3">Agentic AI Engineer & Full-Stack ML Developer</p>
            <p className="text-muted-foreground">
              I build <span className="text-foreground">production-ready AI systems</span> that actually work. 
              From multi-agent orchestration to RAG pipelines, I focus on creating 
              <span className="text-foreground"> reliable, explainable, and scalable</span> solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Key Points */}
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="cosmic-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-cosmic-purple" />
            <h5 className="font-display font-semibold text-foreground">Specialized In</h5>
          </div>
          <ul className="space-y-2">
            {["Agentic AI & LLM Applications", "RAG Systems & Knowledge Retrieval", "Full-Stack ML Development", "Production ML Pipelines"].map(item => (
              <li key={item} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="cosmic-border rounded-xl p-5">
          <div className="flex items-center gap-2 mb-3">
            <Rocket className="w-5 h-5 text-cosmic-blue" />
            <h5 className="font-display font-semibold text-foreground">What I Bring</h5>
          </div>
          <ul className="space-y-2">
            {["Strong CS Fundamentals + ML Expertise", "End-to-End Project Ownership", "Clear Communication & Documentation", "Fast Learner, Proactive Problem Solver"].map(item => (
              <li key={item} className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-cosmic-cyan shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Looking For */}
      <div className="cosmic-border rounded-xl p-6 mb-6 bg-gradient-to-r from-cosmic-purple/5 to-cosmic-blue/5">
        <h5 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Currently Looking For
        </h5>
        <p className="text-muted-foreground mb-4">
          Internships or new-grad positions in:
        </p>
        <div className="flex flex-wrap gap-2">
          {["Agentic AI", "Applied ML", "AI Engineering", "LLM Applications", "Full-Stack AI"].map(role => (
            <span 
              key={role}
              className="px-4 py-2 rounded-full bg-muted text-foreground font-medium"
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-6 cosmic-border rounded-xl">
        <MessageCircle className="w-8 h-8 text-cosmic-purple" />
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold text-foreground">Interested in chatting?</p>
          <p className="text-muted-foreground">I'd love to discuss how I can contribute to your team</p>
        </div>
        <Button 
          className="bg-gradient-to-r from-cosmic-purple to-cosmic-blue hover:opacity-90 text-white"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
};

export default RecruiterAgent;
