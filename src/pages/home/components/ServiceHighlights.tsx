import { motion } from 'framer-motion';
import { Zap, Globe, Clock, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Swift City Delivery',
    description:
      'Fast, reliable delivery across Port Harcourt perfect for urgent parcels and sameday runs.',
    icon: Zap,
    color: 'bg-amber-500',
  },
  {
    title: 'Nationwide Delivery',
    description:
      'Send packages beyond Port Harcourt with dependable nationwide shipping you can trust.',
    icon: Globe,
    color: 'bg-accent-500',
  },
  {
    title: 'Pickup Scheduling',
    description:
      'Choose a convenient pickup time and our rider will arrive on schedule stress free.',
    icon: Clock,
    color: 'bg-primary-500',
  },
  {
    title: 'Business Dispatch Support',
    description:
      'Reliable daily dispatch for vendors and SMEs careful handling, clear communication, fair pricing.',
    icon: ShoppingBag,
    color: 'bg-emerald-500',
  },
];

const ServiceHighlights = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600">
            Dolu Logistics delivers swiftly, handles goods with care, and keeps pricing clear
            for individuals and businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`h-2 ${service.color}`}></div>

              <div className="p-6">
                <div className="mb-4">
                  <service.icon className="w-8 h-8 text-text" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link
            to="/services"
            className="px-6 py-3 bg-primary-500 text-white rounded-md font-medium hover:bg-primary-600 transition-colors inline-block"
          >
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
