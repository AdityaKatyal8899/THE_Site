import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function FlowControl() {
  const keywords = [
    { 
      t: "next", 
      d: "Skips the rest of the current loop iteration and moves to the next step.", 
      e: "LoopIn range(1, 5) with i {\n    if i == 3 { next }\n    give(i)\n}",
      o: "1 2 4 5"
    },
    { 
      t: "stop", 
      d: "Immediately exits the loop, regardless of the condition.", 
      e: "LoopIn range(1, 100) with i {\n    if i == 4 { stop }\n    give(i)\n}",
      o: "1 2 3"
    },
    { 
      t: "idle", 
      d: "A placeholder keyword that does nothing. Useful for empty blocks.", 
      e: "if status == true {\n    idle\n} else {\n    give(\"Starting...\")\n}",
      o: ""
    },
  ];

  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <Zap className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Advanced</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Flow Control</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          Fine-tune the execution of your program using specialized keywords to skip iterations, 
          break out of loops, or handle empty logic paths.
        </p>
      </header>

      <div className="space-y-10">
        {keywords.map((kw) => (
          <section key={kw.t} className="space-y-4 pt-10 border-t border-white/5 first:border-t-0 first:pt-0">
            <h2 className="text-2xl font-bold text-white tracking-tight italic text-purple-400">{kw.t}</h2>
            <p className="text-gray-400 leading-relaxed">{kw.d}</p>
            <CodeBlock filename={kw.t + ".the"} code={kw.e} />
            {kw.o && (
              <div className="rounded-xl border border-white/5 bg-black/30 p-4">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
                <code className="text-green-400 font-mono">{kw.o}</code>
              </div>
            )}
          </section>
        ))}
      </div>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/cli"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            CLI Reference
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
