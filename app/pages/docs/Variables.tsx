import { Box, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function Variables() {
  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <Box className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Fundamentals</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Variables</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          Variables are named containers used to store data values in memory. In THE, variables are dynamic and 
          can change their type during execution if reassigned.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Syntax</h2>
        <p className="text-gray-400">Assign a value using the assignment operator.</p>
        <CodeBlock 
          filename="syntax.the"
          code={`variable_name = value`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Example</h2>
        <CodeBlock 
          filename="variables.the"
          code={`score = 100
player = "Aditya"
give(player + " has " + score + " points")`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <code className="text-green-400 font-mono">Aditya has 100 points</code>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Notes</h2>
        <ul className="text-gray-400 list-disc pl-5 space-y-3">
          <li>Variable names must start with a letter or underscore.</li>
          <li>They cannot contain spaces or special characters except underscores.</li>
          <li>Names are case-sensitive (e.g., <code className="text-purple-400">score</code> and <code className="text-purple-400">Score</code> are different).</li>
        </ul>
      </section>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/data-types"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            Data Types
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
