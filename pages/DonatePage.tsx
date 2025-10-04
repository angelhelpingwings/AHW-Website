
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { useForm } from '../hooks/useForm';
import type { DonateFormData } from '../types';

const initialDonateState: DonateFormData = {
    name: '',
    contact: '',
    address: '',
    foodType: '',
    quantity: '',
    dateTime: '',
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

const DonatePage: React.FC = () => {
    const { values, status, handleChange, handleSubmit, resetForm } = useForm<DonateFormData>(initialDonateState);

    const handleDonateSubmit = async () => {
        // Simulate API call
        console.log('Submitting donation:', values);
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Donation submitted successfully!');
    };
    
    if (status === 'success') {
        return (
            <PageWrapper title="Thank You!">
                <div className="container mx-auto px-4 py-20 text-center">
                    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                        <h1 className="text-3xl font-bold mb-2">Thank You for Your Generosity!</h1>
                        <p className="text-lg mb-4">Your donation request has been received. Our team will contact you shortly to coordinate the pickup.</p>
                        <button onClick={resetForm} className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105">
                            Make Another Donation
                        </button>
                    </div>
                </div>
            </PageWrapper>
        );
    }

    return (
        <PageWrapper title="Donate Food">
            <div className="bg-light-bg py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold text-dark-text">Donate Food</h1>
                            <p className="text-light-text mt-2">Fill out the form below to schedule a food pickup. Your kindness makes a world of difference.</p>
                        </div>

                        <form onSubmit={(e) => handleSubmit(e, handleDonateSubmit)} className="space-y-6">
                            <FormField label="Full Name" name="name" value={values.name} onChange={handleChange} placeholder="John Doe" />
                            <FormField label="Contact Number" name="contact" type="tel" value={values.contact} onChange={handleChange} placeholder="123-456-7890" />
                            <FormField label="Pickup Address" name="address" value={values.address} onChange={handleChange} placeholder="123 Main St, Anytown, USA" />
                            <FormField label="Type of Food" name="foodType" value={values.foodType} onChange={handleChange} placeholder="e.g., Cooked Meals, Groceries, Fresh Produce" />
                            <FormField label="Quantity (approx.)" name="quantity" value={values.quantity} onChange={handleChange} placeholder="e.g., 10 meals, 5 kg of rice" />
                            <FormField label="Available Date & Time for Pickup" name="dateTime" type="datetime-local" value={values.dateTime} onChange={handleChange} />

                            <div>
                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-lg font-medium text-white bg-accent hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                                >
                                    {status === 'submitting' ? 'Submitting...' : 'Schedule Pickup'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
};

export default DonatePage;