import { Upload, Settings, Sparkles, Send, LineChart } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    icon: Upload,
    title: 'Upload Resume',
    number: '01'
  },
  {
    icon: Settings,
    title: 'Set Preferences',
    number: '02'
  },
  {
    icon: Sparkles,
    title: 'AI Personalization',
    number: '03'
  },
  {
    icon: Send,
    title: 'Automated Outreach',
    number: '04'
  },
  {
    icon: LineChart,
    title: 'Track & Optimize',
    number: '05'
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-medium mb-4 tracking-tight text-black">
            How It Works
          </h2>
          <p className="text-lg text-gray-500 font-light">One System. End-to-end Recruiting</p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gray-200 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="text-center">
                  <motion.div 
                    className="inline-flex p-6 rounded-2xl bg-white border border-gray-200 mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <step.icon className="w-8 h-8 text-gray-700" />
                  </motion.div>
                  <div className="text-xs text-gray-400 mb-2 tracking-widest">{step.number}</div>
                  <h3 className="text-base font-medium text-gray-900">{step.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
