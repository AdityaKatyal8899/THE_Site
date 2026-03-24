import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Download as DownloadIcon, Terminal, Laptop, ShieldCheck, ArrowRight, CheckCircle2, History, Zap, Brackets, BookOpen } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ScrollReveal } from "../components/ScrollReveal";

const versions = [
  {
    version: "v0.2.0",
    label: "Latest",
    file: "/THE_v0.2.0.exe",
    size: "10.1 MB",
    description: "Featured release with return statements and array methods.",
    primary: true,
  },
  {
    version: "v0.1.0",
    label: "Stable",
    file: "/THE_Setup.exe",
    size: "10.1 MB",
    description: "Original stable release for legacy projects.",
    primary: false,
  },
];

const highlights = [
  {
    title: "Core Language Improvements",
    items: [
      "Return Statements: Functions can now return values for reusable logic.",
      "Execution Model: Better handling of scope, arguments, and execution flow.",
      "Foundation prepared for future performance upgrades."
    ]
  },
  {
    title: "Array Capabilities",
    items: [
      "remove(value): Removes first occurrence of a value.",
      "removeAt(index): Removes element at specific index.",
      "range(start, end): Easily generate sequences."
    ]
  },
  {
    title: "CLI & Tooling",
    items: [
      "--version flag added for version checking.",
      "Cleaner CLI usage output and help formatting.",
      "Fixed multiple parser edge cases and improved error handling."
    ]
  }
];

export function Download() {
  return (
    <div className="min-h-screen bg-[#0a0118] text-gray-300 selection:bg-purple-500/30 selection:text-white font-sans">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="space-y-24">
          {/* Hero Section */}
          <ScrollReveal>
            <div className="text-center space-y-8 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-bold tracking-widest text-purple-400 uppercase"
              >
                <ShieldCheck className="size-3.5" />
                Official Releases
              </motion.div>
              <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
                Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">THE Language</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Choose the version that fits your needs. We recommend v0.2.0 for all new projects.
              </p>
            </div>
          </ScrollReveal>

          {/* Version Selection */}
          <ScrollReveal>
            <div className="grid gap-8 lg:grid-cols-2">
              {versions.map((v) => (
                <motion.div
                  key={v.version}
                  whileHover={{ y: -5 }}
                  className={`relative rounded-[2.5rem] border ${v.primary ? 'border-purple-500/30 bg-white/5' : 'border-white/5 bg-white/[0.02]'} p-10 overflow-hidden group`}
                >
                  {v.primary && (
                    <div className="absolute top-0 right-0 bg-purple-500 px-6 py-2 rounded-bl-3xl text-xs font-black text-white uppercase tracking-tighter">
                      Recommended
                    </div>
                  )}
                  <div className="space-y-8">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <h2 className="text-3xl font-black text-white tracking-tight">{v.version}</h2>
                          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest px-2 py-0.5 border border-white/10 rounded-md">
                            {v.label}
                          </span>
                        </div>
                        <p className="text-gray-400 font-medium text-sm">{v.description}</p>
                      </div>
                      <div className={`p-4 rounded-2xl ${v.primary ? 'bg-purple-500/10' : 'bg-white/5'}`}>
                        <History className={`size-8 ${v.primary ? 'text-purple-400' : 'text-gray-500'}`} />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-2xl bg-black/20 border border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Platform</p>
                        <p className="text-white font-bold text-sm">Windows</p>
                      </div>
                      <div className="p-4 rounded-2xl bg-black/20 border border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">File Size</p>
                        <p className="text-white font-bold text-sm">{v.size}</p>
                      </div>
                    </div>

                    <a
                      href={v.file}
                      download
                      className={`flex items-center justify-center gap-3 rounded-2xl px-8 py-5 font-bold transition-all shadow-xl text-sm ${
                        v.primary 
                        ? 'bg-white text-[#0a0118] hover:bg-purple-100 shadow-white/5' 
                        : 'bg-white/5 text-white hover:bg-white/10'
                      }`}
                    >
                      <DownloadIcon className="size-5" />
                      Download {v.version}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* What's New Section */}
          <ScrollReveal>
            <section className="pt-24 border-t border-white/5">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-4xl font-bold text-white">What's New in v0.2.0</h2>
                <p className="text-gray-400 max-w-2xl mx-auto">A significant upgrade focusing on language features, runtime stability, and array manipulation.</p>
              </div>

              <div className="grid gap-12 md:grid-cols-3">
                {highlights.map((h, i) => (
                  <div key={i} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                        {i === 0 ? <Zap className="size-5" /> : i === 1 ? <Brackets className="size-5" /> : <Terminal className="size-5" />}
                      </div>
                      <h3 className="text-xl font-bold text-white">{h.title}</h3>
                    </div>
                    <ul className="space-y-4">
                      {h.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 group">
                          <CheckCircle2 className="size-5 text-purple-500/50 group-hover:text-purple-500 transition-colors shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400 leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Quick Setup */}
          <ScrollReveal>
            <section className="py-24 rounded-[3rem] bg-gradient-to-br from-purple-900/10 to-transparent border border-white/5 p-12 text-center space-y-12">
              <h2 className="text-3xl font-bold text-white">Three-Step Setup</h2>
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  { t: "Download", d: "Get the v0.2.0 executable", i: DownloadIcon },
                  { t: "Place", d: "Add THE.exe to your System PATH", i: Laptop },
                  { t: "Verify", d: "Run 'the --version' in terminal", i: Terminal },
                ].map((s, i) => (
                  <div key={i} className="space-y-4">
                    <div className="mx-auto size-16 flex items-center justify-center rounded-2xl bg-white/5 text-purple-400 border border-white/5">
                      <s.i className="size-7" />
                    </div>
                    <h4 className="font-black text-white uppercase tracking-widest text-sm">{s.t}</h4>
                    <p className="text-xs text-gray-500 font-bold">{s.d}</p>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Navigation */}
          <div className="text-center">
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 text-purple-400 font-bold hover:text-purple-300 transition-colors group"
            >
              Go to Documentation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
