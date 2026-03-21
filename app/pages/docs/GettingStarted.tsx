import { Rocket, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { CodeBlock } from "../../components/CodeBlock";

export function GettingStarted() {
  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <Rocket className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">2. Getting Started</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          Get up and running with THE Language in minutes. 
          Follow these steps to install the runtime and run your first program.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Installation</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">1</div>
            <p className="text-gray-400">Download the <code className="text-purple-300">THE_Setup.exe</code> installer from the official website.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">2</div>
            <p className="text-gray-400">Run the installer and follow the on-screen prompts to configure your environment.</p>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">3</div>
            <p className="text-gray-400">Open your terminal and verify the installation by typing <code className="text-purple-300 font-mono">the --version</code>.</p>
          </div>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white">First Program</h2>
        <p className="text-gray-400">Create a file named <code className="font-mono text-purple-300">hello.the</code> and add the following code:</p>
        <CodeBlock 
          filename="hello.the"
          code={`give("Hello, World!")`}
        />
        <div className="rounded-xl border border-white/5 bg-black/30 p-4">
          <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">Expected Output</div>
          <code className="text-green-400 text-sm font-mono">Hello, World!</code>
        </div>
        <p className="text-gray-400 mt-4">Run your program using the command:</p>
        <CodeBlock 
          filename="terminal"
          code={`the hello.the`}
        />
      </section>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <h3 className="mb-4 text-lg text-white">Next Steps</h3>
        <div className="space-y-3">
          <Link
            to="/docs/variables"
            className="flex items-center justify-between rounded-xl bg-white/5 p-4 transition-all hover:bg-white/10"
          >
            <span className="text-gray-300">Learn about Variables</span>
            <ArrowRight className="size-5 text-purple-400" />
          </Link>
          <Link
            to="/docs/data-types"
            className="flex items-center justify-between rounded-xl bg-white/5 p-4 transition-all hover:bg-white/10"
          >
            <span className="text-gray-300">Explore Data Types</span>
            <ArrowRight className="size-5 text-purple-400" />
          </Link>
        </div>
      </div>
    </div>
  );
}
