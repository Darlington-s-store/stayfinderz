
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import PropertyCard from './PropertyCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  location: string;
  university: string;
  price: number;
  imageUrl: string;
  roomType: string;
  amenities: string[];
  landlordName?: string;
  landlordPhone?: string;
  roomAvailability?: {
    total: number;
    available: number;
    occupied: number;
  };
}

interface SimilarPropertiesProps {
  currentPropertyId: string;
  university: string;
  properties: Property[];
  maxToShow?: number;
}

const SimilarProperties: React.FC<SimilarPropertiesProps> = ({
  currentPropertyId,
  university,
  properties,
  maxToShow = 3,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Filter properties by university and available rooms, excluding current property
  const similarProperties = properties
    .filter(
      (property) => 
        property.id !== currentPropertyId && 
        property.university === university && 
        property.roomAvailability && 
        property.roomAvailability.available > 0
    )
    .slice(0, maxToShow);

  if (similarProperties.length === 0) return null;

  return (
    <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Available Alternative Hostels</h3>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              {isOpen ? (
                <ChevronUp className="h-4 w-4" />
              ) : (
                <ChevronDown className="h-4 w-4" />
              )}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">
          Other available properties near {university}
        </p>
        
        <CollapsibleContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {similarProperties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                location={property.location}
                university={property.university}
                price={property.price}
                imageUrl={property.imageUrl}
                roomType={property.roomType}
                amenities={property.amenities}
                landlordName={property.landlordName}
                landlordPhone={property.landlordPhone}
                roomAvailability={property.roomAvailability}
              />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default SimilarProperties;
