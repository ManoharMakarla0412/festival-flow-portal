
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CommitteeGrid } from '@/components/CommitteeGrid';

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
  {
    id: 4,
    name: 'David Wilson',
    role: 'Logistics Manager',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'David ensures all event operations run smoothly, from venue management to vendor coordination.',
    email: 'david@example.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 5,
    name: 'Michelle Rodriguez',
    role: 'Speaker Liaison',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Michelle works directly with our speakers to coordinate presentations and ensure an engaging program.',
    email: 'michelle@example.com',
    twitter: 'https://twitter.com',
  },
  {
    id: 6,
    name: 'Robert Kim',
    role: 'Sponsorship Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Robert builds relationships with sponsors and partners to support the event and enhance the attendee experience.',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 7,
    name: 'Emily Patel',
    role: 'Content Strategist',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Emily develops the conference themes and content strategy to deliver maximum value to attendees.',
    email: 'emily@example.com',
    twitter: 'https://twitter.com',
  },
  {
    id: 8,
    name: 'James Scott',
    role: 'Exhibition Coordinator',
    image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'James coordinates all aspects of the exhibition space, working with exhibitors to create engaging displays.',
    email: 'james@example.com',
    linkedin: 'https://linkedin.com',
  },
  {
    id: 9,
    name: 'Lisa Wong',
    role: 'Financial Director',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Lisa manages the event budget and financial operations, ensuring resources are allocated effectively.',
    linkedin: 'https://linkedin.com',
  },
];

// Executive committee
const executiveCommittee = committeeMembers.slice(0, 3);
const organizingCommittee = committeeMembers.slice(3, 9);

const Committee = () => {
  return (
    <>
      <Helmet>
        <title>Event Management - Organization Committee</title>
        <meta 
          name="description" 
          content="Meet the dedicated team behind this event, working tirelessly to create an exceptional experience for all attendees." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="bg-primary/5 py-20 px-6 md:px-10">
          <div className="container mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-3 animate-fade-in">
              Meet Our Team
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Organization Committee
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Our event is organized by a dedicated team of professionals with extensive experience in event management, 
              technology, marketing, and more. Together, they work to create an unforgettable conference experience.
            </p>
          </div>
        </section>
        
        <CommitteeGrid 
          title="Executive Committee"
          description="Meet our leadership team responsible for the overall vision and direction of the event."
          members={executiveCommittee}
          className="py-20"
        />
        
        <CommitteeGrid 
          title="Organizing Committee"
          description="These dedicated professionals handle all aspects of planning and executing the event."
          members={organizingCommittee}
          className="bg-primary/5"
        />
        
        <section className="py-20 px-6 md:px-10">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our committee is united by a shared commitment to fostering innovation, facilitating knowledge exchange, 
                and creating meaningful connections within the technology community. We believe in the power of bringing 
                diverse perspectives together to inspire new ideas and drive positive change.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each member of our team brings unique expertise and passion to their role, contributing to an event 
                that delivers exceptional value to all participants. From curating thought-provoking content to 
                ensuring seamless logistics, our focus is on creating an environment where learning, collaboration, 
                and discovery can flourish.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Committee;
