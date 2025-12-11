import React from 'react';
import { Logos, Icons } from '../constants';

import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#030305] pt-20 border-t border-white/5">
            {/* Top Footer Callout */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center px-6 mb-24 relative z-10"
            >
                <div className="inline-block px-4 py-1.5 rounded-full bg-[#1e1e2d] border border-white/5 text-[11px] font-semibold text-[#6d28d9] mb-8 uppercase tracking-wider">
                    Ready to Get Started?
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-display tracking-tight leading-tight">
                    Secure Your Cloud Infrastructure
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4A6CF7] via-[#9A4DFF] to-[#FF3E6C]">Today</span>
                </h2>
                <p className="text-[#C8C8D0] mb-12 text-lg">Join industry leaders in building secure, AI-powered cloud infrastructure</p>

                <div className="flex flex-col sm:flex-row justify-center gap-5">
                    <button className="px-8 py-4 rounded-xl bg-[#4361ee] text-white font-semibold hover:bg-[#3a56d4] hover:shadow-[0_0_30px_rgba(67,97,238,0.5)] transition-all flex items-center justify-center gap-2 transform hover:-translate-y-1">
                        Start Free Trial
                        <Icons.ArrowRight className="w-5 h-5" />
                    </button>
                    <button className="px-8 py-4 rounded-xl border border-white/10 bg-[#0F1014] text-white font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                        <Icons.Mail className="w-5 h-5 text-gray-400" />
                        Contact Sales
                    </button>
                </div>
            </motion.div>

            {/* Main Footer Links */}
            <div className="max-w-[1440px] mx-auto px-6 py-12 border-t border-white/5">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, staggerChildren: 0.1 }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
                >
                    {/* Brand Col */}
                    <div className="col-span-2">
                        <div className="mb-4">
                            <Logos.HawkStack />
                        </div>
                        <p className="text-xs text-gray-500 max-w-xs">
                            Enterprise AI & Cloud Security Solutions for modern businesses.
                        </p>
                    </div>

                    {/* Links Cols */}
                    {[
                        { title: 'Product', links: ['Features', 'Pricing', 'Documentation', 'API Reference'] },
                        { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Contact'] },
                        { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance'] }
                    ].map((col, idx) => (
                        <motion.div key={idx} whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 300 }}>
                            <h4 className="text-white font-medium mb-4">{col.title}</h4>
                            <ul className="space-y-2 text-sm text-gray-500">
                                {col.links.map(link => (
                                    <li key={link} className="hover:text-white cursor-pointer transition-colors">{link}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-[1440px] mx-auto px-6 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                <div>© 2024 HawkStack x Red Hat. All rights reserved.</div>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <a href="#" className="hover:text-blue-500 transition-colors"><Icons.Linkedin /></a>
                    <a href="#" className="hover:text-blue-400 transition-colors"><Icons.Twitter /></a>
                    <a href="#" className="hover:text-purple-500 transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
