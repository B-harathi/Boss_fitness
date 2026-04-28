import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';

const CTABanner = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-8xl text-white uppercase tracking-wider mb-6">
            Ready To Become <span className="gold-gradient-text">A Boss?</span>
          </h2>
          <p className="text-text-secondary text-lg md:text-xl font-inter mb-10 leading-relaxed max-w-3xl mx-auto">
            Join 5000+ members who transformed their lives at Boss Fitness. Your journey to greatness starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-gold-gradient text-black font-bold uppercase tracking-widest px-10 py-5 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow active:scale-95 w-full sm:w-auto text-center"
            >
              Join Now
            </Link>
            <a
              href="tel:+919876543210"
              className="bg-transparent border-2 border-gold text-white font-bold uppercase tracking-widest px-10 py-5 rounded-lg transition-smooth hover:bg-gold hover:text-black hover:scale-105 active:scale-95 w-full sm:w-auto text-center flex items-center justify-center space-x-3"
            >
              <FaPhone />
              <span>Call Us</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
