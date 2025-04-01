
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { addToFavorites, removeFromFavorites, isPropertyInFavorites } from "@/services/propertyService";

interface SaveButtonProps {
  propertyId: string;
  className?: string;
}

const SaveButton: React.FC<SaveButtonProps> = ({ 
  propertyId,
  className = ""
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if property is in favorites when component mounts
    setIsSaved(isPropertyInFavorites(propertyId));
  }, [propertyId]);

  const handleToggleSave = (e: React.MouseEvent) => {
    // Stop event propagation to prevent navigation if inside a link
    e.stopPropagation();
    
    if (isSaved) {
      removeFromFavorites(propertyId);
      setIsSaved(false);
      toast({
        title: "Property removed",
        description: "Property has been removed from your saved list",
      });
    } else {
      addToFavorites(propertyId);
      setIsSaved(true);
      toast({
        title: "Property saved",
        description: "Property has been added to your saved list",
      });
    }
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
