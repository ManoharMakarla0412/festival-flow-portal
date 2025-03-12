
import { useState, useEffect } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, User, Mail, Home, MapPin, Briefcase, DollarSign } from 'lucide-react';

// Categories and pricing
const categories = {
  "Non Member": {
    "Conference Only": 100,
    "Workshop Only": 150,
    "Workshop + Conference": 200,
  },
  "Delegate": {
    "Conference Only": 80,
    "Workshop Only": 120,
    "Workshop + Conference": 180,
  },
  "Foreign Delegate": {
    "Conference Only": 200,
    "Workshop Only": 250,
    "Workshop + Conference": 300,
  },
};

export default function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    pincode: '',
    category: 'Non Member',
    type: 'Conference Only',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const [fee, setFee] = useState(100); // Default fee
  
  // Update fee when category or type changes
  useEffect(() => {
    if (formData.category && formData.type) {
      setFee(categories[formData.category as keyof typeof categories][formData.type as any]);
    }
  }, [formData.category, formData.type]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setFormData(prev => ({
      ...prev,
      category,
      // Reset type to first option of new category
      type: Object.keys(categories[category as keyof typeof categories])[0]
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare data for API
      const apiData = {
        full_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        address: formData.address,
        postal_code: formData.pincode,
        registration_category: formData.category,
        registration_type: formData.type,
        registration_fee: fee,
        // Including required fields even if not visible on form
        phone: "",
        country: "",
        state: "",
        city: "",
        district: ""
      };
      
      // API call
      const response = await fetch("https://osaw.in/v1/dev4/api/tenants/register", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });
      
      const result = await response.json();
      
      setIsSubmitting(false);
      
      if (response.ok && result.success) {
        setIsSuccess(true);
        toast({
          title: "Registration Successful!",
          description: "We've sent the confirmation to your email.",
        });
        
        // Reset form after successful submission
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            pincode: '',
            category: 'Non Member',
            type: 'Conference Only',
          });
        }, 3000);
      } else {
        toast({
          title: "Registration Failed",
          description: result.error?.message || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      setIsSubmitting(false);
      toast({
        title: "Registration Failed",
        description: "Please check your connection and try again.",
        variant: "destructive",
      });
      console.error('Error during registration:', error);
    }
  };
  
  return (
    <>
      <Navbar />
      
      <main className="pt-20 min-h-screen bg-gradient-to-b from-accent/30 to-background">
        <section className="py-16 px-6 md:px-10">
          <div className="container mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gradient">Event Registration</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Register now to secure your spot at this exclusive event and join industry professionals from around the world.
              </p>
              <div className="w-20 h-1 bg-primary mx-auto mt-6 rounded-full" />
            </div>
            
            {/* Success Message */}
            {isSuccess && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
                <div className="glass-card p-8 text-center max-w-md">
                  <div className="text-green-500 flex justify-center mb-4">
                    <CheckCircle2 size={80} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Registration Complete!</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for registering! We've sent the details to your email.
                  </p>
                  <Button 
                    onClick={() => setIsSuccess(false)}
                    className="button-hover"
                  >
                    Close
                  </Button>
                </div>
              </div>
            )}
            
            {/* Registration Form */}
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="animate-slide-right">
                <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
                  <h2 className="text-2xl font-bold mb-6">Attendee Information</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="John"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="pl-10"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="johndoe@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <div className="relative">
                      <Home className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="123 Main St, City"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pincode">Pincode/Postal Code</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        className="pl-10"
                        placeholder="123456"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleCategoryChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        required
                      >
                        {Object.keys(categories).map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="type">Registration Type</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <select
                        id="type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-10 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        required
                      >
                        {Object.keys(categories[formData.category as keyof typeof categories]).map(type => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full button-hover mt-4" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Processing..." : "Complete Registration"}
                  </Button>
                </form>
              </div>
              
              {/* Event Details */}
              <div className="space-y-8 animate-slide-left">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Registration Details</h2>
                  
                  <div className="glass-card p-6 space-y-6">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold">Registration Fee</h3>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span className="text-2xl font-bold text-primary">${fee}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Category:</span>
                        <span className="font-medium">{formData.category}</span>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="font-medium">{formData.type}</span>
                      </div>
                      
                      <div className="border-t border-border pt-4"></div>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">What's included:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CheckCircle2 size={16} className="text-green-500" />
                          <span>Full access to all event sessions</span>
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CheckCircle2 size={16} className="text-green-500" />
                          <span>Conference materials and goodie bag</span>
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CheckCircle2 size={16} className="text-green-500" />
                          <span>Lunch and refreshments</span>
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CheckCircle2 size={16} className="text-green-500" />
                          <span>Networking opportunities</span>
                        </li>
                        <li className="flex items-center gap-2 text-muted-foreground text-sm">
                          <CheckCircle2 size={16} className="text-green-500" />
                          <span>Certificate of participation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="text-lg font-bold mb-4">Important Information</h3>
                  <div className="space-y-4 text-sm text-muted-foreground">
                    <p>
                      Registration closes 7 days before the event. Early registration is recommended as seats are limited.
                    </p>
                    <p>
                      Cancellations received 14 days before the event will receive a full refund. No refunds for cancellations after this date.
                    </p>
                    <p>
                      For any questions about registration, please contact 
                      <a href="mailto:support@event.com" className="text-primary hover:underline ml-1">support@event.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
