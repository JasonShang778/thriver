const logo = "/assets/logo.png";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img 
              src={logo} 
              alt="Thriver AI" 
              className="h-8 invert"
              style={{ filter: 'invert(1)' }}
            />
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm hidden md:block">
              Blog
            </a>
            <button className="px-6 py-2.5 bg-black text-white text-sm rounded-full hover:bg-gray-800 transition-all">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}