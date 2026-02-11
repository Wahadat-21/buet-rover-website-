import { motion } from 'motion/react';
import { Users, Target, Award, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Footer from '../components/Footer';

const AboutUs = () => {
  const milestones = [
    {
      year: '2018',
      event: 'Team Founded',
      description: 'Established as a university robotics team with 12 founding members passionate about underwater exploration.',
    },
    {
      year: '2019',
      event: 'First Competition',
      description: 'Participated in our first RoboSub competition, gaining invaluable experience and placing 15th.',
    },
    {
      year: '2020',
      event: 'Major Upgrade',
      description: 'Complete system redesign with new sensors, computer vision, and control algorithms.',
    },
    {
      year: '2021',
      event: 'Top 10 Finish',
      description: 'Achieved 8th place at RoboSub International, marking a significant milestone for the team.',
    },
    {
      year: '2022',
      event: 'Innovation Award',
      description: 'Received the Innovation in Design award for our novel approach to acoustic localization.',
    },
    {
      year: '2023',
      event: 'Top 5 Achievement',
      description: 'Secured 4th place overall and won the Best Technical Paper award at the competition.',
    },
    {
      year: '2024',
      event: 'Current Season',
      description: 'Developing next-generation AUV with AI-powered navigation and advanced manipulation capabilities.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-0">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=1200"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-800/70 to-[#BD0C0D]/60" />
        </div>
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white mb-4 font-bold"
          >
            About <span className="text-yellow-300">Us</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100"
          >
            Innovating the future of underwater robotics
          </motion.p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(189, 12, 13, 0.3)' }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-[#BD0C0D] shadow-xl transition-all duration-300"
            >
              <Target className="w-12 h-12 text-[#BD0C0D] mb-4" />
              <h2 className="text-3xl text-gray-900 mb-4 font-bold">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                To design, build, and operate autonomous underwater vehicles that demonstrate
                engineering excellence, innovation, and technical prowess in international
                competitions while fostering a collaborative learning environment for students.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(59, 130, 246, 0.3)' }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 shadow-xl transition-all duration-300"
            >
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h2 className="text-3xl text-gray-900 mb-4 font-bold">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                To become a leading force in underwater robotics, inspiring the next generation of
                engineers and contributing to advancements in autonomous marine technology that
                benefits research, exploration, and environmental conservation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-b from-blue-950 to-blue-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-center mb-16 text-white"
          >
            Our <span className="text-red-500">Journey</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl border border-red-500/30 shadow-lg ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2 justify-between">
                      <Calendar className="w-5 h-5 text-red-500" />
                      <span className="text-red-400 text-xl">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl text-white mb-2">{milestone.event}</h3>
                    <p className="text-blue-200">{milestone.description}</p>
                  </div>
                </div>
                <div className="w-16 flex justify-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full border-4 border-blue-900" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-blue-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '🔬', title: 'Innovation', desc: 'Cutting-edge solutions' },
              { icon: '⚙️', title: 'Engineering', desc: 'Technical excellence' },
              { icon: '🤝', title: 'Teamwork', desc: 'Collaborative spirit' },
              { icon: '🎯', title: 'Precision', desc: 'Attention to detail' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-blue-900 to-blue-800 p-6 rounded-xl border border-red-500/30 text-center shadow-lg"
              >
                <div className="text-5xl mb-3">{value.icon}</div>
                <h3 className="text-xl text-white mb-2">{value.title}</h3>
                <p className="text-blue-200 text-sm">{value.desc}</p>
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

export default AboutUs;