
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Property, getPropertyById } from '@/services/propertyService';
import { Badge } from '@/components/ui/badge';

interface RecentlyViewedProps {
  currentPropertyId?: string;
  limit?: number;
}

const RecentlyViewed: React.FC<RecentlyViewedProps> = ({
  currentPropertyId,
  limit = 3
}) => {
  const [recentProperties, setRecentProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Get recently viewed properties from localStorage
    const getRecentlyViewed = () => {
      const stored = localStorage.getItem('unistay_recently_viewed');
      return stored ? JSON.parse(stored) : [];
    };

    // Add current property to recently viewed
    if (currentPropertyId) {
      const recentIds = getRecentlyViewed();
      
      // Remove if exists to avoid duplicates
      const filteredIds = recentIds.filter((id: string) => id !== currentPropertyId);
      
      // Add to front of array
      const newRecentIds = [currentPropertyId, ...filteredIds].slice(0, 10); // Keep max 10
      
      // Save back to localStorage
      localStorage.setItem('unistay_recently_viewed', JSON.stringify(newRecentIds));
    }
    
    // Load properties
    const recentIds = getRecentlyViewed();
    
    // Filter out current property id
    const idsToShow = currentPropertyId 
      ? recentIds.filter((id: string) => id !== currentPropertyId).slice(0, limit)
      : recentIds.slice(0, limit);
      
    // Get property details for each ID
    const properties = idsToShow
      .map((id: string) => getPropertyById(id))
      .filter((p): p is Property => p !== undefined);
      
    setRecentProperties(properties);
  }, [currentPropertyId, limit]);
  
  if (recentProperties.length === 0) {
    return null; // Don't show if no recent properties
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-medium text-lg flex items-center">
          <Clock className="mr-2 h-5 w-5" />
          Recently Viewed
        </h3>
        <Link to="/listings" className="text-sm text-blue-600 flex items-center hover:underline">
          View all <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {recentProperties.map((property) => (
          <Link 
            key={property.id} 
            to={`/property/${property.id}`}
            className="group relative block overflow-hidden rounded-lg border hover:border-blue-300 transition-colors"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={property.imageUrl} 
                alt={property.title} 
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3">
              <h4 className="font-medium line-clamp-1">{property.title}</h4>
              <p className="text-sm text-gray-500 line-clamp-1">{property.location}</p>
              <div className="mt-2 flex items-center justify-between">
                <Badge variant="outline">{property.roomType}</Badge>
                <span className="font-bold">¢{property.price.toLocaleString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
