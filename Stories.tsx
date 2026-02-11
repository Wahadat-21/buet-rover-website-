import { motion } from 'motion/react';
import { BookOpen, Award, Users, Lightbulb, Heart, Rocket } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const Stories = () => {
  const stories = [
    {
      title: 'The Beginning of Our Journey',
      date: 'September 2020',
      icon: <Rocket className="w-8 h-8" />,
      content:
        "It all started in a small university workshop where a group of passionate engineering students shared a dream: to build an autonomous underwater vehicle that could compete on the world stage. What began as late-night brainstorming sessions soon evolved into a full-fledged team dedicated to pushing the boundaries of underwater robotics.",
      image:
        'https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODA0MjU3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-[#BD0C0D] to-red-700',
    },
    {
      title: 'First Competition - Lessons Learned',
      date: 'June 2021',
      icon: <Award className="w-8 h-8" />,
      content:
        "Our first RoboSub competition was a humbling experience. While we didn't place in the top rankings, we gained invaluable insights into competition dynamics, system integration challenges, and the importance of rigorous testing. The team returned home more determined than ever, armed with knowledge that would shape our future success.",
      image:
        'https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9uJTIwdGVhbXxlbnwxfHx8fDE3Njc5NDUyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-blue-800',
    },
    {
      title: 'Innovation Through Adversity',
      date: 'March 2022',
      icon: <Lightbulb className="w-8 h-8" />,
      content:
        "When our initial computer vision system failed during testing, the team refused to give up. Working around the clock, we redesigned our entire perception pipeline, implementing a revolutionary new approach to object detection. This setback became our greatest breakthrough, earning us recognition for technical innovation.",
      image:
        'https://images.unsplash.com/photo-1754297813553-43eb3a9f65a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwc3VibWFyaW5lJTIwcm9ib3RpY3N8ZW58MXx8fHwxNzY4MDQyNTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-[#BD0C0D] to-red-700',
    },
    {
      title: 'Building a Community',
      date: 'August 2023',
      icon: <Users className="w-8 h-8" />,
      content:
        "Beyond technical achievements, we focused on building a supportive community. We established mentorship programs connecting experienced members with newcomers, hosted workshops for local high schools, and created an inclusive environment where everyone's ideas were valued. Our team culture became our greatest strength.",
      image:
        'https://images.unsplash.com/photo-1759884247387-a5d791ffb2bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODA0MjU3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-blue-800',
    },
    {
      title: 'International Recognition',
      date: 'July 2024',
      icon: <Award className="w-8 h-8" />,
      content:
        "Hard work paid off when we secured a top-10 finish at RoboSub 2024. More importantly, we won the Innovation Award for our autonomous navigation system. Standing on that stage, representing our university and team, was a moment none of us will ever forget. It validated years of dedication and sacrifice.",
      image:
        'https://images.unsplash.com/photo-1646579886741-12b59840c63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMGNvbXBldGl0aW9uJTIwdGVhbXxlbnwxfHx8fDE3Njc5NDUyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-[#BD0C0D] to-red-700',
    },
    {
      title: 'Looking Ahead',
      date: 'January 2025',
      icon: <Heart className="w-8 h-8" />,
      content:
        "As we embark on a new season, we carry forward the lessons, friendships, and passion that define our team. With next-generation submarine designs in development and fresh talent joining our ranks, the future looks brighter than ever. Our story continues, written by every team member who dares to dream big.",
      image:
        'https://images.unsplash.com/photo-1759712659045-cc187c68f718?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwdmVoaWNsZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY4MDQyNTQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-0">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200"
            alt="Our Stories"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/90 via-blue-900/80 to-[#BD0C0D]/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <BookOpen className="w-16 h-16 md:w-20 md:h-20 text-white mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl text-white mb-4 font-bold"
          >
            Our <span className="text-yellow-300">Stories</span>
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            The journey, challenges, and triumphs that define our team
          </motion.p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-full h-[60px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Stories Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="w-full lg:w-1/2 relative group"
                >
                  <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 to-transparent" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${story.color} text-white px-4 py-2 rounded-full shadow-lg`}
                  >
                    {story.icon}
                    <span className="text-sm font-semibold">{story.date}</span>
                  </motion.div>

                  <h2 className="text-3xl md:text-4xl text-white mb-4">{story.title}</h2>

                  <div className="h-1 w-20 bg-gradient-to-r from-[#BD0C0D] to-blue-600 rounded-full" />

                  <p className="text-lg text-blue-200 leading-relaxed">{story.content}</p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-[#BD0C0D] hover:text-red-400 transition-colors cursor-pointer"
                  >
                    <span className="mr-2">Read more</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              Want to Be Part of <span className="text-[#BD0C0D]">Our Story?</span>
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Join our team and help write the next chapter in underwater robotics innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(189, 12, 13, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#BD0C0D] to-red-700 text-white px-8 py-4 rounded-full text-lg shadow-lg inline-block"
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="/sponsor"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg shadow-lg inline-block"
              >
                Support Our Journey
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Stories;