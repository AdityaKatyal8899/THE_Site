import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { CodeBlock } from "../../components/CodeBlock";

export function ControlFlow() {
  return (
    <div className="prose prose-invert max-w-none">
      <section className="space-y-6">
        <h1 className="text-4xl font-bold text-white">6. Control Flow</h1>
        <p className="text-lg leading-relaxed text-gray-400">
          Manage the execution path of your program using logical conditions.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">If Statements</h2>
        <p>Execute a block of code only if a condition is true.</p>
        <CodeBlock
          filename="if_example.the"
          code={`if a == 5 {
    give("Yes")
}`}
        />
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">If-Else</h2>
        <p>Provide an alternative path when a condition is false.</p>
        <CodeBlock
          filename="if_else_example.the"
          code={`if a == 5 {
    give("Yes")
} else {
    give("No")
}`}
        />
      </section>

      <h3 className="mb-3 mt-8 text-xl text-white">Elif (Else If)</h3>
      <p className="mb-3 text-gray-300">
        Use <code className="rounded bg-white/10 px-2 py-1 text-purple-300">elif</code> for multiple conditions:
      </p>

      <CodeBlock
        filename="elif.the"
        code={`score = 85

if score >= 90 {
    give("Grade: A")
} elif score >= 80 {
    give("Grade: B")
} elif score >= 70 {
    give("Grade: C")
} else {
    give("Grade: F")
}`}
      />

      <h2 className="mb-4 mt-12 text-2xl text-white">Comparison Operators</h2>
      <p className="mb-4 text-gray-300">
        Use these operators to compare values:
      </p>

      <CodeBlock
        filename="comparison.the"
        code={`a = 10
b = 5

a == b    // Equal to (false)
a != b    // Not equal to (true)
a > b     // Greater than (true)
a < b     // Less than (false)
a >= b    // Greater than or equal to (true)
a <= b    // Less than or equal to (false)`}
      />

      <h2 className="mb-4 mt-12 text-2xl text-white">Logical Operators</h2>
      <p className="mb-4 text-gray-300">
        Combine multiple conditions:
      </p>

      <CodeBlock
        filename="logical.the"
        code={`age = 25
is_student = true

// AND: Both conditions must be true
if age >= 18 and age <= 65 {
    give("Working age")
}

// OR: At least one condition must be true
if age < 18 or is_student {
    give("Student discount available")
}

// NOT: Negates the condition
if not is_student {
    give("Regular price")
}`}
      />

      <div className="flex justify-between pt-12 border-t border-white/5">
        <Link to="/docs/operators" className="text-purple-400 hover:text-purple-300 transition-colors">← 5. Operators</Link>
        <Link to="/docs/loops" className="text-purple-400 hover:text-purple-300 transition-colors">7. Loops →</Link>
      </div>
    </div>
  );
}
