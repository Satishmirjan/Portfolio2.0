import React, { useState } from 'react';
import Section from '../components/UI/Section';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/national.jpg',
    alt: 'National Hackathon – HackElite (JSS STU)',
    category: 'Hackathons'
  },
  {
    id: 2,
    src: '/images/into.jpg',
    alt: 'Seminar: Introduction to C Programming',
    category: 'Seminars'
  },
  {
    id: 3,
    src: '/images/blockchain.jpg',
    alt: 'Seminar: Blockchain with Shardeum',
    category: 'Seminars'
  },
  {
    id: 4,
    src: '/images/cloud.jpg',
    alt: 'Seminar: Cloud Computing Essentials',
    category: 'Seminars'
  },
  {
    id: 5,
    src: '/images/linux.jpeg',
    alt: 'Seminar: Getting Started with Linux',
    category: 'Seminars'
  },
  {
    id: 6,
    src: '/images/hackk.jpg',
    alt: 'National Hackathon Participation',
    category: 'Hackathons'
  },
  {
    id: 7,
    src: '/images/openday.jpg',
    alt: 'Project Presentation – Hostel Bite during Open Day',
    category: 'Projects'
  },
  {
    id: 8,
    src: '/images/web.jpg',
    alt: 'Seminar: Introduction to Web Development',
    category: 'Seminars'
  },
  {
    id: 9,
    src: '/images/aurigo.jpg',
    alt: 'Hackathon Participation – Organised by Aurigo (Bengaluru)',
    category: 'Hackathons'

  },
  {
    id: 10,
    src: '/images/git.jpg',
    alt: 'Hackathon Participation – Organised by Global Institute of Technology (Bengaluru)',
    category: 'Hackathons'
  },
  {
    id: 10,
    src: '/images/bmsit.jpg',
    alt: 'Hackathon Participation (Code-Red)– Organised by BMSIT (Bengaluru)',
    category: 'Hackathons'
  }
];


const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = ['all', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  return (
    <Section
      id="gallery"
      title="Gallery"
      subtitle="Highlights from my journey"
      className="bg-gray-50 dark:bg-gray-800 pt-32 mt-8"
    >
     
      <div className="flex justify-center mb-8 space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${filter === category
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            onClick={() => setSelectedImage(image)}
            className="cursor-pointer group relative overflow-hidden rounded-lg shadow-md aspect-[4/3]"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                {image.alt}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </Section>
  );
};

export default Gallery;