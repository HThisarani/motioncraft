import { useState, useEffect } from "react";

export default function Hero() {
  const [time, setTime] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const loadTimeout = setTimeout(() => setLoaded(true), 50);
    
    let animationFrame;
    const animate = () => {
      setTime((prev) => prev + 0.01);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(loadTimeout);
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/src/assets/hero-video.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(6,182,212,0.2) 0%, transparent 50%),
            radial-gradient(circle at ${30 - mousePosition.x * 5}% ${70 - mousePosition.y * 5}%, rgba(59,130,246,0.2) 0%, transparent 50%),
            radial-gradient(circle at ${70 + mousePosition.x * 8}% ${30 + mousePosition.y * 8}%, rgba(139,92,246,0.15) 0%, transparent 50%)
          `,
          transition: 'background 0.3s ease-out',
        }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `perspective(1000px) rotateX(60deg) scale(2) translateY(-50%)`,
          transformOrigin: 'center top',
        }}
      />

      {/* Floating orbs with parallax */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full pointer-events-none blur-xl"
          style={{
            width: `${80 + (i % 4) * 40}px`,
            height: `${80 + (i % 4) * 40}px`,
            background: i % 3 === 0 
              ? 'radial-gradient(circle, rgba(6,182,212,0.3), transparent)' 
              : i % 3 === 1 
                ? 'radial-gradient(circle, rgba(59,130,246,0.3), transparent)' 
                : 'radial-gradient(circle, rgba(139,92,246,0.2), transparent)',
            left: `${5 + (i % 5) * 20}%`,
            top: `${10 + (i % 4) * 20}%`,
            opacity: loaded ? (0.3 + (i % 3) * 0.1) : 0,
            transform: `
              translate(
                ${Math.sin(time * (0.2 + i * 0.05)) * 80 + mousePosition.x * 30}px, 
                ${Math.cos(time * (0.3 + i * 0.04)) * 60 + mousePosition.y * 20}px
              ) 
              scale(${1 + Math.sin(time * 0.5 + i) * 0.2})
            `,
            transition: 'opacity 1.5s ease-out',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-32 pb-24">
        <div className="max-w-6xl w-full text-center">
          {/* Main title with modern animation */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-[10rem] font-black tracking-tight leading-none">
              <span
                className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translateY(0) scale(1) rotateX(0deg)' : 'translateY(80px) scale(0.7) rotateX(-60deg)',
                  transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  transformStyle: 'preserve-3d',
                  animation: loaded ? 'floatTitle 3s ease-in-out 1.2s infinite' : 'none',
                }}
              >
                Motion
              </span>
              <span
                className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent -mt-4"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translateY(0) scale(1) rotateX(0deg)' : 'translateY(80px) scale(0.7) rotateX(-60deg)',
                  transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s',
                  transformStyle: 'preserve-3d',
                  animation: loaded ? 'floatTitle 3s ease-in-out 1.4s infinite' : 'none',
                }}
              >
                Craft
              </span>
            </h1>
            
            {/* Decorative line */}
            <div 
              className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-6"
              style={{
                width: loaded ? '300px' : '0px',
                opacity: loaded ? 1 : 0,
                transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
              }}
            />
          </div>
          
          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
            }}
          >
            Crafting <span className="text-cyan-400 font-semibold">motion-first</span> digital experiences that captivate and inspire. 
            Where design meets <span className="text-blue-400 font-semibold">innovation</span>.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.9s',
            }}
          >
            <button className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 border-none cursor-pointer">
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-10 py-4 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 border-none cursor-pointer">
              <span className="relative z-10 flex items-center gap-2">
                View Work
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full group-hover:border-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 rounded-full transition-colors duration-300" />
            </button>
          </div>

          {/* Feature badges */}
          <div 
            className="flex flex-wrap gap-4 justify-center"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.1s',
            }}
          >
            {['Interactive Design', 'Smooth Animations', 'Modern UX'].map((badge) => (
              <div
                key={badge}
                className="px-5 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm text-gray-300 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 cursor-default"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.5s',
        }}
      >
        <span className="text-xs text-cyan-400/80 font-semibold uppercase tracking-widest">Discover</span>
        <div className="relative w-7 h-11 border-2 border-cyan-400/40 rounded-full flex justify-center p-1.5 group cursor-pointer hover:border-cyan-400 transition-colors">
          <div 
            className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"
            style={{
              animation: 'scroll 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0%, 100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.5;
          }
        }
        
        @keyframes floatTitle {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.02);
          }
        }
      `}</style>
    </section>
  );
}