import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../constants';
import heroImage from '../Images/HeroSection.png';
import rhcsaBadge from '../Images/RHCSA.png';
import lockInCloud from '../Images/Lock in cloude.png';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden bg-[#030305]">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-radial from-[#1e1e2e]/50 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-[#0F1014] text-[#60A5FA] text-sm font-semibold mb-8">
            <Icons.Award className="w-4 h-4" />
            <span className="tracking-wide">Red Hat Certified Training</span>
          </div>

          <h4 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-[1.2] font-bold font-display mb-6 lg:mb-8 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-hero-blue to-hero-purple pb-2">RHCSA</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-hero-purple to-hero-pink pb-2">Certification &</span>
            <br />
            <span className="text-white whitespace-nowrap">Enterprise Cloud Solutions</span>
          </h4>

          <p className="text-hero-text text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            Master Red Hat Enterprise Linux and accelerate your career with industry-recognized certifications and hands-on cloud training.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mb-12 lg:mb-20">
            <button className="px-8 py-4 rounded-xl bg-[#4A6CF7] hover:bg-[#3a56d4] text-btn-primary-text font-semibold shadow-[0_4px_20px_rgba(74,108,247,0.4)] transition-all transform hover:-translate-y-0.5 tracking-wide w-full sm:w-auto">
              Enroll for RHCSA / Training
            </button>
            <button className="px-8 py-4 rounded-xl border border-white/10 bg-[#0F1014] text-btn-secondary-text font-medium hover:bg-white/5 transition-all tracking-wide w-full sm:w-auto">
              View Courses
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 lg:gap-16 border-t border-white/5 pt-10 justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <div className="text-2xl lg:text-[2rem] font-bold text-stat-blue">99.9%</div>
              <div className="text-sm text-stat-label font-medium mt-1 uppercase tracking-wider">Uptime SLA</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl lg:text-[2rem] font-bold text-stat-red">500K+</div>
              <div className="text-sm text-stat-label font-medium mt-1 uppercase tracking-wider">Threats Blocked</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-2xl lg:text-[2rem] font-bold text-stat-green">24/7</div>
              <div className="text-sm text-stat-label font-medium mt-1 uppercase tracking-wider">Monitoring</div>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Visual Composition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative h-auto py-8 lg:h-[600px] w-full flex items-center justify-center lg:translate-x-10 order-1 lg:order-2"
        >
          {/* Abstract Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>

          <div className="relative w-full h-full">
            {/* Main 3D Composition Image */}
            <img
              src={heroImage}
              alt="Digital Architecture"
              className="w-[85%] h-auto mx-auto object-contain drop-shadow-2xl relative z-10"
            />

            {/* Floating Elements Recreation */}

            {/* Floating elements hidden on mobile to prevent clutter/overflow, visible on md+ */}

            {/* Top Left: Cloud Lock */}
            {/* Top Left: Cloud Lock */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hidden md:block absolute top-[-6%] left-[-7%] z-20"
            >
              <img
                src={lockInCloud}
                alt="Security Cloud"
                className="w-[300px] h-auto drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]"
              />
            </motion.div>

            {/* Right: Security Status Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden md:block absolute top-[28%] -right-4 z-20"
            >
              <div className="bg-[#1e1e24]/90 backdrop-blur-xl border border-blue-500/30 p-4 rounded-2xl flex items-center gap-4 shadow-[0_0_20px_rgba(59,130,246,0.2)] min-w-[260px]">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-lg">
                  <Icons.Shield className="text-white w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-gray-400 font-medium mb-1">Security Status</div>
                  <div className="text-sm font-bold text-white">All Systems Protected</div>
                </div>
              </div>
            </motion.div>

            {/* Bottom Right: Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hidden md:flex absolute bottom-[10%] -right-2 z-20 bg-[#13141b]/90 backdrop-blur-xl border border-blue-500/30 px-8 py-5 rounded-2xl items-center gap-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              <div>
                <div className="text-3xl font-bold text-indigo-400">10M+</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Events/Day</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-3xl font-bold text-red-500">50ms</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mt-1">Response</div>
              </div>
            </motion.div>

            {/* Bottom Left: RHCSA Badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="hidden md:block absolute -bottom-4 -left-8 z-20"
            >
              <div className="rounded-2xl border-2 border-red-600 bg-black p-1 shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:scale-105 transition-transform duration-300">
                <img
                  src={rhcsaBadge}
                  alt="RHCSA Certification Badge"
                  className="w-[140px] md:w-[180px] h-auto object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default Hero;
