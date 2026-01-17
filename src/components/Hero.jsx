import { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setMousePosition({
            x: (e.clientX / window.innerWidth - 0.5) * 30,
            y: (e.clientY / window.innerHeight - 0.5) * 30,
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.3),transparent_50%)]" />
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply blur-3xl opacity-70 animate-blob animation-delay-4000" />
        </div>
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full blur-2xl opacity-40 pointer-events-none animate-float"
        style={{
          top: "15%",
          left: "10%",
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
        }}
      />
      <div
        className="absolute w-80 h-80 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full blur-2xl opacity-40 pointer-events-none animate-float-delayed"
        style={{
          bottom: "20%",
          right: "10%",
          transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
        }}
      />

      {/* Main content */}
      <Motion.div
        className="relative z-10 text-center px-6 max-w-5xl"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/50 rounded-full text-sm text-purple-300">
            ✨ Welcome to the Future of Motion Design
          </span>
        </div>

        <h1 className="text-7xl md:text-9xl font-black mb-8 leading-tight">
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
            Motion
          </span>
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
            Craft
          </span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          Where creativity meets technology. We craft
          <span className="text-purple-400 font-semibold">
            {" "}
            interactive digital experiences
          </span>{" "}
          that captivate and inspire.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Work
              <span className="transition-transform group-hover:translate-x-2">
                →
              </span>
            </span>
          </button>

          <button className="px-8 py-4 backdrop-blur-sm border-2 border-purple-500/50 rounded-full text-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 hover:scale-105">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" />
              Watch Demo
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16">
          {[
            { value: "500+", label: "Projects", color: "text-purple-400" },
            { value: "50+", label: "Happy Clients", color: "text-blue-400" },
            { value: "98%", label: "Satisfaction", color: "text-pink-400" },
          ].map((item) => (
            <div
              key={item.label}
              className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 hover:border-purple-500/50 transition-all hover:scale-105"
            >
              <div className={`text-3xl font-bold ${item.color}`}>
                {item.value}
              </div>
              <div className="text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </div>
      </Motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-purple-400">
        <span className="text-sm">Scroll to explore</span>
      </div>
    </section>
  );
}
