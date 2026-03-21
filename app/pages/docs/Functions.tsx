import { Code2, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function Functions() {
  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <Code2 className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Advanced</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Functions</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          Functions are reusable blocks of code that perform specific tasks. They help in organizing 
          code, reducing repetition, and improving maintainability.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Syntax</h2>
        <div className="space-y-4">
          <p className="text-gray-400">THE supports both <code className="text-purple-400 font-mono">func</code> and the full 
          <code className="text-purple-400 font-mono"> function</code> keyword.</p>
          <CodeBlock 
            filename="syntax.the"
            code={`func name(parameter1, parameter2) {\n    #// Code to execute //#\n    return result\n}`}
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Example</h2>
        <CodeBlock 
          filename="functions.the"
          code={`func greet(name) {\n    return "Hello, " + name\n}\n\nmessage = greet("Aditya")\ngive(message)`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <code className="text-green-400 font-mono">Hello, Aditya</code>
        </div>
      </section>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/error-handling"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            Error Handling
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
