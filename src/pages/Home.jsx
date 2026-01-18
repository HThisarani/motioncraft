import { useState } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Navbar from "../components/Navbar";

export default function Home() {
  const [hoveredFooterLink, setHoveredFooterLink] = useState(null);
  const [ctaHovered, setCtaHovered] = useState(false);

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

      {/* Modern CTA Section with Interactive Elements */}
      <section className="relative py-32 md:py-40 px-6 overflow-hidden">
        {/* Simplified Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-black to-cyan-950" />
          
          {/* Single Subtle Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full filter blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Badge with Shimmer Effect */}
          <div className="inline-block mb-6 md:mb-8 group">
            <div className="relative px-6 md:px-8 py-2.5 md:py-3 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <span className="relative text-xs md:text-sm font-semibold text-cyan-300 tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                Let's Build Together
              </span>
            </div>
          </div>

          {/* Main Heading with Gradient Animation */}
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 md:mb-8 leading-[1.1] px-4"
            onMouseEnter={() => setCtaHovered(true)}
            onMouseLeave={() => setCtaHovered(false)}
          >
            <span 
              className="inline-block bg-gradient-to-r from-cyan-300 via-blue-300 to-sky-300 bg-clip-text text-transparent transition-all duration-500"
              style={{
                backgroundSize: ctaHovered ? '200% 100%' : '100% 100%',
                backgroundPosition: ctaHovered ? '100% 0' : '0 0',
              }}
            >
              Ready to Create<br />Something Amazing?
            </span>
          </h2>

          {/* Subtitle with Reveal Animation */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto font-light leading-relaxed px-4">
            Let's collaborate and bring your vision to life with 
            <span className="text-cyan-400 font-medium"> stunning design</span> and 
            <span className="text-blue-400 font-medium"> smooth interactions</span>.
          </p>

          {/* Modern CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
            <button className="group relative px-8 sm:px-10 md:px-14 py-4 md:py-6 rounded-full text-base md:text-lg font-bold overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-[length:200%_100%] animate-gradient" />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-[-2px] bg-gradient-to-r from-cyan-400 to-blue-400 blur-xl" />
              </div>
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center justify-center gap-3">
                Start a Project
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            <button className="group relative px-8 sm:px-10 md:px-14 py-4 md:py-6 rounded-full text-base md:text-lg font-bold transition-all duration-300 hover:scale-105 overflow-hidden w-full sm:w-auto">
              {/* Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 opacity-30 group-hover:opacity-50 transition-opacity rounded-full p-[2px]">
                <div className="h-full w-full bg-black rounded-full" />
              </div>
              
              {/* Glassmorphism Background */}
              <div className="absolute inset-[2px] bg-white/5 backdrop-blur-sm rounded-full group-hover:bg-white/10 transition-colors" />
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center justify-center gap-2">
                View Case Studies
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 md:mt-20 flex flex-wrap justify-center gap-4 md:gap-8 opacity-70 px-4">
            {['Trusted by 500+ clients', 'Award-winning team', '99% satisfaction rate'].map((text, i) => (
              <div key={i} className="flex items-center gap-2 text-xs md:text-sm text-gray-300">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultra-Modern Footer */}
      <footer className="relative border-t border-cyan-500/10 bg-black overflow-hidden">
        {/* Gradient Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        
        {/* Subtle Background Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 217, 255, 0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative container mx-auto px-6 py-16 md:py-20">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Brand Column - Larger */}
            <div className="md:col-span-12 lg:col-span-4">
              <h3 className="text-3xl md:text-4xl font-black mb-4 md:mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                MotionCraft
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6 md:mb-8 text-base md:text-lg">
                Crafting digital experiences that inspire and delight through motion, design, and innovation.
              </p>
              
              {/* Animated Status Indicator */}
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm">
                <div className="relative">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <div className="absolute inset-0 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                </div>
                <span className="text-sm text-cyan-300 font-medium">Available for projects</span>
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-6 lg:col-span-2">
              <h4 className="font-bold mb-4 md:mb-6 text-white text-sm uppercase tracking-wider">Services</h4>
              <ul className="space-y-3 md:space-y-4">
                {['UI/UX Design', 'Development', 'Branding', 'Consulting'].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-cyan-400 transition-all duration-300 inline-flex items-center gap-2 group text-sm md:text-base"
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

            <div className="md:col-span-6 lg:col-span-2">
              <h4 className="font-bold mb-4 md:mb-6 text-white text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 md:space-y-4">
                {['About Us', 'Careers', 'Blog', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-cyan-400 transition-all duration-300 inline-flex items-center gap-2 group text-sm md:text-base"
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

            {/* Social Column */}
            <div className="md:col-span-12 lg:col-span-4">
              <h4 className="font-bold mb-4 md:mb-6 text-white text-sm uppercase tracking-wider">Connect</h4>
              <p className="text-gray-300 mb-4 md:mb-6 text-sm md:text-base">Follow us for updates and inspiration</p>
              <div className="flex gap-3 md:gap-4">
                {[
                  { icon: '𝕏', gradient: 'from-cyan-500 to-blue-500' },
                  { icon: 'in', gradient: 'from-blue-500 to-indigo-500' },
                  { icon: 'ig', gradient: 'from-purple-500 to-pink-500' },
                  { icon: 'be', gradient: 'from-blue-600 to-cyan-600' },
                ].map((social, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="group relative w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-rotate-6"
                  >
                    {/* Gradient Border */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-20 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 blur-sm`} />
                    <div className={`absolute inset-[2px] bg-black rounded-2xl`} />
                    
                    {/* Icon */}
                    <span className={`relative text-base md:text-lg font-bold bg-gradient-to-br ${social.gradient} bg-clip-text text-transparent`}>
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 md:pt-10 border-t border-cyan-500/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
              © 2025 MotionCraft. All rights reserved. Built with 
              <span className="text-cyan-400 mx-1">passion</span> 
              and React.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
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