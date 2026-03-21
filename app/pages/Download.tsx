import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Download as DownloadIcon, CheckCircle2, Terminal, Github } from "lucide-react";

export function Download() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0118] via-[#1a0a2e] to-[#0a0118]">
      <Navbar />
      
      <div className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-5xl tracking-tight text-white md:text-6xl">
              Download THE
            </h1>
            <p className="text-xl text-gray-400">
              Get started with THE Language in seconds
            </p>
          </div>

          {/* Main Download Card */}
          <div className="mb-12 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-12 text-center backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-center gap-2">
              <CheckCircle2 className="size-6 text-green-400" />
              <span className="text-lg text-gray-300">Latest Version: v0.1.0</span>
            </div>
            
            <a 
              href="/THE_Setup.exe" 
              download 
              className="group mb-6 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-12 py-6 text-xl text-white shadow-lg shadow-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/70"
            >
              <DownloadIcon className="size-7" />
              Download THE_Setup.exe
            </a>

            <p className="text-sm text-gray-500">
              Windows 10/11 • 64-bit • ~10MB
            </p>
          </div>

          {/* Installation Steps */}
          <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="mb-8 text-2xl text-white">Installation Steps</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-lg text-purple-400">
                  1
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-lg text-white">Download the Installer</h3>
                  <p className="text-gray-400">
                    Click the download button above to get THE_Setup.exe for Windows.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-lg text-purple-400">
                  2
                </div>
                <div className="space-y-2 pt-1">
                  <h3 className="text-lg text-white">Run the Installer</h3>
                  <p className="text-gray-400">
                    Double-click the downloaded file and follow the setup wizard. The installer will add THE to your system PATH automatically.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-lg text-purple-400">
                  3
                </div>
                <div className="space-y-3 pt-1">
                  <h3 className="text-lg text-white">Verify Installation</h3>
                  <p className="text-gray-400">
                    Open a new terminal window and verify the installation:
                  </p>
                  <div className="rounded-xl border border-white/10 bg-[#1e1e2e]/50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Terminal className="size-4 text-gray-400" />
                      <span className="text-sm text-gray-400">Terminal</span>
                    </div>
                    <pre className="overflow-x-auto">
                      <code className="text-sm leading-relaxed">
                        <span className="text-gray-500">$</span>{" "}
                        <span className="text-purple-300">the --version</span>
                        {"\n"}
                        <span className="text-green-400">THE Language v0.1.0</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-purple-500/20 text-lg text-purple-400">
                  4
                </div>
                <div className="space-y-3 pt-1">
                  <h3 className="text-lg text-white">Run Your First Program</h3>
                  <p className="text-gray-400">
                    Create a file called <code className="rounded bg-white/10 px-2 py-1 text-purple-300">hello.the</code> and run it:
                  </p>
                  <div className="rounded-xl border border-white/10 bg-[#1e1e2e]/50 p-4">
                    <pre className="overflow-x-auto">
                      <code className="text-sm leading-relaxed">
                        <span className="text-gray-500">$</span>{" "}
                        <span className="text-purple-300">the hello.the</span>
                        {"\n"}
                        <span className="text-green-400">Hello World</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Requirements */}
          <div className="mb-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h2 className="mb-6 text-2xl text-white">System Requirements</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="mb-2 text-purple-300">Operating System</h3>
                <p className="text-gray-400">Windows 10 or Windows 11 (64-bit)</p>
              </div>
              <div>
                <h3 className="mb-2 text-purple-300">Disk Space</h3>
                <p className="text-gray-400">At least 20MB free space</p>
              </div>
              <div>
                <h3 className="mb-2 text-purple-300">Prerequisites</h3>
                <p className="text-gray-400">Python 3.8 or higher (included in installer)</p>
              </div>
              <div>
                <h3 className="mb-2 text-purple-300">RAM</h3>
                <p className="text-gray-400">Minimum 2GB RAM</p>
              </div>
            </div>
          </div>

          {/* Other Platforms */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
            <h2 className="mb-4 text-2xl text-white">Other Platforms</h2>
            <p className="mb-6 text-gray-400">
              MacOS and Linux support coming soon. Follow us on GitHub for updates.
            </p>
            <a
              href="https://github.com/AdityaKatyal8899/THE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"
            >
              <Github className="size-5" />
              Follow on GitHub
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
