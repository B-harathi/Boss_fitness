import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gallery } from '../data/gallery';
import { FaSearchPlus } from 'react-icons/fa';
import { useState } from 'react';

const GalleryPreview = () => {
  const previewImages = gallery.slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-inter text-sm uppercase tracking-widest-xl mb-4">
            Inside Boss Fitness
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider">
            Our Gym
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'h-96' : 'h-48'} overflow-hidden`}>
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 bg-gold-gradient rounded-full flex items-center justify-center">
                    <FaSearchPlus className="text-black text-xl" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/gallery"
            className="inline-block bg-gold-gradient text-black font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow active:scale-95"
          >
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
