import { Terminal, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function CLIDocs() {
  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <Terminal className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">16. CLI Reference</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          The THE command-line interface provides essential tools for running and managing your programs.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Execute a File</h2>
        <CodeBlock 
          filename="terminal"
          code={`the hello.the`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 font-sans">Output</div>
          <code className="text-green-400 text-sm font-mono">Hello, World!</code>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white">Check Version</h2>
        <CodeBlock 
          filename="terminal"
          code={`the --version`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 font-sans">Output</div>
          <code className="text-green-400 text-sm font-mono">THE Language v0.1.0</code>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white">Get Help</h2>
        <CodeBlock 
          filename="terminal"
          code={`the --help`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 font-sans">Output</div>
          <pre className="text-green-400 text-sm font-mono m-0">Usage: the [file] [options]\n\nOptions:\n  --version  Show version\n  --help     Show help</pre>
        </div>
      </section>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/introduction" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Back to Start</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              Introduction →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
