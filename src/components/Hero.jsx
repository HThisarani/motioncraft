import { useState, useEffect } from "react";
import heroVideo from "../assets/hero-video.mp4";

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

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearTimeout(loadTimeout);
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-black">
      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at ${50 + mousePosition.x * 10}% ${
            50 + mousePosition.y * 10
          }%, rgba(6,182,212,0.2) 0%, transparent 50%),
            radial-gradient(circle at ${30 - mousePosition.x * 5}% ${
            70 - mousePosition.y * 5
          }%, rgba(59,130,246,0.2) 0%, transparent 50%),
            radial-gradient(circle at ${70 + mousePosition.x * 8}% ${
            30 + mousePosition.y * 8
          }%, rgba(139,92,246,0.15) 0%, transparent 50%)
          `,
          transition: "background 0.3s ease-out",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6,182,212,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6,182,212,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform:
            "perspective(1000px) rotateX(60deg) scale(2) translateY(-50%)",
          transformOrigin: "center top",
        }}
      />

      {/* Floating orbs */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-xl pointer-events-none"
          style={{
            width: `${100 + (i % 4) * 40}px`,
            height: `${100 + (i % 4) * 40}px`,
            background:
              i % 3 === 0
                ? "radial-gradient(circle, rgba(6,182,212,0.3), transparent)"
                : i % 3 === 1
                ? "radial-gradient(circle, rgba(59,130,246,0.3), transparent)"
                : "radial-gradient(circle, rgba(139,92,246,0.2), transparent)",
            left: `${(i % 5) * 20}%`,
            top: `${(i % 4) * 25}%`,
            transform: `
              translate(
                ${Math.sin(time * (0.2 + i * 0.05)) * 80}px,
                ${Math.cos(time * (0.3 + i * 0.04)) * 60}px
              )
            `,
          }}
        />
      ))}

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-32 pb-24">
        <div className="max-w-6xl text-center">
          {/* Title */}
          <h1 className="text-7xl md:text-[10rem] font-black leading-none">
            <span
              className="block bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded
                  ? "translateY(0)"
                  : "translateY(80px)",
                transition: "all 0.8s cubic-bezier(0.34,1.56,0.64,1)",
                animation: loaded
                  ? "floatTitle 3s ease-in-out 1.2s infinite"
                  : "none",
              }}
            >
              Motion
            </span>
            <span
              className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent -mt-4"
              style={{
                opacity: loaded ? 1 : 0,
                transform: loaded
                  ? "translateY(0)"
                  : "translateY(80px)",
                transition:
                  "all 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.15s",
                animation: loaded
                  ? "floatTitle 3s ease-in-out 1.4s infinite"
                  : "none",
              }}
            >
              Craft
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-10 mb-12"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease 0.6s",
            }}
          >
            Crafting{" "}
            <span className="text-cyan-400 font-semibold">
              motion-first
            </span>{" "}
            digital experiences where design meets{" "}
            <span className="text-blue-400 font-semibold">
              innovation
            </span>
            .
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold hover:scale-105 transition">
              Get Started
            </button>
            <button className="px-10 py-4 rounded-full border border-cyan-400/40 text-white hover:border-cyan-400 hover:bg-cyan-400/10 transition">
              View Work
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce mt-2" />
        </div>
      </div>

      <style jsx>{`
        @keyframes floatTitle {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-14px);
          }
        }
      `}</style>
    </section>
  );
}
