import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["home", "what-we-do", "work", "why-us"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }, 100);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 350);
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "What We Do", id: "what-we-do" },
    { label: "Work", id: "work" },
    { label: "Why Us", id: "why-us" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-slate-950/40 backdrop-blur-2xl py-3 border-b border-white/5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold cursor-pointer transition-all duration-300 hover:tracking-wider relative group"
          >
            <span className="relative z-10 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Motion<span className="font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text">Craft</span>
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
          </div>

          <div className="hidden md:flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full px-2 py-2 border border-white/10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-5 py-2 rounded-full transition-all duration-300 border-none cursor-pointer text-sm font-medium ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 shadow-lg shadow-cyan-500/20"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 border-none cursor-pointer">
            Get Started
          </button>

          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="flex flex-col gap-1.5 w-5">
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-white rounded-full transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ease-out ${
            mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="mx-6 px-4 py-6 bg-slate-950/60 backdrop-blur-2xl rounded-3xl border border-white/10 flex flex-col gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left px-4 py-3 rounded-2xl transition-all duration-300 border-none cursor-pointer ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {item.label}
              </button>
            ))}
            <button className="mt-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 border-none cursor-pointer">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Liquid Morph Transition */}
      <div 
        className={`fixed inset-0 z-[100] pointer-events-none ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transition: 'opacity 0.15s ease-out' }}
      >
        {/* Liquid Wipe */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: isTransitioning ? 1 : 0 }}>
          <defs>
            <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6,182,212,0)" />
              <stop offset="50%" stopColor="rgba(6,182,212,0.3)" />
              <stop offset="100%" stopColor="rgba(6,182,212,0)" />
            </linearGradient>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#liquidGrad)"
            style={{
              transform: isTransitioning ? 'translateX(0)' : 'translateX(-100%)',
              transition: 'transform 0.3s cubic-bezier(0.65, 0, 0.35, 1)',
            }}
          />
        </svg>

        {/* Morphing Blob */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: '600px',
            height: '600px',
            marginLeft: '-300px',
            marginTop: '-300px',
            background: 'radial-gradient(circle, rgba(6,182,212,0.15), rgba(59,130,246,0.1) 50%, transparent 70%)',
            borderRadius: isTransitioning ? '30% 70% 70% 30% / 30% 30% 70% 70%' : '50%',
            transform: `scale(${isTransitioning ? 1.5 : 0}) rotate(${isTransitioning ? '45deg' : '0deg'})`,
            opacity: isTransitioning ? 1 : 0,
            transition: 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            filter: 'blur(50px)',
          }}
        />

        {/* Split Screen Slide */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(6,182,212,0.1) 0%, rgba(6,182,212,0.2) 50%, rgba(6,182,212,0.1) 100%)',
            clipPath: isTransitioning 
              ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
              : 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
            transition: 'clip-path 0.25s cubic-bezier(0.87, 0, 0.13, 1)',
          }}
        />

        {/* Diagonal Shutter */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, transparent 40%, rgba(59,130,246,0.3) 50%, transparent 60%)',
            transform: isTransitioning ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.3s ease-out',
          }}
        />

        {/* Edge Glow Pulse */}
        <div
          className="absolute inset-0 border-4 border-cyan-500/0"
          style={{
            borderColor: isTransitioning ? 'rgba(6,182,212,0.3)' : 'rgba(6,182,212,0)',
            boxShadow: isTransitioning ? 'inset 0 0 60px rgba(6,182,212,0.2)' : 'none',
            transition: 'all 0.2s ease-out',
          }}
        />
      </div>
    </>
  );
}