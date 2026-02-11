import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const papers = [
    { year: '2023', title: 'Research Paper 2023', file: '/papers/2023.pdf' },
    { year: '2024', title: 'Research Paper 2024', file: '/papers/2024.pdf' },
    { year: '2025', title: 'Research Paper 2025', file: '/papers/2025.pdf' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-gradient-to-r from-[#BD0C0D] via-red-700 to-[#BD0C0D] backdrop-blur-sm border-b border-white/20 shadow-lg shadow-red-900/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg shadow-white/50 overflow-hidden p-1"
            >
              <img 
                src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/BUET_LOGO.svg/500px-BUET_LOGO.svg.png" 
                alt="BUET Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <span className="text-white text-xl hidden md:block group-hover:text-blue-100 transition-colors font-bold">
              BUET RoboSub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
            >
              <Link
                to="/papers"
                className="flex items-center space-x-1 text-white hover:text-blue-100 transition-colors px-3 py-2 font-semibold"
              >
                <span>Papers</span>
              </Link>
            </div>

            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/members">Members</NavLink>
            <NavLink to="/sponsor">Sponsor</NavLink>
            <NavLink to="/robosub">RoboSub</NavLink>
            <NavLink to="/ferry-design">Ferry Design</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center">
            <div className="relative">
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.input
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 250, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="absolute right-12 bg-white text-gray-800 px-4 py-2 pr-10 rounded-full border border-white/30 focus:outline-none focus:border-blue-400 focus:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                  />
                )}
              </AnimatePresence>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-white hover:text-blue-100 transition-colors"
              >
                <Search className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </MobileNavLink>
                <MobileNavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>
                  About Us
                </MobileNavLink>
                
                {/* Mobile About Dropdown */}
                <div className="pl-4">
                  <p className="text-sm text-gray-400 mb-2">Research Papers</p>
                  {papers.map((paper) => (
                    <a
                      key={paper.year}
                      href={paper.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-2 text-white hover:text-red-400"
                    >
                      {paper.year} - {paper.title}
                    </a>
                  ))}
                </div>

                <MobileNavLink to="/members" onClick={() => setIsMobileMenuOpen(false)}>
                  Members
                </MobileNavLink>
                <MobileNavLink to="/sponsor" onClick={() => setIsMobileMenuOpen(false)}>
                  Sponsor
                </MobileNavLink>
                <MobileNavLink to="/robosub" onClick={() => setIsMobileMenuOpen(false)}>
                  RoboSub
                </MobileNavLink>
                <MobileNavLink to="/ferry-design" onClick={() => setIsMobileMenuOpen(false)}>
                  Ferry Design
                </MobileNavLink>
                <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact Us
                </MobileNavLink>

                {/* Mobile Search */}
                <div className="pt-4">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-blue-800 text-white px-4 py-2 rounded-full border border-red-500/30 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Nav Link Component
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to}>
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="text-white hover:text-blue-200 transition-all duration-300 px-3 py-2 font-semibold relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 group-hover:w-full transition-all duration-300"></span>
    </motion.div>
  </Link>
);

const MobileNavLink = ({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <Link to={to} onClick={onClick}>
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="block px-4 py-3 text-white hover:bg-red-500/20 rounded transition-colors"
    >
      {children}
    </motion.div>
  </Link>
);

export default Navbar;