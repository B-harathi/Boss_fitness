import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { FaDumbbell, FaRunning, FaFire, FaYinYang, FaMusic, FaUserTie } from 'react-icons/fa';

const iconMap = {
  FaDumbbell,
  FaRunning,
  FaFire,
  FaYinYang,
  FaMusic,
  FaUserTie,
};

const ServicesPreview = () => {
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
            What We Offer
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider">
            Our Programs
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-primary-surface border border-gold/20 hover:border-gold/50 transition-smooth"
              >
                {/* Background Image */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-surface via-primary-surface/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative p-6 -mt-16">
                  <div className="w-14 h-14 bg-gold-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    {IconComponent && <IconComponent className="text-2xl text-black" />}
                  </div>
                  <h3 className="font-bebas text-2xl text-white uppercase tracking-wider mb-3">
                    {service.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center text-gold hover:text-gold-light transition-smooth font-inter font-semibold text-sm uppercase tracking-wider"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-block bg-gold-gradient text-black font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow active:scale-95"
          >
            View All Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
