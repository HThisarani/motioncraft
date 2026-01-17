import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 200);
    }, 500);
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
            ? "bg-black/80 backdrop-blur-lg py-4 shadow-lg shadow-purple-500/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold cursor-pointer hover:scale-105 transition-transform relative group"
            style={{
              animation: mounted
                ? "logoExplode 1s cubic-bezier(0.34, 1.56, 0.64, 1) backwards, floatContinuous 3s ease-in-out 1s infinite"
                : "none",
            }}
          >
            Motion<span className="text-purple-500">Craft</span>
            <div
              className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg opacity-0 group-hover:opacity-20 blur-xl transition-opacity"
              style={{
                animation: mounted ? "pulse 2s ease-in-out infinite 1s" : "none",
              }}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="hover:text-purple-400 transition-colors relative group bg-transparent border-none cursor-pointer"
                style={{
                  animation: mounted
                    ? `slideIn${
                        index % 2 === 0 ? "Down" : "Up"
                      } 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                        0.2 + index * 0.1
                      }s backwards, floatContinuous ${
                        3.5 + index * 0.2
                      }s ease-in-out ${1.5 + index * 0.1}s infinite`
                    : "none",
                }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-fuchsia-400 group-hover:w-full transition-all duration-300 shadow-lg shadow-violet-400/50"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              animation: mounted
                ? "rotateIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s backwards, floatContinuous 3s ease-in-out 1.2s infinite"
                : "none",
            }}
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
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-left hover:text-purple-400 transition-all duration-300 hover:translate-x-2 relative group bg-transparent border-none cursor-pointer"
                style={{
                  animation: mobileMenuOpen
                    ? `slideInLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${
                        index * 0.1
                      }s backwards`
                    : "none",
                }}
              >
                {item.label}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>

        {/* Animations */}
        <style jsx>{`
          @keyframes floatContinuous {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-8px); }
          }
          @keyframes logoExplode {
            0% { opacity: 0; transform: scale(0) rotate(-180deg); }
            60% { transform: scale(1.2) rotate(10deg); }
            100% { opacity: 1; transform: scale(1) rotate(0); }
          }
          @keyframes slideInDown {
            from { opacity: 0; transform: translateY(-30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes rotateIn {
            from { opacity: 0; transform: rotate(180deg) scale(0.5); }
            to { opacity: 1; transform: rotate(0deg) scale(1); }
          }
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-50px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 0; transform: scale(1); }
            50% { opacity: 0.3; transform: scale(1.1); }
          }
          @keyframes wipeSlide {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(0); }
            100% { transform: translateX(100%); }
          }
        `}</style>
      </nav>

      {/* Fast & Smooth Wipe Transition */}
      <div className={`fixed inset-0 z-[100] pointer-events-none overflow-hidden ${isTransitioning ? 'pointer-events-auto' : ''}`}>
        {/* Diagonal Wipe */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 transition-transform duration-500 ease-in-out ${
            isTransitioning ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
          }}
        />
        
        {/* Second Layer for Depth */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-600 transition-transform duration-500 ease-in-out ${
            isTransitioning ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 40% 100%)',
            transitionDelay: '100ms',
          }}
        />

        {/* Accent Line */}
        <div
          className={`absolute inset-y-0 left-1/2 w-1 bg-white transition-all duration-500 ${
            isTransitioning ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`}
          style={{
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
          }}
        />
      </div>
    </>
  );
}