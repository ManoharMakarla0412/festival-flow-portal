
import { useState } from 'react';
import { Users, Clock, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ScheduleItem {
  id: number;
  title: string;
  time: string;
  date: string;
  location: string;
  speaker?: string;
  description: string;
  type: 'talk' | 'workshop' | 'break' | 'registration' | 'networking';
}

export interface ScheduleDay {
  date: string;
  items: ScheduleItem[];
}

interface ScheduleTimelineProps {
  title: string;
  description: string;
  schedule: ScheduleDay[];
  className?: string;
}

export function ScheduleTimeline({ 
  title, 
  description, 
  schedule, 
  className 
}: ScheduleTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [activeDay, setActiveDay] = useState<number>(0);
  
  const toggleItem = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id) 
        : [...prev, id]
    );
  };
  
  // Get background color based on event type
  const getEventColor = (type: string) => {
    switch (type) {
      case 'talk': return 'bg-primary/10 text-primary';
      case 'workshop': return 'bg-blue-500/10 text-blue-500';
      case 'break': return 'bg-amber-500/10 text-amber-500';
      case 'registration': return 'bg-green-500/10 text-green-500';
      case 'networking': return 'bg-purple-500/10 text-purple-500';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <section className={cn("py-20 px-6 md:px-10", className)}>
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-sm font-medium text-primary mb-3">Event Timeline</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>
        
        {/* Day Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {schedule.map((day, index) => (
            <button
              key={day.date}
              onClick={() => setActiveDay(index)}
              className={cn(
                "px-5 py-3 rounded-xl text-sm font-medium transition-all flex items-center gap-2",
                activeDay === index
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              )}
            >
              <Calendar size={16} />
              <span>{day.date}</span>
            </button>
          ))}
        </div>
        
        {/* Schedule Timeline */}
        <div className="max-w-4xl mx-auto glass-card p-1 sm:p-6 animate-scale-in">
          {schedule[activeDay].items.map((item, index) => (
            <div 
              key={item.id}
              className={cn(
                "group relative border-l-2 border-primary/30 pl-8 py-6",
                "before:absolute before:left-[-8px] before:top-8 before:w-3.5 before:h-3.5 before:rounded-full before:bg-primary before:border-4 before:border-primary/20",
                index === schedule[activeDay].items.length - 1 ? "" : "border-dashed"
              )}
            >
              {/* Time marker */}
              <div className="absolute left-[-70px] top-8 transform -translate-y-1/2 text-sm text-muted-foreground font-medium">
                {item.time}
              </div>
              
              <div 
                className={cn(
                  "glass-card p-6 transition-all hover:shadow-md cursor-pointer",
                  expandedItems.includes(item.id) ? "shadow-md" : ""
                )}
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={cn("text-xs px-3 py-1 rounded-full", getEventColor(item.type))}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                      {item.speaker && (
                        <span className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary flex items-center gap-1">
                          <Users size={12} />
                          <span>{item.speaker}</span>
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-muted-foreground text-sm gap-1.5">
                      <Clock size={14} />
                      <span>{item.time}</span>
                    </div>
                    <button 
                      className="p-1.5 rounded-full bg-secondary hover:bg-primary/10 transition-colors"
                      aria-label={expandedItems.includes(item.id) ? "Collapse" : "Expand"}
                    >
                      {expandedItems.includes(item.id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </div>
                </div>
                
                {expandedItems.includes(item.id) && (
                  <div className="mt-4 pt-4 border-t border-border animate-slide-down">
                    <div className="flex items-center text-muted-foreground text-sm mb-2 gap-1.5">
                      <span className="font-medium text-foreground">Location:</span> {item.location}
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ScheduleTimeline;
