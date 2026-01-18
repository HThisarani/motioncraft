import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    // Start transition
    setIsTransitioning(true);
    
    // Wait for transition to build up, then scroll
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
      }
    }, 300);
    
    // End transition
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
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
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/80 backdrop-blur-lg py-4 shadow-lg shadow-cyan-500/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold cursor-pointer hover:scale-105 transition-transform relative group"
          >
            Motion<span className="text-cyan-400">Craft</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-cyan-400 transition-colors relative group bg-transparent border-none cursor-pointer text-white"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300 shadow-lg shadow-cyan-400/50" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 py-4 bg-black/90 backdrop-blur-lg flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left hover:text-cyan-400 transition-all duration-300 hover:translate-x-2 relative group bg-transparent border-none cursor-pointer text-white"
              >
                {item.label}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Modern Page Transition Overlay */}
      <div 
        className={`fixed inset-0 z-[100] pointer-events-none transition-opacity duration-300 ${
          isTransitioning ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Sliding Wipe Effect */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-black/30 backdrop-blur-sm"
          style={{
            transform: isTransitioning ? 'translateX(0%)' : 'translateX(-100%)',
            transition: 'transform 0.5s cubic-bezier(0.65, 0, 0.35, 1)',
          }}
        />
        
        {/* Glowing Circle Reveal */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: '800px',
            height: '800px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)',
            transform: `translate(-50%, -50%) scale(${isTransitioning ? 1.5 : 0})`,
            opacity: isTransitioning ? 0.8 : 0,
            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            filter: 'blur(40px)',
          }}
        />

        {/* Radiating Light Beams */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[...Array(12)].map((_, i) => {
            const angle = (i / 12) * 360;
            return (
              <div
                key={i}
                className="absolute top-0 left-0 origin-top"
                style={{
                  width: '2px',
                  height: '400px',
                  background: `linear-gradient(180deg, rgba(6,182,212,${isTransitioning ? 0.6 : 0}), transparent)`,
                  transform: `rotate(${angle}deg)`,
                  opacity: isTransitioning ? 1 : 0,
                  transition: `all 0.4s ease-out ${i * 0.03}s`,
                  boxShadow: '0 0 10px rgba(6,182,212,0.5)',
                }}
              />
            );
          })}
        </div>

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => {
          const randomX = (i * 47) % 100;
          const randomY = (i * 73) % 100;
          const randomDelay = i * 0.02;
          
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${2 + (i % 3)}px`,
                height: `${2 + (i % 3)}px`,
                left: `${randomX}%`,
                top: `${randomY}%`,
                background: i % 2 === 0 ? '#06b6d4' : '#3b82f6',
                opacity: isTransitioning ? 0.7 : 0,
                transform: isTransitioning ? 'scale(1) translateY(0px)' : 'scale(0) translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${randomDelay}s`,
                boxShadow: '0 0 10px currentColor',
              }}
            />
          );
        })}

        {/* Center Flash */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.8), transparent)',
            opacity: isTransitioning ? 1 : 0,
            transform: `translate(-50%, -50%) scale(${isTransitioning ? 3 : 0})`,
            transition: 'all 0.3s ease-out',
            filter: 'blur(20px)',
          }}
        />
      </div>
    </>
  );
}