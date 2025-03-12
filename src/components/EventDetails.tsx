
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

interface EventDetailsProps {
  date: string;
  time: string;
  location: string;
  attendees: string;
  description: string;
  about: string;
  className?: string;
}

export function EventDetails({
  date,
  time,
  location,
  attendees,
  description,
  about,
  className
}: EventDetailsProps) {
  return (
    <section 
      id="event-details"
      className={cn(
        "w-full py-16 md:py-20",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <span className="inline-block text-sm font-medium text-primary mb-3">About the Event</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Details</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Event Info */}
          <div className="space-y-8 animate-slide-right">
            <div className="glass-card p-6 md:p-8 space-y-6">
              <h3 className="text-2xl font-bold">Quick Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">{date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-medium">{time}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Attendees</p>
                    <p className="font-medium">{attendees}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Event Description */}
          <div className="space-y-8 animate-slide-left">
            <div>
              <h3 className="text-2xl font-bold mb-4">Description</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">About the Event</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {about}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
