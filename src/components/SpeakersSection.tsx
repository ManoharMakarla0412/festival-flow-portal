
import { useState } from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export interface Speaker {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  bio: string;
  presentation?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
}

interface SpeakersSectionProps {
  title: string;
  description: string;
  speakers: Speaker[];
  className?: string;
}

export function SpeakersSection({ 
  title, 
  description, 
  speakers, 
  className 
}: SpeakersSectionProps) {
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  
  return (
    <section className={cn("py-20 px-6 md:px-10", className)}>
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-sm font-medium text-primary mb-3">Expert Insights</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>
        
        {/* Speakers Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div 
              key={speaker.id}
              onClick={() => setSelectedSpeaker(speaker)}
              className="group glass-card p-6 cursor-pointer transition-all hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-105" 
                />
                
                {/* Social links overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                  <div className="flex space-x-3">
                    {speaker.linkedin && (
                      <a 
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`LinkedIn profile of ${speaker.name}`}
                      >
                        <Linkedin size={18} />
                      </a>
                    )}
                    
                    {speaker.twitter && (
                      <a 
                        href={speaker.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Twitter profile of ${speaker.name}`}
                      >
                        <Twitter size={18} />
                      </a>
                    )}
                    
                    {speaker.website && (
                      <a 
                        href={speaker.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`Website of ${speaker.name}`}
                      >
                        <Globe size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold">{speaker.name}</h3>
                <p className="text-primary font-medium">{speaker.role}</p>
                <p className="text-muted-foreground text-sm">{speaker.company}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Speaker Details Dialog */}
        <Dialog open={!!selectedSpeaker} onOpenChange={() => setSelectedSpeaker(null)}>
          <DialogContent className="sm:max-w-3xl">
            {selectedSpeaker && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedSpeaker.name}</DialogTitle>
                  <DialogDescription>{selectedSpeaker.role} at {selectedSpeaker.company}</DialogDescription>
                </DialogHeader>
                
                <div className="grid sm:grid-cols-3 gap-6 mt-4">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={selectedSpeaker.image} 
                      alt={selectedSpeaker.name} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="sm:col-span-2 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Bio</h4>
                      <p>{selectedSpeaker.bio}</p>
                    </div>
                    
                    {selectedSpeaker.presentation && (
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Presentation Topic</h4>
                        <p className="font-medium">{selectedSpeaker.presentation}</p>
                      </div>
                    )}
                    
                    <div className="flex space-x-3 pt-2">
                      {selectedSpeaker.linkedin && (
                        <Button variant="outline" size="sm" className="button-hover" asChild>
                          <a 
                            href={selectedSpeaker.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Linkedin size={16} />
                            <span>LinkedIn</span>
                          </a>
                        </Button>
                      )}
                      
                      {selectedSpeaker.twitter && (
                        <Button variant="outline" size="sm" className="button-hover" asChild>
                          <a 
                            href={selectedSpeaker.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Twitter size={16} />
                            <span>Twitter</span>
                          </a>
                        </Button>
                      )}
                      
                      {selectedSpeaker.website && (
                        <Button variant="outline" size="sm" className="button-hover" asChild>
                          <a 
                            href={selectedSpeaker.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <Globe size={16} />
                            <span>Website</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

export default SpeakersSection;
