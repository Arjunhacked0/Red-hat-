import React from "react";
import { motion } from "framer-motion";
import { Icons } from "../constants";
import secureInfraImage from "../Images/Build Secure & Scalable Infrastructure.jpg";

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.08 * i, duration: 0.5, ease: "easeOut" },
  }),
};

const floatPulse = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const ServicesSection: React.FC = () => {
  const features = [
    {
      title: "Hybrid Cloud",
      desc: "Multi-cloud architecture and migration strategies",
      icon: <Icons.Cloud />,
      hue: "from-[#00D1FF] to-[#6A00FF]",
    },
    {
      title: "DevOps Solutions",
      desc: "CI/CD pipelines with OpenShift and Kubernetes",
      icon: <Icons.Box />,
      hue: "from-[#FF3D81] to-[#FF8A00]",
    },
    {
      title: "Security First",
      desc: "Zero-trust architecture and compliance",
      icon: <Icons.Lock />,
      hue: "from-[#00FFA3] to-[#00B4FF]",
    },
    {
      title: "AI-Ready Platforms",
      desc: "Infrastructure optimized for ML workloads",
      icon: <Icons.Activity />,
      hue: "from-[#8A2BE2] to-[#4BFFA5]",
    },
  ];

  const services = [
    { title: "Red Hat OpenShift", icon: <Icons.Box />, desc: "Build & deploy at scale", color: "bg-gradient-to-br from-[#FF357F] to-[#7A00FF]" },
    { title: "RHEL", icon: <Icons.Server />, desc: "Flexible, reliable platform", color: "bg-gradient-to-br from-[#00D1FF] to-[#6A00FF]" },
    { title: "Red Hat AI", icon: <Icons.Cpu />, desc: "Deliver AI value with your own data", color: "bg-gradient-to-br from-[#4BFFA5] to-[#00B4FF]" },
    { title: "Ansible Automation", icon: <Icons.Activity />, desc: "Enterprise automation", color: "bg-gradient-to-br from-[#FF8A00] to-[#FF3D81]" },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#04020A]">
      {/* Neon background blobs */}
      <div className="absolute -z-10 inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full left-[-8%] top-10 blur-[140px] opacity-60"
          style={{ background: "radial-gradient(circle at 30% 30%, rgba(0,209,255,0.18), transparent 30%)" }}
          {...floatPulse}
        />
        <motion.div
          className="absolute w-[520px] h-[520px] rounded-full right-[-6%] bottom-0 blur-[120px] opacity-50"
          style={{ background: "radial-gradient(circle at 70% 70%, rgba(255,61,129,0.14), transparent 30%)" }}
          {...floatPulse}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent)]" />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B0B12] border border-white/6 text-xs font-medium text-[#CDEBF7] mb-6 shadow-[0_6px_30px_rgba(0,209,255,0.04)]">
            <div className="w-4 h-4 rounded-sm bg-gradient-to-br from-[#00D1FF] to-[#6A00FF] flex items-center justify-center text-black">
              <Icons.Box className="w-3 h-3" />
            </div>
            <span>Enterprise • Neon Cyberpunk</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display"
          >
            Build{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00D1FF] via-[#6A00FF] to-[#FF3D81]">
              Secure & Scalable
            </span>{" "}
            Infrastructure
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="max-w-2xl mx-auto text-sm md:text-base text-[#98A7BB]"
          >
            Enterprise-grade cloud solutions powered by Red Hat technologies — with neon speed, unstoppable security, and AI-ready scalability.
          </motion.p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Features */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariant}
                className="relative p-6 rounded-2xl bg-gradient-to-b from-[#06060B] to-[#07050D] border border-white/6 hover:shadow-[0_18px_60px_rgba(122,0,255,0.08)] transition-all group"
                style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.02)" }}
              >
                <div
                  className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center text-white transform transition-all group-hover:scale-105`}
                  style={{
                    background: `linear-gradient(135deg, ${f.hue})`,
                    boxShadow: `0 6px 30px -10px ${f.hue.split(" ")[0].replace("from(", "").replace(")", "")}`,
                  }}
                >
                  {React.cloneElement(f.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h3 className="text-white font-semibold text-lg mb-1">{f.title}</h3>
                <p className="text-sm text-[#99B3C9] leading-relaxed">{f.desc}</p>

                {/* neon accent line */}
                <span className="absolute left-4 bottom-4 w-16 h-[3px] rounded-full"
                      style={{ background: `linear-gradient(90deg, rgba(0,209,255,0.9), rgba(122,0,255,0.9))`, filter: "blur(6px)" }} />
              </motion.div>
            ))}
          </div>

          {/* Right: Image with neon frame */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-[420px] lg:h-[480px] rounded-3xl overflow-hidden"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#001428]/20 via-transparent to-[#2b0018]/10 blur-[10px]" />
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/6">
              <img
                src={secureInfraImage}
                alt="Secure & Scalable Infrastructure"
                className="w-full h-full object-cover transform transition-all duration-700 hover:scale-105"
                style={{ mixBlendMode: "luminosity", opacity: 0.96 }}
              />
              {/* Neon frame */}
              <div className="pointer-events-none absolute inset-0">
                <svg className="w-full h-full" preserveAspectRatio="none">
                  <rect x="6" y="6" width="calc(100% - 12px)" height="calc(100% - 12px)" rx="18" stroke="url(#g1)" strokeWidth="2" fill="none" />
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1">
                      <stop offset="0%" stopColor="#00D1FF" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#6A00FF" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#FF3D81" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* subtle top neon highlight */}
              <div className="absolute top-6 left-6 right-6 h-1 rounded-full bg-gradient-to-r from-[#00D1FF]/40 via-[#6A00FF]/30 to-[#FF3D81]/20 blur-[8px]" />
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="flex justify-center mb-20">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-[#00D1FF] to-[#FF3D81] text-black font-semibold shadow-[0_18px_60px_rgba(122,0,255,0.12)]"
          >
            <Icons.Zap className="w-5 h-5" />
            Request Cyberpunk Consultation
          </motion.button>
        </div>

        {/* Services grid */}
        <div className="space-y-10">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">Explore Red Hat Services</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariant}
                custom={idx}
                className="p-6 rounded-2xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
                  border: "1px solid rgba(255,255,255,0.04)",
                  boxShadow: "0 12px 40px rgba(10,10,10,0.6)",
                }}
              >
                <div className={`w-12 h-12 mb-4 rounded-lg flex items-center justify-center text-white shadow-lg ${s.color}`}>
                  {React.cloneElement(s.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
                <h4 className="text-white font-semibold mb-2">{s.title}</h4>
                <p className="text-sm text-[#9FB6CB]">{s.desc}</p>

                {/* small neon corner accent */}
                <div className="absolute right-4 bottom-4 w-12 h-1 rounded-full"
                     style={{ background: "linear-gradient(90deg,#00D1FF,#6A00FF,#FF3D81)", filter: "blur(6px)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
