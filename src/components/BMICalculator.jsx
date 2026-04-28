import { useState } from 'react';
import { motion } from 'framer-motion';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight) {
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);
    const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);

    setBmi(bmiValue);

    // Determine category and message
    if (bmiValue < 18.5) {
      setCategory('Underweight');
      setMessage('Focus on strength training and a calorie surplus diet to build healthy muscle mass.');
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory('Normal');
      setMessage('Great! Maintain your fitness with our balanced training programs and nutrition guidance.');
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory('Overweight');
      setMessage('Our cardio and strength programs can help you achieve a healthier weight with sustainable results.');
    } else {
      setCategory('Obese');
      setMessage('Let our expert trainers create a personalized weight loss program to transform your health.');
    }
  };

  const getCategoryColor = () => {
    if (!category) return 'text-gold';
    switch (category) {
      case 'Underweight':
        return 'text-blue-400';
      case 'Normal':
        return 'text-green-400';
      case 'Overweight':
        return 'text-yellow-400';
      case 'Obese':
        return 'text-red-400';
      default:
        return 'text-gold';
    }
  };

  const resetCalculator = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setCategory('');
    setMessage('');
  };

  return (
    <section className="py-20 lg:py-28 bg-primary-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-gold font-inter text-sm uppercase tracking-widest-xl mb-4">
            Check Your Fitness
          </p>
          <h2 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white uppercase tracking-wider">
            BMI Calculator
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-dark border-2"
        >
          <form onSubmit={calculateBMI} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="height" className="block text-white font-inter font-semibold mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="Enter your height"
                  className="w-full bg-primary-dark border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:border-gold focus:outline-none transition-smooth"
                  required
                />
              </div>

              <div>
                <label htmlFor="weight" className="block text-white font-inter font-semibold mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="Enter your weight"
                  className="w-full bg-primary-dark border border-gold/20 rounded-lg px-4 py-3 text-white placeholder-text-muted focus:border-gold focus:outline-none transition-smooth"
                  required
                />
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-gold-gradient text-black font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow active:scale-95"
              >
                Calculate BMI
              </button>
              {bmi && (
                <button
                  type="button"
                  onClick={resetCalculator}
                  className="bg-transparent border-2 border-gold text-gold font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-smooth hover:bg-gold hover:text-black"
                >
                  Reset
                </button>
              )}
            </div>
          </form>

          {bmi && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-8 pt-8 border-t border-gold/20"
            >
              <div className="text-center mb-6">
                <p className="text-text-secondary font-inter mb-2">Your BMI is</p>
                <p className="font-bebas text-7xl text-gold mb-2">{bmi}</p>
                <div
                  className={`inline-block ${getCategoryColor()} font-inter font-bold text-xl uppercase tracking-wider px-6 py-2 rounded-full bg-primary-dark border border-current`}
                >
                  {category}
                </div>
              </div>

              <div className="bg-primary-dark border border-gold/10 rounded-lg p-6 mb-6">
                <p className="text-text-secondary text-center leading-relaxed">{message}</p>
              </div>

              <div className="text-center">
                <a
                  href="/contact"
                  className="inline-block bg-gold-gradient text-black font-bold uppercase tracking-widest px-8 py-4 rounded-lg transition-smooth hover:scale-105 hover:shadow-gold-glow"
                >
                  Join Boss Fitness
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* BMI Reference Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-primary-surface border border-blue-400/30 rounded-lg p-4 text-center">
            <p className="text-blue-400 font-inter text-sm mb-1">Underweight</p>
            <p className="text-white font-bebas text-xl">&lt; 18.5</p>
          </div>
          <div className="bg-primary-surface border border-green-400/30 rounded-lg p-4 text-center">
            <p className="text-green-400 font-inter text-sm mb-1">Normal</p>
            <p className="text-white font-bebas text-xl">18.5 - 24.9</p>
          </div>
          <div className="bg-primary-surface border border-yellow-400/30 rounded-lg p-4 text-center">
            <p className="text-yellow-400 font-inter text-sm mb-1">Overweight</p>
            <p className="text-white font-bebas text-xl">25 - 29.9</p>
          </div>
          <div className="bg-primary-surface border border-red-400/30 rounded-lg p-4 text-center">
            <p className="text-red-400 font-inter text-sm mb-1">Obese</p>
            <p className="text-white font-bebas text-xl">&ge; 30</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BMICalculator;
