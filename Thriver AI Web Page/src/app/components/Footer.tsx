const logoImage = "/assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
    </footer>
  );
}