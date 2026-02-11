import { motion } from 'motion/react';
import { Users, Award, Code, Wrench, Palette, TrendingUp, Linkedin, Github } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import Footer from '../components/Footer';

const Members = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Team Captain',
      department: 'Mechanical Engineering',
      icon: <Award className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
      bio: 'Leading the team with 3 years of underwater robotics experience. Specializes in system integration and competition strategy.',
      email: 'alex.johnson@university.edu',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Sarah Chen',
      role: 'Software Lead',
      department: 'Computer Science',
      icon: <Code className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Expert in autonomous navigation systems and computer vision. Developed our award-winning AI algorithms.',
      email: 'sarah.chen@university.edu',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Mechanical Lead',
      department: 'Aerospace Engineering',
      icon: <Wrench className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
      bio: 'Designs and fabricates our submarine hull and propulsion systems. Expert in hydrodynamics and CAD.',
      email: 'michael.rodriguez@university.edu',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Emily Watson',
      role: 'Electrical Lead',
      department: 'Electrical Engineering',
      icon: <Palette className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
      bio: 'Responsible for power systems, sensors, and embedded electronics. Passionate about circuit design.',
      email: 'emily.watson@university.edu',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'David Kim',
      role: 'Controls Engineer',
      department: 'Robotics Engineering',
      icon: <Code className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400',
      bio: 'Develops control algorithms for stabilization and maneuvering. Expert in ROS and PID tuning.',
      email: 'david.kim@university.edu',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Jessica Lee',
      role: 'Vision Systems Lead',
      department: 'Computer Engineering',
      icon: <Code className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400',
      bio: 'Specializes in underwater image processing and object detection using machine learning.',
      email: 'jessica.lee@university.edu',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Ryan Martinez',
      role: 'Propulsion Engineer',
      department: 'Mechanical Engineering',
      icon: <Wrench className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400',
      bio: 'Designs and optimizes thruster configurations for maximum maneuverability and efficiency.',
      email: 'ryan.martinez@university.edu',
      linkedin: '#',
      github: '#',
    },
    {
      name: 'Olivia Brown',
      role: 'Documentation Lead',
      department: 'Technical Writing',
      icon: <Award className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
      bio: 'Manages technical documentation, presentations, and outreach materials for competitions.',
      email: 'olivia.brown@university.edu',
      linkedin: '#',
      github: '#',
    },
  ];

  const advisors = [
    {
      name: 'Dr. Robert Stevens',
      role: 'Faculty Advisor',
      department: 'Mechanical Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400',
      bio: 'Professor with 20+ years of experience in underwater robotics and marine systems.',
    },
    {
      name: 'Dr. Amanda Liu',
      role: 'Technical Advisor',
      department: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400',
      bio: 'AI and robotics researcher specializing in autonomous navigation systems.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-0">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200"
            alt="Team Members"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/70 to-[#BD0C0D]/60" />
        </div>
        
        {/* Animated particles overlay */}
        <div className="absolute inset-0 z-10 opacity-30">
          <div className="absolute w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
          <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ top: '50%', left: '80%', animationDelay: '1s' }} />
          <div className="absolute w-3 h-3 bg-white rounded-full animate-pulse" style={{ top: '70%', left: '30%', animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl text-white mb-4 font-bold"
          >
            Meet Our <span className="text-yellow-300">Team</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100"
          >
            Passionate engineers building the future of underwater robotics
          </motion.p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold">
              Core <span className="text-[#BD0C0D]">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of students working together to push the boundaries of underwater robotics
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(189, 12, 13, 0.2)' }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-[#BD0C0D] transition-all duration-300"
              >
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#BD0C0D] text-white p-2 rounded-lg shadow-lg">
                    {member.icon}
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#BD0C0D] font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.department}</p>
                  <p className="text-sm text-gray-700 mb-4 line-clamp-3">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Users className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={member.github}
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-bold">
              Faculty <span className="text-blue-600">Advisors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced mentors guiding our team to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:border-blue-500 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="sm:w-1/3 h-64 sm:h-auto relative">
                    <ImageWithFallback
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{advisor.name}</h3>
                    <p className="text-blue-600 font-semibold mb-2">{advisor.role}</p>
                    <p className="text-sm text-gray-600 mb-4">{advisor.department}</p>
                    <p className="text-gray-700">{advisor.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-r from-[#BD0C0D] to-red-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6 font-bold">
              Want to <span className="text-yellow-300">Join Us?</span>
            </h2>
            <p className="text-xl text-red-100 mb-8">
              We're always looking for passionate students to join our team. No experience required – just enthusiasm and dedication!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 255, 255, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#BD0C0D] px-8 py-4 rounded-full text-lg shadow-lg inline-block font-bold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/stories"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg shadow-lg inline-block font-bold hover:bg-blue-700 transition-colors"
              >
                Read Our Stories
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Members;