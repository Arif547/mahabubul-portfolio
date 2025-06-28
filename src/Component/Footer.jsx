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
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold text-blue-600">
                                AlexDev
                            </h3>
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
                                <span>alex@alexdev.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-blue-600" />
                                </div>
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600">
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                </div>
                                <span>San Francisco, CA</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4">
                            {[
                                { Icon: Github, href: "#", label: "GitHub" },
                                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                                { Icon: Twitter, href: "#", label: "Twitter" },
                                { Icon: Mail, href: "#", label: "Email" }
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
                            {[
                                "About Me",
                                "Portfolio",
                                "Skills",
                                "Contact",
                                "Blog",
                                "Resume"
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:translate-x-1 inline-block font-medium"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
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
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-gray-600 text-center md:text-left">
                        <p className="font-medium">&copy; 2024 AlexDev. All rights reserved.</p>
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