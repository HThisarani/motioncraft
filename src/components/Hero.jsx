import { useState, useEffect } from "react";

export default function Hero() {
  const [time, setTime] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Use setTimeout to defer the state update to the next tick
    const loadTimeout = setTimeout(() => setLoaded(true), 0);
    
    let animationFrame;
    const animate = () => {
      setTime((prev) => prev + 0.01);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    
    return () => {
      clearTimeout(loadTimeout);
      cancelAnimationFrame(animationFrame);
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
      <div className="absolute inset-0 bg-black/65" />

      {/* Subtle mesh overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${3 + (i % 3)}px`,
            height: `${3 + (i % 3)}px`,
            background: i % 3 === 0 ? '#00d9ff' : i % 3 === 1 ? '#60a5fa' : '#a78bfa',
            left: `${10 + (i % 8) * 11}%`,
            top: `${15 + (i % 6) * 13}%`,
            opacity: loaded ? 0.6 : 0,
            transform: `translate(${Math.sin(time * 0.3 + i) * 50}px, ${Math.cos(time * 0.4 + i) * 40}px)`,
            transition: 'opacity 1s ease-out',
            boxShadow: `0 0 10px currentColor`,
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl">
          {/* Title with letter animation from sides */}
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 overflow-hidden">
            <div className="flex justify-center items-center flex-wrap gap-2">
              {['M', 'o', 't', 'i', 'o', 'n', 'C', 'r', 'a', 'f', 't'].map((letter, i) => (
                <span
                  key={`letter-${i}`}
                  className="inline-block gradient-text"
                  style={{
                    opacity: loaded ? 1 : 0,
                    transform: loaded 
                      ? 'translateX(0) translateY(0) rotate(0deg)' 
                      : `translateX(${i % 2 === 0 ? '-100px' : '100px'}) translateY(-50px) rotate(${i % 2 === 0 ? '-30deg' : '30deg'})`,
                    transition: `all ${0.6 + i * 0.08}s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.2 + i * 0.05}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </div>
          </h1>
          
          {/* Subtitle with word animation */}
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            {['We', 'design', 'motion-first,', 'interactive', 'digital', 'experiences', 'that', 'bring', 'interfaces', 'to', 'life.'].map((word, i) => (
              <span
                key={`word-${i}`}
                className="inline-block mr-2"
                style={{
                  opacity: loaded ? 1 : 0,
                  transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${1.5 + i * 0.08}s`,
                }}
              >
                {word}
              </span>
            ))}
          </p>

          {/* CTA Buttons with scale animation */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'scale(1)' : 'scale(0.8)',
              transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 2.5s',
            }}
          >
            <button className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50">
              <span className="flex items-center gap-2">
                Get Started
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-cyan-400/50 text-white font-bold rounded-full hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105 transition-all duration-300">
              View Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 3s',
        }}
      >
        <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center p-1 animate-bounce">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}