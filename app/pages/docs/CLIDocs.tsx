import { Terminal, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function CLIDocs() {
  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <Terminal className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Advanced</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">CLI Reference</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          The THE Command-Line Interface (CLI) is the primary tool for executing, testing, 
          and managing your THE Language applications.
        </p>
      </header>

      <section className="space-y-6 pt-10 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white tracking-tight underline underline-offset-8 decoration-purple-500/30">Run a File</h2>
        <p className="text-gray-400 leading-relaxed">Execute a `.the` source file from your terminal.</p>
        <CodeBlock 
          language="bash"
          code={`the main.the`}
        />
      </section>

      <section className="space-y-6 pt-10 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white tracking-tight underline underline-offset-8 decoration-purple-500/30">Check Version</h2>
        <p className="text-gray-400 leading-relaxed">Verify the current version of the THE environment installed.</p>
        <CodeBlock 
          language="bash"
          code={`the --version`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Output</div>
          <code className="text-green-400 font-mono">THE Language v0.1.0</code>
        </div>
      </section>

      <section className="space-y-6 pt-10 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white tracking-tight underline underline-offset-8 decoration-purple-500/30">Get Help</h2>
        <p className="text-gray-400 leading-relaxed">Display all available commands and options.</p>
        <CodeBlock 
          language="bash"
          code={`the --help`}
        />
      </section>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/introduction"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Restart Learning</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            What is THE
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
