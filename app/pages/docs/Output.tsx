import { LogOut, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function Output() {
  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <LogOut className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">6. Output</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          Use the <code className="text-purple-400 font-mono">give()</code> keyword to display 
          information to the console. You can control the beginning and end of each output message.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Syntax</h2>
        <CodeBlock 
          filename="syntax"
          code={`give(value, start="prefix", end="suffix")`}
        />
      </section>

      <section className="space-y-10">
        <h2 className="text-2xl font-semibold text-white">Parameters</h2>
        
        <div className="space-y-8">
          <div className="space-y-3">
            <h3 className="text-xl font-medium text-purple-300">start</h3>
            <p className="text-gray-400 leading-relaxed">
              The <code className="text-purple-300 font-mono">start</code> parameter allows you to specify a string that will be 
              prepended to your output message. This is helpful for adding consistent prefixes like 
              timestamps, labels, or decorative symbols to your logs.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium text-purple-300">end</h3>
            <p className="text-gray-400 leading-relaxed">
              The <code className="text-purple-300 font-mono">end</code> parameter defines what character or string appears at the 
              very end of your output. By default, <code className="text-purple-300 font-mono">give()</code> adds a newline, 
              but you can change this to a space, a comma, or any custom text to keep multiple outputs on the same line.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6 pt-4 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white">Example</h2>
        <CodeBlock 
          filename="output_params.the"
          code={`#// Standard output //#
give("Hello")

#// With custom start and end //#
give("Success", start="[LOG] ", end="!!!\\n")

#// Multiple gives on the same line //#
give("Processing", end="... ")
give("Done", start="")`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4 font-mono text-sm leading-relaxed">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 font-sans">Expected Output</div>
          <div className="text-green-400">Hello</div>
          <div className="text-green-400">[LOG] Success!!!</div>
          <div className="text-green-400">Processing... Done</div>
        </div>
      </section>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/operators" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Next Step</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              Operators →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
