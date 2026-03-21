import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router";

export function FlowControlKeywords() {
  return (
    <div className="space-y-12 text-gray-300">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-white">10. Flow Control Keywords</h1>
        <p className="text-lg leading-relaxed">
          Specific keywords that alter the execution flow within loops and logic blocks.
        </p>
      </section>

      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white font-mono text-purple-400">next</h2>
          <p>Skips the rest of the current loop iteration and moves to the next one.</p>
          <CodeBlock 
            filename="next_example.the"
            code={`LoopIn i in range(0, 5) {
    if i == 2 {
        next
    }
    give(i)
}`}
          />
        </div>

        <div className="space-y-4 pt-8">
          <h2 className="text-2xl font-semibold text-white font-mono text-purple-400">stop</h2>
          <p>Immediately breaks out of the current loop.</p>
          <CodeBlock 
            filename="stop_example.the"
            code={`LoopTill true {
    give("Running...")
    stop
}`}
          />
        </div>

        <div className="space-y-4 pt-8">
          <h2 className="text-2xl font-semibold text-white font-mono text-purple-400">idle</h2>
          <p>A placeholder keyword that does nothing. Useful as a placeholder for code you haven't written yet.</p>
          <CodeBlock 
            filename="idle_example.the"
            code={`if true {
    idle
}`}
          />
        </div>
      </section>

      <div className="flex justify-between pt-12 border-t border-white/5">
        <Link to="/docs/error-handling" className="text-purple-400 hover:text-purple-300 transition-colors">← 9. Error Handling</Link>
        <Link to="/docs/cli" className="text-purple-400 hover:text-purple-300 transition-colors">11. CLI Reference →</Link>
      </div>
    </div>
  );
}
