import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Download as DownloadIcon, Terminal, Laptop, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ScrollReveal } from "../components/ScrollReveal";

const steps = [
  {
    title: "1. Download",
    description: "Get the latest THE_Setup.exe installer for Windows.",
    icon: DownloadIcon,
  },
  {
    title: "2. Install",
    description: "Run the installer and follow the simple on-screen instructions.",
    icon: Laptop,
  },
  {
    title: "3. Run",
    description: "Open your terminal and run 'the --version' to verify.",
    icon: Terminal,
  },
];

export function Download() {
  return (
    <div className="min-h-screen bg-[#0a0118] text-gray-300 selection:bg-purple-500/30 selection:text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <ScrollReveal>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-400 uppercase"
                >
                  <ShieldCheck className="size-3.5" />
                  Official Release
                </motion.div>
                <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
                  Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">THE Language</span>
                </h1>
                <p className="max-w-xl text-lg text-gray-400 leading-relaxed">
                  Start building with the most intuitive programming language. 
                  Download the official installer for Windows and get started in seconds.
                </p>
              </div>

              <div className="rounded-[2.5rem] border border-white/5 bg-white/5 p-8 backdrop-blur-xl">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Latest Version</p>
                    <p className="text-2xl font-bold text-white">v0.1.0</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Platform</p>
                    <p className="text-2xl font-bold text-white">Windows</p>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="/THE_Setup.exe"
                      download
                      className="inline-flex items-center gap-2.5 rounded-2xl bg-white px-8 py-4 font-bold text-[#0a0118] transition-all hover:bg-purple-100 shadow-xl shadow-white/5"
                    >
                      <DownloadIcon className="size-5" />
                      Download THE
                    </a>
                  </motion.div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-green-500" />
                  Verified & Secure
                </span>
                <span className="h-4 w-px bg-white/10" />
                <span>Installer Size: ~24MB</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-purple-600/20 to-pink-600/20 blur-2xl" />
              <div className="relative space-y-4">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-6 rounded-3xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md"
                    >
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-purple-500/10">
                        <Icon className="size-6 text-purple-400" />
                      </div>
                      <div className="space-y-1 py-1">
                        <h3 className="font-bold text-white">{step.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <section className="mt-32 border-t border-white/5 pt-24">
          <ScrollReveal>
            <div className="text-center space-y-12">
              <h2 className="text-3xl font-bold text-white">What's Next?</h2>
              <div className="grid gap-6 md:grid-cols-3">
                <Link
                  to="/docs/introduction"
                  className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]"
                >
                  <BookOpen className="size-8 text-purple-400 mb-6 mx-auto" />
                  <h3 className="font-bold text-white mb-2">Read Introduction</h3>
                  <p className="text-sm text-gray-400 mb-6 font-normal">Understand the core philosophy of THE.</p>
                  <ArrowRight className="size-5 text-gray-500 mx-auto transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/docs/getting-started"
                  className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]"
                >
                  <Laptop className="size-8 text-purple-400 mb-6 mx-auto" />
                  <h3 className="font-bold text-white mb-2">Quick Start</h3>
                  <p className="text-sm text-gray-400 mb-6 font-normal">Write your first program in minutes.</p>
                  <ArrowRight className="size-5 text-gray-500 mx-auto transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/docs/cli"
                  className="group rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.04]"
                >
                  <Terminal className="size-8 text-purple-400 mb-6 mx-auto" />
                  <h3 className="font-bold text-white mb-2">CLI Reference</h3>
                  <p className="text-sm text-gray-400 mb-6 font-normal">Learn the command-line interface commands.</p>
                  <ArrowRight className="size-5 text-gray-500 mx-auto transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function BookOpen(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
