import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
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
    }, 200);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
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
          {/* Logo with magnetic hover effect */}
          <div
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold cursor-pointer transition-all duration-300 hover:tracking-wider relative group"
          >
            <span className="relative z-10 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Motion<span className="font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text">Craft</span>
            </span>
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
          </div>

          {/* Desktop Menu with glassmorphism */}
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

          {/* CTA Button */}
          <button className="hidden md:block px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 border-none cursor-pointer">
            Get Started
          </button>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu with modern slide-in */}
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

      {/* Ultra-Modern Page Transition */}
      <div 
        className={`fixed inset-0 z-[100] pointer-events-none ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transition: 'opacity 0.3s ease-out',
        }}
      >
        {/* Vertical Wipe with Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950/50 to-slate-950"
          style={{
            transform: isTransitioning ? 'translateY(0%)' : 'translateY(-100%)',
            transition: 'transform 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        />

        {/* Diagonal Light Sweep */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, transparent 0%, rgba(6,182,212,0.1) 48%, rgba(59,130,246,0.2) 50%, rgba(6,182,212,0.1) 52%, transparent 100%)',
            transform: isTransitioning ? 'translateX(100%)' : 'translateX(-100%)',
            transition: 'transform 0.6s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        />

        {/* Expanding Circle Pulse */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: '600px',
            height: '600px',
            marginLeft: '-300px',
            marginTop: '-300px',
            borderRadius: '50%',
            border: '2px solid rgba(6,182,212,0.3)',
            transform: `scale(${isTransitioning ? 2 : 0})`,
            opacity: isTransitioning ? 0.4 : 0,
            transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />

        {/* Inner Circle */}
        <div
          className="absolute top-1/2 left-1/2"
          style={{
            width: '300px',
            height: '300px',
            marginLeft: '-150px',
            marginTop: '-150px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.2), transparent 70%)',
            transform: `scale(${isTransitioning ? 1 : 0})`,
            opacity: isTransitioning ? 1 : 0,
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            filter: 'blur(40px)',
          }}
        />

        {/* Animated Grid Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
              style={{
                top: `${(i + 1) * 12.5}%`,
                opacity: isTransitioning ? 0.6 : 0,
                transform: `scaleX(${isTransitioning ? 1 : 0})`,
                transition: `all 0.4s ease-out ${i * 0.05}s`,
              }}
            />
          ))}
          {[...Array(8)].map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
              style={{
                left: `${(i + 1) * 12.5}%`,
                opacity: isTransitioning ? 0.6 : 0,
                transform: `scaleY(${isTransitioning ? 1 : 0})`,
                transition: `all 0.4s ease-out ${i * 0.05}s`,
              }}
            />
          ))}
        </div>

        {/* Particle Orbs */}
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 150;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500"
              style={{
                width: '8px',
                height: '8px',
                transform: isTransitioning 
                  ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)` 
                  : 'translate(-50%, -50%) scale(0)',
                opacity: isTransitioning ? 0.8 : 0,
                transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 0.03}s`,
                boxShadow: '0 0 20px rgba(6,182,212,0.6)',
              }}
            />
          );
        })}
      </div>


    </>
  );
}