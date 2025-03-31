
import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyContactButtonsProps {
  phone: string;
  name: string;
  propertyTitle: string;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const PropertyContactButtons = ({ 
  phone, 
  name, 
  propertyTitle,
  size = "default",
  className = "",
  variant = "default"
}: PropertyContactButtonsProps) => {
  // Format phone number for WhatsApp (remove spaces, +, etc.)
  const formattedPhone = phone.replace(/\s+/g, "").replace("+", "");
  
  // Create WhatsApp message
  const whatsappMessage = `Hello ${name}, I am interested in your property "${propertyTitle}" listed on UniStay. Could you provide more information?`;
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(whatsappMessage)}`;
  
  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <div className={`flex gap-2 ${className}`}>
      <Button 
        onClick={handleCall}
        size={size}
        variant={variant}
        className="flex items-center gap-2"
      >
        <Phone size={16} /> Call
      </Button>
      
      <Button
        onClick={() => window.open(whatsappUrl, "_blank")}
        size={size}
        variant={variant === "default" ? "secondary" : variant}
        className="flex items-center gap-2"
      >
        <MessageSquare size={16} /> WhatsApp
      </Button>
    </div>
  );
};

export default PropertyContactButtons;
