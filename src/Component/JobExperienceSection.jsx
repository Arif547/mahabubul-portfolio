import React from 'react';
import {
    Calendar,
    MapPin,
    Building2,
    Code,
    Palette,
    Globe,
    ExternalLink,
    Award,
    Users,
    Briefcase,
    Clock,
    CheckCircle
} from 'lucide-react';

const JobExperienceSection = () => {
    const experiences = [
        {
            id: 1,
            title: "WordPress Elementor Developer",
            company: "Kutidev Agency",
            location: "Remote",
            duration: "2023 - Present",
            period: "2+ Years",
            type: "Full-time",
            description: "Specialized in converting Figma designs to pixel-perfect Elementor websites. Creating custom WordPress solutions and maintaining client websites with focus on performance and user experience.",
            achievements: [
                "Converted 50+ Figma designs to responsive Elementor websites",
                "Improved website loading speeds by 40% through optimization",
                "Maintained 98% client satisfaction rate",
                "Led WordPress development for enterprise clients"
            ],
            skills: ["WordPress", "Elementor", "Figma to Web", "Custom CSS", "Responsive Design"],
            isActive: true
        },
        {
            id: 2,
            title: "Freelance WordPress Developer & Template Creator",
            company: "Self-Employed",
            location: "Global",
            duration: "2020 - Present",
            period: "4+ Years",
            type: "Freelance",
            description: "Developing premium Elementor templates and selling them on KitPapa.com and KitNinja.com. Creating high-quality, conversion-focused website templates for various industries.",
            achievements: [
                "Created 100+ premium Elementor templates",
                "Generated $50K+ in template sales revenue",
                "Built successful template marketplace presence",
                "Served 1000+ customers globally"
            ],
            skills: ["Template Design", "Elementor Pro", "WooCommerce", "Business Development", "UI/UX"],
            websites: [
                { name: "KitPapa.com", url: "https://kitpapa.com" },
                { name: "KitNinja.com", url: "https://kitninja.com" }
            ],
            isActive: true
        }
    ];

    const stats = [
        { label: "Years Experience", value: "4+", icon: Clock },
        { label: "Websites Built", value: "200+", icon: Globe },
        { label: "Templates Created", value: "100+", icon: Code },
        { label: "Happy Clients", value: "1000+", icon: Users }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        4+ years of expertise in WordPress development, Elementor design, and creating premium website templates
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                    {stats.map(({ label, value, icon: Icon }) => (
                        <div key={label} className="text-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Icon className="w-8 h-8 text-blue-600" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
                            <div className="text-gray-600 font-medium">{label}</div>
                        </div>
                    ))}
                </div>

                {/* Experience Timeline */}
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="relative">
                            {/* Timeline Line */}
                            {index !== experiences.length - 1 && (
                                <div className="absolute left-8 top-20 w-0.5 h-full bg-gray-200 hidden md:block"></div>
                            )}

                            {/* Experience Card */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative">
                                {/* Timeline Dot */}
                                <div className="absolute -left-4 top-8 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>

                                {/* Status Badge */}
                                {exp.isActive && (
                                    <div className="absolute top-6 right-6">
                                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full flex items-center gap-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                            Currently Active
                                        </span>
                                    </div>
                                )}

                                <div className="grid md:grid-cols-3 gap-8">
                                    {/* Left Column - Job Info */}
                                    <div className="md:col-span-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {exp.title}
                                        </h3>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center gap-3 text-gray-600">
                                                <Building2 className="w-5 h-5 text-blue-600" />
                                                <span className="font-medium">{exp.company}</span>
                                            </div>

                                            <div className="flex items-center gap-3 text-gray-600">
                                                <MapPin className="w-5 h-5 text-blue-600" />
                                                <span>{exp.location}</span>
                                            </div>

                                            <div className="flex items-center gap-3 text-gray-600">
                                                <Calendar className="w-5 h-5 text-blue-600" />
                                                <span>{exp.duration}</span>
                                            </div>

                                            <div className="flex items-center gap-3 text-gray-600">
                                                <Briefcase className="w-5 h-5 text-blue-600" />
                                                <span>{exp.type} • {exp.period}</span>
                                            </div>
                                        </div>

                                        {/* Websites */}
                                        {exp.websites && (
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide">
                                                    My Platforms
                                                </h4>
                                                {exp.websites.map((site) => (
                                                    <a
                                                        key={site.name}
                                                        href={site.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                                                    >
                                                        <Globe className="w-4 h-4" />
                                                        <span className="font-medium">{site.name}</span>
                                                        <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Right Column - Details */}
                                    <div className="md:col-span-2">
                                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="mb-6">
                                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                <Award className="w-5 h-5 text-blue-600" />
                                                Key Achievements
                                            </h4>
                                            <ul className="space-y-3">
                                                {exp.achievements.map((achievement, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                                        <span className="text-gray-700">{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Skills */}
                                        <div>
                                            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                                <Code className="w-5 h-5 text-blue-600" />
                                                Technologies & Skills
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Ready to Work Together?
                        </h3>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Let's discuss your WordPress project or explore my premium Elementor templates to kickstart your website.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                                Get In Touch
                            </button>
                            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300">
                                View Templates
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JobExperienceSection;