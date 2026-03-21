import { useState, useEffect } from "react";
import { 
  Outlet, Link, useLocation, Navigate
} from "react-router";
import { 
  Rocket, Box, Type, LogIn, LogOut, Calculator, 
  GitCommit, GitBranch, RefreshCw, Repeat, RotateCcw, 
  Code2, AlertCircle, Zap, Terminal, BookOpen,
  ChevronDown, ChevronRight, Menu, X, Search,
  Github, Linkedin, Globe, Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";

export type DocGroup = "INTRODUCTION" | "FUNDAMENTALS" | "CONTROL FLOW" | "ADVANCED";

interface DocNav {
  title: string;
  path: string;
  icon: any;
  group: DocGroup;
  external?: boolean;
}

const docNavigation: DocNav[] = [
  // INTRODUCTION
  { title: "What is THE", path: "/docs/introduction", icon: BookOpen, group: "INTRODUCTION" },
  { title: "Installation", path: "/docs/getting-started", icon: Rocket, group: "INTRODUCTION" },
  
  // FUNDAMENTALS
  { title: "Variables", path: "/docs/variables", icon: Box, group: "FUNDAMENTALS" },
  { title: "Data Types", path: "/docs/data-types", icon: Type, group: "FUNDAMENTALS" },
  { title: "Input", path: "/docs/input", icon: LogIn, group: "FUNDAMENTALS" },
  { title: "Output", path: "/docs/output", icon: LogOut, group: "FUNDAMENTALS" },
  { title: "Operators", path: "/docs/operators", icon: Calculator, group: "FUNDAMENTALS" },

  // CONTROL FLOW
  { title: "if", path: "/docs/if", icon: GitCommit, group: "CONTROL FLOW" },
  { title: "if-else", path: "/docs/if-else", icon: GitBranch, group: "CONTROL FLOW" },
  { title: "LoopIn", path: "/docs/loopin", icon: Repeat, group: "CONTROL FLOW" },
  { title: "LoopTill", path: "/docs/looptill", icon: RotateCcw, group: "CONTROL FLOW" },

  // ADVANCED
  { title: "Functions", path: "/docs/functions", icon: Code2, group: "ADVANCED" },
  { title: "Error Handling", path: "/docs/error-handling", icon: AlertCircle, group: "ADVANCED" },
  { title: "Flow Control", path: "/docs/flow-control", icon: Zap, group: "ADVANCED" },
  { title: "CLI", path: "/docs/cli", icon: Terminal, group: "ADVANCED" },
];

const groups: DocGroup[] = ["INTRODUCTION", "FUNDAMENTALS", "CONTROL FLOW", "ADVANCED"];

export function DocsLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    "INTRODUCTION": true,
    "FUNDAMENTALS": true,
    "CONTROL FLOW": true,
    "ADVANCED": true,
  });
  const location = useLocation();

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  useEffect(() => {
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#030303] selection:bg-purple-500/30">
      <Navbar />
      
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Navigation Toggle */}
          <div className="flex lg:hidden items-center justify-between py-6 border-b border-white/5">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 text-sm text-gray-400 font-medium"
            >
              <Menu className="size-5" />
              Navigation
            </button>
            <div className="text-sm font-bold text-white tracking-widest uppercase">THE Docs</div>
          </div>

          {/* Desktop/Mobile Sidebar */}
          <aside className={`
            fixed inset-y-0 left-0 z-50 w-72 transform bg-[#030303] transition-transform duration-300 lg:static lg:block lg:w-64 lg:translate-x-0 lg:bg-transparent
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}>
            <div className="flex h-full flex-col overflow-y-auto pt-8 lg:sticky lg:top-24 lg:h-[calc(100vh-120px)] scrollbar-hide">
              <div className="lg:hidden flex justify-between items-center mb-8 px-6">
                <span className="text-xl font-bold text-white">Navigation</span>
                <button onClick={() => setIsSidebarOpen(false)}>
                  <X className="size-6 text-gray-400" />
                </button>
              </div>

              <div className="space-y-10 pb-12">
                {groups.map((group) => (
                  <div key={group} className="space-y-3">
                    <button 
                      onClick={() => toggleGroup(group)}
                      className="flex w-full items-center justify-between px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-gray-500 transition-colors hover:text-white"
                    >
                      {group}
                      {expandedGroups[group] ? <ChevronDown className="size-3" /> : <ChevronRight className="size-3" />}
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {expandedGroups[group] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden space-y-1"
                        >
                          {docNavigation
                            .filter(item => item.group === group)
                            .map((item) => {
                              const Icon = item.icon;
                              const isActive = location.pathname === item.path;
                              
                              return (
                                <Link
                                  key={item.path}
                                  to={item.path}
                                  className={`group flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition-all duration-300 ${
                                    isActive
                                      ? "bg-purple-500/10 text-white font-medium"
                                      : "text-gray-400/80 hover:bg-white/5 hover:text-white"
                                  }`}
                                >
                                  <Icon className={`size-4 transition-colors ${isActive ? "text-purple-400" : "text-gray-500 group-hover:text-gray-300"}`} />
                                  <span>{item.title}</span>
                                </Link>
                              );
                            })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Overlay for mobile */}
          <AnimatePresence>
            {isSidebarOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
                onClick={() => setIsSidebarOpen(false)}
              />
            )}
          </AnimatePresence>

          {/* Main Content */}
          <main className="min-w-0 flex-1 py-12 lg:py-16">
            <div className="mx-auto max-w-3xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
