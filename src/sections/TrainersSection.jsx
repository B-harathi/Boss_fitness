import { motion } from 'framer-motion';
import { trainers } from '../data/trainers';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

const TrainersSection = () => {
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
            Meet The Team
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider">
            Our Expert Trainers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-surface border border-gold/20 rounded-xl p-6 text-center transition-smooth hover:-translate-y-2 hover:shadow-gold-glow hover:border-gold/50 group"
            >
              {/* Profile Image */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gold-gradient rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="relative w-full h-full rounded-full border-4 border-gold/30 group-hover:border-gold object-cover transition-smooth"
                />
              </div>

              {/* Info */}
              <h3 className="font-bebas text-2xl text-white uppercase tracking-wider mb-1">
                {trainer.name}
              </h3>
              <p className="text-gold font-inter text-sm font-semibold uppercase tracking-wider mb-2">
                {trainer.title}
              </p>
              <p className="text-text-secondary text-xs font-inter mb-4">
                {trainer.experience} Experience
              </p>
              <p className="text-text-muted text-xs font-inter italic mb-6">
                {trainer.specialization}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                <a
                  href={trainer.social.instagram}
                  className="w-10 h-10 bg-primary-bg border border-gold/20 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-smooth"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  href={trainer.social.facebook}
                  className="w-10 h-10 bg-primary-bg border border-gold/20 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-smooth"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-lg" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
