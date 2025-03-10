
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import EventDetails from '@/components/EventDetails';
import CommitteeGrid from '@/components/CommitteeGrid';
import ExhibitionShowcase from '@/components/ExhibitionShowcase';
import SpeakersSection from '@/components/SpeakersSection';
import ScheduleTimeline from '@/components/ScheduleTimeline';
import RegisterSection from '@/components/RegisterSection';
import Footer from '@/components/Footer';

// Sample committee members data
const committeeMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Event Chair',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Sarah brings over 15 years of experience in event planning and management, ensuring this conference exceeds all expectations.',
    email: 'sarah@example.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'Mark Thompson',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'With a strong background in technology and innovation, Mark oversees all technical aspects of the event.',
    email: 'mark@example.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 3,
    name: 'Jessica Chen',
    role: 'Marketing Coordinator',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Jessica's creative approach to marketing has been instrumental in building excitement for this event.',
    email: 'jessica@example.com',
    twitter: 'https://twitter.com',
  },
];

// Sample exhibitions data
const exhibitions = [
  {
    id: 1,
    title: 'Future of AI',
    company: 'TechVision Labs',
    description: 'Explore the cutting-edge advancements in artificial intelligence and how they'll shape our world in the coming decade. Interactive demos and expert discussions.',
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
];

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
    bio: 'Dr. Lee's groundbreaking work in biotechnology is opening new frontiers in medicine and environmental science.',
    presentation: 'Biotechnology: The Next Frontier in Human Health',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
];

// Sample schedule data
const schedule = [
  {
    date: 'Day 1 - October 15, 2023',
    items: [
      {
        id: 1,
        title: 'Registration & Welcome Coffee',
        time: '8:00 AM - 9:00 AM',
        date: 'October 15, 2023',
        location: 'Main Lobby',
        description: 'Check in and collect your event materials. Coffee and light refreshments will be provided.',
        type: 'registration',
      },
      {
        id: 2,
        title: 'Opening Keynote',
        time: '9:00 AM - 10:30 AM',
        date: 'October 15, 2023',
        location: 'Grand Ballroom',
        speaker: 'Dr. Alex Rivera',
        description: 'The Future of Machine Learning: Beyond Neural Networks - An exploration of the next generation of AI technology.',
        type: 'talk',
      },
      {
        id: 3,
        title: 'Coffee Break',
        time: '10:30 AM - 11:00 AM',
        date: 'October 15, 2023',
        location: 'Exhibition Hall',
        description: 'Refresh with coffee and snacks while networking with other attendees.',
        type: 'break',
      },
      {
        id: 4,
        title: 'Panel Discussion: Innovation Trends',
        time: '11:00 AM - 12:30 PM',
        date: 'October 15, 2023',
        location: 'Panel Room A',
        speaker: 'Multiple Speakers',
        description: 'Industry leaders discuss the most important trends in technology and innovation for the coming year.',
        type: 'talk',
      },
    ],
  },
  {
    date: 'Day 2 - October 16, 2023',
    items: [
      {
        id: 5,
        title: 'Workshops Session',
        time: '9:00 AM - 12:00 PM',
        date: 'October 16, 2023',
        location: 'Workshop Rooms',
        description: 'Choose from three concurrent workshops on AI, Sustainability, or UX Design.',
        type: 'workshop',
      },
      {
        id: 6,
        title: 'Lunch & Networking',
        time: '12:00 PM - 1:30 PM',
        date: 'October 16, 2023',
        location: 'Garden Terrace',
        description: 'Enjoy a catered lunch while making valuable connections with fellow attendees.',
        type: 'break',
      },
      {
        id: 7,
        title: 'Innovation Showcase',
        time: '1:30 PM - 3:30 PM',
        date: 'October 16, 2023',
        location: 'Exhibition Hall',
        description: 'See demonstrations from cutting-edge startups and established companies showcasing their latest innovations.',
        type: 'networking',
      },
    ],
  },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Event Management - Home</title>
        <meta name="description" content="Join us for an extraordinary event experience that brings together innovation, networking, and knowledge-sharing." />
      </Helmet>
      
      <Navbar />
      
      <main className="overflow-hidden">
        <Hero 
          title="Innovation & Technology Conference 2023"
          subtitle="Join us for an extraordinary event experience that brings together innovation, networking, and knowledge-sharing."
          date="October 15-16, 2023"
          location="Conference Center, San Francisco"
        />
        
        <EventDetails 
          date="October 15-16, 2023"
          time="8:00 AM - 5:00 PM"
          location="Conference Center, San Francisco, CA"
          attendees="500+ Industry Professionals"
          description="Join us for a two-day immersive experience featuring keynote presentations, panel discussions, workshops, and networking opportunities with industry leaders and innovators from around the world."
          about="The Innovation & Technology Conference brings together thought leaders, entrepreneurs, and technologists to explore cutting-edge advancements and future trends. This event provides a unique platform for knowledge exchange, collaboration, and discovery across various sectors including AI, sustainability, healthcare, and more."
        />
        
        <CommitteeGrid 
          title="Organization Committee"
          description="Meet the dedicated team behind this event, working tirelessly to create an exceptional experience for all attendees."
          members={committeeMembers}
          className="bg-primary/5"
        />
        
        <ExhibitionShowcase 
          title="Exhibition Highlights"
          description="Discover innovative ideas and breakthrough technologies from leading companies and startups."
          exhibitions={exhibitions}
        />
        
        <SpeakersSection 
          title="Featured Speakers"
          description="Learn from industry experts and thought leaders who are shaping the future of technology and innovation."
          speakers={speakers}
          className="bg-primary/5"
        />
        
        <ScheduleTimeline 
          title="Program Schedule"
          description="Plan your event experience with our comprehensive schedule of presentations, workshops, and networking opportunities."
          schedule={schedule}
        />
        
        <RegisterSection 
          eventName="Innovation & Technology Conference 2023"
          date="October 15-16, 2023 | 8:00 AM - 5:00 PM"
          location="Conference Center, San Francisco, CA"
          price="$499"
          seatsAvailable={120}
        />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
