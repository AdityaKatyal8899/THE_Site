import { Box, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function Variables() {
  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <Box className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">3. Variables</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          Variables allow you to store and manage data dynamically. 
          In THE, variable names are case-sensitive and can hold any data type.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Syntax</h2>
        <p className="text-gray-400">Use the <code className="text-purple-400 font-mono">=</code> operator to assign a value to a name.</p>
        <CodeBlock 
          filename="variables.the"
          code={`a = 5\nname = "THE"\ngive(a)\ngive(name)`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <pre className="text-green-400 font-mono text-sm m-0">5\nTHE</pre>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Examples</h2>
        <CodeBlock 
          filename="variables.the"
          code={`age = 25
name = "THE Language"`}
        />
        <CodeBlock 
          filename="dynamic.the"
          code={`x = 10
x = "Now I am a string"`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Notes</h2>
        <ul className="text-gray-400 list-disc pl-5 space-y-2">
          <li>Variable names must start with a letter or underscore.</li>
          <li>They cannot contain spaces or special characters except underscores.</li>
          <li>Keywords like <code className="text-purple-400">if</code> or <code className="text-purple-400">func</code> cannot be used as names.</li>
        </ul>
      </section>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/data-types" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Next Step</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              Data Types →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
