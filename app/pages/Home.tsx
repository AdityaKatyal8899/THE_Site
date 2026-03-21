import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CodeBlock } from "../components/CodeBlock";
import { Github, Download, ArrowRight, MessageSquare, Zap, Shield, Terminal, Sparkles, Globe, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { ScrollReveal } from "../components/ScrollReveal";

const features = [
  {
    icon: MessageSquare,
    title: "English-like Syntax",
    description: "Write code that reads like natural language. Perfect for beginners learning to program.",
  },
  {
    icon: Zap,
    title: "Python-powered Execution",
    description: "Built on top of Python for fast, reliable execution with access to a rich ecosystem.",
  },
  {
    icon: Shield,
    title: "Built-in Error Handling",
    description: "Comprehensive try/catch/throw/raise support for robust error management out of the box.",
  },
  {
    icon: Terminal,
    title: "Simple CLI Usage",
    description: "Run your code with a single command. Clean, straightforward command-line interface.",
  },
];

const socials = [
  { label: "GitHub", icon: Github, href: "https://github.com/AdityaKatyal8899/THE", color: "text-gray-400 group-hover:text-white" },
  { label: "Portfolio", icon: Globe, href: "https://adityakatyal-portfolio.onrender.com/", color: "text-blue-400 group-hover:text-blue-300" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/aditya-katyal-1b6292296/", color: "text-blue-600 group-hover:text-blue-500" },
  { label: "Email", icon: Mail, href: "mailto:adityakatyal45678@gmail.com", color: "text-red-400 group-hover:text-red-300" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  } as const,
};

export function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Write code like you think.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0118] text-gray-300 selection:bg-purple-500/30 selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 md:py-32">
        <ScrollReveal>
          {/* Animated Background Orbs */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [-20, 20, -20],
                y: [-20, 20, -20]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" 
            />
            <motion.div 
              animate={{ 
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
                x: [20, -20, 20],
                y: [20, -20, 20]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-pink-600/10 blur-[120px]" 
            />
          </div>

          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Left side - Content */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-10"
              >
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-purple-400 uppercase"
                  >
                    <Sparkles className="size-3.5" />
                    Experience the Future
                  </motion.div>
                  <h1 className="flex items-center gap-4 text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
                    <img src="/icon.png" alt="THE" className="size-16 md:size-20 lg:size-24 object-contain" />
                    <span>
                      THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Language</span>
                    </span>
                  </h1>
                  <div className="min-h-[2.5rem] md:min-h-[3rem]">
                    <p className="text-2xl font-medium text-gray-300 md:text-3xl">
                      {typedText}<span className="animate-pulse">|</span>
                    </p>
                  </div>
                  <p className="max-w-xl text-lg text-gray-400 md:text-xl leading-relaxed">
                    A beginner-friendly programming language with English-like syntax, built for speed and simplicity.
                  </p>
                </div>

                <div className="flex flex-wrap gap-5">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/download"
                      className="group relative flex items-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-bold text-white shadow-lg shadow-purple-500/30 ring-1 ring-white/20 transition-all hover:shadow-purple-500/50"
                    >
                      <Download className="size-5" />
                      Download THE
                      <div className="absolute inset-0 -z-10 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <a
                      href="https://github.com/AdityaKatyal8899/THE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                    >
                      <Github className="size-5" />
                      View on GitHub
                    </a>
                  </motion.div>
                </div>
              </motion.div>

              {/* Right side - Code Preview */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative lg:scale-110"
              >
                <CodeBlock 
                  filename="hello_world.the"
                  code={`give("Hello World")
                  
try {
    result = 5 / 0
} catch(e) {
    give("Error caught: " + e)
}

LoopIn range(0, 3) with i {
    if i == 2 {
        give("Loop is at " + i)
    }
}`}
                />
                {/* Extra glow for hero code */}
                <div className="absolute -inset-10 -z-10 rounded-3xl bg-purple-500/10 blur-3xl" />
              </motion.div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Features Section */}
      <section id="features" className="relative px-6 py-32 md:py-48">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="space-y-20"
            >
              <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                  Powering <span className="text-purple-400">Innovation</span>
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-400">
                  A robust feature set designed to shorten the gap between idea and execution.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -8 }}
                      className="group relative rounded-3xl border border-white/5 bg-white/[0.02] p-8 backdrop-blur-md transition-all hover:border-purple-500/30 hover:bg-white/[0.04]"
                    >
                      <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-purple-500/10 ring-1 ring-purple-500/20 transition-transform group-hover:scale-110 group-hover:bg-purple-500/20">
                        <Icon className="size-6 text-purple-400" />
                      </div>
                      <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-purple-500/0 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </section>

      {/* Community Section */}
      <section className="px-6 py-24">
        <ScrollReveal>
          <div className="mx-auto max-w-7xl">
            <div className="rounded-[3rem] border border-white/5 bg-white/[0.02] p-12 backdrop-blur-md">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
                    Connect & <span className="text-purple-400">Community</span>
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Join our growing ecosystem. Connect with the creator for support, 
                    share your projects, or contribute to the core language.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {socials.map((social) => (
                    <a 
                      key={social.label}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="group flex flex-col items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-6 transition-all hover:border-purple-500/30 hover:bg-white/10"
                    >
                      <social.icon className={`size-8 ${social.color} transition-colors`} />
                      <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-32">
        <ScrollReveal>
          <div className="mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-gradient-to-br from-purple-600/10 to-pink-600/10 p-12 md:p-20 text-center backdrop-blur-xl"
            >
              <div className="relative z-10 space-y-10">
                <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                  Start Building <span className="text-purple-400">Today</span>.
                </h2>
                <p className="mx-auto max-w-xl text-xl text-gray-300">
                  Join the growing community and build something amazing with THE Language.
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  <Link
                    to="/download"
                    className="flex items-center gap-2.5 rounded-2xl bg-white px-10 py-5 font-bold text-[#0a0118] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
                  >
                    <Download className="size-5" />
                    Get Started Now
                  </Link>
                  <Link
                    to="/docs"
                    className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-10 py-5 font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20"
                  >
                    Explore Docs
                    <ArrowRight className="size-5" />
                  </Link>
                </div>
              </div>
              
              {/* Background design elements */}
              <div className="absolute right-0 top-0 -z-10 size-64 bg-purple-500/20 blur-[100px]" />
              <div className="absolute left-0 bottom-0 -z-10 size-64 bg-pink-500/20 blur-[100px]" />
            </motion.div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}