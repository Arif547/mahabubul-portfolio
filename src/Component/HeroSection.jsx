import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Coffee, Download } from 'lucide-react';
import mahababulPic from '../assets/Mahabubul-Alam.jpg';
import resume from '../assets/resume-mahabubul.pdf';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'




const HeroSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);
    return (
        <section id="hero" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
                                    <span className="block text-blue-600">Developer </span>
                                </h1>
                                <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
                                    I craft exceptional digital experiences with clean code and innovative solutions.
                                    Passionate about modern web technologies and user-centered design.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                <a href={resume}>
                                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/25 cursor-pointer">
                                        <Download size={18} />
                                        Resume
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
                                        src={mahababulPic}
                                        alt="Mahabubul Alam Arif - Web Developer"
                                        className="w-full h-96 object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                        <h3 className="text-white text-xl font-bold mb-1">MD. Mahabubul Alam</h3>
                                        <p className="text-white/90 text-sm mb-3">Full Stack Developer</p>
                                        <div className="flex gap-3">

                                            <a href='https://github.com/arif547'>
                                                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                                                    <Github size={16} className="text-white" />
                                                </div>
                                            </a>

                                            <a href='https://www.linkedin.com/in/mahabubularif9/'>
                                                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                                                    <Linkedin size={16} className="text-white" />
                                                </div>
                                            </a>
                                            <a href='mailto:mahabubulalamarif@gmail.com'>
                                                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                                                    <Mail size={16} className="text-white" />
                                                </div>
                                            </a>
                                            <a href='https://wa.link/5ztx11'>
                                                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                                                    {/* <Whatsapp size={16} className="text-white" /> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24"><path fill="#fff" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                                                </div>
                                            </a>


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

                                <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl shadow-lg p-4 border border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <Coffee className="text-blue-600" size={16} />
                                        <span className="text-sm font-medium text-gray-700">Tea Lover</span>
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