
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Check, X } from "lucide-react";
import SaveButton from "./SaveButton";
import PropertyContactButtons from "./PropertyContactButtons";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

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
  roomAvailability?: {
    total: number;
    available: number;
    occupied: number;
  };
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
  roomAvailability,
}) => {
  const [showContact, setShowContact] = useState(false);
  
  // Calculate if rooms are available
  const hasAvailableRooms = roomAvailability && roomAvailability.available > 0;

  // Helper function to ensure image URLs are properly formatted
  const getImageUrl = (url: string) => {
    // If the URL starts with http or https, return it as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // For relative URLs, ensure they're properly formatted
    // If the URL starts with a slash, use it as is, otherwise add a leading slash
    return url.startsWith('/') ? url : `/${url}`;
  };
  
  return (
    <Card className="overflow-hidden border property-card-shadow">
      <Link to={`/property/${id}`}>
        <div className="aspect-video overflow-hidden relative">
          <img 
            src={getImageUrl(imageUrl)} 
            alt={title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
              target.onerror = null; // Prevent infinite loop
            }}
          />
          <SaveButton 
            propertyId={id}
            className="absolute top-2 right-2"
          />
          
          {roomAvailability && (
            <div className="absolute bottom-2 right-2">
              <Badge className={`${hasAvailableRooms ? 'bg-green-500' : 'bg-red-500'}`}>
                {hasAvailableRooms ? (
                  <span className="flex items-center"><Check size={14} className="mr-1" /> Rooms Available</span>
                ) : (
                  <span className="flex items-center"><X size={14} className="mr-1" /> Fully Occupied</span>
                )}
              </Badge>
            </div>
          )}
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
        
        {roomAvailability && (
          <div className="mt-3 mb-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 flex items-center">
                <Bed className="h-4 w-4 mr-1" /> Room status:
              </span>
              <span className="font-medium">
                {roomAvailability.available} / {roomAvailability.total} available
              </span>
            </div>
            
            {!hasAvailableRooms && (
              <Alert variant="destructive" className="mt-2 py-2 text-xs">
                <AlertTitle className="text-sm">No rooms available</AlertTitle>
                <AlertDescription>
                  This property is currently fully occupied. Check other options below.
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}
        
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
              <Button size="sm" className="w-full bg-unistay-blue hover:bg-unistay-blue/90" disabled={!hasAvailableRooms}>
                {hasAvailableRooms ? 'Book Now' : 'No Rooms'}
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
