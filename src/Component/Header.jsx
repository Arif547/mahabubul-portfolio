import React from 'react';
import { Download } from 'lucide-react';


const Header = () => {
    return (
        <header className="sticky top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-200/50">
            <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-gray-900">
                    Alex<span className="text-blue-600">Dev</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium">
                            {item}
                        </a>
                    ))}
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/25">
                    <Download size={16} />
                    Resume
                </button>
            </nav>
        </header>
    );
};

export default Header;