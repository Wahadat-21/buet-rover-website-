import { motion, AnimatePresence } from 'motion/react';
import { FileText, Download, Calendar, User, Award, ExternalLink, Search } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Footer from '../components/Footer';
import { useState } from 'react';

const Papers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');

  const papers = [
    {
      year: '2024',
      title: 'Advanced Autonomous Navigation in Turbulent Underwater Environments',
      authors: 'Johnson, A., Chen, S., Rodriguez, M.',
      conference: 'RoboSub 2024 International Competition',
      abstract: 'This paper presents our novel approach to autonomous underwater navigation using advanced sensor fusion techniques, combining visual odometry with inertial measurements and depth sensing. Our system demonstrates robust performance in challenging conditions with limited visibility and strong currents.',
      pdfUrl: '/papers/2024-navigation.pdf',
      downloads: 342,
      category: 'Navigation',
    },
    {
      year: '2024',
      title: 'Deep Learning for Real-Time Underwater Object Detection',
      authors: 'Chen, S., Lee, J., Watson, E.',
      conference: 'IEEE Robotics and Automation Conference',
      abstract: 'We propose a custom convolutional neural network architecture optimized for real-time object detection in underwater environments. Our model achieves 94% accuracy while maintaining processing speeds of 30 FPS on embedded hardware.',
      pdfUrl: '/papers/2024-vision.pdf',
      downloads: 428,
      category: 'Computer Vision',
    },
    {
      year: '2023',
      title: 'Power-Efficient Propulsion Systems for Long-Duration AUV Missions',
      authors: 'Rodriguez, M., Martinez, R., Kim, D.',
      conference: 'RoboSub 2023 Technical Paper',
      abstract: 'This work explores novel thruster configurations and power management strategies to maximize mission duration while maintaining precise maneuvering capabilities. We achieved a 40% increase in operational time compared to previous designs.',
      pdfUrl: '/papers/2023-propulsion.pdf',
      downloads: 256,
      category: 'Mechanical Engineering',
    },
    {
      year: '2023',
      title: 'Acoustic Localization and Communication in Multi-AUV Systems',
      authors: 'Watson, E., Kim, D., Johnson, A.',
      conference: 'International Symposium on Underwater Technology',
      abstract: 'We present a distributed acoustic positioning system enabling multiple AUVs to coordinate their activities and share environmental data in GPS-denied underwater environments. Field tests demonstrate centimeter-level positioning accuracy.',
      pdfUrl: '/papers/2023-acoustic.pdf',
      downloads: 189,
      category: 'Communication',
    },
    {
      year: '2022',
      title: 'Adaptive Control Algorithms for Dynamic Underwater Environments',
      authors: 'Kim, D., Chen, S., Rodriguez, M.',
      conference: 'RoboSub 2022 Competition',
      abstract: 'This paper introduces adaptive PID control strategies that automatically tune parameters based on environmental conditions such as water density, current velocity, and payload configuration. Results show improved stability and response times.',
      pdfUrl: '/papers/2022-control.pdf',
      downloads: 312,
      category: 'Control Systems',
    },
    {
      year: '2022',
      title: 'Modular Design Philosophy for Competition-Ready Autonomous Submarines',
      authors: 'Johnson, A., Martinez, R., Lee, J.',
      conference: 'Journal of Marine Robotics',
      abstract: 'We describe our modular submarine architecture that enables rapid component replacement and system upgrades. This approach significantly reduced our maintenance time and improved reliability during competitions.',
      pdfUrl: '/papers/2022-modular.pdf',
      downloads: 275,
      category: 'System Design',
    },
    {
      year: '2021',
      title: 'Machine Learning for Autonomous Mission Planning in Unknown Environments',
      authors: 'Chen, S., Watson, E., Kim, D.',
      conference: 'AUVSI RoboSub Conference',
      abstract: 'This research presents a reinforcement learning framework for autonomous mission planning that enables AUVs to make intelligent decisions in unexplored underwater environments without prior mapping.',
      pdfUrl: '/papers/2021-planning.pdf',
      downloads: 394,
      category: 'Artificial Intelligence',
    },
    {
      year: '2021',
      title: 'Waterproof Electronics Housing: Design and Testing Methodologies',
      authors: 'Watson, E., Rodriguez, M., Martinez, R.',
      conference: 'Marine Technology Society Journal',
      abstract: 'Comprehensive study of waterproof housing designs, material selections, and pressure testing protocols for deep-water electronic systems. Includes failure analysis and lessons learned from three competition seasons.',
      pdfUrl: '/papers/2021-housing.pdf',
      downloads: 218,
      category: 'Mechanical Engineering',
    },
  ];

  const years = ['All', ...Array.from(new Set(papers.map(p => p.year))).sort().reverse()];
  const categories = ['All', ...Array.from(new Set(papers.map(p => p.category))).sort()];

  const filteredPapers = papers.filter(paper => {
    const matchesSearch = 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesYear = selectedYear === 'All' || paper.year === selectedYear;
    
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-[#BD0C0D]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FileText className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl text-white mb-4 font-bold">
              Research <span className="text-yellow-300">Papers</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Explore our published research and technical documentation from international competitions and academic conferences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 sticky top-20 z-40 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search papers by title, authors, category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#BD0C0D] focus:outline-none transition-colors text-gray-900"
              />
            </div>

            {/* Year Filter */}
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="px-6 py-3 border-2 border-gray-300 rounded-lg focus:border-[#BD0C0D] focus:outline-none transition-colors text-gray-900 bg-white cursor-pointer"
            >
              {years.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="text-center mt-4 text-gray-600">
            Showing {filteredPapers.length} of {papers.length} papers
          </div>
        </div>
      </section>

      {/* Papers Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {filteredPapers.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl text-gray-600 mb-2">No papers found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </motion.div>
            ) : (
              <div className="grid gap-6 md:gap-8 max-w-6xl mx-auto">
                {filteredPapers.map((paper, index) => (
                  <PaperCard key={index} paper={paper} index={index} />
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center border-2 border-gray-200"
            >
              <FileText className="w-10 h-10 md:w-12 md:h-12 text-[#BD0C0D] mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{papers.length}</div>
              <div className="text-gray-600">Published Papers</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center border-2 border-gray-200"
            >
              <Download className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">2,414</div>
              <div className="text-gray-600">Total Downloads</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center border-2 border-gray-200"
            >
              <Award className="w-10 h-10 md:w-12 md:h-12 text-yellow-600 mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5</div>
              <div className="text-gray-600">Best Paper Awards</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center border-2 border-gray-200"
            >
              <User className="w-10 h-10 md:w-12 md:h-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">15</div>
              <div className="text-gray-600">Contributing Authors</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const PaperCard = ({ paper, index }: { paper: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-gradient-to-br from-white to-gray-50 p-6 md:p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-[#BD0C0D] transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#BD0C0D] text-white rounded-full text-sm font-semibold">
              <Calendar className="w-4 h-4" />
              {paper.year}
            </span>
            <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              {paper.category}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{paper.title}</h3>
          
          <div className="flex items-center gap-2 text-gray-600 mb-2 text-sm md:text-base">
            <User className="w-4 h-4" />
            <span>{paper.authors}</span>
          </div>

          <p className="text-sm md:text-base text-gray-500 italic">{paper.conference}</p>
        </div>

        <div className="flex md:flex-col gap-2">
          <motion.a
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#BD0C0D] text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-sm md:text-base whitespace-nowrap"
          >
            <Download className="w-4 h-4" />
            Download
          </motion.a>
          
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold text-sm md:text-base whitespace-nowrap"
          >
            <ExternalLink className="w-4 h-4" />
            {isExpanded ? 'Hide' : 'Details'}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t-2 border-gray-200 pt-4 mt-4"
          >
            <h4 className="text-lg font-bold text-gray-900 mb-2">Abstract</h4>
            <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">{paper.abstract}</p>
            
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-[#BD0C0D]" />
                <span>{paper.downloads} downloads</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Papers;