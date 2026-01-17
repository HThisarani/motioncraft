import Hero from "../components/Hero";
import Section from "../components/Section";
import Navbar from "../components/Navbar";

export default function Home() {
  const whatWeDoItems = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Crafting visually stunning and intuitive interfaces that users love. Every pixel matters.",
      gradient: "from-purple-500 to-pink-500",
      tags: ["Figma", "Wireframing", "Prototyping"]
    },
    {
      icon: "⚡",
      title: "Motion Graphics",
      description: "Bringing designs to life with smooth, performant animations that create memorable experiences.",
      gradient: "from-blue-500 to-cyan-500",
      tags: ["Framer", "GSAP", "CSS Animations"]
    },
    {
      icon: "💎",
      title: "Brand Identity",
      description: "Building cohesive visual systems that tell your story and resonate with your audience.",
      gradient: "from-pink-500 to-purple-500",
      tags: ["Logos", "Guidelines", "Assets"]
    }
  ];

  const ourWorkItems = [
    {
      icon: "🌐",
      title: "E-Commerce Platform",
      description: "A modern shopping experience with 3D product previews and seamless checkout flow.",
      gradient: "from-green-500 to-emerald-500",
      tags: ["React", "Three.js", "Stripe"]
    },
    {
      icon: "📱",
      title: "Social Media App",
      description: "Real-time messaging with beautiful transitions and gesture-based navigation.",
      gradient: "from-orange-500 to-red-500",
      tags: ["React Native", "WebSocket", "Firebase"]
    },
    {
      icon: "🎮",
      title: "Gaming Dashboard",
      description: "Interactive stats visualization with live data updates and leaderboards.",
      gradient: "from-indigo-500 to-purple-500",
      tags: ["Dashboard", "Charts", "Real-time"]
    }
  ];

  const whyUsItems = [
    {
      icon: "🚀",
      title: "Fast & Efficient",
      description: "We deliver high-quality work on time without compromising on performance or aesthetics.",
      gradient: "from-blue-500 to-purple-500",
      tags: ["Agile", "CI/CD", "Optimized"]
    },
    {
      icon: "🤝",
      title: "Collaborative",
      description: "Your vision drives our work. We maintain constant communication throughout the project.",
      gradient: "from-purple-500 to-pink-500",
      tags: ["Transparent", "Feedback", "Partnership"]
    },
    {
      icon: "🏆",
      title: "Award Winning",
      description: "Recognized for excellence in design and development by industry leaders worldwide.",
      gradient: "from-yellow-500 to-orange-500",
      tags: ["CSS Awards", "Awwwards", "FWA"]
    }
  ];

  return (
    <div className="bg-black text-white">
      <Navbar />
      
      <Hero />
      
      <Section
        id="what-we-do"
        title="What We Do"
        description="We transform ideas into exceptional digital experiences through design, motion, and technology."
        items={whatWeDoItems}
      />
      
      <Section
        id="work"
        title="Our Work"
        description="A curated collection of projects that showcase our passion for creating stunning digital products."
        items={ourWorkItems}
      />
      
      <Section
        id="why-us"
        title="Why Choose Us"
        description="We're not just developers and designers—we're storytellers who bring your vision to life."
        items={whyUsItems}
      />

      {/* Call to Action Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-blue-950"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/40 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-600/40 rounded-full mix-blend-screen filter blur-3xl opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-600/30 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-purple-300">✨ Let's Build Together</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent leading-tight">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Let's collaborate and bring your vision to life with stunning design and smooth interactions.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full text-lg font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 bg-size-200 bg-pos-0 hover:bg-pos-100 bg-gradient-animate">
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </button>
            <button className="px-12 py-5 backdrop-blur-md bg-white/5 border-2 border-purple-400/30 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-purple-400/50 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-purple-500/10 py-16 bg-gradient-to-b from-black to-purple-950/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Motion<span className="text-white">Craft</span>
              </h3>
              <p className="text-gray-500 leading-relaxed">
                Crafting digital experiences that inspire and delight.
              </p>
              <div className="mt-6 flex gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-purple-400 transition-all"></span>
                  UI/UX Design
                </a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-purple-400 transition-all"></span>
                  Development
                </a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-purple-400 transition-all"></span>
                  Branding
                </a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-gray-500">
                <li><a href="#" className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-purple-400 transition-all"></span>
                  About Us
                </a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-purple-400 transition-all"></span>
                  Careers
                </a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-4 h-px bg-purple-400 transition-all"></span>
                  Contact
                </a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-white">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center hover:from-purple-500/40 hover:to-pink-500/40 transition-all hover:scale-110 hover:rotate-6 backdrop-blur-sm border border-purple-500/20">
                  <span className="text-sm">𝕏</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center hover:from-blue-500/40 hover:to-cyan-500/40 transition-all hover:scale-110 hover:rotate-6 backdrop-blur-sm border border-blue-500/20">
                  <span className="text-sm font-bold">in</span>
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center hover:from-pink-500/40 hover:to-purple-500/40 transition-all hover:scale-110 hover:rotate-6 backdrop-blur-sm border border-pink-500/20">
                  <span className="text-sm font-bold">ig</span>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-600 pt-8 border-t border-purple-500/10">
            <p className="text-sm">© 2025 MotionCraft. All rights reserved. Built with passion and React. ✨</p>
          </div>
        </div>
      </footer>
    </div>
  );
}