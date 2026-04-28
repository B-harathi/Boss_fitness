import { motion } from 'framer-motion';
import { FaCheck, FaStar, FaWhatsapp } from 'react-icons/fa';
import { pricing } from '../data/pricing';
import { Link } from 'react-router-dom';

const PricingTable = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-inter text-sm uppercase tracking-widest-xl mb-4">
            Choose Your Plan
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider">
            Membership Plans
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricing.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-primary-surface border-2 rounded-xl p-8 transition-smooth hover:-translate-y-2 ${
                plan.popular
                  ? 'border-gold shadow-gold-glow scale-105 md:scale-110'
                  : 'border-gold/20 hover:border-gold/50'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gold-gradient text-black font-bold uppercase tracking-wider text-xs px-4 py-2 rounded-full flex items-center space-x-1">
                    <FaStar className="text-sm" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="font-bebas text-3xl text-white uppercase tracking-wider text-center mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-start justify-center">
                  <span className="text-gold text-2xl font-bebas mt-2">₹</span>
                  <span className="text-gold text-6xl font-bebas">{plan.price}</span>
                </div>
                <p className="text-text-secondary font-inter text-sm uppercase tracking-wider mt-1">
                  per {plan.period}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-gold-gradient rounded-full flex items-center justify-center mt-0.5">
                      <FaCheck className="text-black text-xs" />
                    </div>
                    <span className="text-text-secondary text-sm font-inter leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/contact"
                className={`block w-full text-center font-bold uppercase tracking-widest px-6 py-4 rounded-lg transition-smooth hover:scale-105 active:scale-95 ${
                  plan.popular
                    ? 'bg-gold-gradient text-black hover:shadow-gold-glow'
                    : 'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-black'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* WhatsApp Enquiry */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://wa.me/919876543210?text=Hi! I want to know more about Boss Fitness membership plans."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-primary-surface border-2 border-gold text-gold font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-smooth hover:bg-gold hover:text-black hover:scale-105"
          >
            <FaWhatsapp className="text-2xl" />
            <span>Enquire on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingTable;
