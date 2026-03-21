import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
}

export function CodeBlock({ code, filename = "example.the", language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-[#1e1e2e]/50 shadow-2xl backdrop-blur-sm overflow-hidden">
      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-3">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="size-3 rounded-full bg-[#ff5f56]" />
            <div className="size-3 rounded-full bg-[#ffbd2e]" />
            <div className="size-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <Terminal className="size-3.5" />
            <span>{filename}</span>
          </div>
        </div>
        
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1.5 text-xs font-medium text-gray-400 transition-all hover:bg-white/10 hover:text-white active:scale-95"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                <Check className="size-3.5 text-green-400" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.1 }}
              >
                <Copy className="size-3.5" />
              </motion.div>
            )}
          </AnimatePresence>
          <span className="w-8 text-left">{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto custom-scrollbar">
        <pre className="text-sm leading-relaxed whitespace-pre">
          <code className="text-gray-300 font-mono">
            {code}
          </code>
        </pre>
      </div>
      
      {/* Background glow overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}
