
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CommitteeMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  email?: string;
  linkedin?: string;
  twitter?: string;
}

interface CommitteeGridProps {
  title: string;
  description: string;
  members: CommitteeMember[];
  className?: string;
}

export function CommitteeGrid({ 
  title, 
  description, 
  members, 
  className 
}: CommitteeGridProps) {
  return (
    <section className={cn("py-20 px-6 md:px-10", className)}>
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-sm font-medium text-primary mb-3">Meet Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>
        
        {/* Committee Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div 
              key={member.id} 
              className="group glass-card p-6 transition-all hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-6 overflow-hidden rounded-xl">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover transition-transform group-hover:scale-105" 
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
                <p className="text-muted-foreground line-clamp-3">{member.bio}</p>
                
                {/* Social Links */}
                <div className="flex space-x-3 pt-3">
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`} 
                      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  )}
                  
                  {member.linkedin && (
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <Linkedin size={18} />
                    </a>
                  )}
                  
                  {member.twitter && (
                    <a 
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                      aria-label={`Twitter profile of ${member.name}`}
                    >
                      <Twitter size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CommitteeGrid;
