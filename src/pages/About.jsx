import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCheck, FaBullseye, FaEye, FaDumbbell, FaUsers, FaTrophy, FaHeart } from 'react-icons/fa';
import { trainers } from '../data/trainers';
import TrainersSection from '../sections/TrainersSection';
import StatsBar from '../sections/StatsBar';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      icon: FaDumbbell,
      title: 'Discipline',
      description: 'Building consistent habits that lead to extraordinary results and lasting transformation.',
    },
    {
      icon: FaUsers,
      title: 'Consistency',
      description: 'Showing up every day, pushing limits, and making progress one rep at a time.',
    },
    {
      icon: FaTrophy,
      title: 'Excellence',
      description: 'Delivering world-class facilities, coaching, and member experience in everything we do.',
    },
    {
      icon: FaHeart,
      title: 'Community',
      description: 'Creating a supportive, inclusive environment where everyone belongs and thrives.',
    },
  ];

  const facilities = [
    'Fully Air-Conditioned Training Hall',
    'Latest Cardio Equipment Zone',
    'Olympic Free Weights Section',
    'Functional Training Area',
    'Spacious Locker Rooms',
    'Fresh Juice & Smoothie Bar',
    'Ample Parking Space',
    'High-Speed WiFi Access',
    'Professional Sound System',
    'CCTV Security Surveillance',
    'Clean Shower Facilities',
    'Supplement Store',
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Boss Fitness | Coimbatore's Premier Fitness Destination</title>
        <meta
          name="description"
          content="Learn about Boss Fitness - founded in 2014, we've been transforming lives in Coimbatore for over 10 years. Meet our expert trainers and discover our world-class facilities."
        />
      </Helmet>

      {/* Page Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=1920)',
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
            About <span className="gold-gradient-text">Boss Fitness</span>
          </h1>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20 lg:py-28 bg-primary-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gold font-inter text-sm uppercase tracking-widest-xl mb-4">
              Our Story
            </p>
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider mb-8">
              Building Champions Since 2014
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-text-secondary text-lg leading-relaxed"
          >
            <p>
              Boss Fitness was founded with a simple yet powerful vision: to create a space where ordinary individuals
              could unleash their extraordinary potential. What started as a small gym in Coimbatore has grown into one
              of the city's most respected fitness destinations.
            </p>
            <p>
              For over a decade, we've been committed to transforming lives through fitness. Our state-of-the-art
              facility, expert coaching, and vibrant community have helped thousands of members achieve their fitness
              goals - from weight loss transformations to athletic performance gains.
            </p>
            <p>
              At Boss Fitness, we believe that everyone has a champion within them. Our mission is to provide the tools,
              guidance, and support needed to unlock that potential. Whether you're taking your first steps into fitness
              or you're a seasoned athlete, we're here to help you become the best version of yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-surface border border-gold/20 rounded-xl p-8 hover:border-gold/50 transition-smooth"
            >
              <div className="w-16 h-16 bg-gold-gradient rounded-lg flex items-center justify-center mb-6">
                <FaBullseye className="text-3xl text-black" />
              </div>
              <h3 className="font-bebas text-3xl text-white uppercase tracking-wider mb-4">
                Our Mission
              </h3>
              <p className="text-text-secondary leading-relaxed">
                To empower individuals to achieve their fitness goals through world-class facilities, expert coaching,
                and a supportive community. We're committed to making fitness accessible, enjoyable, and results-driven
                for everyone who walks through our doors.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-surface border border-gold/20 rounded-xl p-8 hover:border-gold/50 transition-smooth"
            >
              <div className="w-16 h-16 bg-gold-gradient rounded-lg flex items-center justify-center mb-6">
                <FaEye className="text-3xl text-black" />
              </div>
              <h3 className="font-bebas text-3xl text-white uppercase tracking-wider mb-4">
                Our Vision
              </h3>
              <p className="text-text-secondary leading-relaxed">
                To be South India's most respected fitness brand, known for transforming lives and building a culture
                of health, strength, and excellence. We envision a community where every member feels empowered to
                unleash the boss within.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              What We Stand For
            </p>
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider">
              Our Core Values
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-surface border border-gold/20 rounded-xl p-6 text-center hover:shadow-gold-glow hover:-translate-y-2 transition-smooth group"
              >
                <div className="w-16 h-16 bg-gold-gradient rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-smooth">
                  <value.icon className="text-3xl text-black" />
                </div>
                <h3 className="font-bebas text-2xl text-white uppercase tracking-wider mb-3">
                  {value.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 lg:py-28 bg-primary-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold font-inter text-sm uppercase tracking-widest-xl mb-4">
              World-Class Amenities
            </p>
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider">
              Our Facilities
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-primary-surface border border-gold/10 rounded-lg p-4 hover:border-gold/30 transition-smooth"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gold-gradient rounded-full flex items-center justify-center">
                  <FaCheck className="text-black text-xs" />
                </div>
                <span className="text-text-secondary font-inter">{facility}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trainers */}
      <TrainersSection />

      {/* Stats */}
      <StatsBar />

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bebas text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-wider mb-6">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Join the Boss Fitness family today and experience the difference that world-class coaching and facilities
              can make in your fitness journey.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gold-gradient text-black font-bold uppercase tracking-widest px-10 py-5 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow active:scale-95"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
