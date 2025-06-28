import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Coffee } from 'lucide-react';



const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className={`transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                Available for new projects
                            </div>

                            <div>
                                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                                    Full Stack
                                    <span className="block text-blue-600">Developer</span>
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                                    I craft exceptional digital experiences with clean code and innovative solutions.
                                    Passionate about modern web technologies and user-centered design.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href="mailto:mahabubulalamarif@gmail.com">
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/25 cursor-pointer">
                                        <Mail size={18} />
                                        Get In Touch
                                    </button>
                                </a>

                                <a href='https://github.com/arif547'>
                                    <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer">
                                        <Github size={18} />
                                        View Work
                                    </button>
                                </a>

                            </div>

                            <div className="flex items-center gap-8 pt-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">50+</div>
                                    <div className="text-sm text-gray-600">Projects Done</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">5+</div>
                                    <div className="text-sm text-gray-600">Years Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-gray-900">20+</div>
                                    <div className="text-sm text-gray-600">Happy Clients</div>
                                </div>
                            </div>
                        </div>

                        {/* Developer Image - Top Right */}
                        <div className="relative">
                            <div className="relative max-w-md mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl rotate-6 opacity-20"></div>
                                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                                    <img
                                        src="https://i.ibb.co/SD1Vs346/Mahabubul-Alam.jpg"
                                        alt="Mahabubul Alam Arif - Web Developer"
                                        className="w-full h-96 object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                        <h3 className="text-white text-xl font-bold mb-1">MD. Mahabubul Alam</h3>
                                        <p className="text-white/90 text-sm mb-3">Full Stack Developer</p>
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                                                <Github size={16} className="text-white" />
                                            </div>
                                            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                                                <Linkedin size={16} className="text-white" />
                                            </div>
                                            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                                                <Mail size={16} className="text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                        <span className="text-sm font-medium text-gray-700">Online</span>
                                    </div>
                                </div>

                                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <Coffee className="text-blue-600" size={16} />
                                        <span className="text-sm font-medium text-gray-700">Coffee Lover</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;