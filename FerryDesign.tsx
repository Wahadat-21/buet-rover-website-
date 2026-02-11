import { motion } from 'motion/react';
import { Ship, Zap, Users, Leaf, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Footer from '../components/Footer';
import { useState } from 'react';

const FerryDesign = () => {
  const [currentStage, setCurrentStage] = useState(0);

  const designStages = [
    {
      title: 'Concept Design',
      description: 'Initial sketches and conceptualization of ferry design',
      details:
        'Brainstorming session to define requirements, passenger capacity, and design constraints',
    },
    {
      title: 'CAD Modeling',
      description: '3D modeling and engineering drawings',
      details: 'Detailed CAD models created using SolidWorks and AutoCAD for precise specifications',
    },
    {
      title: 'Structural Analysis',
      description: 'FEA simulations and stress testing',
      details: 'Computational analysis to ensure structural integrity and safety standards',
    },
    {
      title: 'Prototype Development',
      description: 'Scale model construction and testing',
      details: 'Building physical prototypes to validate design concepts and hydrodynamics',
    },
    {
      title: 'Final Design',
      description: 'Production-ready specifications',
      details: 'Complete documentation and manufacturing specifications for full-scale construction',
    },
  ];

  const features = [
    {
      icon: <Ship className="w-8 h-8" />,
      title: 'Passenger Capacity',
      value: '250 passengers',
      desc: 'Comfortable seating',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Speed',
      value: '25 knots',
      desc: 'Efficient propulsion',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Crew',
      value: '12 personnel',
      desc: 'Professional staff',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Eco-Friendly',
      value: 'Hybrid propulsion',
      desc: 'Reduced emissions',
    },
  ];

  const nextStage = () => {
    setCurrentStage((prev) => (prev + 1) % designStages.length);
  };

  const prevStage = () => {
    setCurrentStage((prev) => (prev - 1 + designStages.length) % designStages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mb-0">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200"
            alt="Ferry Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 to-blue-900/80" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white mb-6 font-bold"
          >
            Ferry <span className="text-red-500">Design</span> Project
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200"
          >
            Engineering sustainable maritime transportation solutions
          </motion.p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#172554"></path>
          </svg>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl text-white mb-6 text-center"
            >
              Project <span className="text-red-500">Overview</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-200 text-lg leading-relaxed text-center mb-12"
            >
              Our ferry design project showcases our team's expertise in marine engineering,
              combining innovative design with practical maritime solutions. The project focuses on
              creating efficient, safe, and environmentally sustainable passenger transportation.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Design Features */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-12 text-white"
          >
            Key <span className="text-red-500">Specifications</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl border border-red-500/30 shadow-xl text-center"
              >
                <div className="text-red-500 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-white text-xl mb-2">{feature.title}</h3>
                <p className="text-2xl text-red-400 mb-2">{feature.value}</p>
                <p className="text-blue-200 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Stages Slider */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-4 text-white"
          >
            Design <span className="text-red-500">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-blue-200 mb-12 max-w-2xl mx-auto"
          >
            From concept to completion: our comprehensive design methodology
          </motion.p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Stage Content */}
              <motion.div
                key={currentStage}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className="bg-gradient-to-br from-blue-900 to-blue-800 p-10 rounded-2xl border border-red-500/30 shadow-2xl min-h-[300px]"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-red-600 text-white px-4 py-2 rounded-full">
                    Stage {currentStage + 1} of {designStages.length}
                  </div>
                </div>
                <h3 className="text-3xl text-white mb-4">{designStages[currentStage].title}</h3>
                <p className="text-xl text-red-400 mb-4">{designStages[currentStage].description}</p>
                <p className="text-blue-200 text-lg leading-relaxed">
                  {designStages[currentStage].details}
                </p>
              </motion.div>

              {/* Navigation Arrows */}
              <button
                onClick={prevStage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-900/80 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextStage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-900/80 hover:bg-red-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {designStages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStage(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentStage === index ? 'bg-red-500 w-12' : 'bg-blue-700 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Focus */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-12 text-white"
          >
            Engineering <span className="text-red-500">Excellence</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Hydrodynamics',
                description:
                  'Optimized hull design for reduced drag and improved fuel efficiency through CFD analysis',
                icon: '🌊',
              },
              {
                title: 'Structural Integrity',
                description:
                  'Reinforced construction meeting maritime safety standards with advanced materials',
                icon: '🔩',
              },
              {
                title: 'Sustainability',
                description:
                  'Eco-friendly propulsion systems and emission reduction technologies for cleaner operation',
                icon: '♻️',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-xl border border-red-500/30 shadow-xl text-center"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl text-white mb-3">{item.title}</h3>
                <p className="text-blue-200 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FerryDesign;