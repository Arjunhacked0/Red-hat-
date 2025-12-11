import React from 'react';
import { Icons } from '../constants';
import { motion } from 'framer-motion';

const TrainingSection: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#020203]">

            {/* Background Neon Glows */}
            <div className="absolute inset-0">
                <div className="absolute -top-10 -left-20 w-[400px] h-[400px] bg-blue-600/20 blur-[130px] rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-purple-600/20 blur-[130px] rounded-full"></div>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* Left Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(86,127,255,0.3)]">
                        <img
                            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop"
                            alt="Classroom training"
                            className="w-full h-auto object-cover opacity-90 hover:opacity-100 hover:scale-[1.03] transition-all duration-700"
                        />
                    </div>

                    {/* Floating Neon Stat Card */}
                    <div className="absolute -bottom-6 -right-6 bg-[#0A0A0F]/80 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-[0_0_30px_rgba(255,0,88,0.4)]">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,0,100,0.6)]">
                                <Icons.Award className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-white">98%</p>
                                <p className="text-xs text-gray-300">Pass Rate</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    {/* Tag */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111]/60 backdrop-blur-xl border border-white/10 text-xs text-blue-300 shadow-[0_0_15px_rgba(0,110,255,0.4)] mb-5">
                        ⚡ About Our Training
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Hands-On{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-red-500">
                            Enterprise Training
                        </span>{" "}
                        for Real-World Success
                    </h2>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-10">
                        Our expert instructors bring years of enterprise experience to deliver
                        comprehensive Red Hat training. From foundational Linux skills to
                        advanced cloud architecture, we prepare you for certification and real
                        industry roles.
                    </p>

                    {/* Features */}
                    <div className="grid sm:grid-cols-2 gap-6 mb-10">

                        <div className="flex gap-4 p-5 rounded-xl bg-[#0C0C12]/60 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(0,119,255,0.4)] transition-all">
                            <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center backdrop-blur-lg">
                                <Icons.Users className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-1">Expert Mentors</h4>
                                <p className="text-xs text-gray-400">Guidance by industry-level architects</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-5 rounded-xl bg-[#0C0C12]/60 backdrop-blur-xl border border-white/10 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(177,0,255,0.4)] transition-all">
                            <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center backdrop-blur-lg">
                                <Icons.Lightbulb className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-white mb-1">Practical Labs</h4>
                                <p className="text-xs text-gray-400">Hands-on practice in real infra</p>
                            </div>
                        </div>

                    </div>

                    {/* CTA Button */}
                    <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-red-600 text-white font-semibold shadow-[0_0_25px_rgba(255,0,100,0.5)] hover:shadow-[0_0_35px_rgba(255,0,100,0.8)] hover:-translate-y-1 transition-all">
                        Explore Programs
                    </button>
                </motion.div>

            </div>
        </section>
    );
};

export default TrainingSection;
