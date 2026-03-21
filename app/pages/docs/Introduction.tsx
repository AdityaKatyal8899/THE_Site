import { BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { CodeBlock } from "../../components/CodeBlock";

export function Introduction() {
  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-purple-400">
          <BookOpen className="size-6" />
          <span className="text-sm font-bold tracking-widest uppercase">Introduction</span>
        </div>
        <h1 className="text-4xl font-bold text-white md:text-5xl">What is THE</h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
          THE is a modern, beginner-friendly programming language designed to bridge the gap between human thought and machine execution. 
          Built on top of Python, it combines English-like syntax with professional-grade error handling and performance.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">Core Philosophy</h2>
        <p className="text-gray-400 leading-relaxed">
          The primary goal of THE is to allow developers to focus on logic and problem-solving without being tripped up by complex syntax. 
          It's perfect for teaching computer science fundamentals, rapid prototyping, and building CLI tools.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight">One Quick Example</h2>
        <CodeBlock 
          filename="hello.the"
          code={`give("Welcome to THE Language")
name = "Dev"
give("Hello, " + name)`}
        />
      </section>

      <footer className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/getting-started"
          className="group flex flex-col items-end gap-2 text-right"
        >
          <span className="text-sm text-gray-500 font-medium">Next Step</span>
          <span className="flex items-center gap-2 text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            Installation
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </footer>
    </div>
  );
}
