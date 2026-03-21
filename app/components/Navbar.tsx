import { Code2, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "motion/react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Docs", href: "/docs" },
    { name: "Download", href: "/download" },
    { name: "GitHub", href: "https://github.com/AdityaKatyal8899/THE", external: true },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0118]/60 backdrop-blur-md"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center transition-transform group-hover:scale-110">
              <img src="/icon.png" alt="Logo" className="size-full object-contain" />
            </div>
            <span className="text-xl font-medium tracking-tight text-white">THE</span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} external={link.external}>
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-4 flex flex-col gap-4 border-t border-white/5 pt-4 pb-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative text-sm text-gray-400 transition-colors hover:text-white"
    >
      {children}
      {isHovered && (
        <motion.div
          layoutId="nav-underline"
          className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-purple-500 to-pink-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  );
}