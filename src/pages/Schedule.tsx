
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScheduleTimeline from '@/components/ScheduleTimeline';

// Sample schedule data with explicit type property to match ScheduleItem type
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
        type: 'registration' as const,
      },
      {
        id: 2,
        title: 'Opening Keynote',
        time: '9:00 AM - 10:30 AM',
        date: 'October 15, 2023',
        location: 'Grand Ballroom',
        speaker: 'Dr. Alex Rivera',
        description: 'The Future of Machine Learning: Beyond Neural Networks - An exploration of the next generation of AI technology.',
        type: 'talk' as const,
      },
      {
        id: 3,
        title: 'Coffee Break',
        time: '10:30 AM - 11:00 AM',
        date: 'October 15, 2023',
        location: 'Exhibition Hall',
        description: 'Refresh with coffee and snacks while networking with other attendees.',
        type: 'break' as const,
      },
      {
        id: 4,
        title: 'Panel Discussion: Innovation Trends',
        time: '11:00 AM - 12:30 PM',
        date: 'October 15, 2023',
        location: 'Panel Room A',
        speaker: 'Multiple Speakers',
        description: 'Industry leaders discuss the most important trends in technology and innovation for the coming year.',
        type: 'talk' as const,
      },
      {
        id: 5,
        title: 'Lunch Break',
        time: '12:30 PM - 1:30 PM',
        date: 'October 15, 2023',
        location: 'Dining Hall',
        description: 'Enjoy a catered lunch and network with fellow attendees.',
        type: 'break' as const,
      },
      {
        id: 6,
        title: 'Presentation: Sustainable Tech',
        time: '1:30 PM - 2:30 PM',
        date: 'October 15, 2023',
        location: 'Grand Ballroom',
        speaker: 'Emma Wilson',
        description: 'Innovation with Purpose: Building Technologies for a Better World',
        type: 'talk' as const,
      },
      {
        id: 7,
        title: 'Presentation: UX Design',
        time: '2:45 PM - 3:45 PM',
        date: 'October 15, 2023',
        location: 'Panel Room B',
        speaker: 'Michael Chang',
        description: 'Design Thinking: Creating Human-Centered Technology',
        type: 'talk' as const,
      },
      {
        id: 8,
        title: 'Afternoon Break',
        time: '3:45 PM - 4:15 PM',
        date: 'October 15, 2023',
        location: 'Exhibition Hall',
        description: 'Refresh with coffee and snacks while networking with other attendees.',
        type: 'break' as const,
      },
      {
        id: 9,
        title: 'Exhibition Showcase',
        time: '4:15 PM - 5:30 PM',
        date: 'October 15, 2023',
        location: 'Exhibition Hall',
        description: 'Dedicated time to explore the exhibition booths and connect with innovators.',
        type: 'networking' as const,
      },
      {
        id: 10,
        title: 'Welcome Reception',
        time: '6:00 PM - 8:00 PM',
        date: 'October 15, 2023',
        location: 'Garden Terrace',
        description: 'Join us for drinks, hors d\'oeuvres, and networking in a relaxed setting.',
        type: 'networking' as const,
      },
    ],
  },
  {
    date: 'Day 2 - October 16, 2023',
    items: [
      {
        id: 11,
        title: 'Morning Coffee',
        time: '8:30 AM - 9:00 AM',
        date: 'October 16, 2023',
        location: 'Main Lobby',
        description: 'Start your day with coffee and light refreshments.',
        type: 'break' as const,
      },
      {
        id: 12,
        title: 'Keynote: Biotechnology',
        time: '9:00 AM - 10:00 AM',
        date: 'October 16, 2023',
        location: 'Grand Ballroom',
        speaker: 'Dr. Sophia Lee',
        description: 'Biotechnology: The Next Frontier in Human Health',
        type: 'talk' as const,
      },
      {
        id: 13,
        title: 'Workshops Session',
        time: '10:15 AM - 12:00 PM',
        date: 'October 16, 2023',
        location: 'Workshop Rooms',
        description: 'Choose from three concurrent workshops on AI, Sustainability, or UX Design.',
        type: 'workshop' as const,
      },
      {
        id: 14,
        title: 'Lunch & Networking',
        time: '12:00 PM - 1:30 PM',
        date: 'October 16, 2023',
        location: 'Garden Terrace',
        description: 'Enjoy a catered lunch while making valuable connections with fellow attendees.',
        type: 'break' as const,
      },
      {
        id: 15,
        title: 'Presentation: Cloud Infrastructure',
        time: '1:30 PM - 2:30 PM',
        date: 'October 16, 2023',
        location: 'Panel Room A',
        speaker: 'James Rodriguez',
        description: 'Scaling Infrastructure for the AI Revolution',
        type: 'talk' as const,
      },
      {
        id: 16,
        title: 'Presentation: Quantum Computing',
        time: '2:45 PM - 3:45 PM',
        date: 'October 16, 2023',
        location: 'Grand Ballroom',
        speaker: 'Dr. Robert Chen',
        description: 'Quantum Computing: From Theory to Application',
        type: 'talk' as const,
      },
      {
        id: 17,
        title: 'Closing Panel: Future Trends',
        time: '4:00 PM - 5:00 PM',
        date: 'October 16, 2023',
        location: 'Grand Ballroom',
        speaker: 'All Keynote Speakers',
        description: 'A forward-looking discussion on the intersection of technology, business, and society.',
        type: 'talk' as const,
      },
      {
        id: 18,
        title: 'Closing Remarks & Farewell',
        time: '5:00 PM - 5:30 PM',
        date: 'October 16, 2023',
        location: 'Grand Ballroom',
        speaker: 'Event Chair',
        description: 'Final thoughts and thank you from the conference organizers.',
        type: 'talk' as const,
      },
    ],
  },
];

const Schedule = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Event Management - Program Schedule</title>
        <meta 
          name="description" 
          content="Plan your event experience with our comprehensive schedule of presentations, workshops, and networking opportunities." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        <section className="bg-primary/5 py-20 px-6 md:px-10">
          <div className="container mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary mb-3 animate-fade-in">
              Event Schedule
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              Program Schedule
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto animate-slide-up">
              Here's our comprehensive schedule of presentations, workshops, and networking opportunities. 
              Plan your event experience and make the most of your time at the conference.
            </p>
          </div>
        </section>
        
        <ScheduleTimeline 
          title="Full Conference Schedule"
          description="Browse the complete schedule to plan your conference experience. Click on any session for more details."
          schedule={schedule}
        />
        
        <section className="py-20 px-6 md:px-10">
          <div className="container mx-auto max-w-4xl">
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center">Schedule Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Venue Map</h3>
                  <p className="text-muted-foreground">
                    Maps of the conference venue will be available at the registration desk. You can also download a digital copy from the event app.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Session Recordings</h3>
                  <p className="text-muted-foreground">
                    All sessions will be recorded and made available to registered attendees after the conference. A link will be sent to your registered email.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Workshop Registration</h3>
                  <p className="text-muted-foreground">
                    Workshops have limited capacity and require pre-registration. Please visit the registration desk to sign up for your preferred workshops.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Schedule Changes</h3>
                  <p className="text-muted-foreground">
                    Any updates or changes to the schedule will be announced through the event app and on display boards throughout the venue.
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

export default Schedule;
