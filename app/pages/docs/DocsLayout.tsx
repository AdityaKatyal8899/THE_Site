import { useState, useEffect } from "react";
import { 
  Outlet, Link, useLocation 
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

export type DocGroup = "Introduction" | "Fundamentals" | "Logic & Flow" | "Advanced" | "Community";

interface DocNav {
  title: string;
  path: string;
  icon: any;
  group: DocGroup;
  external?: boolean;
}

const docNavigation: DocNav[] = [
  // Introduction
  { title: "1. Introduction", path: "/docs/introduction", icon: BookOpen, group: "Introduction" },
  { title: "2. Getting Started", path: "/docs/getting-started", icon: Rocket, group: "Introduction" },
  
  // Fundamentals
  { title: "3. Variables", path: "/docs/variables", icon: Box, group: "Fundamentals" },
  { title: "4. Data Types", path: "/docs/data-types", icon: Type, group: "Fundamentals" },
  { title: "5. Input", path: "/docs/input", icon: LogIn, group: "Fundamentals" },
  { title: "6. Output", path: "/docs/output", icon: LogOut, group: "Fundamentals" },
  { title: "7. Operators", path: "/docs/operators", icon: Calculator, group: "Fundamentals" },

  // Logic & Flow
  { title: "8. If", path: "/docs/if", icon: GitCommit, group: "Logic & Flow" },
  { title: "9. If-Else", path: "/docs/if-else", icon: GitBranch, group: "Logic & Flow" },
  { title: "10. Loops Overview", path: "/docs/loops-overview", icon: RefreshCw, group: "Logic & Flow" },
  { title: "11. LoopIn", path: "/docs/loopin", icon: Repeat, group: "Logic & Flow" },
  { title: "12. LoopTill", path: "/docs/looptill", icon: RotateCcw, group: "Logic & Flow" },
  { title: "13. Functions", path: "/docs/functions", icon: Code2, group: "Logic & Flow" },

  // Advanced
  { title: "14. Error Handling", path: "/docs/error-handling", icon: AlertCircle, group: "Advanced" },
  { title: "15. Flow Control", path: "/docs/flow-control", icon: Zap, group: "Advanced" },
  { title: "16. CLI Reference", path: "/docs/cli", icon: Terminal, group: "Advanced" },

  // Community
  { title: "GitHub Repo", path: "https://github.com/AdityaKatyal8899/THE", icon: Github, group: "Community", external: true },
  { title: "LinkedIn", path: "https://www.linkedin.com/in/aditya-katyal-1b6292296/", icon: Linkedin, group: "Community", external: true },
];

const groups: DocGroup[] = ["Introduction", "Fundamentals", "Logic & Flow", "Advanced", "Community"];

export function DocsLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    "Introduction": true,
    "Fundamentals": true,
    "Logic & Flow": true,
    "Advanced": true,
    "Community": true,
  });
  const location = useLocation();

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => ({ ...prev, [group]: !prev[group] }));
  };

  // Close sidebar on mobile when navigating
  useEffect(() => {
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#030303] selection:bg-purple-500/30">
      <Navbar />
      
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Search/Toggle */}
          <div className="flex lg:hidden items-center justify-between py-4 border-b border-white/5">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="flex items-center gap-2 text-sm text-gray-400 font-medium"
            >
              <Menu className="size-5" />
              Navigation
            </button>
            <div className="text-sm font-bold text-white tracking-widest uppercase">THE Docs</div>
          </div>

          {/* Desktop Sidebar */}
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

              <div className="space-y-8 pb-12">
                {groups.map((group) => (
                  <div key={group} className="space-y-2">
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
                              const content = (
                                <>
                                  <Icon className={`size-4 transition-colors ${isActive ? "text-purple-400" : "text-gray-500 group-hover:text-gray-300"}`} />
                                  <span>{item.title}</span>
                                </>
                              );

                              if (item.external) {
                                return (
                                  <a
                                    key={item.path}
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-gray-400/80 hover:bg-white/5 hover:text-white transition-all duration-300"
                                  >
                                    {content}
                                  </a>
                                );
                              }

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
                                  {content}
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
