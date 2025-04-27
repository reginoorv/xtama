
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location.pathname]);
  
  return (
    <nav 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled ? "glass-nav" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-taxmagnet-darkblue font-display flex items-center"
          >
            <span className="mr-2">TM</span> 
            <span className="hidden md:inline">TaxMagnet</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors font-medium"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors font-medium"
            >
              About
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-taxmagnet-darkblue focus:outline-none"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg animate-fade-in border-t border-gray-100">
            <div className="container mx-auto py-4 flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors py-2 px-4 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors py-2 px-4 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors py-2 px-4 text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
