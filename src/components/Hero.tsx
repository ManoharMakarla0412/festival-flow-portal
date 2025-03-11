
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface HeroProps {
  title: string;
  subtitle: string;
  date: string;
  location: string;
  backgroundImage?: string;
  className?: string;
}

export function Hero({ 
  title, 
  subtitle, 
  date, 
  location, 
  backgroundImage = "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  className 
}: HeroProps) {
  
  const scrollToContent = () => {
    const contentElement = document.getElementById('event-details');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden pt-16", // Added pt-16 to create space for navbar
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage} 
          alt="Event background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      </div>
      
      {/* Hero Content */}
      <div className="container relative z-10 px-6 md:px-10 text-center">
        <div className="space-y-6 animate-slide-up">
          <span className="inline-block text-sm md:text-base font-medium px-4 py-1.5 rounded-full 
                           bg-white/10 text-white backdrop-blur-sm border border-white/20">
            {date}
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <span className="text-white/80 font-medium">
              <span className="text-white">Location:</span> {location}
            </span>
            
            <Button asChild size="lg" className="button-hover animate-scale-in">
              <Link to="https://event-management-seven-delta.vercel.app/registration">Register Now</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <button 
          onClick={scrollToContent}
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 
                     text-white transition-all hover:bg-white/20"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
}

export default Hero;
