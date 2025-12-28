import { FileText, Award, BookOpen } from "lucide-react";

const ResearchAgent = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-pink to-cosmic-purple flex items-center justify-center">
          <BookOpen className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-display font-bold text-xl text-foreground">Research & Academic Work</h3>
          <p className="text-sm text-muted-foreground">Publications, evaluations, and scholarly contributions</p>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Research Focus */}
        <div className="cosmic-border rounded-xl p-6">
          <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-cosmic-purple" />
            Research Interests
          </h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cosmic-purple mt-2 shrink-0" />
              <span>Multi-agent orchestration and coordination strategies for complex task decomposition</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cosmic-blue mt-2 shrink-0" />
              <span>Retrieval-Augmented Generation with hybrid search and knowledge graph integration</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cosmic-pink mt-2 shrink-0" />
              <span>Explainable AI methods for production ML systems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cosmic-cyan mt-2 shrink-0" />
              <span>LLM evaluation frameworks and benchmark design</span>
            </li>
          </ul>
        </div>

        {/* Evaluations */}
        <div className="cosmic-border rounded-xl p-6">
          <h4 className="font-display font-semibold text-foreground mb-4 flex items-center gap-2">
            <Award className="w-5 h-5 text-cosmic-blue" />
            Evaluation & Benchmarking
          </h4>
          <p className="text-muted-foreground mb-4">
            Experienced in designing and implementing evaluation frameworks for AI systems:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-muted/50">
              <h5 className="font-medium text-foreground mb-2">RAG Evaluation</h5>
              <p className="text-sm text-muted-foreground">
                Developed metrics for retrieval quality, answer faithfulness, and citation accuracy
              </p>
            </div>
            <div className="p-4 rounded-lg bg-muted/50">
              <h5 className="font-medium text-foreground mb-2">Agent Benchmarks</h5>
              <p className="text-sm text-muted-foreground">
                Created task-completion benchmarks for multi-agent system evaluation
              </p>
            </div>
          </div>
        </div>

        {/* Placeholder for future publications */}
        <div className="cosmic-border rounded-xl p-6 border-dashed opacity-60">
          <p className="text-center text-muted-foreground">
            📝 Publications and papers coming soon...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResearchAgent;
