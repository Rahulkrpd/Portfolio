import { CalendarDays, MapPin } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: "Software Developer Intern",
            company: "CEEW - Think Tank & Policy Research Institute",
            location: "New Delhi",
            period: "Oct 2024 – Jan 2025",
            description:
                "Developed and maintained full-stack web applications using Next.js, Node.js, and Express.js. Built responsive UIs with Tailwind CSS and Material UI, improving mobile compatibility. Created and connected RESTful APIs with MongoDB/PostgreSQL, reducing fetch time by 25%.",
            technologies: ["Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "Material UI"],
        },
        {
            title: "Technical Intern",
            company: "National Institute of Electronics & Information Technology (NIELIT)",
            location: "Noida, Uttar Pradesh",
            period: "Apr 2025 – Present",
            description:
                "Training in IT tools including Microsoft Excel, PowerPoint, and Word. Gaining exposure to computer operations and documentation. Participating in technical workshops and collaborative activities.",
            technologies: ["Microsoft Excel", "MS Word", "PowerPoint", "Documentation", "IT Tools"],
        },
    ];

    return (
        <section id="experience" className="py-20 bg-slate-900/30">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                            Experience
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-teal-400 to-blue-400"></div>

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <div key={index} className="relative group">
                                    {/* Timeline Dot */}
                                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full border-4 border-slate-950 group-hover:scale-125 transition-transform duration-300"></div>

                                    {/* Content */}
                                    <div className="ml-20 p-8 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-[1.02] hover:border-blue-400/50">
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-2">
                                                    {exp.title}
                                                </h3>
                                                <h4 className="text-xl text-blue-400 font-semibold">
                                                    {exp.company}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col md:items-end space-y-2 mt-2 md:mt-0">
                                                <div className="flex items-center text-slate-400">
                                                    <CalendarDays className="w-4 h-4 mr-2" />
                                                    <span>{exp.period}</span>
                                                </div>
                                                <div className="flex items-center text-slate-400">
                                                    <MapPin className="w-4 h-4 mr-2" />
                                                    <span>{exp.location}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-slate-300 leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-teal-400 border border-slate-600/50"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
