import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        // Basic validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            setStatus('error');
            setErrorMessage('Please fill in all fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address');
            return;
        }

        try {
            // Simulate API call for demo
            await new Promise(resolve => setTimeout(resolve, 2000));

            const response = await fetch('https://formspree.io/f/xovwyrwy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message
                })
            });

            if (!response.ok) throw new Error('Failed to send message');
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });

        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <div className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                        Your Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="John Doe"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors"
                        placeholder="john@example.com"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                        Project Details
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full bg-white border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-blue-600 focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                        required
                    />
                </div>

                {/* Error Message */}
                {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                        <AlertCircle size={16} />
                        <span className="text-sm">{errorMessage}</span>
                    </div>
                )}

                {/* Success Message */}
                {status === 'success' && (
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg">
                        <CheckCircle size={16} />
                        <span className="text-sm">Message sent successfully! I'll get back to you soon.</span>
                    </div>
                )}

                <button
                    onClick={handleSubmit}
                    disabled={status === 'loading'}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? (
                        <>
                            <Loader2 size={16} className="animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Send size={16} />
                            Send Message
                        </>
                    )}
                </button>
            </div>
        </div>
    );
};

export default ContactForm;