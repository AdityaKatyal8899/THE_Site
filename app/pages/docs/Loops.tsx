import { CodeBlock } from "../../components/CodeBlock";
import { Link } from "react-router";

export function Loops() {
  return (
    <div className="space-y-12 text-gray-300">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-white">7. Loops</h1>
        <p className="text-lg leading-relaxed">
          Loops allow you to repeat a block of code multiple times.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">LoopIn (Range-based loop)</h2>
        <p>Iterates over a specific range of values.</p>
        <CodeBlock 
          filename="loop_in.the"
          code={`LoopIn i in range(0, 5) {
    give(i)
}`}
        />
        <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm italic">
          <strong>Note:</strong> "start" defines the beginning and "end" defines the exclusive limit.
          <br/>
          Example: <code className="font-mono">range(start=0, end=5)</code>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">LoopTill (Condition-based loop)</h2>
        <p>Runs as long as or until a condition is met.</p>
        <CodeBlock 
          filename="loop_till.the"
          code={`LoopTill a < 10 {
    a = a + 1
}`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Using "with" (Iterator Control)</h2>
        <p><code className="text-purple-400">with</code> is used to define the starting value of an iterator directly within the loop header.</p>
        <CodeBlock 
          filename="loop_with.the"
          code={`LoopTill i < 10 with i = 0 {
    give(i)
    i = i + 1
}`}
        />
      </section>

      <div className="flex justify-between pt-12 border-t border-white/5">
        <Link to="/docs/control-flow" className="text-purple-400 hover:text-purple-300 transition-colors">← 6. Control Flow</Link>
        <Link to="/docs/functions" className="text-purple-400 hover:text-purple-300 transition-colors">8. Functions →</Link>
      </div>
    </div>
  );
}
