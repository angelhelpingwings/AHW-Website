
import React, { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { GALLERY_ITEMS, IMPACT_STATS } from '../constants';
import type { GalleryItem } from '../types';

const StatCard: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="bg-primary/10 dark:bg-blue-900/50 p-6 rounded-lg text-center shadow transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:bg-primary/20 dark:hover:bg-blue-900/70">
        <p className="text-4xl font-bold text-primary dark:text-blue-400">{value}</p>
        <p className="text-light-text dark:text-gray-400 mt-1">{label}</p>
    </div>
);

const GalleryImage: React.FC<{ item: GalleryItem; onClick: () => void }> = ({ item, onClick }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={onClick}>
        <img src={item.imageUrl} alt={item.caption} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end p-4">
            <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">{item.caption}</p>
        </div>
    </div>
);

const Modal: React.FC<{ item: GalleryItem | null; onClose: () => void }> = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 animate-fadeIn" onClick={onClose}>
            <div className="relative bg-white dark:bg-gray-800 p-4 rounded-lg max-w-4xl max-h-[90vh] animate-scaleIn" onClick={e => e.stopPropagation()}>
                <button onClick={onClose} className="absolute -top-4 -right-4 bg-white dark:bg-gray-700 text-black dark:text-white rounded-full h-10 w-10 flex items-center justify-center text-2xl font-bold">&times;</button>
                <img src={item.imageUrl.replace('/600/400', '/1200/800')} alt={item.caption} className="rounded-lg object-contain max-h-[80vh]" />
                <p className="text-center text-dark-text dark:text-white mt-4">{item.caption}</p>
            </div>
        </div>
    );
};

const GalleryPage: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

    return (
        <PageWrapper title="Gallery & Impact">
            {/* Impact Section */}
            <section className="py-20 bg-light-bg dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-dark-text dark:text-white">Our Impact in Numbers</h1>
                        <p className="text-lg text-light-text dark:text-gray-400 mt-2">The collective effort of our community in action.</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {IMPACT_STATS.map(stat => (
                            <StatCard key={stat.label} value={stat.value} label={stat.label} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-dark-text dark:text-white">Moments of Hope</h2>
                        <p className="text-lg text-light-text dark:text-gray-400 mt-2">A glimpse into our daily efforts and the lives we've touched.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {GALLERY_ITEMS.map(item => (
                            <GalleryImage key={item.id} item={item} onClick={() => setSelectedItem(item)} />
                        ))}
                    </div>
                </div>
            </section>
            
            <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        </PageWrapper>
    );
};

export default GalleryPage;