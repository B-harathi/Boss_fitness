import { motion } from 'framer-motion';
import { FaDumbbell, FaUserTie, FaBullseye, FaClock, FaAppleAlt, FaUsers } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaDumbbell,
      title: 'World-Class Equipment',
      description: 'Latest machines, free weights, and functional training zone with premium equipment from leading brands.',
    },
    {
      icon: FaUserTie,
      title: 'Expert Certified Trainers',
      description: 'Personalized coaching from certified professionals who understand your unique fitness journey.',
    },
    {
      icon: FaBullseye,
      title: 'Results-Driven Programs',
      description: 'Science-backed training methodologies designed to deliver measurable, sustainable results.',
    },
    {
      icon: FaClock,
      title: 'Flexible Timings',
      description: 'Open from early morning to late night, 6 days a week to fit your busy schedule.',
    },
    {
      icon: FaAppleAlt,
      title: 'Nutrition Guidance',
      description: 'Comprehensive diet plans and nutritional counseling to complement your training goals.',
    },
    {
      icon: FaUsers,
      title: 'Community Culture',
      description: 'Join a motivating, inclusive community with a champion mindset that pushes you forward.',
    },
  ];

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
            Why Choose Us
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider">
            The Boss Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-surface border border-gold/20 rounded-xl p-6 transition-smooth hover:shadow-gold-glow hover:-translate-y-2 hover:border-gold/50 group"
            >
              <div className="w-16 h-16 bg-gold-gradient rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <feature.icon className="text-3xl text-black" />
              </div>
              <h3 className="font-bebas text-2xl text-white uppercase tracking-wider mb-3">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed font-inter">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
