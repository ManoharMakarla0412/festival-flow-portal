
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ExhibitionShowcase from '@/components/ExhibitionShowcase';

// Sample exhibitions data
const exhibitions = [
  {
    id: 1,
    title: 'Future of AI',
    company: 'TechVision Labs',
    description: "Explore the cutting-edge advancements in artificial intelligence and how they'll shape our world in the coming decade. Interactive demos and expert discussions.",
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'technology',
    website: 'https://example.com',
  },
  {
    id: 2,
    title: 'Sustainable Energy',
    company: 'GreenFuture',
    description: 'Innovative solutions for renewable energy and sustainable living. See working models of next-generation solar and wind technology.',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'sustainability',
    website: 'https://example.com',
  },
  {
    id: 3,
    title: 'Health Innovations',
    company: 'MediTech',
    description: 'Breakthrough medical technologies that are revolutionizing healthcare delivery and patient outcomes around the world.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'healthcare',
    website: 'https://example.com',
  },
  {
    id: 4,
    title: 'Smart City Solutions',
    company: 'UrbanTech',
    description: 'Discover how IoT, data analytics, and AI are transforming urban environments into efficient, sustainable, and livable spaces.',
    image: 'https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'technology',
    website: 'https://example.com',
  },
  {
    id: 5,
    title: 'Robotics Showcase',
    company: 'RoboInnovate',
    description: 'See the latest in robotics technology, from industrial automation to companion robots designed for elder care and education.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'technology',
    website: 'https://example.com',
  },
  {
    id: 6,
    title: 'Circular Economy',
    company: 'EcoSystems',
    description: 'Explore innovative approaches to reducing waste and creating sustainable business models through the principles of circular economy.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'sustainability',
    website: 'https://example.com',
  },
];

const Exhibition = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Event Management - Exhibition</title>
        <meta 
          name="description" 
          content="Discover innovative ideas and breakthrough technologies from leading companies and startups." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="bg-primary/5 py-20 px-6 md:px-10">
          <div className="container mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-3 animate-fade-in">
              Explore Innovation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Exhibition Showcase
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Our exhibition brings together innovative companies and startups to showcase cutting-edge 
              technologies and solutions across various sectors including AI, healthcare, 
              sustainability, and more.
            </p>
          </div>
        </section>
        
        <ExhibitionShowcase 
          title="Featured Exhibitions"
          description="Discover breakthrough technologies and innovative solutions from industry leaders and emerging startups."
          exhibitions={exhibitions}
        />
        
        <section className="py-20 px-6 md:px-10">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Visitor Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Exhibition Hours</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Day 1: 8:00 AM - 6:00 PM</li>
                    <li>Day 2: 9:00 AM - 5:00 PM</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Location</h3>
                  <p className="text-muted-foreground">
                    Main Exhibition Hall<br />
                    Conference Center<br />
                    San Francisco, CA
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Special Events</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Innovation Showcase: Day 1, 2:00 PM</li>
                    <li>Startup Pitch Competition: Day 2, 11:00 AM</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Exhibitor Networking</h3>
                  <p className="text-muted-foreground">
                    Join our exclusive networking reception for exhibitors and attendees on Day 1 at 7:00 PM in the Garden Terrace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </HelmetProvider>
  );
};

export default Exhibition;
