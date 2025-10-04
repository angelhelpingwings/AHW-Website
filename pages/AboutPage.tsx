
import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { TEAM_MEMBERS } from '../constants';
import type { TeamMember } from '../types';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
        <img src={member.imageUrl} alt={member.name} className="w-full h-64 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-dark-text dark:text-white">{member.name}</h3>
            <p className="text-primary dark:text-blue-400 font-semibold mb-2">{member.role}</p>
            <p className="text-light-text dark:text-gray-400">{member.bio}</p>
        </div>
    </div>
);

const AboutPage: React.FC = () => {
    return (
        <PageWrapper title="About Us">
            {/* Mission and Vision Section */}
            <section className="py-20 bg-light-bg dark:bg-gray-900">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark-text dark:text-white mb-4">Our Mission</h1>
                    <p className="text-lg md:text-xl text-light-text dark:text-gray-400 max-w-3xl mx-auto">
                        To build a compassionate community that offers support and spreads hope to those in need. We believe in the power of collective action to create positive change and uplift lives.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img src="https://picsum.photos/seed/ourstory/800/600" alt="Our Story" className="rounded-lg shadow-2xl"/>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-dark-text dark:text-white mb-4">Our Story</h2>
                            <p className="text-light-text dark:text-gray-400 mb-4">
                                Angel Helping Wing was born from a simple idea: that small acts of kindness can create powerful ripples of change. Founded in 2020 by a small group of friends, we started by helping our neighbors in small ways.
                            </p>
                            <p className="text-light-text dark:text-gray-400">
                                As word spread, so did our community of supporters. Today, we are a thriving group powered by dedicated members, working together to bring hope and support to our community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="py-20 bg-light-bg dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-text dark:text-white">Meet Our Team</h2>
                        <p className="text-lg text-light-text dark:text-gray-400 mt-2">The passionate individuals dedicated to our cause.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TEAM_MEMBERS.map(member => (
                            <TeamMemberCard key={member.name} member={member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Transparency Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-text dark:text-white">Our Commitment</h2>
                        <p className="text-lg text-light-text dark:text-gray-400 mt-2">We are committed to upholding the highest standards of accountability.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md text-center max-w-sm transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
                            <h3 className="text-xl font-bold dark:text-white mb-2">Community Focused</h3>
                            <p className="text-light-text dark:text-gray-400">Our actions are driven by the needs of the community we serve.</p>
                        </div>
                         <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md text-center max-w-sm transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl">
                            <h3 className="text-xl font-bold dark:text-white mb-2">Transparent Operations</h3>
                            <p className="text-light-text dark:text-gray-400">We believe in open communication about how our resources are used.</p>
                        </div>
                    </div>
                </div>
            </section>

        </PageWrapper>
    );
};

export default AboutPage;