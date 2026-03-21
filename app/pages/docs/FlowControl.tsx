import { Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function FlowControl() {
  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <Zap className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">15. Flow Control</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          Manage the execution flow of loops and functions with specialized keywords.
          These tools help you build more complex logic by controlling when code repeats or stops.
        </p>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white italic text-purple-400">next</h2>
        <p className="text-gray-400 leading-relaxed">
          The <code className="text-purple-300">next</code> keyword is used inside loops to skip the rest of the current iteration. 
          When the program hits <code className="text-purple-300">next</code>, it jumps immediately back to the start of the loop for the next step.
        </p>
        <CodeBlock filename="next.the" code={`LoopIn range(1, 5) with i {\n    if i == 3 { next }\n    give(i)\n}`} />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <code className="text-green-400 text-sm font-mono">1 2 4 5</code>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white italic text-purple-400">stop</h2>
        <p className="text-gray-400 leading-relaxed">
          The <code className="text-purple-300">stop</code> keyword immediately terminates a loop, even if the condition is still true.
          It is useful for exiting a search or stopping a process once a specific goal is achieved.
        </p>
        <CodeBlock filename="stop.the" code={`LoopIn range(1, 10) with i {\n    if i == 4 { stop }\n    give(i)\n}`} />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <code className="text-green-400 text-sm font-mono">1 2 3</code>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white italic text-purple-400">idle</h2>
        <p className="text-gray-400 leading-relaxed">
          The <code className="text-purple-300">idle</code> keyword acts as a placeholder when a block of code is required but no action is needed.
          It is often used when you want a condition to do nothing while still being syntactically correct.
        </p>
        <CodeBlock filename="idle.the" code={`if status == "ready" {\n    idle\n} else {\n    give("Waiting...")\n}`} />
      </section>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/cli" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Next Step</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              CLI Reference →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
