
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const navLinks = [
  { title: 'Home', path: '/' },
  { title: 'Organization Committee', path: '/committee' },
  { title: 'Exhibition', path: '/exhibition' },
  { title: 'Speakers', path: '/speakers' },
  { title: 'Program Schedule', path: '/schedule' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  // Check if the current path matches the link path
  const isActive = (path: string) => location.pathname === path;

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize the navbar with a solid background to ensure visibility
    setIsScrolled(true);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 w-full",
        "bg-background shadow-md"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight animate-fade-in"
        >
          <span className="text-primary">EVENT</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "nav-link text-sm font-medium transition-colors hover:text-primary",
                isActive(link.path) ? "text-primary font-semibold" : "text-foreground"
              )}
            >
              {link.title}
            </Link>
          ))}
          <Button asChild size="sm" className="button-hover animate-scale-in">
            <Link to="/registration">Register</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-foreground transition-colors hover:text-primary"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] z-50 bg-background animate-fade-in">
            <div className="flex flex-col items-center justify-center space-y-6 h-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-xl font-medium transition-colors hover:text-primary",
                    isActive(link.path) ? "text-primary" : "text-foreground"
                  )}
                >
                  {link.title}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-4 button-hover animate-scale-in">
                <Link to="/registration">Register</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
