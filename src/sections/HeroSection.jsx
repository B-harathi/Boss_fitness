import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-overlay-gradient" />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <motion.p
          variants={itemVariants}
          className="text-gold font-inter text-xs sm:text-sm uppercase tracking-widest-xl mb-6"
        >
          Coimbatore's Premium Fitness Destination
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-bebas text-6xl sm:text-7xl lg:text-9xl uppercase tracking-wider mb-4"
        >
          <span className="text-white">UNLEASH THE</span>
          <br />
          <span className="gold-gradient-text">BOSS WITHIN</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-text-secondary text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed font-inter"
        >
          Transform your body. Sharpen your mind. Join Boss Fitness — where champions are built every day.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/contact"
            className="bg-gold-gradient text-black font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow active:scale-95 w-full sm:w-auto text-center"
          >
            Start Your Journey
          </Link>
          <Link
            to="/services"
            className="bg-transparent border-2 border-gold text-white font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-smooth hover:bg-gold hover:text-black hover:scale-105 active:scale-95 w-full sm:w-auto text-center"
          >
            Explore Classes
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <FaArrowDown className="text-gold text-2xl animate-bounce" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
