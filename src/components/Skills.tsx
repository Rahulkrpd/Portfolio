import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                { name: "React.js", level: 95 },
                { name: "Next.js", level: 90 },
                { name: "Tailwind CSS", level: 92 },
                { name: "HTML5", level: 94 },
                { name: "CSS3", level: 92 },
                { name: "Material UI", level: 85 }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", level: 93 },
                { name: "Express.js", level: 90 },
                { name: "Python", level: 87 },
                { name: "RESTful APIs", level: 88 },
                { name: "JWT Auth", level: 90 }
            ]
        },
        {
            title: "Database & DevOps",
            skills: [
                { name: "MongoDB", level: 85 },
                { name: "PostgreSQL", level: 83 },
                { name: "Docker", level: 80 },
                { name: "AWS", level: 78 },
                { name: "CI/CD", level: 75 }
            ]
        },
        {
            title: "Programming & Tools",
            skills: [
                { name: "C++", level: 88 },
                { name: "JavaScript", level: 92 },
                { name: "Git & GitHub", level: 95 },
                { name: "VS Code", level: 90 },
                { name: "Figma", level: 78 }
            ]
        }
    ];

    const otherSkills = [
        'Anaconda', 'Cisco Packet Tracer', 'Vite', 
        'reactbit', 'Linux', 'MS Office','Cusor',
        'Aceternity UI', 'NextAuth','OOP','DSA'
    ];

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <section id="skills" className="py-20 bg-slate-900/30" ref={sectionRef}>
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                            Skills & Technologies
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skillCategories.map((category, categoryIndex) => (
                            <div
                                key={categoryIndex}
                                className="group p-6 bg-slate-800/30 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-300 hover:scale-105 hover:border-blue-400/50"
                            >
                                <h3 className="text-xl font-bold text-white mb-6 text-center">
                                    {category.title}
                                </h3>

                                <div className="space-y-4">
                                    {category.skills.map((skill, skillIndex) => (
                                        <div key={skillIndex} className="skill-item">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-slate-300 font-medium">
                                                    {skill.name}
                                                </span>
                                                <span className="text-blue-400 text-sm font-semibold">
                                                    {skill.level}%
                                                </span>
                                            </div>

                                            <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: isInView ? `${skill.level}%` : 0 }}
                                                    transition={{
                                                        duration: 1,
                                                        delay: (categoryIndex * 0.3) + (skillIndex * 0.15)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Skills */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-bold text-white mb-8">
                            Other Technologies I Work With
                        </h3>

                        <div className="flex flex-wrap justify-center gap-4">
                            {otherSkills.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 bg-slate-800/50 rounded-full text-slate-300 border border-slate-700/50 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
