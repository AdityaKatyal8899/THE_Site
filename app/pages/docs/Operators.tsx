import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function Operators() {
  const categories = [
    { 
      t: "Arithmetic", 
      d: "Perform mathematical operations.", 
      e: "give(10 + 5)\ngive(20 - 3)\ngive(5 * 4)\ngive(10 / 2)",
      o: "15\n17\n20\n5"
    },
    { 
      t: "Comparison", 
      d: "Compare two values, returning a boolean (true/false).", 
      e: "give(10 == 10)\ngive(5 != 3)\ngive(10 > 20)\ngive(5 < 8)",
      o: "true\ntrue\nfalse\ntrue"
    },
    { 
      t: "Logical", 
      d: "Combine or negate boolean conditions.", 
      e: "give(true and false)\ngive(true or false)\ngive(not true)",
      o: "false\ntrue\nfalse"
    },
  ];

  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <Calculator className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">7. Operators</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          Operators perform actions on variables and values. THE includes standard 
          arithmetic, comparison, and logical operators.
        </p>
      </section>

      <div className="grid gap-12">
        {categories.map((cat) => (
          <section key={cat.t} className="space-y-4 pt-8 border-t border-white/5 first:border-t-0 first:pt-0">
            <h2 className="text-2xl font-semibold text-white">{cat.t}</h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">{cat.d}</p>
            <CodeBlock filename={cat.t.toLowerCase() + ".the"} code={cat.e} />
            <div className="rounded-xl border border-white/5 bg-black/30 p-4">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
              <pre className="text-green-400 font-mono text-sm m-0 leading-relaxed">{cat.o}</pre>
            </div>
          </section>
        ))}
      </div>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/if" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Next Step</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              If Statement →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
