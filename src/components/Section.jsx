import { useState, useEffect, useRef } from "react";

// Generate particles outside component
const generateSectionParticles = () => {
  return [...Array(30)].map((_, i) => ({
    id: i,
    angle: (Math.PI * 2 * i) / 30,
    velocity: 1.5 + Math.random() * 2.5,
    color: ['#a78bfa', '#ec4899', '#22d3ee', '#f97316'][Math.floor(Math.random() * 4)],
    size: 3 + Math.random() * 5,
  }));
};

const SECTION_PARTICLES = generateSectionParticles();

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

  const titleLetters = title ? title.split("") : [];
  const descWords = description ? description.split(" ") : [];

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Explosion Particles */}
      {isVisible && SECTION_PARTICLES.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            left: '50%',
            top: '30%',
            boxShadow: `0 0 ${particle.size * 4}px ${particle.color}`,
            animation: `sectionBurst 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
            '--angle': `${particle.angle}rad`,
            '--velocity': particle.velocity,
            opacity: 0,
          }}
        />
      ))}

      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-indigo-950/30 to-black"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle, #8b5cf6 2px, transparent 2px)',
            backgroundSize: '50px 50px',
            transform: `translateY(${Math.sin(time * 0.2) * 20}px)`,
          }}
        />
      </div>

      {/* 3 Large Animated Orbs - Always moving */}
      <div 
        className="absolute top-20 left-10 w-[400px] h-[400px] bg-violet-500/30 rounded-full blur-3xl"
        style={{
          transform: `translate(${Math.sin(time * 0.3) * 50}px, ${Math.cos(time * 0.4) * 50}px) scale(${1 + Math.sin(time * 0.2) * 0.2})`,
        }}
      />
      <div 
        className="absolute bottom-20 right-10 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-3xl"
        style={{
          transform: `translate(${Math.cos(time * 0.5) * 60}px, ${Math.sin(time * 0.3) * 60}px) scale(${1 + Math.cos(time * 0.25) * 0.2})`,
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 w-[350px] h-[350px] bg-fuchsia-500/30 rounded-full blur-3xl"
        style={{
          transform: `translate(${Math.sin(time * 0.4) * 70}px, ${Math.cos(time * 0.35) * 70}px) scale(${1 + Math.sin(time * 0.3) * 0.2})`,
        }}
      />

      {/* Floating motion circles - pulse animation */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`circle-${i}`}
          className="absolute opacity-15 pointer-events-none"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i * 13) % 60}%`,
            transform: `translate(${Math.sin(time * 0.35 + i * 0.6) * 50}px, ${Math.cos(time * 0.25 + i * 0.8) * 50}px) scale(${0.6 + Math.sin(time * 0.5 + i) * 0.4})`,
          }}
        >
          <div 
            className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-violet-500/30 backdrop-blur-sm border border-cyan-400/20"
            style={{
              boxShadow: '0 0 25px rgba(34, 211, 238, 0.3)',
            }}
          />
        </div>
      ))}

      <div className="max-w-7xl w-full relative z-10">
        {/* Section Header - Title letters split and fly in with continuous float */}
        <div className="text-center mb-20">
          <h2 
            className="text-6xl md:text-8xl font-black mb-8 overflow-hidden"
            style={{
              animation: isVisible ? 'floatContinuous 5s ease-in-out 1.5s infinite' : 'none',
            }}
          >
            <div className="flex flex-wrap justify-center">
              {titleLetters.map((letter, i) => (
                <span
                  key={`title-${i}`}
                  className={`inline-block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent ${letter === ' ' ? 'w-4' : ''}`}
                  style={{
                    animation: isVisible ? `titleFly${i % 2 === 0 ? 'Left' : 'Right'} 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.3 + i * 0.05}s backwards, letterFloat 3s ease-in-out ${2 + i * 0.1}s infinite` : 'none',
                    filter: "drop-shadow(0 0 30px rgba(139,92,246,0.5))",
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </div>
          </h2>
          
          {/* Description words appear one by one with float */}
          <p 
            className="text-gray-300 text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed"
            style={{
              animation: isVisible ? 'floatContinuous 4.5s ease-in-out 2s infinite' : 'none',
            }}
          >
            {descWords.map((word, i) => (
              <span
                key={`word-${i}`}
                className="inline-block mr-2"
                style={{
                  animation: isVisible ? `wordAppear 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${0.8 + i * 0.04}s backwards` : 'none',
                }}
              >
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* Cards Grid - Blast from different angles with continuous float */}
        <div className="grid md:grid-cols-3 gap-8">
          {items && items.map((item, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-violet-900/20 to-cyan-900/20 rounded-3xl border border-violet-500/30 overflow-hidden transition-all duration-700 hover:scale-105 hover:border-violet-400/70 hover:shadow-2xl hover:shadow-violet-500/40"
              style={{ 
                animation: isVisible ? 
                  index === 0 ? `blastBottomLeft 1s cubic-bezier(0.34, 1.56, 0.64, 1) 1.2s backwards, floatContinuous ${5 + index * 0.3}s ease-in-out ${3 + index * 0.2}s infinite` :
                  index === 1 ? `blastTop 1s cubic-bezier(0.34, 1.56, 0.64, 1) 1.3s backwards, floatContinuous ${5 + index * 0.3}s ease-in-out ${3 + index * 0.2}s infinite` :
                  `blastBottomRight 1s cubic-bezier(0.34, 1.56, 0.64, 1) 1.4s backwards, floatContinuous ${5 + index * 0.3}s ease-in-out ${3 + index * 0.2}s infinite` : 'none',
                transform: isVisible ? `translateY(${Math.sin(time * 0.5 + index) * 8}px)` : 'none',
              }}
            >
              {/* Card image/icon area */}
              <div className="relative h-56 overflow-hidden">
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-60 group-hover:opacity-80 transition-all duration-500`}
                  style={{
                    transform: `scale(${1 + Math.sin(time + index) * 0.05})`,
                  }}
                />
                {/* Icon floats and rotates */}
                <div 
                  className="absolute inset-0 flex items-center justify-center text-9xl group-hover:scale-125 transition-transform duration-700"
                  style={{
                    transform: `translateY(${Math.sin(time * 0.7 + index) * 10}px) rotate(${Math.sin(time * 0.5 + index) * 15}deg) scale(${0.9 + Math.sin(time * 0.4 + index) * 0.1})`,
                  }}
                >
                  {item.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>

              {/* Card content */}
              <div className="p-8">
                <h3 className="text-3xl font-black mb-4 text-white group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-5 leading-relaxed text-lg">
                  {item.description}
                </p>
                
                {/* Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-4 py-2 bg-violet-500/20 text-violet-300 text-sm rounded-full border border-violet-500/40 hover:bg-violet-500/30 transition-all duration-300 font-semibold hover:scale-110"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <button className="group/btn flex items-center gap-3 text-violet-400 hover:text-violet-300 transition-all duration-300 font-bold text-lg mt-6">
                  <span className="border-b-2 border-violet-400 group-hover/btn:border-violet-300">
                    Read more
                  </span>
                  <span className="inline-block group-hover/btn:translate-x-3 transition-transform duration-300 text-xl">
                    →
                  </span>
                </button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes sectionBurst {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { 
            opacity: 0; 
            transform: translate(
              calc(-50% + cos(var(--angle)) * var(--velocity) * 180px),
              calc(-50% + sin(var(--angle)) * var(--velocity) * 180px)
            ) scale(0);
          }
        }

        @keyframes floatContinuous {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes letterFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }

        @keyframes titleFlyLeft {
          from { opacity: 0; transform: translateX(-150px) rotate(-75deg) scale(0.5); }
          to { opacity: 1; transform: translateX(0) rotate(0deg) scale(1); }
        }

        @keyframes titleFlyRight {
          from { opacity: 0; transform: translateX(150px) rotate(75deg) scale(0.5); }
          to { opacity: 1; transform: translateX(0) rotate(0deg) scale(1); }
        }

        @keyframes wordAppear {
          from { opacity: 0; transform: translateY(15px) scale(0.9); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes blastBottomLeft {
          from { 
            opacity: 0; 
            transform: translate(-120px, 120px) rotate(-35deg) scale(0.3);
          }
          to { 
            opacity: 1; 
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }

        @keyframes blastTop {
          from { 
            opacity: 0; 
            transform: translateY(-150px) rotate(160deg) scale(0.3);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) rotate(0deg) scale(1);
          }
        }

        @keyframes blastBottomRight {
          from { 
            opacity: 0; 
            transform: translate(120px, 120px) rotate(35deg) scale(0.3);
          }
          to { 
            opacity: 1; 
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
        }
      `}</style>
    </section>
  );
}