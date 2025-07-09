import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="py-12 border-t border-slate-800/50">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-500 fill-current" />
                            <span>by Rahul</span>
                        </div>

                        <div className="flex items-center space-x-6">
                            <p className="text-slate-400 text-sm">
                                © 2024 All rights reserved.
                            </p>

                            <button
                                onClick={scrollToTop}
                                className="w-10 h-10 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-110"
                            >
                                <ArrowUp className="w-5 h-5 text-slate-400 hover:text-blue-400" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;