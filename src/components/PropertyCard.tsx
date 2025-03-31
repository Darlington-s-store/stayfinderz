
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import SaveButton from "./SaveButton";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  university: string;
  price: number;
  imageUrl: string;
  roomType: string;
  amenities: string[];
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
}) => {
  return (
    <Link to={`/property/${id}`}>
      <Card className="overflow-hidden border property-card-shadow">
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
        <CardContent className="p-4">
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
          
          <div className="mt-4">
            <Badge className="bg-unistay-blue">{roomType}</Badge>
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
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
