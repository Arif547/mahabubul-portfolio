import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const NewsletterSubscribe = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        // Basic validation
        if (!email.trim()) {
            setStatus('error');
            setErrorMessage('Please enter your email address');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address');
            return;
        }

        try {

            await new Promise(resolve => setTimeout(resolve, 2000));


            const response = await fetch('https://formspree.io/f/xovwyrwy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    type: 'newsletter_subscription'
                })
            });

            if (!response.ok) throw new Error('Failed to subscribe');

            setStatus('success');
            setEmail('');

        } catch (error) {
            console.error('Error subscribing:', error);
            setStatus('error');
            setErrorMessage('Failed to subscribe. Please try again.');
        }
    };

    return (
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
            <div className="max-w-2xl mx-auto text-center">
                <h4 className="text-2xl font-semibold mb-4 text-gray-900">Stay Updated</h4>
                <p className="text-gray-600 mb-6">
                    Get the latest updates on my projects and tech insights delivered to your inbox.
                </p>

                <div className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                            disabled={status === 'loading'}
                            required
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={status === 'loading'}
                            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 disabled:bg-blue-400 transition-all duration-300 hover:scale-105 disabled:hover:scale-100 flex items-center justify-center gap-2 disabled:cursor-not-allowed"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" />
                                    Subscribing...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    Subscribe
                                </>
                            )}
                        </button>
                    </div>

                    {/* Error Message */}
                    {status === 'error' && (
                        <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg mt-4">
                            <AlertCircle size={16} />
                            <span className="text-sm">{errorMessage}</span>
                        </div>
                    )}

                    {/* Success Message */}
                    {status === 'success' && (
                        <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg mt-4">
                            <CheckCircle size={16} />
                            <span className="text-sm">Successfully subscribed! Check your email for confirmation.</span>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default NewsletterSubscribe;