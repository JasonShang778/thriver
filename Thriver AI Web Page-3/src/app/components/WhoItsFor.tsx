import { GraduationCap, Building2, Check } from 'lucide-react';
import { motion } from 'motion/react';

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-medium mb-4 tracking-tight text-black">
            Who It's For
          </h2>
          <p className="text-lg text-gray-500 font-light">Built for everyone in the career journey</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Students & Job Seekers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-3xl p-10 hover:border-gray-300 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-black p-3 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-medium text-black">Students & Job Seekers</h3>
            </div>

            <div className="space-y-3 mb-8">
              {[
                'Personalized networking',
                'Increase response rates',
                'Track & get notified'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-sm">
              Get Started
            </button>
          </motion.div>

          {/* Universities & Career Teams */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-10 hover:border-gray-700 transition-all text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white p-3 rounded-xl">
                <Building2 className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-2xl font-medium text-white">Universities & Career Teams</h3>
            </div>

            <div className="space-y-3 mb-8">
              {[
                'Bulk access for teams',
                'Workflow automation',
                'Better placement outcomes'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="px-6 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-all text-sm">
              Request Demo
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
