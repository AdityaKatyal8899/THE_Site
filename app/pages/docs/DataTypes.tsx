import { Type, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function DataTypes() {
  const types = [
    { 
      t: "INT", 
      d: "Used for whole numbers without decimals.", 
      e: "age = INT(25)", 
      o: "25" 
    },
    { 
      t: "STR", 
      d: "Represents text and character sequences.", 
      e: 'name = STR("THE")', 
      o: "THE" 
    },
    { 
      t: "BOOL", 
      d: "Logical values representing true or false.", 
      e: "isActive = BOOL(true)", 
      o: "true" 
    },
    { 
      t: "CHAR", 
      d: "Represents a single character.", 
      e: "grade = CHAR('A')", 
      o: "A" 
    },
    { 
      t: "FLO", 
      d: "Floating-point numbers with decimal precision.", 
      e: "price = FLO(19.99)", 
      o: "19.99" 
    },
    { 
      t: "BINT", 
      d: "Big integers for very large whole numbers.", 
      e: "stars = BINT(999999999999)", 
      o: "999999999999" 
    },
  ];

  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <Type className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Fundamentals</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Data Types</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          THE provides a set of core data types to represent different kinds of information. 
          Use these keywords to explicitly define or cast values.
        </p>
      </header>

      <div className="space-y-10">
        {types.map((type) => (
          <section key={type.t} className="space-y-4 pt-10 border-t border-white/5 first:border-t-0 first:pt-0">
            <h2 className="text-2xl font-bold text-white tracking-tight underline underline-offset-8 decoration-purple-500/30">{type.t}</h2>
            <p className="text-gray-400 leading-relaxed">{type.d}</p>
            <div className="grid gap-4">
              <CodeBlock 
                filename={type.t.toLowerCase() + ".the"} 
                code={`${type.e}\ngive(${type.e.split('=')[0].trim()})`} 
              />
              <div className="rounded-xl border border-white/5 bg-black/30 p-4">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">Expected Output</div>
                <code className="text-green-400 font-mono">{type.o}</code>
              </div>
            </div>
          </section>
        ))}
      </div>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/input"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            Input
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
