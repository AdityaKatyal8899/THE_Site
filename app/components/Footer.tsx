import { Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2 text-gray-400">
            <span className="text-sm">Built with</span>
            <Heart className="size-4 fill-red-500 text-red-500" />
            <span className="text-sm">by Aditya</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-sm text-gray-500">Version v0.1.0</span>
            <a
              href="https://github.com/AdityaKatyal8899/THE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <Github className="size-5" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © 2026 THE Language. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
