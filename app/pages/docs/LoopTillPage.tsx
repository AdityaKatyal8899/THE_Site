import { RotateCcw, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function LoopTillPage() {
  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <RotateCcw className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Control Flow</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">LoopTill</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          The <code className="text-purple-400 font-mono">LoopTill</code> keyword repeats a block of code continuously 
          as long as a specific boolean condition remains true. 
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Syntax</h2>
        <div className="space-y-4">
          <p className="text-gray-400">Standard format:</p>
          <CodeBlock 
            filename="syntax.the"
            code={`LoopTill condition {\n    #// Statements //#\n}`}
          />
          <p className="text-gray-400">With parentheses (optional):</p>
          <CodeBlock 
            filename="syntax_alt.the"
            code={`LoopTill (condition) {\n    #// Statements //#\n}`}
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">The 'with' Keyword</h2>
        <p className="text-gray-400 leading-relaxed">
          While <code className="text-purple-400 font-mono">LoopTill</code> is primarily condition-based, you can use the 
          <code className="text-purple-400 font-mono">with</code> keyword to bind an external counter or state to the loop scope. 
          This is especially useful for tracking state changes within a logical loop.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Example</h2>
        <CodeBlock 
          filename="looptill.the"
          code={`a = 0\nLoopTill a < 3 {\n    give("Iterating: " + a)\n    a = a + 1\n}`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <pre className="text-green-400 font-mono text-sm m-0 leading-relaxed">Iterating: 0\nIterating: 1\nIterating: 2</pre>
        </div>
      </section>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/functions"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            Functions
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
