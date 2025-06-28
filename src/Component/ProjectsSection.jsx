import React from 'react';
import { Github, ExternalLink } from 'lucide-react';


const ProjectsSection = () => {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A modern e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing with admin dashboard.",
            tech: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
            category: "Full Stack",
            github: "#",
            live: "#"
        },
        {
            title: "AI-Powered Chat Application",
            description: "Real-time messaging platform with AI chatbot integration. Built with modern technologies for seamless communication and intelligent automated responses.",
            tech: ["React", "Socket.io", "OpenAI", "Express", "Redis"],
            image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=300&fit=crop",
            category: "AI/ML",
            github: "#",
            live: "#"
        },
        {
            title: "Data Analytics Dashboard",
            description: "Interactive dashboard for business intelligence with real-time data visualization, advanced filtering, and comprehensive reporting capabilities.",
            tech: ["React", "D3.js", "Python", "PostgreSQL", "Docker"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=300&fit=crop",
            category: "Data Viz",
            github: "#",
            live: "#"
        }
    ];
    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        A selection of my recent work and personal projects
                    </p>
                </div>

                <div className="grid lg:grid-cols-1 gap-12">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            <div className="grid lg:grid-cols-2 gap-0">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col justify-center">
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{project.description}</p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-lg text-sm font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.live} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/25">
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                        <a href={project.github} className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2">
                                            <Github size={16} />
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;