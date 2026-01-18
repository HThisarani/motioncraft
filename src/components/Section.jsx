import { useState, useEffect, useRef } from "react";

export default function Section({ id, title, description, items }) {
  const [isVisible, setIsVisible] = useState(false);
  const [time, setTime] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    let animationFrame;
    const animate = () => {
      setTime((prev) => prev + 0.01);
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const descWords = description ? description.split(" ") : [];

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative flex items-center justify-center px-6 py-12 overflow-visible bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Animated gradient orbs */}
      <div 
        className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(6,182,212,0.4), transparent 70%)',
          transform: `translate(${Math.sin(time * 0.3) * 50}px, ${Math.cos(time * 0.4) * 50}px) scale(${1 + Math.sin(time * 0.2) * 0.2})`,
        }}
      />
      <div 
        className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)',
          transform: `translate(${Math.cos(time * 0.5) * 60}px, ${Math.sin(time * 0.3) * 60}px) scale(${1 + Math.cos(time * 0.25) * 0.2})`,
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-[450px] h-[450px] rounded-full blur-3xl opacity-15"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.4), transparent 70%)',
          transform: `translate(${Math.sin(time * 0.4) * 70}px, ${Math.cos(time * 0.35) * 70}px) scale(${1 + Math.sin(time * 0.3) * 0.2})`,
        }}
      />

      <div className="max-w-7xl w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 px-4">
          <div className="py-16 -my-8">
            <h2 
              className="text-5xl md:text-7xl font-black mb-4"
              style={{
                animation: isVisible ? 'floatTitle 3s ease-in-out infinite' : 'none',
              }}
            >
              <div className="flex flex-wrap justify-center gap-1">
                {title && title.split("").map((letter, i) => (
                  <span
                    key={`letter-${i}`}
                    className={`inline-block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent ${letter === ' ' ? 'w-3' : ''}`}
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible 
                        ? 'translateX(0) translateY(0) rotate(0deg) scale(1)' 
                        : `translateX(${i % 2 === 0 ? '-100px' : '100px'}) translateY(-30px) rotate(${i % 2 === 0 ? '-20deg' : '20deg'}) scale(0.5)`,
                      transition: `all ${0.6 + i * 0.04}s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.1 + i * 0.03}s`,
                      animation: isVisible ? `letterFloat 2.5s ease-in-out ${i * 0.1}s infinite` : 'none',
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </div>
            </h2>
          </div>
          
          <p 
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{
              animation: isVisible ? 'floatDescription 3.5s ease-in-out 0.5s infinite' : 'none',
            }}
          >
            {descWords.map((word, i) => (
              <span
                key={`desc-${i}`}
                className="inline-block mr-2"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
                  transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.8 + i * 0.04}s`,
                  animation: isVisible ? `wordFloat 2s ease-in-out ${1 + i * 0.05}s infinite` : 'none',
                }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {items && items.map((item, index) => (
                          <div
              key={index}
              className="group relative backdrop-blur-xl bg-slate-900/40 rounded-2xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translate(0, 0) rotate(0deg) scale(1)' 
                  : index === 0 
                    ? 'translate(-100px, 100px) rotate(-25deg) scale(0.5)'
                    : index === 1
                      ? 'translateY(-120px) rotate(15deg) scale(0.5)'
                      : 'translate(100px, 100px) rotate(25deg) scale(0.5)',
                transition: `all 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) ${1.2 + index * 0.15}s`,
              }}
            >
              {/* Animated background particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`particle-${i}`}
                    className="absolute rounded-full bg-cyan-400"
                    style={{
                      width: `${2 + (i % 3)}px`,
                      height: `${2 + (i % 3)}px`,
                      left: `${10 + (i % 4) * 25}%`,
                      top: `${20 + (i % 3) * 30}%`,
                      opacity: 0.3,
                      transform: `translate(${Math.sin(time * 0.5 + i + index) * 20}px, ${Math.cos(time * 0.3 + i + index) * 20}px)`,
                      boxShadow: '0 0 10px currentColor',
                    }}
                  />
                ))}
              </div>

              {/* Card header */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 group-hover:opacity-50 transition-all duration-500`}
                  style={{
                    transform: `scale(${1.2 + Math.sin(time + index) * 0.1}) rotate(${Math.sin(time * 0.5 + index) * 5}deg)`,
                  }}
                />
                
                {/* Icon with 3D rotation effect */}
                <div 
                  className="absolute inset-0 flex items-center justify-center text-7xl transition-all duration-700"
                  style={{
                    transform: `
                      translateY(${Math.sin(time * 0.5 + index) * 8}px) 
                      rotateY(${Math.sin(time * 0.3 + index) * 15}deg)
                      rotateX(${Math.cos(time * 0.4 + index) * 10}deg)
                      scale(${0.95 + Math.sin(time * 0.4 + index) * 0.05})
                    `,
                    filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
                  }}
                >
                  {item.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                
                {/* Animated light sweep */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(45deg, transparent 30%, rgba(6,182,212,0.1) 50%, transparent 70%)',
                    transform: 'translateX(-100%)',
                    animation: isVisible ? 'sweep 3s ease-in-out infinite' : 'none',
                  }}
                />
              </div>

              {/* Card content */}
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Tags with staggered animation */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-white/5 text-cyan-400 text-xs rounded-full border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'scale(1)' : 'scale(0)',
                          transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${1.5 + index * 0.15 + tagIndex * 0.1}s`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <button className="group/btn flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 font-semibold mt-4 border-none bg-transparent cursor-pointer p-0">
                  <span className="border-b border-cyan-400 group-hover/btn:border-cyan-300">
                    Learn More
                  </span>
                  <span className="inline-block group-hover/btn:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </button>
              </div>

              {/* Hover gradient overlay with pulse */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500 pointer-events-none rounded-2xl"
                style={{
                  opacity: 0.5 + Math.sin(time * 2 + index) * 0.5,
                }}
              />
              
              {/* Glowing edges on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes sweep {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes floatTitle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes letterFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        
        @keyframes floatDescription {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes wordFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
      `}</style>
    </section>
  );
}