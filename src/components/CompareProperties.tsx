
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { properties } from "@/data/properties";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import { X, ArrowRightLeft } from "lucide-react";

interface Property {
  id: string;
  title: string;
  location: string;
  university: string;
  price: number;
  imageUrl: string;
  roomType: string;
  amenities: string[];
}

interface ComparePropertiesProps {
  currentPropertyId: string;
}

const CompareProperties: React.FC<ComparePropertiesProps> = ({ currentPropertyId }) => {
  const [selectedProperties, setSelectedProperties] = useState<string[]>([currentPropertyId]);
  const currentProperty = properties.find(p => p.id === currentPropertyId);
  
  const handleToggleProperty = (id: string) => {
    if (selectedProperties.includes(id)) {
      setSelectedProperties(selectedProperties.filter(p => p !== id));
    } else {
      if (selectedProperties.length < 3) {
        setSelectedProperties([...selectedProperties, id]);
      }
    }
  };
  
  const handleCompare = () => {
    // In a real app, this would navigate to a comparison page
    console.log("Comparing properties:", selectedProperties);
  };
  
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex gap-2">
          <ArrowRightLeft className="h-4 w-4" />
          Compare
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Compare Properties</DialogTitle>
          <DialogDescription>
            Select up to 3 properties to compare
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <h3 className="font-medium mb-2">Selected Property:</h3>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-md mb-4">
            {currentProperty && (
              <>
                <img 
                  src={currentProperty.imageUrl} 
                  alt={currentProperty.title} 
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="font-medium">{currentProperty.title}</p>
                  <p className="text-sm text-gray-600">{currentProperty.location}</p>
                </div>
              </>
            )}
          </div>
          
          <h3 className="font-medium mb-2">Select properties to compare:</h3>
          <ScrollArea className="h-64 border rounded-md p-2">
            {properties.filter(p => p.id !== currentPropertyId).map((property) => (
              <div 
                key={property.id} 
                className="flex items-center space-x-3 p-2 border-b last:border-b-0"
              >
                <Checkbox 
                  id={`property-${property.id}`}
                  checked={selectedProperties.includes(property.id)}
                  onCheckedChange={() => handleToggleProperty(property.id)}
                  disabled={!selectedProperties.includes(property.id) && selectedProperties.length >= 3}
                />
                <div className="flex items-center gap-3 flex-1">
                  <img 
                    src={property.imageUrl} 
                    alt={property.title} 
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <label 
                      htmlFor={`property-${property.id}`}
                      className="font-medium cursor-pointer"
                    >
                      {property.title}
                    </label>
                    <p className="text-sm text-gray-600">{property.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
        
        <div className="flex justify-between mt-4">
          <Button variant="outline">
            <X className="h-4 w-4 mr-2" />
            Cancel
          </Button>
          <Link to={`/compare?ids=${selectedProperties.join(',')}`}>
            <Button 
              disabled={selectedProperties.length < 2} 
              className="bg-unistay-blue hover:bg-unistay-blue/90"
            >
              <ArrowRightLeft className="h-4 w-4 mr-2" />
              Compare ({selectedProperties.length})
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CompareProperties;
