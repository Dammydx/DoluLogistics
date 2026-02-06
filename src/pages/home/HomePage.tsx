import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ServiceHighlights from './components/ServiceHighlights';
import Testimonials from './components/Testimonials';

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <HowItWorks />
      <ServiceHighlights />
      <Testimonials />

      {/* Call to Action - Dolu Logistics */}
      <motion.section
        className="py-16 bg-primary-500 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Stress Free Delivery?
          </h2>

          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            With Dolu Logistics, your goods are handled with care, delivered on time, and charged fairly
            across Port Harcourt and nationwide.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/request-pickup"
              className="px-8 py-3 bg-white text-primary-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              Book a Pickup
            </Link>

            <Link
              to="/track"
              className="px-8 py-3 bg-accent-500 text-white rounded-md font-medium hover:bg-accent-600 transition-colors"
            >
              Track Parcel
            </Link>
          </div>

          <p className="mt-6 text-sm md:text-base text-white/90">
            Swift • Safe • Affordable • Customer-Friendly
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
