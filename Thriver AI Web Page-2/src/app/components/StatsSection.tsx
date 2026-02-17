import { motion } from 'motion/react';

const stats = [
  { value: '3x', label: 'More Responses' },
  { value: '10hrs', label: 'Saved Per Week' },
  { value: '85%', label: 'Success Rate' },
  { value: '1000+', label: 'Jobs Landed' }
];

export function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center cursor-default"
            >
              <div className="text-5xl sm:text-6xl font-medium mb-3 text-black">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}