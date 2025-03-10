
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpeakersSection from '@/components/SpeakersSection';

// Sample speakers data
const speakers = [
  {
    id: 1,
    name: 'Dr. Alex Rivera',
    role: 'AI Researcher',
    company: 'Tech University',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Dr. Rivera is a leading researcher in artificial intelligence, focusing on machine learning algorithms that mimic human cognitive processes.',
    presentation: 'The Future of Machine Learning: Beyond Neural Networks',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    id: 2,
    name: 'Emma Wilson',
    role: 'CEO',
    company: 'Innovate Inc.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Emma has led Innovate Inc. to become a leader in sustainable technology solutions, with a focus on ethical business practices.',
    presentation: 'Innovation with Purpose: Building Technologies for a Better World',
    linkedin: 'https://linkedin.com',
    website: 'https://example.com',
  },
  {
    id: 3,
    name: 'Michael Chang',
    role: 'Design Director',
    company: 'UX Masters',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Michael specializes in user experience design that bridges technology and human needs, creating intuitive and beautiful interfaces.',
    presentation: 'Design Thinking: Creating Human-Centered Technology',
    twitter: 'https://twitter.com',
    website: 'https://example.com',
  },
  {
    id: 4,
    name: 'Dr. Sophia Lee',
    role: 'Biotech Researcher',
    company: 'BioFuture Labs',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: "Dr. Lee's groundbreaking work in biotechnology is opening new frontiers in medicine and environmental science.",
    presentation: 'Biotechnology: The Next Frontier in Human Health',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    id: 5,
    name: 'James Rodriguez',
    role: 'VP of Engineering',
    company: 'CloudTech Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'James leads engineering teams building the next generation of cloud infrastructure and distributed systems.',
    presentation: 'Scaling Infrastructure for the AI Revolution',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    id: 6,
    name: 'Sarah Thompson',
    role: 'Sustainability Consultant',
    company: 'GreenFuture',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Sarah helps organizations implement sustainable practices and reduce their environmental impact through innovative technology solutions.',
    presentation: 'Tech for Good: Building a Sustainable Future',
    linkedin: 'https://linkedin.com',
    website: 'https://example.com',
  },
  {
    id: 7,
    name: 'Dr. Robert Chen',
    role: 'Quantum Computing Scientist',
    company: 'Quantum Research Institute',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Dr. Chen is at the forefront of quantum computing research, developing algorithms that will revolutionize computing capabilities.',
    presentation: 'Quantum Computing: From Theory to Application',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  {
    id: 8,
    name: 'Amara Singh',
    role: 'Cybersecurity Expert',
    company: 'SecureNet',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Amara specializes in developing advanced cybersecurity protocols to protect organizations in an increasingly connected world.',
    presentation: 'Cybersecurity in the Age of AI: New Threats and Defenses',
    twitter: 'https://twitter.com',
    website: 'https://example.com',
  },
];

// Featured keynote speakers
const keynoteSpeakers = speakers.slice(0, 4);
const industrySpeakers = speakers.slice(4, 8);

const Speakers = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Event Management - Speakers</title>
        <meta 
          name="description" 
          content="Learn from industry experts and thought leaders who are shaping the future of technology and innovation." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="bg-primary/5 py-20 px-6 md:px-10">
          <div className="container mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-3 animate-fade-in">
              Learn from the Best
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Conference Speakers
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Our conference brings together the brightest minds in technology, innovation, and business. 
              These thought leaders will share insights, trends, and visions that will shape the future.
            </p>
          </div>
        </section>
        
        <SpeakersSection 
          title="Keynote Speakers"
          description="Hear from our distinguished keynote speakers who will deliver powerful insights on the most important topics in innovation and technology."
          speakers={keynoteSpeakers}
        />
        
        <SpeakersSection 
          title="Industry Experts"
          description="Learn from specialists who are leading innovation in their respective fields and industries."
          speakers={industrySpeakers}
          className="bg-primary/5"
        />
        
        <section className="py-20 px-6 md:px-10">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Speaker Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Session Format</h3>
                  <p className="text-muted-foreground">
                    Each speaker presentation will be 45 minutes followed by a 15-minute Q&A session. Keynote presentations will be 60 minutes with a 30-minute panel discussion.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Meet & Greet</h3>
                  <p className="text-muted-foreground">
                    Join our speakers at the networking reception on Day 1 from 6:00 PM to 8:00 PM. This is an excellent opportunity to engage with speakers one-on-one and discuss topics in more depth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Workshop Opportunities</h3>
                  <p className="text-muted-foreground">
                    Several speakers will also conduct in-depth workshops on Day 2. These smaller, interactive sessions provide hands-on learning experiences. Space is limited, so early registration is recommended.
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

export default Speakers;
