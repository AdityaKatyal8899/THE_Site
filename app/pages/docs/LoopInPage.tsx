import { Repeat, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function LoopInPage() {
  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <Repeat className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">11. LoopIn</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          Use <code className="text-purple-400 font-mono">LoopIn</code> to repeat a block 
          while iterating through a structure using an iterator.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Syntax</h2>
        <CodeBlock 
          filename="syntax"
          code={`LoopIn structure with iterator {\n    #// Statements //#\n}`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Example</h2>
        <CodeBlock 
          filename="loopin.the"
          code={`LoopIn range(1, 5) with i {\n    give(i)\n}`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <pre className="text-green-400 font-mono text-sm m-0 leading-relaxed">1\n2\n3\n4\n5</pre>
        </div>
      </section>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/looptill" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Next Step</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              LoopTill →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
