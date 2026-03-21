import { RotateCcw, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function LoopTillPage() {
  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <RotateCcw className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">12. LoopTill</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          The <code className="text-purple-400 font-mono">LoopTill</code> keyword repeats 
          code while a condition remains true. Parentheses are optional.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Syntax</h2>
        <div className="space-y-4">
          <p className="text-gray-400">Standard format:</p>
          <CodeBlock 
            filename="syntax"
            code={`LoopTill condition {\n    // statement\n}`}
          />
          <p className="text-gray-400">With parentheses:</p>
          <CodeBlock 
            filename="syntax_alt"
            code={`LoopTill (condition) {\n    // statement\n}`}
          />
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white">Example</h2>
        <CodeBlock 
          filename="looptill.the"
          code={`a = 0\nLoopTill a < 5 {\n    give(a)\n    a = a + 1\n}`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <pre className="text-green-400 font-mono text-sm m-0 leading-relaxed">0\n1\n2\n3\n4</pre>
        </div>
      </section>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/functions" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Next Step</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              Functions →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
