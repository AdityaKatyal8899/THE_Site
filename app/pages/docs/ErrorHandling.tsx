import { AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function ErrorHandling() {
  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <AlertCircle className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Advanced</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Error Handling</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          THE provides professional-grade tools for managing runtime failures. Use structured 
          try-catch blocks to catch errors, or throw/raise keywords to manage custom exceptions.
        </p>
      </header>

      <section className="space-y-6 pt-10 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white tracking-tight underline underline-offset-8 decoration-purple-500/30">Try-Catch</h2>
        <p className="text-gray-400 leading-relaxed">
          Use <code className="text-purple-400 font-mono">try-catch</code> to attempt a block of code and handle any 
          errors that occur without stopping program execution.
        </p>
        <CodeBlock 
          filename="try_catch.the"
          code={`try {\n    result = 10 / 0\n} catch(error) {\n    give("Handled: " + error)\n}`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <code className="text-green-400 font-mono">Handled: division by zero</code>
        </div>
      </section>

      <section className="space-y-6 pt-10 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white tracking-tight underline underline-offset-8 decoration-purple-500/30">Throw</h2>
        <p className="text-gray-400 leading-relaxed">
          The <code className="text-purple-400 font-mono">throw</code> keyword allows you to manually create an error 
          and stop the current scope of execution with a custom message.
        </p>
        <CodeBlock 
          filename="throw.the"
          code={`if balance < 0 {\n    throw("Insufficient Funds")\n}`}
        />
      </section>

      <section className="space-y-6 pt-10 border-t border-white/5">
        <h2 className="text-2xl font-bold text-white tracking-tight underline underline-offset-8 decoration-purple-500/30">Raise</h2>
        <p className="text-gray-400 leading-relaxed">
          The <code className="text-purple-400 font-mono">raise</code> keyword is used to re-trigger an error that was 
          already caught, typically after performing some logging or cleanup.
        </p>
        <CodeBlock 
          filename="raise.the"
          code={`try {\n    #// unsafe operation //#\n} catch(e) {\n    give("Logging error...")\n    raise(e)\n}`}
        />
      </section>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/flow-control"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            Flow Control
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
