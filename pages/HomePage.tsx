
import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const HeroSection: React.FC = () => (
    <section className="relative bg-cover bg-center text-white py-32 px-24" style={{ backgroundImage: 'url(https://i.ibb.co/LXqbqpbh/IMG-20230907-WA0005.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight animate-slideInUp">
                Spreading Hope, One Act of Kindness at a Time
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-slideInUp" style={{ animationDelay: '0.2s' }}>
                Join our community of angels dedicated to making a positive impact. Together, we can bring light and support to those in need.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-slideInUp" style={{ animationDelay: '0.4s' }}>
                <a href="https://chat.whatsapp.com" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                    Join on WhatsApp
                </a>
                <Link to="/about" className="bg-transparent border-2 border-white hover:bg-white hover:text-dark-text text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto">
                    Learn More
                </Link>
            </div>
        </div>
    </section>
);

const HowItWorksStep: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
    <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl" style={{ animationDelay: `${delay}s` }}>
        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 text-primary mx-auto mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-dark-text dark:text-white mb-2">{title}</h3>
        <p className="text-light-text dark:text-gray-400">{description}</p>
    </div>
);

const OurApproach: React.FC = () => (
    <section className="py-20 bg-light-bg dark:bg-gray-900">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-text dark:text-white">Our Approach</h2>
                <p className="text-lg text-light-text dark:text-gray-400 mt-2">Making a difference through compassionate action.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
                <HowItWorksStep
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                    title="1. Identify Needs"
                    description="We connect with communities to understand their most pressing challenges and offer support."
                    delay={0.1}
                />
                <HowItWorksStep
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                    title="2. Mobilize Community"
                    description="We bring together caring individuals to provide direct help and resources."
                    delay={0.2}
                />
                <HowItWorksStep
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}
                    title="3. Create Impact"
                    description="Through collective action, we create lasting positive change and spread hope to those in need."
                    delay={0.3}
                />
            </div>
        </div>
    </section>
);

const Testimonial: React.FC<{ quote: string; author: string; role: string; imageUrl: string }> = ({ quote, author, role, imageUrl }) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
        <p className="text-light-text dark:text-gray-400 italic mb-4">"{quote}"</p>
        <div className="flex items-center">
            <img src={imageUrl} alt={author} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <p className="font-bold text-dark-text dark:text-white">{author}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{role}</p>
            </div>
        </div>
    </div>
);


const Testimonials: React.FC = () => (
    <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark-text dark:text-white">What Our Community Says</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <Testimonial
                    quote="Being a part of Angel Helping Wing has been so fulfilling. It's wonderful to see the direct impact of our collective efforts in the community."
                    author="Sarah Johnson"
                    role="Community Member"
                    imageUrl="https://picsum.photos/seed/test1/100/100"
                />
                <Testimonial
                    quote="I received help when I needed it most. This group is more than an organization; it's a family that genuinely cares."
                    author="Michael Brown"
                    role="Beneficiary"
                    imageUrl="https://picsum.photos/seed/test2/100/100"
                />
            </div>
        </div>
    </section>
);


const HomePage: React.FC = () => {
    return (
        <PageWrapper title="Home">
            <HeroSection />
            <OurApproach />
            <Testimonials />
        </PageWrapper>
    );
};

export default HomePage;