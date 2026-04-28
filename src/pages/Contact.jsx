import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    goal: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        goal: '',
        message: '',
      });
    }, 5000);
  };

  const faqs = [
    {
      question: 'What are your membership fees?',
      answer:
        'We offer three membership plans: Starter (₹999/month), Elite (₹1,799/month), and Boss (₹2,999/month). Each plan includes different benefits and features. Visit our pricing section or contact us for detailed information.',
    },
    {
      question: 'Do you offer personal training?',
      answer:
        'Yes! Personal training is included in our Elite and Boss memberships. We also offer personal training as a standalone service. Our certified trainers create customized workout and nutrition plans tailored to your specific goals.',
    },
    {
      question: 'Is there a trial session available?',
      answer:
        'Absolutely! We offer a free trial session for first-time visitors. This allows you to experience our facilities, meet our trainers, and get a feel for the Boss Fitness community before committing to a membership.',
    },
    {
      question: 'What are your working hours?',
      answer:
        'We are open Monday to Saturday from 5:00 AM to 10:00 PM, and Sunday from 6:00 AM to 8:00 PM. Our flexible hours accommodate early birds and night owls alike!',
    },
    {
      question: 'Do you have diet and nutrition guidance?',
      answer:
        'Yes! Nutrition guidance is included in our Elite and Boss memberships. Our nutrition experts create personalized diet plans that complement your training program and help you achieve your fitness goals faster.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Boss Fitness | Get in Touch with Our Team in Coimbatore</title>
        <meta
          name="description"
          content="Contact Boss Fitness in Coimbatore. Visit us, call +91 98765 43210, or send a message. We're here to help you start your fitness journey!"
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
            Get <span className="gold-gradient-text">In Touch</span>
          </h1>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 lg:py-28 bg-primary-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-bebas text-4xl text-white uppercase tracking-wider mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-inter font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-primary-surface border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:border-gold focus:outline-none transition-smooth"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-white font-inter font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full bg-primary-surface border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:border-gold focus:outline-none transition-smooth"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-inter font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full bg-primary-surface border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:border-gold focus:outline-none transition-smooth"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="goal" className="block text-white font-inter font-semibold mb-2">
                    Fitness Goal *
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full bg-primary-surface border border-gold/20 rounded-lg px-4 py-3 text-white focus:border-gold focus:outline-none transition-smooth"
                    required
                  >
                    <option value="">Select your goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="general-fitness">General Fitness</option>
                    <option value="sports-training">Sports Training</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-inter font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness goals..."
                    rows="5"
                    className="w-full bg-primary-surface border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:border-gold focus:outline-none transition-smooth resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-gradient text-black font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow active:scale-95"
                >
                  Send Message
                </button>

                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 text-center"
                    >
                      <p className="text-green-400 font-inter font-semibold">
                        ✓ Message sent successfully! We'll get back to you soon.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-bebas text-4xl text-white uppercase tracking-wider mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="bg-primary-surface border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="text-black text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-bebas text-xl uppercase tracking-wider mb-2">
                        Address
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        Boss Fitness<br />
                        Coimbatore, Tamil Nadu<br />
                        India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-surface border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center">
                      <FaPhone className="text-black text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-bebas text-xl uppercase tracking-wider mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+919876543210"
                        className="text-gold hover:text-gold-light transition-smooth text-lg"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-surface border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-black text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-bebas text-xl uppercase tracking-wider mb-2">
                        Email
                      </h3>
                      <a
                        href="mailto:info@bossfitness.in"
                        className="text-gold hover:text-gold-light transition-smooth text-lg"
                      >
                        info@bossfitness.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-primary-surface border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-smooth">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-gradient rounded-lg flex items-center justify-center">
                      <FaClock className="text-black text-xl" />
                    </div>
                    <div>
                      <h3 className="text-white font-bebas text-xl uppercase tracking-wider mb-2">
                        Working Hours
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        Mon - Sat: 5:00 AM - 10:00 PM<br />
                        Sunday: 6:00 AM - 8:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-0 bg-primary-bg">
        <div className="w-full h-96 border-y border-gold/20">
          <iframe
            src="https://maps.google.com/maps?q=Coimbatore,Tamil%20Nadu&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Boss Fitness Location"
          />
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 lg:py-28 bg-primary-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-gold font-inter text-sm uppercase tracking-widest-xl mb-4">
              Common Questions
            </p>
            <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-surface border border-gold/20 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-bg/50 transition-smooth"
                >
                  <h3 className="font-bebas text-xl text-white uppercase tracking-wider pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center">
                    {expandedFaq === index ? (
                      <FaChevronUp className="text-black" />
                    ) : (
                      <FaChevronDown className="text-black" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
