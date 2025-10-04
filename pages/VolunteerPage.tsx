
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { useForm } from '../hooks/useForm';
import type { VolunteerFormData } from '../types';

const initialVolunteerState: VolunteerFormData = {
    name: '',
    contact: '',
    location: '',
};

const FormField: React.FC<{ label: string, name: string, type?: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, required?: boolean, placeholder?: string }> = 
({ label, name, type = 'text', value, onChange, required = true, placeholder }) => (
    <div>
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary transition-all duration-300"
        />
    </div>
);

const VolunteerPage: React.FC = () => {
    const { values, status, handleChange, handleSubmit, resetForm } = useForm<VolunteerFormData>(initialVolunteerState);

    const handleVolunteerSubmit = async () => {
        // Simulate API call
        console.log('Submitting volunteer application:', values);
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Volunteer application submitted successfully!');
    };

    if (status === 'success') {
        return (
            <PageWrapper title="Thank You!">
                <div className="container mx-auto px-4 py-20 text-center">
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                        <h1 className="text-3xl font-bold mb-2">Welcome to the Team!</h1>
                        <p className="text-lg mb-4">Thank you for your interest in volunteering. We've received your application and will be in touch soon with the next steps.</p>
                        <button onClick={resetForm} className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                            Go Back
                        </button>
                    </div>
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper title="Become a Volunteer">
            <div className="bg-light-bg py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-dark-text">Join Our Volunteer Team</h1>
                            <p className="text-light-text mt-2">Be the change you want to see. Your time and effort can bring smiles to countless faces.</p>
                        </div>

                        <form onSubmit={(e) => handleSubmit(e, handleVolunteerSubmit)} className="space-y-6">
                            <FormField label="Full Name" name="name" value={values.name} onChange={handleChange} placeholder="Jane Smith" />
                            <FormField label="Contact Number" name="contact" type="tel" value={values.contact} onChange={handleChange} placeholder="123-456-7890" />
                            <FormField label="Area/Location you can help in" name="location" value={values.location} onChange={handleChange} placeholder="e.g., Downtown, North Suburbs" />

                            <div>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                >
                                    {status === 'submitting' ? 'Submitting...' : 'Sign Up to Volunteer'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default VolunteerPage;