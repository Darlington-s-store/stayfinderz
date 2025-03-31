
import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SaveButtonProps {
  propertyId: string;
  initialSaved?: boolean;
  className?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ 
  propertyId, 
  initialSaved = false,
  className = ""
}) => {
  const [isSaved, setIsSaved] = useState(initialSaved);
  const { toast } = useToast();

  const handleToggleSave = () => {
    // In a real app, this would call an API to save/unsave the property
    setIsSaved(!isSaved);
    
    toast({
      title: isSaved ? "Property removed" : "Property saved",
      description: isSaved 
        ? "Property has been removed from your saved list" 
        : "Property has been added to your saved list",
    });
  };

  return (
    <Button
      variant="secondary"
      size="sm"
      className={`bg-white bg-opacity-75 hover:bg-white ${className}`}
      onClick={handleToggleSave}
    >
      <Heart 
        className={`h-4 w-4 ${isSaved ? 'fill-current text-red-500' : 'text-gray-600'}`} 
      />
    </Button>
  );
};

export default SaveButton;
