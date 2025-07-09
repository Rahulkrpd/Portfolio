import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Tomato - Food Ordering App",
            description:
                "A full-stack food ordering platform with customer and admin interfaces, Stripe payments, and secure JWT authentication.",
            image: "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React.js", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
            github: "https://github.com/Rahulkrpd", // replace with exact repo if available
            demo: "https://food-del-frontend-azwe.onrender.com/",
            date: "May 2024",
        },
        {
            title: "Food-del-admin - Admin Dashboard",
            description:
                "An admin panel for managing the Tomato ecosystem, including menus, order tracking, user access control, and analytics.",
            image: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React.js", "Node.js", "MongoDB", "Chart.js", "JWT"],
            github: "https://github.com/Rahulkrpd", // replace with exact repo if available
            demo: "https://food-del-admin-5hku.onrender.com/",
            date: "May 2024",
        },
        {
            title: "Sago - Modern E-commerce Platform",
            description:
                "A modern e-commerce platform featuring secure authentication via NextAuth and Google login. Built with Aceternity UI and Tailwind, the app includes protected product routes, dynamic listings, and MongoDB integration.",
            image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["Next.js", "Tailwind CSS", "NextAuth", "MongoDB", "Aceternity UI"],
            github: "https://github.com/Rahulkrpd", // replace with exact repo if available
            demo: "https://sago-xi.vercel.app/",
            date: "Jun 2025",
        },
        {
            title: "Weather Forecast App",
            description:
                "Real-time weather application providing 5-day forecasts with location search and mobile-first responsive UI.",
            image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
            technologies: ["React.js", "RESTful APIs", "Tailwind CSS"],
            github: "https://github.com/Rahulkrpd", // replace with exact repo if available
            demo: "https://weather-app-ltd8.onrender.com/",
            date: "Jul 2024",
        },
    ];

    return (
        <section id="projects" className="py-20">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                            Featured Projects
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="group bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-500 hover:scale-[1.02] hover:border-blue-400/50"
                            >
                                {/* Project Image */}
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>

                                    {/* Date Badge */}
                                    <div className="absolute top-4 right-4 flex items-center space-x-1 bg-slate-900/80 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-slate-300">
                                        <Calendar className="w-4 h-4" />
                                        <span>{project.date}</span>
                                    </div>

                                    {/* Hover Links */}
                                    <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-colors duration-300"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-slate-900/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-teal-600 transition-colors duration-300"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                                        {project.title}
                                    </h3>

                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
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

                    <div className="text-center mt-12">
                        <a
                            href="https://github.com/Rahulkrpd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-2 px-8 py-4 bg-slate-800/50 rounded-full text-white border border-slate-700/50 hover:border-blue-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105"
                        >
                            <Github className="w-5 h-5" />
                            <span>View More on GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
