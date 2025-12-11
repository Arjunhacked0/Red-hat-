import React from 'react';
import { Icons } from '../constants';
import { motion } from 'framer-motion';

const CTASection: React.FC = () => {
  return (
    <div className="bg-[#030305] pb-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden p-16 border border-white/10 shadow-2xl"
          style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)' }}
        >
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-normal text-white mb-4 relative z-10">
            Ready to transform your infrastructure?
          </h2>
          <p className="text-gray-400 mb-10 relative z-10 text-lg">
            Join the ranks of successful enterprises powered by HawkStack
          </p>

          <button className="relative z-10 inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-[#EE0000] to-[#9333ea] text-white font-medium hover:shadow-[0_0_30px_rgba(238,0,0,0.3)] transition-all group tracking-wide">
            Get Started with HawkStack
            <span className="group-hover:translate-x-1 transition-transform">
              <Icons.ArrowRight />
            </span>
          </button>
        </motion.div>

        <p className="text-[#52525B] text-xs font-medium mt-12 tracking-wide">
          Trusted by Fortune 500 companies worldwide
        </p>
      </div>
    </div>
  );
};

export default CTASection;
