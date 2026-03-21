import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0a2e] to-[#0a0118]">
      <Navbar />
      
      <div className="flex min-h-[60vh] items-center justify-center px-6 py-24">
        <div className="text-center">
          <h1 className="mb-4 text-9xl font-bold text-purple-500">404</h1>
          <h2 className="mb-4 text-3xl text-white">Page Not Found</h2>
          <p className="mb-8 text-lg text-gray-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-white shadow-lg shadow-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/70"
            >
              <Home className="size-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-8 py-4 text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
            >
              <ArrowLeft className="size-5" />
              Go Back
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
