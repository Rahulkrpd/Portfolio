import { useState, useEffect } from 'react';
import {  Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { targetId: 'about', label: 'About' },
        { targetId: 'experience', label: 'Experience' },
        { targetId: 'projects', label: 'Projects' },
        { targetId: 'skills', label: 'Skills' },
        { targetId: 'contact', label: 'Contact' }
    ];

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Close mobile menu after click
        }
    };

    return (
        <header
            className={" fixed top-5 z-50 w-full flex justify-center transition-all duration-300 "}
        >
            <nav
                className={` border-2 border-purple-800  rounded-2xl transition-all duration-300 ${isScrolled ? 'w-[60%] backdrop-blur-md shadow-lg ' : 'w-[80%] bg-transparent'
                    } max-w-screen-xl px-6 py-4`}
            >
                <div className="flex items-center justify-between">
                    <div className="w-10 h-10 ">
                        <img src="./public/apple-touch-icon.png" alt="Rahul" className='fit-conter' />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <button
                                key={item.targetId}
                                onClick={() => scrollToSection(item.targetId)}
                                className="relative group text-slate-300 hover:text-white transition-colors duration-300"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4 pb-4">
                        {navItems.map((item) => (
                            <button
                                key={item.targetId}
                                onClick={() => scrollToSection(item.targetId)}
                                className="block text-left w-full text-slate-300 hover:text-white transition-colors duration-300"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
