import { RefreshCw, ArrowRight } from "lucide-react";
import { Link } from "react-router";

export function LoopsOverview() {
  return (
    <div className="prose prose-invert max-w-none space-y-12">
      <section className="space-y-4">
        <div className="mb-4 inline-flex rounded-2xl bg-purple-500/10 p-4">
          <RefreshCw className="size-8 text-purple-400" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight">10. Loops Overview</h1>
        <p className="text-lg leading-relaxed text-gray-400 max-w-2xl">
          Loops allow you to execute a block of code multiple times. THE Language 
          provides two main ways to loop: <code className="text-purple-400">LoopIn</code> 
          and <code className="text-purple-400">LoopTill</code>.
        </p>
      </section>

      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-3">LoopIn</h2>
            <p className="text-sm text-gray-400 mb-4">Iterate over a range or a collection (like a list).</p>
            <Link to="/docs/loopin" className="text-purple-400 text-sm hover:underline">Learn LoopIn →</Link>
          </div>
          <div className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm">
            <h2 className="text-xl font-semibold text-white mb-3">LoopTill</h2>
            <p className="text-sm text-gray-400 mb-4 base">Repeat code until a specific condition is met.</p>
            <Link to="/docs/looptill" className="text-purple-400 text-sm hover:underline">Learn LoopTill →</Link>
          </div>
        </div>
      </section>

      <div className="pt-12 border-t border-white/5">
        <Link 
          to="/docs/loopin" 
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          <div>
            <div className="text-sm text-gray-500 mb-1">Next Step</div>
            <div className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
              LoopIn →
            </div>
          </div>
          <ArrowRight className="size-6 text-gray-500 group-hover:text-purple-400 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>
    </div>
  );
}
