import { motion } from 'motion/react';

const features = [
  {
    number: '01',
    title: 'AI Smart Outreach',
    subtitle: 'Personalized networking at scale',
    description: 'Generate tailored outreach based on your CV and recipient profiles.',
    video: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236bc6d3c7d3b1f5f7d1f3f9d1e6f7c1d3e6f7c1&profile_id=164&oauth2_token_id=57447761',
    imageAlt: 'AI Smart Outreach'
  },
  {
    number: '02',
    title: 'Job Matching & Alerts',
    subtitle: 'Discover roles that actually fit you',
    description: 'Real-time alerts based on skill compatibility and role-fit analysis.',
    video: 'https://player.vimeo.com/external/416879899.sd.mp4?s=a4b3b1e6d1c1e1f1a1b1c1d1e1f1a1b1c1d1e1f1&profile_id=164&oauth2_token_id=57447761',
    imageAlt: 'Job Matching Dashboard'
  },
  {
    number: '03',
    title: 'Career CRM Tracker',
    subtitle: 'Manage your entire job search',
    description: 'Track applications, conversations, and interview stages in one dashboard.',
    video: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236bc6d3c7d3b1f5f7d1f3f9d1e6f7c1d3e6f7c1&profile_id=164&oauth2_token_id=57447761',
    imageAlt: 'Career CRM Tracker'
  },
  {
    number: '04',
    title: 'Analytics & Insights',
    subtitle: 'Optimize your strategy',
    description: 'Gain insights into response rates and networking conversion.',
    video: 'https://player.vimeo.com/external/450134916.sd.mp4?s=c1d1e1f1a1b1c1d1e1f1a1b1c1d1e1f1a1b1c1d1&profile_id=164&oauth2_token_id=57447761',
    imageAlt: 'Analytics Dashboard'
  },
  {
    number: '05',
    title: 'Forum Discussion',
    subtitle: 'Connect with peers and professionals',
    description: 'Join conversations, share insights, and get advice from a community of job seekers and career experts.',
    video: 'https://player.vimeo.com/external/371433846.sd.mp4?s=236bc6d3c7d3b1f5f7d1f3f9d1e6f7c1d3e6f7c1&profile_id=164&oauth2_token_id=57447761',
    imageAlt: 'Forum Discussion'
  }
];

export function CoreFeatures() {
  return (
    <section id="features" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-24">
          <h2 className="text-5xl sm:text-6xl font-medium mb-4 tracking-tight text-black">
            Core Features
          </h2>
          <p className="text-lg text-gray-500 font-light">Everything You Need in One Place</p>
        </div>

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
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="text-xs text-gray-400 mb-4 tracking-widest">{feature.number}</div>
                <h3 className="text-3xl sm:text-4xl font-medium mb-3 text-black">{feature.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                  <video 
                    src={feature.video} 
                    className="w-full h-auto object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}