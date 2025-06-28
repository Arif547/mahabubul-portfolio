import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Code, User } from 'lucide-react';
import resume from '../assets/resume.pdf'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const menuItems = [
        // { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = menuItems.map(item => item.name.toLowerCase());
            const scrollPosition = window.scrollY + 100;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (href) => {
        setIsMenuOpen(false);
        // Smooth scroll to section
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 w-full bg-white/90 backdrop-blur-xl z-50 border-b border-gray-200/50 shadow-sm">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center space-x-3">
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

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-8">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                                e.preventDefault();
                                handleMenuClick(item.href);
                            }}
                            className={`relative text-gray-600 hover:text-blue-600 transition-all duration-300 font-medium py-2 px-1 ${activeSection === item.name.toLowerCase()
                                ? 'text-blue-600'
                                : ''
                                }`}
                        >
                            {item.name}
                            {/* Active indicator */}
                            {activeSection === item.name.toLowerCase() && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full transform scale-x-100 transition-transform duration-300"></div>
                            )}
                        </a>
                    ))}
                </div>

                {/* Desktop Resume Button */}
                <div className="hidden lg:flex items-center space-x-4">
                    <a href={resume}>
                        <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-105 cursor-pointer">
                            <Download size={16} />
                            Resume
                        </button>
                    </a>

                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}

            {/* Mobile Menu Slide Panel */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between bg-white p-6 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                                <Code size={16} className="text-white" />
                            </div>
                            <div>
                                <div className="font-bold text-gray-900">Mahabubul Alam</div>
                                <div className="text-xs text-gray-500">Full Stack Developer</div>
                            </div>
                        </div>
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <div className="flex-1 py-6 bg-white">
                        {menuItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleMenuClick(item.href);
                                }}
                                className={`flex items-center px-6 py-4 text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 border-l-4 ${activeSection === item.name.toLowerCase()
                                    ? 'text-blue-600 bg-blue-50 border-blue-600'
                                    : 'border-transparent'
                                    }`}
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <span className="font-medium">{item.name}</span>
                                {activeSection === item.name.toLowerCase() && (
                                    <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full"></div>
                                )}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Resume Button */}
                    <div className="p-6 border-t border-gray-200">
                        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
                            <Download size={18} />
                            Download Resume
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;