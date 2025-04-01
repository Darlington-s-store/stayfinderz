
import React from 'react';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

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

  return (
    <div className="space-y-3">
      <h3 className="font-medium">Amenities</h3>
      <div className="grid grid-cols-2 gap-2">
        {amenities.map((amenity) => (
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
    </div>
  );
};

export default AmenitiesFilter;
