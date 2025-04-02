
import React from 'react';
import { MapPin } from 'lucide-react';
import { Property } from '@/services/propertyService';
import { Button } from '@/components/ui/button';

interface RoomMapProps {
  property: Property;
  displayFullMap?: boolean;
}

const RoomMap: React.FC<RoomMapProps> = ({ property, displayFullMap = false }) => {
  // In a real application, we would use the property's coordinates
  // Since we don't have actual coordinates, we'll create a placeholder map
  
  const openGoogleMaps = () => {
    const query = encodeURIComponent(`${property.location} near ${property.university}, Ghana`);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-lg flex items-center">
          <MapPin className="mr-2 h-5 w-5 text-red-500" />
          Location
        </h3>
        <Button 
          variant="outline" 
          size="sm" 
          className="text-xs" 
          onClick={openGoogleMaps}
        >
          View on Google Maps
        </Button>
      </div>
      
      <div className={`bg-slate-200 rounded-lg overflow-hidden ${displayFullMap ? 'h-64' : 'h-40'} relative`}>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-center p-4 bg-white/90 rounded shadow-sm">
            <p className="font-medium">{property.location}</p>
            <p className="text-sm text-gray-600">Near {property.university}</p>
          </div>
        </div>
        
        {/* This would be replaced with an actual map in a real implementation */}
        <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
          <span className="text-sm">Map view available in Google Maps</span>
        </div>
      </div>
      
      <div className="text-sm text-gray-500">
        <p>
          <span className="font-medium">Address:</span> {property.location}, Ghana
        </p>
        <p>
          <span className="font-medium">University:</span> {property.university}
        </p>
        {property.distanceFromUniversity && (
          <p>
            <span className="font-medium">Distance from university:</span> {property.distanceFromUniversity}
          </p>
        )}
      </div>
    </div>
  );
};

export default RoomMap;
