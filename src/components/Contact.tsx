import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                            Get In Touch
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
                        <p className="text-slate-300 text-lg mt-6 max-w-2xl mx-auto">
                            Have a project in mind or want to collaborate? I'd love to hear from you.
                            Let's create something amazing together!
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-6">
                                    Let's Connect
                                </h3>
                                <p className="text-slate-300 leading-relaxed mb-8">
                                    I'm always interested in new opportunities and exciting projects.
                                    Whether you're a company looking to hire, or you're looking to
                                    collaborate on something awesome, drop me a line!
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center group-hover:bg-blue-600/30 transition-colors duration-300">
                                        <Mail className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Email</h4>
                                        <p className="text-slate-300">rahulkrpd2@gmail.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 bg-teal-600/20 rounded-full flex items-center justify-center group-hover:bg-teal-600/30 transition-colors duration-300">
                                        <Phone className="w-6 h-6 text-teal-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Phone</h4>
                                        <p className="text-slate-300">+91 8595271565</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center group-hover:bg-orange-600/30 transition-colors duration-300">
                                        <MapPin className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold">Location</h4>
                                        <p className="text-slate-300">Delhi,India</p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-8">
                                <h4 className="text-white font-semibold mb-4">Follow Me</h4>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://github.com/Rahulkrpd"
                                        className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-110"
                                    >
                                        <Github className="w-5 h-5 text-slate-400 hover:text-blue-400" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/rahulkrpd2/"
                                        className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-110"
                                    >
                                        <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-400" />
                                    </a>
                                    <a
                                        href="https://x.com/Rahul78855734"
                                        className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center border border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-110"
                                    >
                                        <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-400" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 focus:outline-none transition-colors duration-300"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 focus:outline-none transition-colors duration-300"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 focus:outline-none transition-colors duration-300"
                                        placeholder="Project Discussion"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={6}
                                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700/50 rounded-lg text-white placeholder-slate-400 focus:border-blue-400/50 focus:ring-1 focus:ring-blue-400/50 focus:outline-none transition-colors duration-300 resize-none"
                                        placeholder="Tell me about your project or just say hello!"
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-500 hover:to-teal-500 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/25"
                                >
                                    <Send className="w-5 h-5" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;