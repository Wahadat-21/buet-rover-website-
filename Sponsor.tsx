import { motion } from 'motion/react';
import { Building2, Heart, Handshake, Mail, Phone, Users } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Footer from '../components/Footer';

const Sponsor = () => {
  const sponsors = [
    { name: 'Tech Corp', tier: 'Platinum', logo: '🏢' },
    { name: 'Marine Systems Inc', tier: 'Gold', logo: '⚓' },
    { name: 'Robotics Ltd', tier: 'Gold', logo: '🤖' },
    { name: 'Innovation Hub', tier: 'Silver', logo: '💡' },
    { name: 'Engineering Solutions', tier: 'Silver', logo: '⚙️' },
    { name: 'Ocean Tech', tier: 'Bronze', logo: '🌊' },
  ];

  const benefits = [
    {
      tier: 'Platinum',
      amount: '$10,000+',
      color: 'from-gray-300 to-gray-100',
      benefits: [
        'Logo on submarine and team apparel',
        'Social media recognition',
        'Speaking opportunity at events',
        'Access to competition footage',
        'Annual report featuring your contribution',
      ],
    },
    {
      tier: 'Gold',
      amount: '$5,000 - $9,999',
      color: 'from-yellow-600 to-yellow-400',
      benefits: [
        'Logo on team website and materials',
        'Social media mentions',
        'Competition updates',
        'Annual team report',
      ],
    },
    {
      tier: 'Silver',
      amount: '$2,500 - $4,999',
      color: 'from-gray-400 to-gray-300',
      benefits: [
        'Logo on team website',
        'Social media recognition',
        'Newsletter subscription',
      ],
    },
    {
      tier: 'Bronze',
      amount: '$1,000 - $2,499',
      color: 'from-orange-700 to-orange-500',
      benefits: ['Logo on team website', 'Social media mention'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-0">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1761055469056-8eb6aedda57d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzcG9uc29ycyUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODA0MjU3MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Corporate Partnership"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white mb-4 font-bold"
          >
            Our <span className="text-red-500">Sponsors</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200 max-w-2xl mx-auto"
          >
            Partners who make our innovation possible
          </motion.p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#172554"></path>
          </svg>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-12 text-white"
          >
            Thank You to Our <span className="text-red-500">Supporters</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl border border-red-500/30 shadow-xl text-center group cursor-pointer"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                  {sponsor.logo}
                </div>
                <h3 className="text-white text-lg mb-2">{sponsor.name}</h3>
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm rounded-full">
                  {sponsor.tier}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-4 text-white"
          >
            Sponsorship <span className="text-red-500">Opportunities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-blue-200 mb-12 max-w-2xl mx-auto"
          >
            Join us in advancing underwater robotics and inspiring the next generation of engineers
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {benefits.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl border border-red-500/30 shadow-xl overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${tier.color} p-4 text-center`}>
                  <h3 className="text-2xl text-blue-950 mb-1">{tier.tier}</h3>
                  <p className="text-blue-900">{tier.amount}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start text-blue-200 text-sm">
                        <Heart className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-red-600 to-red-700 p-12 rounded-2xl shadow-2xl text-center"
          >
            <h2 className="text-4xl text-white mb-6">Become a Sponsor Today</h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Your support helps us compete at the highest level and develop innovative underwater
              robotics solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-red-600 px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
              >
                <Handshake className="w-5 h-5" />
                Download Sponsorship Package
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Sponsor;