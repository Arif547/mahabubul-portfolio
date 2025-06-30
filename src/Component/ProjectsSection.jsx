import React from 'react';
import { Github, ExternalLink } from 'lucide-react';


const ProjectsSection = () => {
    const projects = [
        {
            title: "Recipe Hub Delicious Recipes",
            description: "About RecipeHub is a user-friendly, dynamic Recipe Book App that allows users to discover, share, and manage delicious recipes from around the world. It features top liked recipes, personalized recipe management, and social interaction through likes and user accounts.",
            tech: ["React", "Node.js", "MongoDB", "Tailwind", "Express JS", "FireBase"],
            image: "https://i.ibb.co/v6XwsTQN/Recipe-Hub.png",
            category: "Full Stack",
            Client: "https://github.com/Arif547/RecipeHub-Client-Side.git",
            Server: "https://github.com/Arif547/RecipeHub-Server-Side.git",
            live: "https://aquamarine-bavarois-13cd20.netlify.app/"
        },
        {
            title: "JobHub - Job Tracker",
            description: "JobHub is a comprehensive job tracking application designed to streamline the job search process. It allows users to track job applications, manage interviews, and receive AI-generated insights on their applications.",
            tech: ["React", "Node.js", "Tailwind", "FireBase"],
            image: "https://i.ibb.co/F1XMf8G/Job-Tracker.png",
            category: "Full Stack",
            Client: "https://github.com/Arif547/JobHub",
            Server: "",
            live: "https://monumental-marshmallow-ef3e0f.netlify.app/"
        },
        {
            title: "Food Tracker - Tracks Your Food Intake",
            description: "Food Tracker is a data visualization application that helps users track their food intake and nutritional information. It provides insights into daily calorie consumption, macronutrient breakdown, and food trends over time.",
            tech: ["React", "Node.js", "MongoDB", "Tailwind", "Express JS"],
            image: "https://i.ibb.co/9HVvnQLp/Food-Tracker.png",
            category: "Full Stack",
            Client: "https://github.com/Arif547/Food-Tracker-Client-Side.git",
            Server: "https://github.com/Arif547/Food-Tracker-Server-Side.git",
            live: "https://coruscating-stardust-95ebcd.netlify.app/"
        }
    ];
    return (
        <section id="projects" className="py-20 ">
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
                                        className="w-full h-80 lg:h-full object-cover object-top hover:scale-105 transition-transform duration-500"
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
                                        <a href={project.live} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-600/25">
                                            <ExternalLink size={16} />
                                            Live Demo
                                        </a>
                                        <a href={project.Client} className={`border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 ${project.Client ? '' : 'hidden'}`}>
                                            <Github size={16} />
                                            Client
                                        </a>
                                        <a href={project.Server} className={`border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 ${project.Server ? '' : 'hidden'}`}>
                                            <Github size={16} />
                                            Server
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