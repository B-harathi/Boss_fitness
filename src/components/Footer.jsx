import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Strength Training',
    'Cardio & Endurance',
    'CrossFit Training',
    'Yoga & Flexibility',
    'Zumba Dance',
    'Personal Training',
  ];

  const socialLinks = [
    { icon: FaInstagram, url: 'https://instagram.com/bossfitness_cbe', label: 'Instagram' },
    { icon: FaFacebook, url: '#', label: 'Facebook' },
    { icon: FaYoutube, url: '#', label: 'YouTube' },
    { icon: FaWhatsapp, url: 'https://wa.me/919876543210', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-primary-dark border-t border-gold/20 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-black font-bebas text-2xl font-bold">B</span>
              </div>
              <h3 className="font-bebas text-2xl tracking-wider text-white">
                BOSS FITNESS
              </h3>
            </div>
            <p className="text-gold font-inter text-sm uppercase tracking-wider mb-4">
              Unleash The Boss Within
            </p>
            <p className="text-text-secondary text-sm mb-6 leading-relaxed">
              Coimbatore's premium fitness destination. Transform your body, sharpen your mind, and join a community of champions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-surface border border-gold/20 rounded-lg flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-smooth hover:shadow-gold-glow"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas text-xl tracking-wider text-white mb-6 uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-text-secondary hover:text-gold transition-smooth text-sm font-inter flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gold-gradient mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bebas text-xl tracking-wider text-white mb-6 uppercase">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-text-secondary hover:text-gold transition-smooth text-sm font-inter flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gold-gradient mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bebas text-xl tracking-wider text-white mb-6 uppercase">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-gold text-lg mt-1 flex-shrink-0" />
                <span className="text-text-secondary text-sm">
                  Boss Fitness<br />
                  Coimbatore, Tamil Nadu<br />
                  India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-gold text-lg flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-text-secondary hover:text-gold transition-smooth text-sm"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gold text-lg flex-shrink-0" />
                <a
                  href="mailto:info@bossfitness.in"
                  className="text-text-secondary hover:text-gold transition-smooth text-sm"
                >
                  info@bossfitness.in
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FaClock className="text-gold text-lg mt-1 flex-shrink-0" />
                <span className="text-text-secondary text-sm">
                  Mon-Sat: 5:00 AM - 10:00 PM<br />
                  Sunday: 6:00 AM - 8:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm text-center md:text-left">
              © {new Date().getFullYear()} Boss Fitness. All rights reserved.
            </p>
            <p className="text-gold text-sm font-inter uppercase tracking-wider">
              Designed for Champions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
