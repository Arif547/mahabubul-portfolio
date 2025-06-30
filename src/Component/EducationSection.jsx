import React from 'react';
import { Award, Calendar, GraduationCap, Building, ChevronRight, Book } from 'lucide-react';


const EducationSection = () => {
    const education = [
        {
            degree: "Master of Arts",
            subject: "Islamic History & Culture",
            school: "National University",
            year: "2020 - 2021",
            // description: "Study of the origins, growth, and global impact of Islam, including its civilization, heritage, and contributions to art, science, and society.",
            // achievements: ["Dean's List", "Research Assistant", "GPA: 3.8/4.0"]
        },
        {
            degree: "Bachelor of Arts",
            subject: "Islamic History & Culture",
            school: "National University",
            year: "2015- 2019",
            // description: "Foundation in computer science fundamentals including algorithms, data structures, and software development methodologies.",
            // achievements: ["Summa Cum Laude", "CS Honor Society", "GPA: 3.9/4.0"]
        },
        {
            degree: "Higher Secondary Certificate",
            subject: "Humanities",
            school: "Chittagong Cantonment Public College",
            year: "2013- 2015",
            // description: "Foundation in computer science fundamentals including algorithms, data structures, and software development methodologies.",
            // achievements: ["Summa Cum Laude", "CS Honor Society", "GPA: 3.9/4.0"]
        },
        {
            degree: "Secondary School Certificate",
            subject: "Humanities",
            school: "Bayezid Bostami Cantonment Board High School",
            year: "2013",
            // description: "Foundation in computer science fundamentals including algorithms, data structures, and software development methodologies.",
            // achievements: ["Summa Cum Laude", "CS Honor Society", "GPA: 3.9/4.0"]
        }
    ];

    const certifications = [
        { name: "MERN Web Development", org: "Programming hero", year: "2025" },
        { name: "SEO", org: "Passive Journal Course", year: "2022" },
        // { name: "React Advanced Certification", org: "Meta", year: "2022" },
        // { name: "Node.js Certified Developer", org: "Node.js Foundation", year: "2021" }
    ];
    return (
        <section id="education" className="py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Education & Certifications</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Academic background and professional development
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <GraduationCap className="text-blue-600" />
                            Education
                        </h3>
                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                            <GraduationCap className="text-white" size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h4>
                                            <div className="flex items-center gap-4 mb-1">
                                                <span className="text-blue-600 font-medium flex items-center gap-1">
                                                    <Building size={14} />
                                                    {edu.school}
                                                </span>

                                            </div>
                                            <span className="text-blue-600 font-medium  flex items-center gap-1 mb-2">
                                                <Book size={14} />
                                                {edu.subject}
                                            </span>
                                            <span className="text-gray-500 flex items-center gap-1">
                                                <Calendar size={14} />
                                                {edu.year}
                                            </span>

                                            <p className="text-gray-700 mb-4">{edu.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.achievements?.map((achievement, i) => (
                                                    <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                                        {achievement}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                            <Award className="text-green-600" />
                            Certifications
                        </h3>
                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <h4 className="font-semibold text-gray-900 mb-1">{cert.name}</h4>
                                            <p className="text-gray-600 text-sm mb-2">{cert.org}</p>
                                            <span className="text-green-600 text-sm font-medium">{cert.year}</span>
                                        </div>
                                        <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                            <Award className="text-green-600" size={20} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Skills Summary */}
                        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                            <h4 className="font-semibold text-gray-900 mb-4">Continuous Learning</h4>
                            <p className="text-gray-700 mb-4">
                                I believe in continuous learning and staying updated with the latest technologies.
                                Currently exploring AI/ML integration in web applications and advanced cloud architectures.
                            </p>
                            <div className="flex items-center text-blue-600 font-medium">
                                <span>View all certifications</span>
                                <ChevronRight size={16} className="ml-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;