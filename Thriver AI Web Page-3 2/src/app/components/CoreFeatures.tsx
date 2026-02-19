import { motion } from 'motion/react';
const feature1Image = "/assets/01.png";
const feature2Image = "/assets/02.png";
const feature3Image = "/assets/03.png";
const feature4Image = "/assets/04.png";

const features = [
  {
    number: '01',
    title: 'AI-Powered Profile Targeting',
    subtitle: 'Smart networking, higher success',
    description: 'Get LinkedIn profile recommendations based on your CV and target roles, with personalized outreach messages to maximize response rates.',
    image: feature1Image,
    imageAlt: 'AI Profile Targeting'
  },
  {
    number: '02',
    title: 'Live Job Monitoring',
    subtitle: 'Never miss an opportunity',
    description: 'AI directly monitors company career pages to deliver the latest postings instantly—no more manual searches.',
    image: feature2Image,
    imageAlt: 'Job Monitoring'
  },
  {
    number: '03',
    title: 'Career CRM Tracker',
    subtitle: 'Manage your entire job search',
    description: 'Track applications, conversations, and interview stages in one dashboard.',
    image: feature3Image,
    imageAlt: 'Career CRM Tracker'
  },
  {
    number: '04',
    title: 'Forum Discussion',
    subtitle: 'Connect with peers and professionals',
    description: 'Join conversations, share insights, and get advice from a community of job seekers and career experts.',
    image: feature4Image,
    imageAlt: 'Forum Discussion'
  }
];

export function CoreFeatures() {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-medium mb-4 tracking-tight text-black">
            Core Features
          </h2>
          <p className="text-lg text-gray-500 font-light">Everything You Need in One Place</p>
        </motion.div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <motion.div 
                className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-xs text-gray-400 mb-4 tracking-widest">{feature.number}</div>
                <h3 className="text-3xl sm:text-4xl font-medium mb-3 text-black">{feature.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>

              {/* Image */}
              <motion.div 
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer">
                  <img 
                    src={feature.image} 
                    className="w-full h-auto object-cover"
                    alt={feature.imageAlt}
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}