
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Clean Code",
            description: "Writing maintainable, scalable code that stands the test of time"
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Problem Solver",
            description: "Turning complex challenges into elegant, simple solutions"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Team Player",
            description: "Collaborating effectively with cross-functional teams"
        },
        {
            icon: <Coffee className="w-8 h-8" />,
            title: "Continuous Learner",
            description: "Always exploring new technologies and best practices"
        }
    ];

    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                            About Me
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Text */}
                        <div className="space-y-6">
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Passionate Developer with 1 Years of Experience
                            </h3>

                            <p className="text-slate-300 text-lg leading-relaxed">
                                I'm a full-stack developer who loves creating digital experiences that make a difference.
                                My journey in web development started 5 years ago, and I've been fortunate to work on
                                projects ranging from e-commerce platforms to complex enterprise applications.
                            </p>

                            <p className="text-slate-300 text-lg leading-relaxed">
                                I specialize in React, Node.js, and modern web technologies. When I'm not coding,
                                you'll find me exploring new frameworks, contributing to open source projects, or
                                sharing knowledge with the developer community.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-4">
                                {['React', 'TypeScript', 'Node.js', 'Nextjs','Python', 'Mongodb', 'Express',].map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-slate-800/50 rounded-full text-sm text-blue-400 border border-slate-700/50"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Highlights */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {highlights.map((item, index) => (
                                <div
                                    key={index}
                                    className="group p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:border-blue-400/50"
                                >
                                    <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-xl font-semibold text-white mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;