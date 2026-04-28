import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-primary-bg border-b border-gold/30 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gold-gradient rounded-lg flex items-center justify-center">
                <span className="text-black font-bebas text-2xl font-bold">B</span>
              </div>
              <div>
                <h1 className="font-bebas text-2xl sm:text-3xl tracking-wider text-white group-hover:text-gold transition-smooth">
                  BOSS FITNESS
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative text-white hover:text-gold transition-smooth font-inter font-medium uppercase text-sm tracking-wider group"
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gold-gradient transition-all duration-300 group-hover:w-full ${
                      location.pathname === link.path ? 'w-full' : ''
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/contact"
                className="bg-gold-gradient text-black font-bold uppercase tracking-widest px-6 py-3 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow active:scale-95 text-sm"
              >
                Join Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white text-2xl hover:text-gold transition-smooth"
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-primary-bg">
              <div className="flex flex-col items-center justify-center h-full space-y-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="text-white hover:text-gold transition-smooth font-bebas text-4xl tracking-wider"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Link
                    to="/contact"
                    className="bg-gold-gradient text-black font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow"
                  >
                    Join Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
