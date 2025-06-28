import { Linkedin, Mail, Phone } from 'lucide-react';
import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to start your next project? Let's discuss how we can bring your ideas to life
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                I'm always interested in hearing about new projects and opportunities.
                                Whether you're a company looking to hire, or you're someone looking to build something great,
                                I'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                                    <Mail className="text-white" size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Email</p>
                                    <p className="text-gray-600">alex.johnson@email.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                                    <Phone className="text-white" size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Phone</p>
                                    <p className="text-gray-600">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                <div className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center">
                                    <Linkedin className="text-white" size={20} />
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">LinkedIn</p>
                                    <p className="text-gray-600">linkedin.com/in/alexjohnson</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-900 mb-2">Project Details</label>
                                <textarea
                                    rows="4"
                                    className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>
                            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;