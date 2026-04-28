import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 lg:py-28 bg-primary-bg relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-inter text-sm uppercase tracking-widest-xl mb-4">
            Success Stories
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider">
            What Our Members Say
          </h2>
        </motion.div>

        <div className="relative">
          {/* Decorative Quote Icon */}
          <FaQuoteLeft className="absolute -top-8 left-8 text-6xl text-gold/10 z-0" />

          {/* Testimonial Slider */}
          <div className="relative min-h-[300px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="w-full"
              >
                <div className="bg-primary-surface border border-gold/20 rounded-xl p-8 md:p-12 text-center">
                  {/* Star Rating */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <FaStar key={i} className="text-gold text-xl" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-text-secondary text-lg md:text-xl leading-relaxed font-inter italic mb-8">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  {/* Member Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full border-2 border-gold/30"
                    />
                    <div className="text-left">
                      <h4 className="font-bebas text-xl text-white uppercase tracking-wider">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gold text-sm font-inter">
                        {testimonials[currentIndex].duration}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-black hover:scale-110 transition-smooth shadow-gold-glow"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center text-black hover:scale-110 transition-smooth shadow-gold-glow"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gold w-8'
                    : 'bg-gold/30 hover:bg-gold/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
