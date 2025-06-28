import { Award, Briefcase, Code, MapPin, Palette, Star, Users, Zap } from 'lucide-react';
import React from 'react';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Passionate developer with a love for creating digital solutions that make a difference
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            I'm a passionate full-stack developer with 5+ years of experience creating
                            robust web applications. I specialize in React, Node.js, and cloud technologies,
                            with a strong focus on user experience and performance optimization.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            When I'm not coding, you'll find me exploring new technologies, contributing to
                            open-source projects, or sharing knowledge through technical writing and mentoring.
                        </p>

                        <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                            <h4 className="font-semibold text-gray-900 mb-4">Quick Facts</h4>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-blue-600" size={16} />
                                    <span className="text-gray-700 text-sm">San Francisco, CA</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Briefcase className="text-blue-600" size={16} />
                                    <span className="text-gray-700 text-sm">5+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Users className="text-blue-600" size={16} />
                                    <span className="text-gray-700 text-sm">Remote & On-site</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Star className="text-blue-600" size={16} />
                                    <span className="text-gray-700 text-sm">Top Rated Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Code size={24} className="text-white" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Clean Code</h4>
                            <p className="text-gray-600 text-sm">Writing maintainable and scalable solutions</p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Palette size={24} className="text-white" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">UI/UX Focus</h4>
                            <p className="text-gray-600 text-sm">Creating beautiful user experiences</p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Zap size={24} className="text-white" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Performance</h4>
                            <p className="text-gray-600 text-sm">Optimized and fast applications</p>
                        </div>

                        <div className="bg-orange-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <Award size={24} className="text-white" />
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">Quality</h4>
                            <p className="text-gray-600 text-sm">Delivering excellence in every project</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;