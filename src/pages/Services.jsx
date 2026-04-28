import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { FaDumbbell, FaRunning, FaFire, FaYinYang, FaMusic, FaUserTie, FaWhatsapp } from 'react-icons/fa';
import { services } from '../data/services';
import PricingTable from '../sections/PricingTable';

const iconMap = {
  FaDumbbell,
  FaRunning,
  FaFire,
  FaYinYang,
  FaMusic,
  FaUserTie,
};

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classTimetable = [
    { day: 'Monday', time: '6:00 AM', class: 'Morning Yoga' },
    { day: 'Monday', time: '7:00 AM', class: 'Zumba Dance' },
    { day: 'Monday', time: '8:00 AM', class: 'CrossFit' },
    { day: 'Monday', time: '6:00 PM', class: 'Strength Training' },
    { day: 'Tuesday', time: '6:00 AM', class: 'Cardio Blast' },
    { day: 'Tuesday', time: '7:00 AM', class: 'Yoga Flow' },
    { day: 'Tuesday', time: '8:00 AM', class: 'HIIT Training' },
    { day: 'Tuesday', time: '6:00 PM', class: 'CrossFit' },
    { day: 'Wednesday', time: '6:00 AM', class: 'Morning Yoga' },
    { day: 'Wednesday', time: '7:00 AM', class: 'Zumba Dance' },
    { day: 'Wednesday', time: '8:00 AM', class: 'Functional Training' },
    { day: 'Wednesday', time: '6:00 PM', class: 'Strength Training' },
    { day: 'Thursday', time: '6:00 AM', class: 'Cardio Blast' },
    { day: 'Thursday', time: '7:00 AM', class: 'Yoga Flow' },
    { day: 'Thursday', time: '8:00 AM', class: 'CrossFit' },
    { day: 'Thursday', time: '6:00 PM', class: 'HIIT Training' },
    { day: 'Friday', time: '6:00 AM', class: 'Morning Yoga' },
    { day: 'Friday', time: '7:00 AM', class: 'Zumba Dance' },
    { day: 'Friday', time: '8:00 AM', class: 'Strength Training' },
    { day: 'Friday', time: '6:00 PM', class: 'CrossFit' },
    { day: 'Saturday', time: '7:00 AM', class: 'Weekend Warrior (All Levels)' },
    { day: 'Saturday', time: '8:00 AM', class: 'Yoga & Meditation' },
    { day: 'Saturday', time: '5:00 PM', class: 'Community Workout' },
  ];

  const groupedTimetable = classTimetable.reduce((acc, item) => {
    if (!acc[item.day]) acc[item.day] = [];
    acc[item.day].push(item);
    return acc;
  }, {});

  return (
    <>
      <Helmet>
        <title>Our Programs & Services - Boss Fitness | Strength, Cardio, Yoga & More</title>
        <meta
          name="description"
          content="Explore Boss Fitness programs: Strength Training, Cardio, CrossFit, Yoga, Zumba, and Personal Training. Expert-led classes with flexible schedules in Coimbatore."
        />
      </Helmet>

      {/* Page Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920)',
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
            Our <span className="gold-gradient-text">Programs</span>
          </h1>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-primary-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-text-secondary text-lg leading-relaxed"
          >
            At Boss Fitness, we offer comprehensive training programs designed to help you achieve your fitness goals.
            Whether you're looking to build muscle, lose weight, improve flexibility, or enhance athletic performance,
            our expert-led programs deliver results backed by science and proven methodologies.
          </motion.p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 lg:py-28 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-primary-surface border border-gold/20 rounded-xl overflow-hidden hover:border-gold/50 transition-smooth group"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${service.image})` }}
                      />
                      <div className="absolute inset-0 bg-black/40" />
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-gold-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-smooth">
                          {IconComponent && <IconComponent className="text-2xl text-black" />}
                        </div>
                        <div>
                          <h3 className="font-bebas text-3xl text-white uppercase tracking-wider">
                            {service.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-text-secondary leading-relaxed mb-4">
                        {service.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        <p className="text-gold font-inter text-sm uppercase tracking-wider font-semibold">
                          Key Benefits:
                        </p>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-gold mt-1">•</span>
                              <span className="text-text-secondary text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href="https://wa.me/919876543210?text=Hi! I want to know more about your programs."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gold-gradient text-black font-bold uppercase tracking-wider text-sm px-6 py-3 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow"
                      >
                        <FaWhatsapp className="text-lg" />
                        <span>Enquire Now</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Class Timetable */}
      <section className="py-20 lg:py-28 bg-primary-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-gold font-inter text-sm uppercase tracking-widest-xl mb-4">
              Weekly Schedule
            </p>
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider">
              Class Timetable
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full bg-primary-surface border border-gold/20 rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-gold-gradient">
                  <th className="px-6 py-4 text-left text-black font-bebas text-xl uppercase tracking-wider">
                    Day
                  </th>
                  <th className="px-6 py-4 text-left text-black font-bebas text-xl uppercase tracking-wider">
                    Time
                  </th>
                  <th className="px-6 py-4 text-left text-black font-bebas text-xl uppercase tracking-wider">
                    Class
                  </th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(groupedTimetable).map(([day, classes]) =>
                  classes.map((item, idx) => (
                    <tr
                      key={`${day}-${idx}`}
                      className="border-t border-gold/10 hover:bg-primary-dark/50 transition-smooth"
                    >
                      <td className="px-6 py-4 text-white font-inter font-semibold">
                        {idx === 0 ? day : ''}
                      </td>
                      <td className="px-6 py-4 text-gold font-inter">{item.time}</td>
                      <td className="px-6 py-4 text-text-secondary font-inter">{item.class}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <PricingTable />

      {/* Bottom WhatsApp CTA */}
      <section className="py-16 bg-primary-dark border-t border-gold/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wider mb-4">
              Have Questions About Our Programs?
            </h3>
            <p className="text-text-secondary mb-6">
              Chat with us on WhatsApp and our team will help you choose the perfect program for your goals.
            </p>
            <a
              href="https://wa.me/919876543210?text=Hi! I have questions about Boss Fitness programs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gold-gradient text-black font-bold uppercase tracking-widest px-10 py-5 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Chat With Us</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
