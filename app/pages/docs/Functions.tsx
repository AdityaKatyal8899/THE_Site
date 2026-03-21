import { Code2, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function Functions() {
  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <Code2 className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">13. Functions</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          Functions allow you to group code into reusable blocks. 
          THE Language supports both <code className="text-purple-400">func</code> and <code className="text-purple-400">function</code> keywords.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Syntax</h2>
        <div className="space-y-4">
          <p className="text-gray-400">Using the short version:</p>
          <CodeBlock 
            filename="syntax_short"
            code={`func name(args) {\n    // Code\n    return value\n}`}
          />
          <p className="text-gray-400">Using the full version:</p>
          <CodeBlock 
            filename="syntax_full"
            code={`function name(args) {\n    // Code\n    return value\n}`}
          />
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white">Example</h2>
        <CodeBlock 
          filename="function.the"
          code={`func add(a, b) {\n    return a + b\n}\n\nresult = add(5, 10)\ngive(result)`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <code className="text-green-400 text-sm font-mono">15</code>
        </div>
      </section>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/error-handling" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Next Step</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              Error Handling →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
