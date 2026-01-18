import { useState } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Navbar from "../components/Navbar";

export default function Home() {
  const [hoveredFooterLink, setHoveredFooterLink] = useState(null);

  const whatWeDoItems = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Crafting visually stunning and intuitive interfaces that users love. Every pixel matters.",
      gradient: "from-cyan-500 to-blue-600",
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
      gradient: "from-sky-500 to-blue-600",
      tags: ["Logos", "Guidelines", "Assets"]
    }
  ];

  const ourWorkItems = [
    {
      icon: "🌐",
      title: "E-Commerce Platform",
      description: "A modern shopping experience with 3D product previews and seamless checkout flow.",
      gradient: "from-cyan-600 to-teal-600",
      tags: ["React", "Three.js", "Stripe"]
    },
    {
      icon: "📱",
      title: "Social Media App",
      description: "Real-time messaging with beautiful transitions and gesture-based navigation.",
      gradient: "from-blue-600 to-indigo-600",
      tags: ["React Native", "WebSocket", "Firebase"]
    },
    {
      icon: "🎮",
      title: "Gaming Dashboard",
      description: "Interactive stats visualization with live data updates and leaderboards.",
      gradient: "from-sky-600 to-cyan-600",
      tags: ["Dashboard", "Charts", "Real-time"]
    }
  ];

  const whyUsItems = [
    {
      icon: "🚀",
      title: "Fast & Efficient",
      description: "We deliver high-quality work on time without compromising on performance or aesthetics.",
      gradient: "from-blue-500 to-cyan-500",
      tags: ["Agile", "CI/CD", "Optimized"]
    },
    {
      icon: "🤝",
      title: "Collaborative",
      description: "Your vision drives our work. We maintain constant communication throughout the project.",
      gradient: "from-cyan-500 to-blue-600",
      tags: ["Transparent", "Feedback", "Partnership"]
    },
    {
      icon: "🏆",
      title: "Award Winning",
      description: "Recognized for excellence in design and development by industry leaders worldwide.",
      gradient: "from-sky-500 to-blue-500",
      tags: ["CSS Awards", "Awwwards", "FWA"]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">
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

      {/* Modern CTA Section */}
      <section className="relative py-16 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        
        {/* Animated Orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-sm text-cyan-300 font-semibold">Let's Build Together</span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            Ready to Create<br />Something Amazing?
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Let's collaborate and bring your vision to life with stunning design and smooth interactions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 border-none cursor-pointer">
              <span className="relative z-10 flex items-center gap-2">
                Start a Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button className="group relative px-10 py-4 text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 border-none cursor-pointer">
              <span className="relative z-10 flex items-center gap-2">
                View Case Studies
                <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
              <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full group-hover:border-cyan-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/10 rounded-full transition-colors duration-300" />
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 opacity-70">
            {['Trusted by 500+ clients', 'Award-winning team', '99% satisfaction rate'].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="relative border-t border-white/5 bg-slate-950">
        {/* Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="container mx-auto px-6 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-8">
            {/* Brand Column */}
            <div className="md:col-span-4">
              <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MotionCraft
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Crafting digital experiences that inspire and delight through motion, design, and innovation.
              </p>
              
              {/* Status Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-xl">
                <div className="relative">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                </div>
                <span className="text-sm text-cyan-300 font-medium">Available for projects</span>
              </div>
            </div>

            {/* Services */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-3">
                {['UI/UX Design', 'Development', 'Branding', 'Consulting'].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-cyan-400 transition-all duration-300 inline-flex items-center gap-2 group"
                      onMouseEnter={() => setHoveredFooterLink(`service-${i}`)}
                      onMouseLeave={() => setHoveredFooterLink(null)}
                    >
                      <span 
                        className="h-px bg-cyan-400 transition-all duration-300"
                        style={{width: hoveredFooterLink === `service-${i}` ? '16px' : '0px'}}
                      />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className="md:col-span-2">
              <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Blog', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-cyan-400 transition-all duration-300 inline-flex items-center gap-2 group"
                      onMouseEnter={() => setHoveredFooterLink(`company-${i}`)}
                      onMouseLeave={() => setHoveredFooterLink(null)}
                    >
                      <span 
                        className="h-px bg-cyan-400 transition-all duration-300"
                        style={{width: hoveredFooterLink === `company-${i}` ? '16px' : '0px'}}
                      />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div className="md:col-span-4">
              <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-wider">Connect</h4>
              <p className="text-gray-400 mb-6">Follow us for updates and inspiration</p>
              <div className="flex gap-3">
                {[
                  { icon: '𝕏', gradient: 'from-cyan-500 to-blue-500' },
                  { icon: 'in', gradient: 'from-blue-500 to-indigo-500' },
                  { icon: 'ig', gradient: 'from-purple-500 to-pink-500' },
                  { icon: 'be', gradient: 'from-blue-600 to-cyan-600' },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="group relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-6"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-20 group-hover:opacity-100 rounded-xl transition-opacity duration-300 blur-sm`} />
                    <div className="absolute inset-[2px] bg-slate-950 rounded-xl" />
                    <span className={`relative text-lg font-bold bg-gradient-to-br ${social.gradient} bg-clip-text text-transparent`}>
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2025 MotionCraft. All rights reserved. Built with 
              <span className="text-cyan-400 mx-1">passion</span> 
              and React.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}