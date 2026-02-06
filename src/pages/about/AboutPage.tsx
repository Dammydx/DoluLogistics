import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Target, Globe, Award } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About Dolu Logistics</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              You Order, We deliver
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
               Your one stop solutions to delivery problems.
            </p>
          </div>

          {/* Who We Are */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-primary-100 text-primary-500 p-2 rounded-full mr-3">
                <Target className="w-5 h-5" />
              </span>
              Who We Are
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed">
                At Dolu Logistics, we believe delivery should be simple, reliable, and stress free. We understand that
                every package represents trust, time, and value that’s why we provide swift, affordable, and
                customer friendly logistics services designed to give individuals and businesses peace of mind.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4">
                Built to bridge the gap between speed and care, Dolu Logistics handles every delivery with
                responsibility and professionalism. From single parcels to daily business dispatches, our riders are
                trained to communicate clearly, handle goods with care, and deliver on time.
              </p>

              <p className="text-gray-700 leading-relaxed mt-4">
                Operating across Port Harcourt and nationwide, we are committed to providing dependable delivery
                solutions that put customers first.
              </p>
            </div>
          </motion.section>

          {/* Our Mission */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-accent-100 text-accent-500 p-2 rounded-full mr-3">
                <CheckCircle className="w-5 h-5" />
              </span>
              Our Mission
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide swift, affordable, and reliable logistics services that give individuals and
                businesses peace of mind, knowing their goods are handled with care and delivered on time.
              </p>

              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Swift & Timely Delivery:</strong> We respect your time and keep to our delivery promises.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Care & Responsibility:</strong> Every package is handled like it matters because it does.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Trust & Accountability:</strong> Clear communication, honest updates, and dependable riders.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Affordability & Value:</strong> Fair pricing with transparent charges no surprises.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Customer Experience:</strong> Professional, respectful service that keeps you confident.
                  </span>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Our Reach */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-blue-100 text-blue-500 p-2 rounded-full mr-3">
                <Globe className="w-5 h-5" />
              </span>
              Our Reach
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 leading-relaxed">
                We operate with Port Harcourt as our core base while building dependable nationwide delivery coverage.
                Our network is designed to make distance feel simple, with clear communication from pickup to drop off.
              </p>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Port Harcourt (Core)</h3>
                  <p className="text-gray-700">
                    Swift city deliveries and business dispatch support built for daily movement and urgent parcels.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Nationwide (Extended)</h3>
                  <p className="text-gray-700">
                    Reliable deliveries beyond PH, with careful handling and fair, transparent pricing.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-lg mb-2">Customer Support</h3>
                  <p className="text-gray-700">
                    A calm, helpful service style that keeps customers informed and supported throughout the process.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Why Choose Us */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="bg-amber-100 text-amber-500 p-2 rounded-full mr-3">
                <Award className="w-5 h-5" />
              </span>
              Why Choose Us
            </h2>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-50 p-2 rounded-full mr-3 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Clear Communication</h3>
                      <p className="text-gray-700">
                        We keep you informed with respectful updates from pickup to delivery.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-50 p-2 rounded-full mr-3 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Careful Handling</h3>
                      <p className="text-gray-700">
                        Your package is treated with responsibility, professionalism, and attention to detail.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary-50 p-2 rounded-full mr-3 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Fair, Transparent Pricing</h3>
                      <p className="text-gray-700">
                        Affordable rates with clear charges no hidden fees, no last-minute surprises.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-50 p-2 rounded-full mr-3 mt-1">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Reliable Riders</h3>
                      <p className="text-gray-700">
                        Trained riders you can trust to deliver on time and represent the brand with respect.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Our Promise:</strong> When you book Dolu Logistics, your goods will be handled with care,
                  delivered on time, and charged fairly.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div
            className="bg-primary-500 text-white rounded-lg p-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Partner With Dolu Logistics</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Whether it’s a single parcel or daily business deliveries, we’re ready to help you ship with confidence.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 bg-white text-primary-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>

              <Link
                to="/services"
                className="px-6 py-3 bg-accent-500 text-white rounded-md font-medium hover:bg-accent-600 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
