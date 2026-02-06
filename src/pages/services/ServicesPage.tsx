import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from './components/ServiceCard';
import {
  Truck,
  Zap,
  Globe,
  Clock,
  ShoppingBag,
  BoxIcon,
  ShieldCheck,
  Building,
  Warehouse,
} from 'lucide-react';

// ✅ LOCAL IMAGE IMPORT
import frontBranding from '../../assets/images/FRONTBRANDING.png';

const services = [
  {
    title: 'Swift City Delivery',
    description:
      'Fast and reliable delivery across Port Harcourt. Ideal for urgent parcels, documents, and same day runs.',
    icon: Zap,
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
  },
  {
    title: 'Nationwide Delivery',
    description:
      'Send packages beyond Port Harcourt with dependable nationwide shipping, careful handling, and clear updates.',
    icon: Globe,
    color: 'text-accent-500',
    bgColor: 'bg-accent-50',
  },
  {
    title: 'Scheduled Pickups',
    description:
      'Book pickups at your convenience. One-time pickups or regular schedules for businesses and frequent shippers.',
    icon: Clock,
    color: 'text-primary-500',
    bgColor: 'bg-primary-50',
  },
  {
    title: 'Business Dispatch Support',
    description:
      'Reliable dispatch for online vendors and SMEs. We help you deliver consistently, communicate clearly, and keep customers happy.',
    icon: ShoppingBag,
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
  },
  {
    title: 'Express Document Delivery',
    description:
      'Secure delivery for important documents with confirmation on delivery and responsible handling from start to finish.',
    icon: BoxIcon,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Careful Handling for Fragile Items',
    description:
      'Extra care for delicate items with handling protocols designed to protect value and reduce damage risk.',
    icon: ShieldCheck,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    title: 'Corporate Logistics',
    description:
      'Tailored delivery support for organizations with regular logistics needs, including bulk movement and structured coordination.',
    icon: Building,
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50',
  },
  {
    title: 'Storage & Dispatch Coordination',
    description:
      'Flexible short-term storage and dispatch coordination to support growing businesses and recurring delivery needs.',
    icon: Warehouse,
    color: 'text-fuchsia-500',
    bgColor: 'bg-fuchsia-50',
  },
];

const ServicesPage = () => {
  return (
    <div className="pt-24 pb-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-600">
            Dolu Logistics offers customer-friendly delivery solutions for individuals and businesses focused in
            Port Harcourt with reliable nationwide reach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
              bgColor={service.bgColor}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-10">Trusted by Businesses and Individuals</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="h-12 w-24 bg-gray-200 rounded opacity-50"></div>
            <div className="h-12 w-32 bg-gray-200 rounded opacity-50"></div>
            <div className="h-12 w-28 bg-gray-200 rounded opacity-50"></div>
            <div className="h-12 w-36 bg-gray-200 rounded opacity-50"></div>
            <div className="h-12 w-24 bg-gray-200 rounded opacity-50"></div>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 bg-primary-500 text-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready for Stress Free Delivery?
              </h2>
              <p className="text-lg mb-6">
                Book Dolu Logistics and ship with confidence. We handle your goods with care, deliver on time, and
                charge fairly with clear communication from pickup to drop off.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
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
            </div>

            {/* ✅ IMAGE NOW SHOWS ON MOBILE + DESKTOP */}
            <div className="block">
              <img
                src={frontBranding}
                alt="Dolu Logistics branding"
                className="h-64 md:h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;