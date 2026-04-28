import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const StatsBar = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { value: 5000, suffix: '+', label: 'Members' },
    { value: 15, suffix: '+', label: 'Expert Trainers' },
    { value: 50, suffix: '+', label: 'Classes Per Week' },
    { value: 10, suffix: '+', label: 'Years of Excellence' },
  ];

  return (
    <section className="py-12 lg:py-16 bg-primary-surface border-y border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center relative"
            >
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gold/30" />
              )}
              <div className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-gold">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <p className="text-white font-inter text-sm sm:text-base uppercase tracking-wider mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsBar;
