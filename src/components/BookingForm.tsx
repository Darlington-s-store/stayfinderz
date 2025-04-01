
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Property } from "@/services/propertyService";

const formSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  studentId: z.string().min(4, "Student ID must be at least 4 characters"),
  university: z.string().min(1, "Please select your university"),
  propertyId: z.string().min(1, "Please select a hostel"),
  roomType: z.string().min(1, "Please select a room type"),
  moveInDate: z.string().min(1, "Please select a move-in date"),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
});

type BookingFormProps = {
  initialPropertyId?: string;
  availableProperties: Property[];
};

const BookingForm: React.FC<BookingFormProps> = ({ 
  initialPropertyId,
  availableProperties
}) => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter only properties with available rooms
  const bookableProperties = availableProperties.filter(
    property => property.roomAvailability && property.roomAvailability.available > 0
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      studentId: "",
      university: "",
      propertyId: initialPropertyId || "",
      roomType: "",
      moveInDate: "",
      termsAccepted: false,
    },
  });

  const selectedPropertyId = form.watch("propertyId");
  const selectedProperty = selectedPropertyId 
    ? bookableProperties.find(p => p.id === selectedPropertyId) 
    : null;

  // Get unique universities from available properties
  const universities = [...new Set(bookableProperties.map(p => p.university))];

  // Handle form submission
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would call an API
      console.log("Booking submitted:", values);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Booking submitted successfully! We'll contact you soon.", {
        description: `Your booking request for ${selectedProperty?.title} has been received.`,
      });
      
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your.email@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+233 XX XXX XXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="studentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Student ID</FormLabel>
                <FormControl>
                  <Input placeholder="Your student ID number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="university"
            render={({ field }) => (
              <FormItem>
                <FormLabel>University</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your university" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {universities.map(uni => (
                      <SelectItem key={uni} value={uni}>
                        {uni}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="propertyId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Hostel</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a hostel" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {bookableProperties.map(property => (
                      <SelectItem key={property.id} value={property.id}>
                        {property.title} - {property.roomAvailability?.available} room(s) available
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="roomType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Room Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  disabled={!selectedPropertyId}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {selectedProperty && (
                      <SelectItem value={selectedProperty.roomType}>
                        {selectedProperty.roomType}
                      </SelectItem>
                    )}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="moveInDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Move-in Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        {selectedProperty && (
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="font-semibold mb-2">Selected Hostel Summary</h3>
            <p className="text-sm mb-1"><span className="font-medium">Hostel:</span> {selectedProperty.title}</p>
            <p className="text-sm mb-1"><span className="font-medium">Location:</span> {selectedProperty.location}</p>
            <p className="text-sm mb-1"><span className="font-medium">Price:</span> ¢{selectedProperty.price.toLocaleString()}/semester</p>
            <p className="text-sm"><span className="font-medium">Available Rooms:</span> {selectedProperty.roomAvailability?.available} of {selectedProperty.roomAvailability?.total}</p>
          </div>
        )}
        
        <FormField
          control={form.control}
          name="termsAccepted"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm font-normal">
                  I agree to the terms and conditions, and consent to the processing of my data.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          className="w-full bg-unistay-blue hover:bg-unistay-blue/90"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Processing..." : "Submit Booking Request"}
        </Button>
      </form>
    </Form>
  );
};

export default BookingForm;
