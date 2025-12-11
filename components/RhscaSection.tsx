import React from "react";
import { Icons } from "../constants";
import { motion } from "framer-motion";

const RHCSASection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#05060C]">
      {/* Gradient Light Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-700/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-200px] right-1/2 translate-x-1/2 w-[700px] h-[700px] bg-pink-600/20 blur-[160px] rounded-full"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 text-center relative z-10">

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6, rotate: 8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(255,80,80,0.4)] mb-8"
        >
          <Icons.Award className="text-white w-10 h-10" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold font-display leading-tight mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-pink-400">
            Red Hat Certified System
          </span>
          <br />
          <span className="text-white">Administrator (RHCSA®)</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-2xl mx-auto mb-20 text-base leading-relaxed"
        >
          Validate your expertise in Linux system administration with Red Hat’s
          globally recognized RHCSA certification (EX200).
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { title: "Performance-Based Exam", icon: <Icons.Zap /> },
            { title: "Industry Recognized Credential", icon: <Icons.Shield /> },
            { title: "High Career Growth", icon: <Icons.CheckCircle /> },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-8 bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] 
                         shadow-[0_0_50px_-20px_rgba(0,0,0,0.4)]
                         hover:shadow-[0_0_60px_-10px_rgba(255,60,100,0.4)]
                         hover:bg-white/[0.07]
                         transition-all group cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-white/[0.06] flex items-center justify-center 
                              text-pink-400 group-hover:text-pink-300 group-hover:scale-110 transition-all backdrop-blur-xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-white font-semibold text-base tracking-wide">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RHCSASection;
