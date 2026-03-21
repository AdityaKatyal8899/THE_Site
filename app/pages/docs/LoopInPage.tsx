import { Repeat, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function LoopInPage() {
  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <Repeat className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Control Flow</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">LoopIn</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          The <code className="text-purple-400 font-mono">LoopIn</code> statement is used to iterate through a sequence or range 
          while assigning each value to an iterator variable.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Syntax</h2>
        <p className="text-gray-400">Iterate through a specified structure using an iterator name.</p>
        <CodeBlock 
          filename="syntax.the"
          code={`LoopIn range(start, end) with iterator {\n    #// Statements //#\n}`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Example</h2>
        <CodeBlock 
          filename="loopin.the"
          code={`LoopIn range(1, 4) with i {\n    give("Count: " + i)\n}`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <pre className="text-green-400 font-mono text-sm m-0 leading-relaxed">Count: 1\nCount: 2\nCount: 3\nCount: 4</pre>
        </div>
      </section>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/looptill"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            LoopTill
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
