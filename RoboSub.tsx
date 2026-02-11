import { motion } from 'motion/react';
import { Cpu, Eye, Zap, Waves, Award, Target, Plus, Minus } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Footer from '../components/Footer';
import { useState } from 'react';
import { AnimatePresence } from 'motion/react';

const RoboSub = () => {
  const [expandedSystem, setExpandedSystem] = useState<number | null>(null);
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null);

  const specs = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: 'Depth Rating',
      value: '50 meters',
      desc: 'Deep dive capability',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power System',
      value: '48V Lithium',
      desc: '2-hour mission duration',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Processor',
      value: 'Intel i7',
      desc: 'High-performance computing',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Awards',
      value: '2023 RoboSub Championship',
      desc: 'Top prize winner',
    },
  ];

  const systems = [
    {
      title: 'Computer Vision',
      description:
        'Advanced AI-powered object detection and tracking using stereo cameras and deep learning algorithms for real-time underwater navigation',
      icon: <Eye className="w-12 h-12 text-red-500" />,
      features: ['Stereo vision', 'Object recognition', 'Path planning', 'Real-time tracking'],
    },
    {
      title: 'Autonomous Control',
      description:
        'Sophisticated control systems enabling fully autonomous operation with obstacle avoidance, mission planning, and adaptive behavior',
      icon: <Cpu className="w-12 h-12 text-red-500" />,
      features: ['PID control', 'Sensor fusion', 'Mission autonomy', 'Emergency protocols'],
    },
    {
      title: 'Sensor Array',
      description:
        'Comprehensive sensor suite including IMU, pressure sensors, hydrophones, and sonar for complete environmental awareness',
      icon: <Waves className="w-12 h-12 text-red-500" />,
      features: ['9-DOF IMU', 'Depth sensor', 'Hydrophone array', 'DVL navigation'],
    },
  ];

  const achievements = [
    {
      title: '2023 RoboSub Championship',
      description:
        'Our team secured the top prize in the 2023 RoboSub Championship, showcasing our innovative design and exceptional performance.',
      icon: <Award className="w-12 h-12 text-red-500" />,
      details: [
        'First place in the competition',
        'Highest score in navigation tasks',
        'Innovative use of AI and machine learning',
      ],
    },
    {
      title: '2022 RoboSub Challenge',
      description:
        'Our team placed second in the 2022 RoboSub Challenge, demonstrating our commitment to excellence and continuous improvement.',
      icon: <Target className="w-12 h-12 text-red-500" />,
      details: [
        'Second place in the competition',
        'Top 5 in object recognition',
        'Advanced sensor integration',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden mb-0">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1754297813553-43eb3a9f65a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwcm9ib3QlMjBzdWJtYXJpbmV8ZW58MXx8fHwxNzY4MDQyNTcxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="RoboSub Competition"
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
            RoboSub <span className="text-red-500">Competition</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-200"
          >
            Autonomous Underwater Vehicle designed for international competition excellence
          </motion.p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#172554"></path>
          </svg>
        </div>
      </section>

      {/* Competition Info */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl text-white mb-6"
            >
              About the <span className="text-red-500">Competition</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-200 text-lg leading-relaxed"
            >
              RoboSub is an international autonomous underwater vehicle (AUV) competition where
              student teams design and build robots to complete various underwater tasks. Our
              submarine must navigate through gates, identify objects, manipulate mechanisms, and
              surface within specific zones—all completely autonomously.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-12 text-white"
          >
            Technical <span className="text-red-500">Specifications</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {specs.map((spec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl border border-red-500/30 shadow-xl text-center"
              >
                <div className="text-red-500 mb-4 flex justify-center">{spec.icon}</div>
                <h3 className="text-white text-xl mb-2">{spec.title}</h3>
                <p className="text-2xl text-red-400 mb-2">{spec.value}</p>
                <p className="text-blue-200 text-sm">{spec.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Systems */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-4 text-white"
          >
            Core <span className="text-red-500">Systems</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-blue-200 mb-12 max-w-2xl mx-auto"
          >
            Cutting-edge technology powering autonomous underwater operations
          </motion.p>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl border border-red-500/30 shadow-xl"
              >
                <div className="flex items-center mb-4">
                  {system.icon}
                  <h3 className="text-2xl text-white ml-4">{system.title}</h3>
                </div>
                <p className="text-blue-200 mb-6 leading-relaxed">{system.description}</p>
                <ul className="space-y-2">
                  {system.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-blue-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className="text-red-500 mt-4"
                  onClick={() => setExpandedSystem(index === expandedSystem ? null : index)}
                >
                  {index === expandedSystem ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </button>
                <AnimatePresence>
                  {index === expandedSystem && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-blue-200 leading-relaxed">
                        {system.description} provides a robust foundation for our autonomous
                        operations, ensuring precise control and reliable performance in various
                        underwater environments.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-12 text-white"
          >
            Our <span className="text-red-500">Achievements</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl border border-red-500/30 shadow-xl"
              >
                <div className="flex items-center mb-4">
                  {achievement.icon}
                  <h3 className="text-2xl text-white ml-4">{achievement.title}</h3>
                </div>
                <p className="text-blue-200 mb-6 leading-relaxed">{achievement.description}</p>
                <ul className="space-y-2">
                  {achievement.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-blue-300">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <button
                  className="text-red-500 mt-4"
                  onClick={() =>
                    setExpandedAchievement(index === expandedAchievement ? null : index)
                  }
                >
                  {index === expandedAchievement ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
                <AnimatePresence>
                  {index === expandedAchievement && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <p className="text-blue-200 leading-relaxed">
                        {achievement.description} highlights our team's dedication to innovation
                        and excellence, pushing the boundaries of what is possible in autonomous
                        underwater vehicle technology.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl text-center mb-12 text-white"
          >
            Development <span className="text-red-500">Process</span>
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {[
              {
                phase: 'Design',
                description: 'CAD modeling, simulations, and system architecture planning',
              },
              {
                phase: 'Fabrication',
                description: 'Manufacturing hull, electronics housing, and mounting systems',
              },
              {
                phase: 'Integration',
                description: 'Assembling components, wiring, and waterproofing',
              },
              {
                phase: 'Testing',
                description: 'Pool tests, software debugging, and performance optimization',
              },
              { phase: 'Competition', description: 'Final preparations and competition runs' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 bg-gradient-to-r from-blue-900 to-blue-800 p-6 rounded-xl border border-red-500/30 shadow-lg"
              >
                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl text-white mb-1">{step.phase}</h3>
                  <p className="text-blue-200">{step.description}</p>
                </div>
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

export default RoboSub;