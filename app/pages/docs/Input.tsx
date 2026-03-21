import { LogIn, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function Input() {
  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <LogIn className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Fundamentals</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Input</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          The <code className="text-purple-400 font-mono">get()</code> keyword allows your program to receive data directly from the user 
          during execution. It pauses the program until the user provides a value and presses enter.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Syntax</h2>
        <p className="text-gray-400 font-normal">Receive a value and store it in a variable.</p>
        <CodeBlock 
          filename="syntax.the"
          code={`variable = get()`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Example</h2>
        <CodeBlock 
          filename="input.the"
          code={`give("What is your name? ", end="")\nname = get()\ngive("Hello, " + name)`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Simulated Session</div>
          <div className="font-mono text-sm">
            <span className="text-gray-400">What is your name? </span>
            <span className="text-purple-400">Aditya</span>
            <br />
            <span className="text-green-400">Hello, Aditya</span>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Notes</h2>
        <ul className="text-gray-400 list-disc pl-5 space-y-3">
          <li>By default, <code className="text-purple-400 font-mono">get()</code> returns the input as a string.</li>
          <li>You can combine <code className="text-purple-400 font-mono">get()</code> with type keywords like <code className="text-purple-400 font-mono">INT(get())</code> to convert the input immediately.</li>
        </ul>
      </section>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/output"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            Output
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
