import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../sections/HeroSection';
import StatsBar from '../sections/StatsBar';
import WhyChooseUs from '../sections/WhyChooseUs';
import ServicesPreview from '../sections/ServicesPreview';
import PricingTable from '../sections/PricingTable';
import TrainersSection from '../sections/TrainersSection';
import BMICalculator from '../components/BMICalculator';
import Testimonials from '../sections/Testimonials';
import GalleryPreview from '../sections/GalleryPreview';
import CTABanner from '../sections/CTABanner';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Boss Fitness - Unleash The Boss Within | Premium Gym in Coimbatore</title>
        <meta
          name="description"
          content="Transform your body at Boss Fitness, Coimbatore's premium gym. Expert trainers, world-class equipment, and results-driven programs. Join 5000+ members today!"
        />
      </Helmet>

      <HeroSection />
      <StatsBar />
      <WhyChooseUs />
      <ServicesPreview />
      <PricingTable />
      <TrainersSection />
      <BMICalculator />
      <Testimonials />
      <GalleryPreview />
      <CTABanner />
    </>
  );
};

export default Home;
