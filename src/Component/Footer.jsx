import React from 'react';
import {
    Github,
    Linkedin,
    Twitter,
    Mail,
    Phone,
    MapPin,
    ArrowUp,
    Code,
    Palette,
    Smartphone,
    Globe,
    Send
} from 'lucide-react';
import NewsletterSubscribe from './NewsletterSubscribe';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="relative">
                                {/* Logo Background */}
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                        <div className="text-blue-600 font-bold text-lg">
                                            <Code size={20} />
                                        </div>
                                    </div>
                                </div>
                                {/* Small accent dot */}
                                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow-sm"></div>
                            </div>

                            {/* Name/Brand */}
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleMenuClick('#home');
                                }}
                                className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-300"
                            >
                                Mahabubul<span className="text-blue-600"> Alam</span>
                                <div className="text-xs text-gray-500 font-normal -mt-1">Full Stack Developer</div>
                            </a>
                        </div>
                        <p className="text-gray-600 text-lg mb-8 max-w-md leading-relaxed">
                            Passionate full-stack developer crafting exceptional digital experiences with clean code and innovative solutions.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-blue-600" />
                                </div>
                                <span>mahabubulalamarif@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                </div>
                                <span>+8801515219590</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                </div>
                                <span>Dhaka, Bangladesh</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { Icon: Github, href: "https://github.com/arif547", label: "GitHub" },
                                { Icon: Linkedin, href: "https://www.linkedin.com/in/mahabubularif9/", label: "LinkedIn" },
                                { Icon: Mail, href: "mailto:mahabubulalamarif@gmail.com", label: "Email" }
                            ].map(({ Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:scale-105 transition-all duration-300 group"
                                    aria-label={label}
                                >
                                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
                                </a>
                            ))}
                            <a
                                key="Whatsapp"
                                href="https://api.whatsapp.com/send?phone=8801515219590"
                                className="w-12 h-12 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-blue-50 hover:border-blue-200 hover:scale-105 transition-all duration-300 group"
                                aria-label="whatsapp"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#4a5565" d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 text-gray-900">Services</h4>
                        <ul className="space-y-4">
                            {[
                                { icon: Code, text: "Web Development" },
                                { icon: Smartphone, text: "Mobile Apps" },
                                { icon: Palette, text: "UI/UX Design" },
                                { icon: Globe, text: "API Development" }
                            ].map(({ icon: Icon, text }) => (
                                <li key={text}>
                                    <a
                                        href="#"
                                        className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
                                    >
                                        <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                            <Icon className="w-4 h-4 group-hover:text-blue-600 transition-colors" />
                                        </div>
                                        {text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-6 text-gray-900">Quick Links</h4>
                        <ul className="space-y-4">
                            <li className="flex flex-col gap-2">
                                <a
                                    href="#about"
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                                >
                                    About Me
                                </a>
                                <a
                                    href="#projects"
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#skills"
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                                >
                                    Skills
                                </a>
                                <a
                                    href="#contact"
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                                >
                                    Contact Me
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                {/* <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
                    <div className="max-w-2xl mx-auto text-center">
                        <h4 className="text-2xl font-semibold mb-4 text-gray-900">Stay Updated</h4>
                        <p className="text-gray-600 mb-6">
                            Get the latest updates on my projects and tech insights delivered to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                                <Send className="w-4 h-4" />
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div> */}
                <NewsletterSubscribe />

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-600 text-center md:text-left">
                        <p className="font-medium">&copy; 2025 Mahabubul Alam. All rights reserved.</p>
                        <div className="flex gap-6 mt-2 justify-center md:justify-start">
                            <a href="#" className="hover:text-blue-600 transition-colors text-sm">Privacy Policy</a>
                            <a href="#" className="hover:text-blue-600 transition-colors text-sm">Terms of Service</a>
                            <a href="#" className="hover:text-blue-600 transition-colors text-sm">Cookies</a>
                        </div>
                    </div>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-all duration-300 hover:scale-110 group shadow-lg"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;