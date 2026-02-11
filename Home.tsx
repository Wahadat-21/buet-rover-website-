import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Footer from '../components/Footer';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [expandedValue, setExpandedValue] = useState<number | null>(null);
  
  const textArray = [
    'Pushing the boundaries of underwater robotics through innovation and engineering excellence',
    'Designing autonomous underwater vehicles for international competitions and real-world applications',
    'Empowering students to explore cutting-edge marine technology and artificial intelligence',
    'Building the next generation of ocean exploration systems with advanced sensor technology',
    'Developing revolutionary navigation algorithms for autonomous underwater missions'
  ];
  
  const currentFullText = textArray[textIndex];
  
  // Looping typing animation effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 30 : 50;
    const pauseTime = isDeleting ? 500 : 2000;
    
    if (!isDeleting && typedText === currentFullText) {
      // Pause at end before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && typedText === '') {
      // Move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % textArray.length);
    } else {
      // Type or delete character
      const timeout = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentFullText.slice(0, typedText.length - 1)
            : currentFullText.slice(0, typedText.length + 1)
        );
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [typedText, isDeleting, currentFullText, textIndex]);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1754297813553-43eb3a9f65a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwc3VibWFyaW5lJTIwcm9ib3RpY3N8ZW58MXx8fHwxNzY4MDQyNTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Underwater Exploration',
    },
    {
      url: 'https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9uJTIwdGVhbXxlbnwxfHx8fDE3Njc5NDUyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Competition Ready',
    },
    {
      url: 'https://images.unsplash.com/photo-1759712659045-cc187c68f718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwdmVoaWNsZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4MDQyNTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Advanced Technology',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 z-0">
          {/* Gradient overlays for white/blue/red mix */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-blue-500/30 to-red-500/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-blue-400/20 z-10" />
          
          {/* YouTube Video Embed */}
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/shimvNXyVtw?autoplay=1&mute=1&loop=1&playlist=shimvNXyVtw&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          
          {/* Animated particles overlay */}
          <div className="absolute inset-0 z-10 opacity-40">
            <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
            <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ top: '50%', left: '80%', animationDelay: '1s' }} />
            <div className="absolute w-3 h-3 bg-white rounded-full animate-pulse" style={{ top: '70%', left: '30%', animationDelay: '2s' }} />
            <div className="absolute w-2 h-2 bg-red-400 rounded-full animate-pulse" style={{ top: '30%', left: '70%', animationDelay: '1.5s' }} />
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ top: '80%', left: '60%', animationDelay: '0.5s' }} />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl mb-6 text-gray-900 font-bold"
          >
            University <span className="text-[#BD0C0D] text-glow-red">RoboSub</span> Team
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto min-h-[120px] flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl"
          >
            <p className="font-semibold">
              {typedText}
              <span className="inline-block w-1 h-6 bg-[#BD0C0D] ml-1 animate-pulse" />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="/robosub"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(189, 12, 13, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#BD0C0D] to-red-700 text-white px-8 py-4 rounded-full text-lg shadow-lg inline-block transition-all duration-300"
            >
              Explore Our Projects
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.8)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg shadow-lg inline-block transition-all duration-300"
            >
              Join Our Team
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-[#BD0C0D]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#172554"></path>
          </svg>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="relative py-20 bg-blue-950">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
              Our <span className="text-[#BD0C0D]">Achievements</span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Explore our journey through international competitions, groundbreaking research, and technological innovations that are shaping the future of underwater robotics.
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            {/* Carousel */}
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#BD0C0D]/30">
              {carouselImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    scale: currentSlide === index ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.7 }}
                  className="absolute inset-0"
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl md:text-4xl text-white font-bold mb-2"
                    >
                      {image.caption}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-sm md:text-lg text-gray-200"
                    >
                      Witness our dedication to excellence in marine robotics and autonomous systems
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#BD0C0D] text-gray-800 hover:text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-[#BD0C0D] text-gray-800 hover:text-white p-2 md:p-3 rounded-full transition-all duration-300 shadow-lg"
            >
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-[#BD0C0D] w-8' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold">
              What We <span className="text-[#BD0C0D]">Do</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-4">
              Our team specializes in designing, building, and operating autonomous underwater vehicles (AUVs) that push the limits of marine robotics. We integrate advanced computer vision, sophisticated control systems, and cutting-edge sensor technology to create submarines capable of navigating complex underwater environments, identifying objects, and completing mission-critical tasks with precision and reliability.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            {[
              {
                title: 'Autonomous Navigation',
                shortDesc: 'Advanced navigation algorithms using sensor fusion, SLAM, and machine learning.',
                fullDesc: 'Developing state-of-the-art navigation algorithms using advanced sensor fusion, SLAM (Simultaneous Localization and Mapping), and machine learning to enable our submarines to navigate autonomously in challenging underwater environments without GPS. Our system integrates IMU data, depth sensors, and visual odometry to maintain precise positioning and path planning.',
                icon: '🧭',
              },
              {
                title: 'Computer Vision',
                shortDesc: 'Sophisticated image processing and object detection using deep learning.',
                fullDesc: 'Implementing sophisticated image processing and object detection systems using deep learning frameworks like TensorFlow and PyTorch. Our vision systems can identify and classify underwater objects, markers, and obstacles in real-time despite turbid water conditions. We use custom-trained CNN models optimized for underwater color correction and feature extraction.',
                icon: '👁️',
              },
              {
                title: 'System Integration',
                shortDesc: 'Robust hardware and software integration for underwater operation.',
                fullDesc: 'Engineering robust hardware and software systems that seamlessly integrate propulsion, power management, sensors, and control systems. We ensure reliable operation under pressure and in corrosive saltwater environments through careful material selection, waterproofing techniques, and redundant system design. Our custom PCBs handle power distribution and sensor interfacing.',
                icon: '⚙️',
              },
              {
                title: 'Competition Excellence',
                shortDesc: 'Annual participation in RoboSub and international competitions.',
                fullDesc: 'Competing annually in RoboSub and other international competitions where we test our vehicles against the best teams worldwide. These competitions challenge us with tasks like torpedo launching, marker dropping, acoustic localization, and object manipulation. We consistently rank in the top teams and have won multiple special awards for innovation and technical excellence.',
                icon: '🏆',
              },
              {
                title: 'Research & Innovation',
                shortDesc: 'Cutting-edge research in underwater robotics and autonomous systems.',
                fullDesc: 'Conducting cutting-edge research in underwater robotics, publishing papers on novel algorithms, and contributing to the advancement of autonomous marine systems. Our innovations have applications in ocean exploration, environmental monitoring, underwater infrastructure inspection, and search-and-rescue operations. Team members regularly present at conferences and publish in peer-reviewed journals.',
                icon: '🔬',
              },
              {
                title: 'Student Development',
                shortDesc: 'Hands-on learning opportunities for engineering students.',
                fullDesc: 'Providing hands-on learning opportunities for students from diverse engineering disciplines including mechanical, electrical, computer science, and software engineering. Team members gain invaluable experience in mechanical design, embedded systems, software development, and project management. We offer mentorship programs and regular workshops to build technical skills and leadership abilities.',
                icon: '🎓',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-xl border-2 border-gray-200 hover:border-[#BD0C0D] transition-all duration-300 cursor-pointer h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl md:text-5xl">{item.icon}</div>
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {expandedCard === index ? (
                        <Minus className="w-5 h-5 md:w-6 md:h-6 text-[#BD0C0D]" />
                      ) : (
                        <Plus className="w-5 h-5 md:w-6 md:h-6 text-[#BD0C0D]" />
                      )}
                    </motion.div>
                  </div>
                  <h3 className="text-xl md:text-2xl text-gray-900 mb-3 font-bold">{item.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                    {expandedCard === index ? item.fullDesc : item.shortDesc}
                  </p>
                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-300"
                      >
                        <p className="text-xs md:text-sm text-gray-500 italic">
                          Click to collapse
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold">
              Our Core <span className="text-[#BD0C0D]">Values</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              The principles that drive our team to excellence and innovation
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
            {[
              {
                title: 'Innovation',
                shortDesc: 'We constantly push the boundaries of what\'s possible in underwater robotics.',
                fullDesc: 'We constantly push the boundaries of what\'s possible in underwater robotics. Every season brings new challenges that inspire creative solutions and technological breakthroughs. From novel propulsion systems to advanced AI algorithms, we embrace cutting-edge technologies and aren\'t afraid to experiment with unconventional approaches. Our team members are encouraged to think outside the box and propose innovative solutions to complex engineering problems.',
                icon: '🚀',
              },
              {
                title: 'Excellence',
                shortDesc: 'We strive for the highest standards in everything we do.',
                fullDesc: 'We strive for the highest standards in everything we do - from mechanical design and software development to documentation and presentation. Quality is never an accident; it is always the result of intelligent effort, thorough testing, and continuous improvement. We conduct rigorous design reviews, implement comprehensive testing protocols, and maintain detailed documentation. Our commitment to excellence has earned us recognition at international competitions and respect from our peers.',
                icon: '🏆',
              },
              {
                title: 'Collaboration',
                shortDesc: 'Our diverse team works together seamlessly to achieve common goals.',
                fullDesc: 'Our diverse team of engineers, programmers, and designers work together seamlessly. We believe that the best solutions emerge when brilliant minds collaborate and share knowledge. Regular team meetings, brainstorming sessions, and knowledge-sharing workshops foster a collaborative environment where everyone\'s ideas are valued. We leverage each member\'s unique strengths and expertise, creating synergy that elevates our collective capabilities beyond what any individual could achieve alone.',
                icon: '🤝',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                onClick={() => setExpandedValue(expandedValue === index ? null : index)}
                whileHover={{ scale: 1.05, y: -5, boxShadow: '0 20px 40px rgba(189, 12, 13, 0.3)' }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 rounded-xl shadow-xl border-2 border-gray-200 hover:border-[#BD0C0D] text-center transition-all duration-300 cursor-pointer"
              >
                <div className="text-5xl md:text-6xl mb-4">{item.icon}</div>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h3 className="text-xl md:text-2xl text-gray-900 font-bold">{item.title}</h3>
                  <motion.div
                    animate={{ rotate: expandedValue === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedValue === index ? (
                      <Minus className="w-4 h-4 md:w-5 md:h-5 text-[#BD0C0D]" />
                    ) : (
                      <Plus className="w-4 h-4 md:w-5 md:h-5 text-[#BD0C0D]" />
                    )}
                  </motion.div>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {expandedValue === index ? item.fullDesc : item.shortDesc}
                </p>
                <AnimatePresence>
                  {expandedValue === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-300"
                    >
                      <p className="text-xs md:text-sm text-gray-500 italic">
                        Click to collapse
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;