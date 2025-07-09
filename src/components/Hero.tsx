
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-teal-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Profile Image */}
                    <div className="mb-8 relative">
                        <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1 animate-spin-slow">
                            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
                                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-teal-400 flex items-center justify-center text-2xl font-bold text-slate-950">
                                    R
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Name and Title */}
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-fade-in">
                        Rahul
                    </h1>

                    <div className="text-2xl md:text-3xl text-slate-300 mb-8 animate-slide-up">
                        <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                            Full Stack Developer
                        </span>
                    </div>

                    <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up delay-300">
                        Crafting beautiful, scalable web applications with modern technologies.
                        Passionate about creating exceptional user experiences and solving complex problems.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 mb-16 animate-slide-up delay-500">
                        <a
                            href="https://github.com"
                            className="group w-14 h-14 bg-slate-800/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:rotate-6"
                        >
                            <Github className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                        </a>
                        <a
                            href="https://linkedin.com"
                            className="group w-14 h-14 bg-slate-800/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:rotate-6"
                        >
                            <Linkedin className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                        </a>
                        <a
                            href="mailto:contact@example.com"
                            className="group w-14 h-14 bg-slate-800/50 rounded-full flex items-center justify-center backdrop-blur-sm border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:scale-110 hover:rotate-6"
                        >
                            <Mail className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors duration-300" />
                        </a>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-700">
                        <a
                            href="#projects"
                            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full text-white font-semibold hover:from-blue-500 hover:to-teal-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="group px-8 py-4 border-2 border-slate-600 rounded-full text-white font-semibold hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <ChevronDown className="w-8 h-8 text-slate-400" />
                </div>
            </div>
        </section>
    );
};

export default Hero;