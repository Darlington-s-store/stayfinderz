
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import SaveButton from "./SaveButton";
import PropertyContactButtons from "./PropertyContactButtons";

interface PropertyCardProps {
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
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  id,
  title,
  location,
  university,
  price,
  imageUrl,
  roomType,
  amenities,
  landlordName,
  landlordPhone,
}) => {
  const [showContact, setShowContact] = useState(false);
  
  return (
    <Card className="overflow-hidden border property-card-shadow">
      <Link to={`/property/${id}`}>
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <SaveButton 
            propertyId={id}
            className="absolute top-2 right-2"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/property/${id}`}>
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="line-clamp-1">{location}</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">Near {university}</p>
            </div>
            <p className="font-bold text-lg">
              ¢{price.toLocaleString()}
              <span className="text-sm font-normal text-gray-500">/semester</span>
            </p>
          </div>
        </Link>
        
        <div className="mt-4">
          <div className="flex justify-between items-center mb-2">
            <Badge className="bg-unistay-blue">{roomType}</Badge>
            {landlordName && landlordPhone && (
              <button 
                onClick={() => setShowContact(!showContact)}
                className="text-xs text-unistay-blue hover:underline"
              >
                {showContact ? "Hide contact" : "Show contact"}
              </button>
            )}
          </div>
          
          {showContact && landlordName && landlordPhone && (
            <div className="mb-3">
              <PropertyContactButtons
                phone={landlordPhone}
                name={landlordName}
                propertyTitle={title}
                size="sm"
                className="w-full mb-2"
              />
            </div>
          )}
          
          <div className="flex flex-wrap gap-1 mt-2">
            {amenities.slice(0, 3).map((amenity) => (
              <Badge key={amenity} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
            {amenities.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{amenities.length - 3} more
              </Badge>
            )}
          </div>
          
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link to={`/property/${id}`} className="w-full">
              <Button variant="outline" size="sm" className="w-full">View Details</Button>
            </Link>
            <Link to={`/booking/${id}`} className="w-full">
              <Button size="sm" className="w-full bg-unistay-blue hover:bg-unistay-blue/90">Book Now</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
