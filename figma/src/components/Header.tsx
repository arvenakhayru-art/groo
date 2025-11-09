import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logoWhite from 'figma:asset/2176f4f18488e265f4086d9d06d796ee3d70ea4f.png';
import logoDark from 'figma:asset/c0e4b2d345cbe724409c5964a3857e49288d8844.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Beranda', 'Layanan', 'Mitra', 'FAQ'];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img 
              src={isScrolled ? logoDark : logoWhite} 
              alt="GROO" 
              className="h-8 lg:h-10 w-auto transition-all duration-300"
            />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`transition-colors duration-200 ${
                  isScrolled ? 'text-gray-700 hover:text-[#7B3AED]' : 'text-white hover:text-purple-200'
                }`}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className={isScrolled ? 'hover:text-[#7B3AED]' : 'text-white hover:bg-white/10'}
            >
              Daftar Mitra
            </Button>
            <Button 
              className="bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 rounded-full px-6"
            >
              Download App
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-[#7B3AED] transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
                <Button variant="ghost" className="w-full">
                  Daftar Mitra
                </Button>
                <Button className="w-full bg-gradient-to-r from-[#7B3AED] to-[#9F7AEA] rounded-full">
                  Download App
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
