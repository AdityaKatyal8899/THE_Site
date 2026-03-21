import { LogOut, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function Output() {
  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <LogOut className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Fundamentals</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Output</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          The <code className="text-purple-400 font-mono">give()</code> keyword is used to display output to the console. 
          It is highly customizable, allowing you to control prefixes and suffixes for every message.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Syntax</h2>
        <p className="text-gray-400 font-normal">Print any value or variable to the screen.</p>
        <CodeBlock 
          filename="syntax.the"
          code={`give(value, start="prefix", end="suffix")`}
        />
      </section>

      <section className="space-y-10">
        <h2 className="text-2xl font-bold text-white tracking-tight">Parameters</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h3 className="text-lg font-bold text-purple-300">start</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Adds a string to the beginning of the output. Default is empty.
            </p>
          </div>
          <div className="space-y-3 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
            <h3 className="text-lg font-bold text-purple-300">end</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Adds a string to the end of the output. Default is a newline (<code className="text-purple-300 font-mono">\n</code>).
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Example</h2>
        <CodeBlock 
          filename="output.the"
          code={`#// Standard output //#\ngive("Hello")\n\n#// Custom parameters //#\ngive("Success", start="[LOG] ", end="!!!\\n")\n\n#// Continuous output //#\ngive("Working", end="... ")\ngive("Done", start="")`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <div className="font-mono text-sm space-y-1">
            <div className="text-green-400 italic">Hello</div>
            <div className="text-green-400 italic">[LOG] Success!!!</div>
            <div className="text-green-400 italic">Working... Done</div>
          </div>
        </div>
      </section>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/operators"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            Operators
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
