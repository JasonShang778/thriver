import { ArrowRight, Play, TrendingUp, Target, Sparkles, LayoutDashboard } from 'lucide-react';
import { useState } from 'react';

export function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-24 text-center">
        {/* Email input at the top center */}
        <div className="mb-16">
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex gap-2 p-1 bg-white border border-gray-200 rounded-full shadow-sm">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email to get started"
                className="flex-1 px-6 py-3 rounded-full outline-none text-gray-700 placeholder:text-gray-400"
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all whitespace-nowrap flex items-center gap-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-medium mb-6 leading-[0.95] tracking-tight text-black">
          Your AI Career<br />Operating System
        </h1>

        <p className="text-xl sm:text-2xl text-gray-500 mb-12 font-light">
          From Outreach to Offer — Automated
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
          <button className="px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-all text-base inline-flex items-center justify-center gap-2">
            Get Early Access <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-white text-black border border-gray-300 rounded-full hover:border-gray-400 transition-all text-base inline-flex items-center justify-center gap-2">
            <Play className="w-5 h-5" /> Watch Demo
          </button>
        </div>

        {/* Taglines Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { icon: TrendingUp, text: 'Accelerate your job search' },
            { icon: Target, text: 'Automate outreach & tracking' },
            { icon: Sparkles, text: 'Optimize for higher response' },
            { icon: LayoutDashboard, text: 'One dashboard, zero chaos' }
          ].map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:border-gray-300 transition-all">
              <item.icon className="w-6 h-6 text-gray-700 mb-3 mx-auto" />
              <p className="text-sm text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}