import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../constants';

const Testimonials: React.FC = () => {
   return (
      <section className="pt-24 pb-8 bg-[#0F0F12]">
         <div className="max-w-[1440px] mx-auto px-6">

            <div className="text-center mb-16">
               <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 mb-4">
                  Client Success Stories
               </span>
               <h2 className="text-4xl font-bold text-white font-display">Client Testimonials</h2>
               <p className="text-gray-400 mt-4">Real results from enterprise leaders who trust HawkStack</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
               {/* Card 1 - Red Theme */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative bg-[#0A0A0B] border border-white/5 p-10 rounded-3xl overflow-hidden group hover:border-red-500/30 transition-colors duration-500"
               >
                  {/* Gradient Splash */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-red-900/20 rounded-full blur-[80px] pointer-events-none"></div>

                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-[#EE0000] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-red-900/20">
                     <span className="text-white text-3xl font-serif leading-none mt-2">”</span>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                     {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-[#EE0000] text-lg">★</span>)}
                  </div>

                  <p className="text-gray-300 text-lg italic mb-10 leading-relaxed min-h-[80px]">
                     "HawkStack delivered exceptional results in our cloud migration project. Their Red Hat expertise was invaluable."
                  </p>

                  <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-6">
                     <div>
                        <div className="inline-block px-3 py-1 bg-[#EE0000] text-white text-[10px] font-bold rounded mb-2 tracking-wide uppercase">Kyndryl</div>
                        <div className="text-sm font-bold text-white">Technology Director</div>
                        <div className="text-xs text-gray-500 mt-0.5">Global Technology Services</div>
                     </div>
                     <div className="w-2 h-2 rounded-full bg-[#EE0000] shadow-[0_0_10px_#EE0000]"></div>
                  </div>
               </motion.div>

               {/* Card 2 - Blue Theme */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative bg-[#0A0A0B] border border-white/5 p-10 rounded-3xl overflow-hidden group hover:border-blue-500/30 transition-colors duration-500"
               >
                  {/* Gradient Splash */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900/20 rounded-full blur-[80px] pointer-events-none"></div>

                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-[#3B82F6] rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                     <span className="text-white text-3xl font-serif leading-none mt-2">”</span>
                  </div>

                  {/* Stars - NOTE: Use Red stars here too as per screenshot */}
                  <div className="flex gap-1 mb-6">
                     {[1, 2, 3, 4, 5].map(i => <span key={i} className="text-[#EE0000] text-lg">★</span>)}
                  </div>

                  <p className="text-gray-300 text-lg italic mb-10 leading-relaxed min-h-[80px]">
                     "Professional team with deep technical knowledge. They helped us modernize our infrastructure with confidence."
                  </p>

                  <div className="flex items-center justify-between mt-auto border-t border-white/5 pt-6">
                     <div>
                        <div className="inline-block px-3 py-1 bg-[#3B82F6] text-white text-[10px] font-bold rounded mb-2 tracking-wide uppercase">HCL</div>
                        <div className="text-sm font-bold text-white">IT Operations Manager</div>
                        <div className="text-xs text-gray-500 mt-0.5">Enterprise Infrastructure</div>
                     </div>
                     <div className="w-2 h-2 rounded-full bg-[#3B82F6] shadow-[0_0_10px_#3B82F6]"></div>
                  </div>
               </motion.div>
            </div>

            {/* CTA Box */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="mt-16 relative bg-gradient-to-b from-white/5 to-[#0F0F12] border border-white/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
            >
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-r from-red-600/10 to-blue-600/10 blur-[100px] pointer-events-none"></div>

               <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">Ready to transform your infrastructure?</h3>
               <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">Join the ranks of successful enterprises powered by HawkStack</p>

               <button className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-blue-600 text-white font-bold hover:shadow-[0_0_30px_rgba(238,0,0,0.4)] transition-all relative z-10 group transform hover:-translate-y-1">
                  Get Started with HawkStack
                  <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </button>
            </motion.div>

            <p className="text-center text-xs text-gray-600 mt-12 uppercase tracking-widest font-medium">Trusted by Fortune 500 companies worldwide</p>

         </div>
      </section>
   );
};

export default Testimonials;
