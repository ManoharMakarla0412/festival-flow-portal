
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Users,
  BookOpen,
  Clock
} from 'lucide-react';

export function Footer() {
  const scrollToRegister = () => {
    const registerElement = document.getElementById('register');
    if (registerElement) {
      registerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="w-full bg-background border-t">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              <span className="text-primary">EVENT</span>
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Join us for an extraordinary event experience that brings together innovation, 
              networking, and knowledge-sharing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen size={18} className="mr-2 text-primary" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/committee" className="text-muted-foreground hover:text-primary transition-colors">
                  Organization Committee
                </Link>
              </li>
              <li>
                <Link to="/exhibition" className="text-muted-foreground hover:text-primary transition-colors">
                  Exhibition
                </Link>
              </li>
              <li>
                <Link to="/speakers" className="text-muted-foreground hover:text-primary transition-colors">
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-muted-foreground hover:text-primary transition-colors">
                  Program Schedule
                </Link>
              </li>
              <li>
                <button 
                  onClick={scrollToRegister}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
          
          {/* Event Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Calendar size={18} className="mr-2 text-primary" />
              Event Details
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Calendar size={18} className="mr-2 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">October 15-16, 2023</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="mr-2 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">Conference Center, San Francisco, CA</span>
              </li>
              <li className="flex items-start">
                <Users size={18} className="mr-2 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">500+ Industry Professionals</span>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Phone size={18} className="mr-2 text-primary" />
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-0.5 text-muted-foreground" />
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-0.5 text-muted-foreground" />
                <a href="mailto:info@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@example.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-0.5 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Conference Way, San Francisco, CA 94103
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Event Conference. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
