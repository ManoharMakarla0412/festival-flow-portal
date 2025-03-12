
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-primary/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">EVENT</h3>
            <p className="text-muted-foreground">
              Join us for an extraordinary event experience that brings together innovation, 
              networking, and knowledge-sharing in a world-class setting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-3">
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
                <Link to="/registration" className="text-muted-foreground hover:text-primary transition-colors">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  123 Conference Center, Innovation Street, San Francisco, CA 94103
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a href="mailto:info@event.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@event.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter to get the latest updates about the event.
            </p>
            <form className="flex mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-background border border-border rounded-l-lg px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-lg hover:bg-primary/90 focus:outline-none focus:ring-1 focus:ring-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <hr className="border-border my-8" />
        
        <div className="text-center text-muted-foreground text-sm">
          <p>© {year} EVENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
