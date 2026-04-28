import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/919876543210?text=Hi! I want to know more about Boss Fitness membership.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center text-black shadow-gold-glow pulse-animation hover:scale-110 transition-smooth"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </button>
  );
};

export default WhatsAppButton;
