import { Link } from "react-router";
import { ArrowRight, BookOpen, Github, Globe, Linkedin, Mail } from "lucide-react";

export function Introduction() {
  const socials = [
    { label: "GitHub", icon: Github, href: "https://github.com/AdityaKatyal8899/THE", color: "text-gray-400 group-hover:text-white" },
    { label: "Portfolio", icon: Globe, href: "https://adityakatyal-portfolio.onrender.com/", color: "text-blue-400 group-hover:text-blue-300" },
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/aditya-katyal-1b6292296/", color: "text-blue-600 group-hover:text-blue-500" },
    { label: "Email", icon: Mail, href: "mailto:adityakatyal45678@gmail.com", color: "text-red-400 group-hover:text-red-300" },
  ];

  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <BookOpen className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">1. Introduction</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          THE is a beginner-friendly programming language built on top of Python, 
          designed to make coding feel like writing natural English.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Why THE exists</h2>
        <p className="text-gray-400 leading-relaxed max-w-3xl">
          Programming can be intimidating. THE removes the complexity of cryptic syntax 
          by using human-readable patterns, allowing you to focus on logic rather than symbols.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-white">Key Features</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
          <li className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-purple-400 font-medium mb-2">English-like Syntax</h3>
            <p className="text-sm text-gray-400">Read and write code that flows naturally like sentences.</p>
          </li>
          <li className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-purple-400 font-medium mb-2">Python Powered</h3>
            <p className="text-sm text-gray-400">Combines simplicity with the robust ecosystem and power of Python.</p>
          </li>
          <li className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-purple-400 font-medium mb-2">Beginner Friendly</h3>
            <p className="text-sm text-gray-400">Minimal learning curve for those starting their coding journey.</p>
          </li>
          <li className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
            <h3 className="text-purple-400 font-medium mb-2">Cross Platform</h3>
            <p className="text-sm text-gray-400">Write once and run anywhere Python is supported.</p>
          </li>
        </ul>
      </section>

      <section className="space-y-6 pt-8 border-t border-white/5">
        <h2 className="text-2xl font-semibold text-white">Community & Connect</h2>
        <p className="text-gray-400 mb-6">Connect with the creator of THE Language for support, feedback, or collaborations.</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {socials.map((social) => (
            <a 
              key={social.label}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/5 p-5 transition-all hover:bg-white/10"
            >
              <social.icon className={`size-6 ${social.color} transition-colors`} />
              <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">{social.label}</span>
            </a>
          ))}
        </div>
      </section>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/getting-started" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Next Step</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              Getting Started →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
