import { useState, useEffect, useRef } from "react";

export default function Section({ id, title, description, items }) {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id={id}
      ref={sectionRef}
      className="relative flex items-center justify-center px-6 py-12 overflow-visible bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20 bg-cyan-500/40" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl opacity-20 bg-purple-500/40" />

      <div className="max-w-7xl w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <h2 
            className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent title-float"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-30px)',
              transition: 'all 0.8s ease-out',
            }}
          >
            {title}
          </h2>
          
          <p 
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {items && items.map((item, index) => (
            <div
              key={index}
              className="card-float group relative backdrop-blur-xl bg-slate-900/40 rounded-2xl border border-white/10 overflow-hidden"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transition: isVisible 
                  ? 'opacity 0.6s ease-out, box-shadow 0.15s ease, border-color 0.15s ease' 
                  : `all 0.6s ease-out ${0.3 + index * 0.1}s`,
                transform: isVisible ? 'none' : 'translateY(50px)',
              }}
            >
              {/* Card header */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 transition-opacity duration-300 group-hover:opacity-50`} />
                
                <div className="absolute inset-0 flex items-center justify-center text-7xl">
                  {item.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
              </div>

              {/* Card content */}
              <div className="p-6 relative">
                <h3 className="text-2xl font-bold mb-3 text-white transition-colors duration-200 group-hover:text-cyan-400">
                  {item.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                {item.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-white/5 text-cyan-400 text-xs rounded-full border border-white/10 transition-all duration-200 hover:bg-white/10 hover:border-cyan-400/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <button className="group/btn flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-semibold mt-4 border-none bg-transparent cursor-pointer p-0">
                  <span className="border-b border-cyan-400 group-hover/btn:border-cyan-300">
                    Learn More
                  </span>
                  <span className="inline-block group-hover/btn:translate-x-2 transition-transform duration-200">
                    →
                  </span>
                </button>
              </div>

              {/* Hover effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300 pointer-events-none rounded-2xl" />
              
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes titleFloat {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-10px); 
          }
        }
        
        .title-float {
          animation: titleFloat 3s ease-in-out infinite;
        }
        
        @keyframes cardFloat {
          0%, 100% { 
            transform: translateY(0) translateZ(0); 
          }
          50% { 
            transform: translateY(-8px) translateZ(0); 
          }
        }
        
        .card-float {
          transform: translateY(0) translateZ(0);
          transition: transform 0.25s ease-out, box-shadow 0.25s ease-out, border-color 0.25s ease-out;
        }
        
        .card-float:hover {
          animation: cardFloat 2s ease-in-out infinite;
          box-shadow: 0 20px 40px rgba(6, 182, 212, 0.2);
          border-color: rgba(6, 182, 212, 0.5);
        }
      `}</style>
    </section>
  );
}