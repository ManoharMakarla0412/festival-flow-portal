
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface RegisterSectionProps {
  eventName: string;
  date: string;
  location: string;
  price: string;
  seatsAvailable: number;
}

export function RegisterSection({
  eventName,
  date,
  location,
  price,
  seatsAvailable
}: RegisterSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phoneNumber: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate registration process
    setTimeout(() => {
      toast.success('Registration successful! Check your email for confirmation.');
      setFormData({
        name: '',
        email: '',
        company: '',
        phoneNumber: ''
      });
    }, 1500);
  };
  
  return (
    <section id="register" className="w-full py-16 bg-primary/5">
      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Register Now</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Secure your spot at the Innovation & Technology Conference 2023 and be part of this groundbreaking event.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            {/* Event Details */}
            <div className="bg-card rounded-lg p-6 shadow-sm space-y-4">
              <h3 className="text-xl font-semibold">Event Information</h3>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Event</p>
                  <p className="font-medium">{eventName}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Date & Time</p>
                  <p className="font-medium">{date}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">{location}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Registration Fee</p>
                  <p className="font-medium text-lg text-primary">${price}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground">Availability</p>
                  <p className="font-medium">
                    <span className="text-green-600">{seatsAvailable}</span> seats available
                  </p>
                </div>
              </div>
            </div>
            
            {/* Registration Form */}
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company/Organization</Label>
                  <Input 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company or organization"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input 
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <Button type="submit" className="w-full mt-6">
                  Confirm Registration
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
