import { ArrowRight, TrendingUp, Target, Sparkles, LayoutDashboard } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-24 text-center">
        {/* Main heading */}
        <motion.h1 
          className="text-6xl sm:text-7xl lg:text-8xl font-medium mb-6 leading-[0.95] tracking-tight text-black"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Reach Out Smarter.<br />Get Hired Faster.
        </motion.h1>

        <motion.p 
          className="text-xl sm:text-2xl text-gray-500 mb-12 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          From Outreach to Offer — Automated
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-700 transition-all hover:scale-105 active:scale-95 text-base inline-flex items-center justify-center gap-2">
            Get Early Access <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Taglines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: TrendingUp, text: 'Accelerate your job search' },
            { icon: Target, text: 'Automate outreach & tracking' },
            { icon: Sparkles, text: 'Optimize for higher response' },
            { icon: LayoutDashboard, text: 'One dashboard, zero chaos' }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 hover:shadow-md transition-all cursor-pointer hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <item.icon className="w-6 h-6 text-gray-700 mb-3 mx-auto" />
              <p className="text-sm text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}