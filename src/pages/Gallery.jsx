import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { gallery } from '../data/gallery';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['all', 'equipment', 'classes', 'trainers', 'events'];

  const filteredImages =
    selectedCategory === 'all'
      ? gallery
      : gallery.filter((img) => img.category === selectedCategory);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction) => {
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % filteredImages.length
        : (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <Helmet>
        <title>Gallery - Boss Fitness | Inside Our Premium Gym in Coimbatore</title>
        <meta
          name="description"
          content="Explore Boss Fitness gallery - see our world-class equipment, training spaces, group classes, and the vibrant Boss Fitness community in action."
        />
      </Helmet>

      {/* Page Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-overlay-gradient" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-bebas text-6xl sm:text-7xl lg:text-8xl text-white uppercase tracking-wider">
            Our <span className="gold-gradient-text">Gallery</span>
          </h1>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-primary-bg sticky top-20 z-30 border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-6 py-3 font-inter font-bold uppercase tracking-wider text-sm transition-smooth ${
                  selectedCategory === category
                    ? 'text-gold'
                    : 'text-text-secondary hover:text-gold'
                }`}
              >
                {category}
                {selectedCategory === category && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-gradient"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-primary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-xl group cursor-pointer aspect-[4/3]"
                  onClick={() => openLightbox(image)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white font-inter text-sm capitalize">
                        {image.category}
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-black hover:scale-110 transition-smooth z-50"
              aria-label="Close lightbox"
            >
              <FaTimes className="text-xl" />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
            </motion.div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('prev');
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gold-gradient rounded-full flex items-center justify-center text-black hover:scale-110 transition-smooth"
              aria-label="Previous image"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox('next');
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-gold-gradient rounded-full flex items-center justify-center text-black hover:scale-110 transition-smooth"
              aria-label="Next image"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Image Info */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary-surface/80 backdrop-blur-md border border-gold/30 rounded-lg px-6 py-3">
              <p className="text-white font-inter text-sm capitalize">
                {selectedImage.category} • {selectedImage.alt}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
