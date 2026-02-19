const logoImage = "/assets/logo.png";
import { motion } from 'motion/react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={logoImage} 
              alt="Thriver AI" 
              className="h-8"
            />
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm hidden md:block">
              Blog
            </a>
            <button className="px-6 py-2.5 bg-black text-white text-sm rounded-full hover:bg-gray-700 transition-all hover:scale-105 active:scale-95">
              Book a Demo
            </button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}