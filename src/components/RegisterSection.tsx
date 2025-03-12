
import { useState } from 'react';
import { CheckCircle2, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface RegisterSectionProps {
  eventName: string;
  date: string;
  location: string;
  price: string;
  seatsAvailable: number;
  className?: string;
}

export function RegisterSection({ 
  eventName, 
  date, 
  location, 
  price, 
  seatsAvailable, 
  className 
}: RegisterSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Registration successful!",
        description: "We've sent the ticket details to your email.",
      });
    }, 1500);
  };
  
  return (
    <section id="register" className={cn("py-20 px-6 md:px-10 bg-primary/5", className)}>
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block text-sm font-medium text-primary mb-3">Join Us</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Register Now</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Secure your spot at this exclusive event and be part of an inspiring experience.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          {/* Registration Form */}
          <div className="glass-card p-8 animate-slide-right">
            {isSuccess ? (
              <div className="text-center py-8">
                <div className="mb-6 text-green-500 flex justify-center">
                  <CheckCircle2 size={80} />
                </div>
                <h3 className="text-2xl font-bold mb-3">Registration Complete!</h3>
                <p className="text-muted-foreground mb-8">
                  Thank you for registering. We've sent all the details to your email.
                </p>
                <Button className="w-full button-hover" onClick={() => setIsSuccess(false)}>
                  Register Another Attendee
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold mb-6">Attendee Information</h3>
                
                <div className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="organization">Organization/Company</Label>
                    <Input
                      id="organization"
                      name="organization"
                      placeholder="Enter your organization name"
                      value={formData.organization}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full button-hover mt-4" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Complete Registration"}
                  </Button>
                </div>
              </form>
            )}
          </div>
          
          {/* Event Details */}
          <div className="space-y-8 animate-slide-left">
            <div>
              <h3 className="text-2xl font-bold mb-6">Event Details</h3>
              
              <div className="space-y-6 glass-card p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date & Time</p>
                    <p className="font-medium">{date}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">{location}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Availability</p>
                    <p className="font-medium">{seatsAvailable} seats remaining</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-bold">Ticket Price</h4>
                <span className="text-2xl font-bold text-primary">{price}</span>
              </div>
              
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Full event access</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Workshop materials</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Networking opportunities</span>
                </li>
                <li className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle2 size={16} className="text-green-500" />
                  <span>Lunch and refreshments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
