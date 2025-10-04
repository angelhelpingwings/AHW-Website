
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { useForm } from '../hooks/useForm';
import type { ContactFormData } from '../types';

const initialContactState: ContactFormData = {
    name: '',
    email: '',
    message: '',
};

const InfoCard: React.FC<{ icon: React.ReactNode, title: string, content: string | React.ReactNode }> = ({ icon, title, content }) => (
    <div className="flex items-start space-x-4 p-4 rounded-lg transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700/50">
        <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center bg-primary/10 text-primary dark:bg-blue-900/50 dark:text-blue-400 rounded-full">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-semibold text-dark-text dark:text-white">{title}</h3>
            <div className="text-light-text dark:text-gray-400">{content}</div>
        </div>
    </div>
);


const ContactPage: React.FC = () => {
    const { values, status, handleChange, handleSubmit, resetForm } = useForm<ContactFormData>(initialContactState);

    const handleContactSubmit = async () => {
        // Simulate API call
        console.log('Submitting contact message:', values);
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Message submitted successfully!');
    };

    return (
        <PageWrapper title="Contact Us">
            <div className="bg-white dark:bg-gray-800 py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-dark-text dark:text-white">Get in Touch</h1>
                        <p className="text-lg text-light-text dark:text-gray-400 mt-2">We'd love to hear from you. Whether you have a question or a suggestion, we're here to help.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-light-bg dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold text-dark-text dark:text-white mb-6">Send Us a Message</h2>
                            {status === 'success' ? (
                                <div className="text-center p-4 bg-green-100 text-green-800 rounded-md">
                                    <p className="font-semibold">Message Sent!</p>
                                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                                    <button onClick={resetForm} className="mt-4 text-sm text-primary font-semibold hover:underline">Send another message</button>
                                </div>
                            ) : (
                                <form onSubmit={(e) => handleSubmit(e, handleContactSubmit)} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                                        <input type="text" name="name" id="name" value={values.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-all duration-300" />
                                    </div>
                                     <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                                        <input type="email" name="email" id="email" value={values.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-all duration-300" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                                        <textarea name="message" id="message" rows={4} value={values.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary transition-all duration-300"></textarea>
                                    </div>
                                     <div>
                                        <button type="submit" disabled={status === 'submitting'} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary-dark disabled:bg-gray-500 transform hover:scale-105 transition-all duration-300 hover:shadow-lg">
                                            {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                        {/* Contact Details */}
                        <div className="space-y-8">
                            <InfoCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>} 
                                title="Our Office" 
                                content="123 Hope Street, Charity City, 45678"
                            />
                            <InfoCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} 
                                title="Email Us" 
                                content={<a href="mailto:contact@angelhelpingwing.org" className="text-primary hover:underline dark:text-blue-400">contact@angelhelpingwing.org</a>}
                            />
                            <InfoCard 
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>} 
                                title="Call Us" 
                                content="(123) 456-7890"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default ContactPage;