import { Type, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function DataTypes() {
  const types = [
    { t: "INT", d: "Represents whole numbers, positive or negative.", e: "a = INT(5)", o: "5" },
    { t: "STR", d: "Used for text and sequences of characters.", e: 'name = STR("THE")', o: "THE" },
    { t: "BOOL", d: "Represents logical values: true or false.", e: "is_active = BOOL(true)", o: "true" },
    { t: "CHAR", d: "Used for single character values.", e: "grade = CHAR('A')", o: "A" },
    { t: "FLO", d: "Represents numbers with decimal points.", e: "pi = FLO(3.14)", o: "3.14" },
    { t: "BINT", d: "Used for extra large integers.", e: "huge = BINT(9007199254740991)", o: "9007199254740991" },
  ];

  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <Type className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">4. Data Types</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          THE Language supports several primitive data types. Use explicit type keywords 
          to define or convert values clearly.
        </p>
      </section>

      <div className="grid gap-12">
        {types.map((type) => (
          <section key={type.t} className="space-y-4 pt-8 border-t border-white/5 first:border-t-0 first:pt-0">
            <h2 className="text-2xl font-semibold text-white">{type.t}</h2>
            <p className="text-gray-400 leading-relaxed max-w-2xl">{type.d}</p>
            <CodeBlock filename={type.t.toLowerCase() + ".the"} code={`${type.e}\ngive(${type.e.split('=')[0].trim()})`} />
            <div className="rounded-xl border border-white/5 bg-black/30 p-4">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
              <code className="text-green-400">{type.o}</code>
            </div>
          </section>
        ))}
      </div>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/input" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Next Step</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              Input →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
