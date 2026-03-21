import { AlertCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function ErrorHandling() {
  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <AlertCircle className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">14. Error Handling</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          THE Language provides robust tools to handle and propagate errors using try-catch blocks 
          and specialized keywords.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Try-Catch</h2>
        <p className="text-gray-400">Handle exceptions without crashing your program.</p>
        <CodeBlock 
          filename="try_catch.the"
          code={`try {\n    a = 5 / 0\n} catch(e) {\n    give("Error: " + e)\n}`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <code className="text-green-400 text-sm font-mono">Error: division by zero</code>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white">Throw</h2>
        <p className="text-gray-400">Stop execution and return an error message manually.</p>
        <CodeBlock 
          filename="throw.the"
          code={`throw("Access Denied")`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <code className="text-red-400 text-sm font-mono">Uncaught Error: Access Denied</code>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white">Raise</h2>
        <p className="text-gray-400">Propagate an existing error object up the call stack.</p>
        <CodeBlock 
          filename="raise.the"
          code={`try {\n    #// ... some code //#\n} catch(e) {\n    raise(e)\n}`}
        />
      </section>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/flow-control" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Next Step</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              Flow Control →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
