import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router";

export function InputOutput() {
  return (
    <div className="space-y-12 text-gray-300">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-white">4. Input / Output</h1>
        <p className="text-lg leading-relaxed">
          THE provides simple keywords for interacting with the user via the terminal.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Input</h2>
        <p>Use the <code className="text-purple-400 font-mono">get</code> keyword to receive input from the user.</p>
        <CodeBlock 
          filename="input_example.the"
          code={`name = get()`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Output</h2>
        <p>Use the <code className="text-purple-400 font-mono">give</code> keyword to display information on the screen.</p>
        <CodeBlock 
          filename="output_example.the"
          code={`give("Hello")
give(name)`}
        />
      </section>

      <div className="flex justify-between pt-12 border-t border-white/5">
        <Link to="/docs/data-types" className="text-purple-400 hover:text-purple-300 transition-colors">← 3. Data Types</Link>
        <Link to="/docs/operators" className="text-purple-400 hover:text-purple-300 transition-colors">5. Operators →</Link>
      </div>
    </div>
  );
}
