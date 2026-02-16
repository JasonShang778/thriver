import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function CTASection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Job Search?
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Join thousands of successful candidates using AI to accelerate their careers
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            '✓ No credit card required',
            '✓ 14-day free trial',
            '✓ Cancel anytime'
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-white/90">
              <CheckCircle2 className="w-5 h-5" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-2 p-1 bg-white rounded-full shadow-2xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full outline-none text-gray-700"
              required
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all whitespace-nowrap flex items-center gap-2 font-semibold"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </form>

        <p className="text-white/70 text-sm mt-4">
          Start your free trial today. No credit card required.
        </p>
      </div>
    </section>
  );
}
