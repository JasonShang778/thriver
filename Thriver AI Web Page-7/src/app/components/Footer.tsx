const logoImage = "/assets/logo.png";
import { ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { useState, useRef } from 'react';
import { motion } from 'motion/react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    
    // Clear error when user starts typing
    if (emailError) {
      setEmailError('');
    }
    
    // Reset submitted state when user types again
    if (isSubmitted) {
      setIsSubmitted(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    if (!email.trim()) {
      setEmailError('Please enter your email address');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      inputRef.current?.focus();
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      inputRef.current?.focus();
      return;
    }
    
    // If validation passes
    console.log('Waitlist email submitted:', email);
    setIsSubmitted(true);
    setEmail('');
    setEmailError('');
    
    // Reset success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
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
              <motion.div 
                className={`flex gap-2 p-1 bg-white border rounded-full shadow-sm hover:shadow-md transition-all ${emailError ? 'border-red-400 shadow-red-100' : 'border-gray-200'}`}
                animate={shake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                transition={{ duration: 0.4 }}
              >
                <input
                  ref={inputRef}
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your email address"
                  className={`flex-1 px-6 py-4 rounded-full outline-none text-gray-700 placeholder:text-gray-400 ${emailError ? 'placeholder:text-red-300' : ''}`}
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-700 transition-all hover:scale-105 active:scale-95 whitespace-nowrap flex items-center gap-2 font-medium"
                >
                  Join Waitlist <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
              
              {/* Error Message */}
              {emailError && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 flex items-center gap-2 text-red-500 bg-red-50 rounded-lg px-4 py-2.5 border border-red-100"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <p className="text-sm">
                    {emailError}
                  </p>
                </motion.div>
              )}
              
              {/* Success Message */}
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-600 mt-3 flex items-center justify-center gap-2"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Successfully joined the waitlist!</span>
                </motion.div>
              )}
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
                className="h-7"
              />
            </div>

            <div className="flex gap-8 text-sm text-gray-500">
              <a href="#" className="hover:text-black transition-colors">Privacy</a>
              <a href="#" className="hover:text-black transition-colors">Terms</a>
              <a href="mailto:thriver.aicareer@gmail.com" className="hover:text-black transition-colors">Contact</a>
            </div>

            <p className="text-sm text-gray-400">
              © {currentYear} Thriver AI. All rights reserved.
            </p>
          </div>

          {/* Contact Email */}
          <div className="text-center mt-6">
            <a 
              href="mailto:thriver.aicareer@gmail.com" 
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              thriver.aicareer@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}