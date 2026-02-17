import logoImage from 'figma:asset/6dd84d476d8c258995844e1a07d2367c8245c05f.png';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist email submitted:', email);
    // Show success message or handle submission
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Join Waitlist Section */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-medium mb-4 text-black">
              Join the Waitlist
            </h2>
            <p className="text-lg text-gray-500 mb-10 font-light">
              Be the first to experience the future of job searching
            </p>

            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex gap-2 p-1 bg-white border border-gray-200 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full outline-none text-gray-700 placeholder:text-gray-400"
                  required
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-700 transition-all hover:scale-105 active:scale-95 whitespace-nowrap flex items-center gap-2 font-medium"
                >
                  Join Waitlist <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Disclaimer */}
          <div className="mb-8 text-center">
            <p className="text-xs text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Thriver.ai is currently in early-stage development. Certain features shown may be in active build or beta testing and are subject to change as we refine the product based on user feedback.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center">
              <img 
                src={logoImage} 
                alt="Thriver AI" 
                className="h-7 invert"
                style={{ filter: 'invert(1)' }}
              />
            </div>

            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
              <a href="#" className="hover:text-black transition-colors">Contact</a>
            </div>

            <p className="text-sm text-gray-400">
              © {currentYear} Thriver AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}