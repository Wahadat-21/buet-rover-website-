import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Top Wave */}
      <div className="absolute top-[-1px] left-0 w-full overflow-hidden leading-[0] rotate-180">
        <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#111827"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg overflow-hidden p-1">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/BUET_LOGO.svg/500px-BUET_LOGO.svg.png" 
                  alt="BUET Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">BUET RoboSub</h3>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Pioneering underwater robotics research and innovation at Bangladesh University of Engineering and Technology. Building autonomous underwater vehicles for international competitions and real-world applications.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#1877F2' }}
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#1DA1F2' }}
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#E4405F' }}
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#0A66C2' }}
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#FF0000' }}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: '#ffffff' }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#BD0C0D]">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'RoboSub', path: '/robosub' },
                { name: 'Ferry Design', path: '/ferry' },
                { name: 'Members', path: '/members' },
                { name: 'Papers', path: '/papers' },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-[#BD0C0D] transition-colors flex items-center group"
                  >
                    <span className="mr-2 group-hover:mr-3 transition-all">→</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#BD0C0D]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[#BD0C0D]" />
                <span>
                  Bangladesh University of Engineering and Technology (BUET)<br />
                  Dhaka-1000, Bangladesh
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0 text-[#BD0C0D]" />
                <a href="mailto:buet.robosub@gmail.com" className="hover:text-[#BD0C0D] transition-colors">
                  buet.robosub@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0 text-[#BD0C0D]" />
                <a href="tel:+8801712345678" className="hover:text-[#BD0C0D] transition-colors">
                  +880 171-2345678
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4 text-[#BD0C0D]">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on our projects, competitions, and achievements.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-[#BD0C0D] focus:outline-none transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-gradient-to-r from-[#BD0C0D] to-red-700 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} BUET RoboSub Team. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#BD0C0D] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#BD0C0D] transition-colors">
                Terms of Service
              </a>
              <Link to="/contact" className="text-gray-400 hover:text-[#BD0C0D] transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
