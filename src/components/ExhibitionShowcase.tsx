
import { ExternalLink, Info } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export interface Exhibition {
  id: number;
  title: string;
  company: string;
  description: string;
  image: string;
  category: string;
  website?: string;
}

interface ExhibitionShowcaseProps {
  title: string;
  description: string;
  exhibitions: Exhibition[];
  className?: string;
}

export function ExhibitionShowcase({ 
  title, 
  description, 
  exhibitions, 
  className 
}: ExhibitionShowcaseProps) {
  const [selectedExhibition, setSelectedExhibition] = useState<Exhibition | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Get unique categories
  const categories = ['all', ...new Set(exhibitions.map(ex => ex.category))];
  
  // Filter exhibitions by category
  const filteredExhibitions = activeCategory === 'all' 
    ? exhibitions 
    : exhibitions.filter(ex => ex.category === activeCategory);
  
  return (
    <section className={cn("py-20 px-4", className)}>
      <div className="w-full mx-0">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-sm font-medium text-primary mb-3">Discover Innovation</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">{description}</p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary text-foreground hover:bg-primary/10"
              )}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Exhibitions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExhibitions.map((exhibition, index) => (
            <div 
              key={exhibition.id} 
              className="group overflow-hidden transition-all hover:shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={exhibition.image} 
                  alt={exhibition.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exhibition.title}</h3>
                    <p className="text-primary font-medium">{exhibition.company}</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {exhibition.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground line-clamp-2 mb-4">{exhibition.description}</p>
                
                <div className="flex space-x-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="button-hover flex items-center gap-2"
                    onClick={() => setSelectedExhibition(exhibition)}
                  >
                    <Info size={16} />
                    <span>Details</span>
                  </Button>
                  
                  {exhibition.website && (
                    <Button
                      variant="default"
                      size="sm"
                      className="button-hover flex items-center gap-2"
                      asChild
                    >
                      <a 
                        href={exhibition.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} />
                        <span>Visit</span>
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Exhibition Details Dialog */}
        <Dialog open={!!selectedExhibition} onOpenChange={() => setSelectedExhibition(null)}>
          <DialogContent className="sm:max-w-3xl">
            {selectedExhibition && (
              <>
                <DialogHeader>
                  <DialogTitle>{selectedExhibition.title}</DialogTitle>
                  <DialogDescription>{selectedExhibition.company}</DialogDescription>
                </DialogHeader>
                
                <div className="grid sm:grid-cols-2 gap-6 mt-4">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={selectedExhibition.image} 
                      alt={selectedExhibition.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Category</h4>
                      <p className="font-medium">{selectedExhibition.category}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Description</h4>
                      <p>{selectedExhibition.description}</p>
                    </div>
                    
                    {selectedExhibition.website && (
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-1">Website</h4>
                        <a 
                          href={selectedExhibition.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {selectedExhibition.website}
                        </a>
                      </div>
                    )}
                    
                    <Button 
                      className="w-full mt-4 button-hover"
                      asChild
                    >
                      <a 
                        href={selectedExhibition.website || '#'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
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

export default ExhibitionShowcase;
