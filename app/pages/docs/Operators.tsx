import { Calculator, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function Operators() {
  const categories = [
    { 
      t: "Arithmetic", 
      d: "Standard mathematical operations on numbers.", 
      e: "give(10 + 5) #// 15 //#\ngive(10 - 5) #// 5 //#\ngive(10 * 5) #// 50 //#\ngive(10 / 5) #// 2 //#",
    },
    { 
      t: "Comparison", 
      d: "Compare values and return a logic (BOOL) result.", 
      e: "give(10 == 10) #// true //#\ngive(10 > 5)  #// true //#\ngive(5 < 3)   #// false //#",
    },
    { 
      t: "Logical", 
      d: "Combine or negate boolean conditions.", 
      e: "give(true and false) #// false //#\ngive(true or false)  #// true //#\ngive(not true)       #// false //#",
    },
  ];

  return (
    <div className="animate-in fade-in duration-700 space-y-12">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <Calculator className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Fundamentals</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Operators</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          Operators enable you to perform calculations and logic checks on data. THE supports all standard 
          arithmetic, comparison, and boolean logic operations.
        </p>
      </header>

      <div className="space-y-10">
        {categories.map((cat) => (
          <section key={cat.t} className="space-y-4 pt-10 border-t border-white/5 first:border-t-0 first:pt-0">
            <h2 className="text-2xl font-bold text-white tracking-tight">{cat.t} Operators</h2>
            <p className="text-gray-400 leading-relaxed">{cat.d}</p>
            <CodeBlock filename={cat.t.toLowerCase() + ".the"} code={cat.e} />
          </section>
        ))}
      </div>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/if"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            If Statement
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
