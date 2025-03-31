
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { properties } from "@/data/properties";
import { format } from "date-fns";
import { toast } from "sonner";
import { CalendarIcon, ArrowLeft } from "lucide-react";

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const property = properties.find(p => p.id === id);
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [moveInDate, setMoveInDate] = useState<Date | undefined>(undefined);
  const [duration, setDuration] = useState("1");
  const [message, setMessage] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  
  if (!property) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="mb-6">The property you're trying to book doesn't exist or has been removed.</p>
          <Link to="/listings">
            <Button>Browse All Listings</Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!moveInDate) {
      toast.error("Please select a move-in date");
      return;
    }
    
    if (!agreeToTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    
    // In a real app, this would connect to a backend service
    toast.success("Booking request submitted successfully! The landlord will contact you soon.");
    
    // Redirect to property details after successful submission
    setTimeout(() => {
      navigate(`/property/${id}`);
    }, 2000);
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-6">
          <Link to={`/property/${id}`} className="text-unistay-blue hover:underline inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to property details
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Summary */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <h3 className="text-xl font-semibold">Booking Summary</h3>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="aspect-video overflow-hidden rounded-md">
                <img 
                  src={property.imageUrl} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h4 className="font-semibold text-lg">{property.title}</h4>
              <div className="text-sm text-gray-600">{property.location}</div>
              <div className="text-sm text-gray-600">Near {property.university}</div>
              
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between mb-2">
                  <span>Price per semester</span>
                  <span className="font-semibold">¢{property.price.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Room type</span>
                  <span>{property.roomType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Managed by</span>
                  <span>{property.landlord.name}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Booking Form */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <h3 className="text-xl font-semibold">Complete Your Booking</h3>
              <p className="text-gray-500">Fill in your details to request this accommodation</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      value={firstName}
                      onChange={e => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      value={lastName}
                      onChange={e => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="moveInDate">Move-in Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {moveInDate ? format(moveInDate, "PPP") : <span>Select a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={moveInDate}
                          onSelect={setMoveInDate}
                          initialFocus
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div>
                    <Label htmlFor="duration">Duration (semesters)</Label>
                    <select 
                      id="duration"
                      value={duration}
                      onChange={e => setDuration(e.target.value)}
                      className="w-full flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="1">1 semester</option>
                      <option value="2">2 semesters</option>
                      <option value="3">3 semesters</option>
                      <option value="4">4 semesters (2 years)</option>
                      <option value="full-year">Full year</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message">Message to Landlord (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Introduce yourself and ask any questions you may have..."
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={agreeToTerms}
                    onCheckedChange={() => setAgreeToTerms(!agreeToTerms)}
                  />
                  <Label htmlFor="terms" className="text-sm">
                    I agree to the <Link to="/terms" className="text-unistay-blue hover:underline">terms and conditions</Link> and <Link to="/privacy" className="text-unistay-blue hover:underline">privacy policy</Link>
                  </Label>
                </div>
                
                <div className="pt-4 border-t">
                  <Button type="submit" className="w-full bg-unistay-blue hover:bg-unistay-blue/90">
                    Submit Booking Request
                  </Button>
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    You won't be charged until your booking is confirmed by the landlord
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
