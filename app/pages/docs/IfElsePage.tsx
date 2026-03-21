import { GitBranch, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function IfElsePage() {
  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <GitBranch className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Control Flow</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">If-Else</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          The <code className="text-purple-400 font-mono">if-else</code> construct provides a logical branching mechanism, 
          executing one block of code if the condition is true, and another if it is false.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Syntax</h2>
        <CodeBlock 
          filename="syntax.the"
          code={`if condition {\n    #// If true //#\n} else {\n    #// If false //#\n}`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Example</h2>
        <CodeBlock 
          filename="if_else.the"
          code={`score = 45\n\nif score >= 50 {\n    give("Pass")\n} else {\n    give("Fail")\n}`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <code className="text-green-400 font-mono">Fail</code>
        </div>
      </section>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/loopin"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            LoopIn
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
