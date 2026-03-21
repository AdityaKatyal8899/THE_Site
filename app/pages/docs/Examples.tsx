import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router";

export function Examples() {
  return (
    <div className="space-y-12 text-gray-300">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-white">12. Examples</h1>
        <p className="text-lg leading-relaxed">
          Practical examples of THE Language in action.
        </p>
      </section>

      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">Example 1: Basic Math</h2>
          <CodeBlock 
            filename="math.the"
            code={`a = 10
b = 20
give(a + b)`}
          />
        </div>

        <div className="space-y-4 pt-8">
          <h2 className="text-2xl font-semibold text-white">Example 2: Looping</h2>
          <CodeBlock 
            filename="loop.the"
            code={`LoopIn i in range(0, 3) {
    give(i)
}`}
          />
        </div>

        <div className="space-y-4 pt-8">
          <h2 className="text-2xl font-semibold text-white">Example 3: Error Handling</h2>
          <CodeBlock 
            filename="error.the"
            code={`try {
    throw("Error occurred")
}
catch(e) {
    give(e)
}`}
          />
        </div>
      </section>

      <div className="flex justify-between pt-12 border-t border-white/5">
        <Link to="/docs/cli" className="text-purple-400 hover:text-purple-300 transition-colors">← 11. CLI Reference</Link>
        <Link to="/" className="text-purple-400 hover:text-purple-300 transition-colors">Back to Home</Link>
      </div>
    </div>
  );
}
