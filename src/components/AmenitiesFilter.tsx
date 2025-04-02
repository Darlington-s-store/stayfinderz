
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface AmenitiesFilterProps {
  amenities: string[];
  selectedAmenities: string[];
  onChange: (amenities: string[]) => void;
}

const AmenitiesFilter: React.FC<AmenitiesFilterProps> = ({
  amenities,
  selectedAmenities,
  onChange
}) => {
  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      onChange([...selectedAmenities, amenity]);
    } else {
      onChange(selectedAmenities.filter(a => a !== amenity));
    }
  };
  
  const handleClearAll = () => {
    onChange([]);
  };

  const popularAmenities = ["WiFi", "Private Bathroom", "Security", "Air Conditioning"];
  const otherAmenities = amenities.filter(a => !popularAmenities.includes(a));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium">Amenities</h3>
        {selectedAmenities.length > 0 && (
          <button 
            className="text-xs text-gray-500 hover:underline"
            onClick={handleClearAll}
          >
            Clear all
          </button>
        )}
      </div>
      
      {selectedAmenities.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {selectedAmenities.map(amenity => (
            <Badge key={amenity} variant="outline" className="flex items-center gap-1 bg-blue-50">
              {amenity}
              <button 
                className="ml-1 hover:text-red-500"
                onClick={() => handleAmenityChange(amenity, false)}
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
      )}
      
      <div className="grid grid-cols-2 gap-2">
        {popularAmenities.map((amenity) => (
          amenities.includes(amenity) && (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox 
                id={`amenity-${amenity}`} 
                checked={selectedAmenities.includes(amenity)}
                onCheckedChange={(checked) => 
                  handleAmenityChange(amenity, checked === true)
                }
              />
              <Label 
                htmlFor={`amenity-${amenity}`}
                className="text-sm cursor-pointer"
              >
                {amenity}
              </Label>
            </div>
          )
        ))}
      </div>
      
      <details className="mt-2">
        <summary className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
          Show all amenities ({otherAmenities.length})
        </summary>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {otherAmenities.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox 
                id={`amenity-${amenity}`} 
                checked={selectedAmenities.includes(amenity)}
                onCheckedChange={(checked) => 
                  handleAmenityChange(amenity, checked === true)
                }
              />
              <Label 
                htmlFor={`amenity-${amenity}`}
                className="text-sm cursor-pointer"
              >
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
};

export default AmenitiesFilter;
