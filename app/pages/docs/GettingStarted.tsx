import { Rocket, ArrowRight, Download, Terminal } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { CodeBlock } from "../../components/CodeBlock";

export function GettingStarted() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <Rocket className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Getting Started</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">Installation</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          Getting THE Language up and running on your system is straightforward. 
          Follow these steps to install the environment and write your first program.
        </p>
      </header>

      <section className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">1. Download the Installer</h2>
          <p className="text-gray-400 leading-relaxed">
            Visit the <Link to="/download" className="text-purple-400 hover:text-purple-300 font-medium underline underline-offset-4">Download Page</Link> and get the latest version of `THE_Setup.exe` for Windows.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">2. Installation</h2>
          <p className="text-gray-400 leading-relaxed">
            Run the executable and follow the setup wizard. The installer will automatically configure the necessary environment variables for your terminal.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-tight">3. Verify Installation</h2>
          <p className="text-gray-400 leading-relaxed">
            Open your terminal (CMD or PowerShell) and type:
          </p>
          <CodeBlock 
            language="bash"
            code="the --version"
          />
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Your First Program</h2>
        <p className="text-gray-400 leading-relaxed">
          Create a file named `hello.the` and add the following line:
        </p>
        <CodeBlock 
          filename="hello.the"
          code={`give("Hello World")`}
        />
        <p className="text-gray-400 leading-relaxed">
          Then execute it using:
        </p>
        <CodeBlock 
          language="bash"
          code="the hello.the"
        />
      </section>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/variables"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            Variables
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
