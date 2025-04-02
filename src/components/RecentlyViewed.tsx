
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { Property, getPropertyById, updatePropertyWithOnlineImages } from '@/services/propertyService';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface RecentlyViewedProps {
  currentPropertyId?: string;
  limit?: number;
}

const RecentlyViewed: React.FC<RecentlyViewedProps> = ({
  currentPropertyId,
  limit = 3
}) => {
  const [recentProperties, setRecentProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

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
      
    // Start loading
    setLoading(true);
    
    // Get property details for each ID
    const fetchPropertiesWithImages = async () => {
      try {
        const propertiesPromises = idsToShow.map(async (id: string) => {
          // Get the base property
          const property = getPropertyById(id);
          if (!property) return null;
          
          // Try to fetch online images if needed
          if (!property.onlineImages || property.onlineImages.length === 0) {
            await updatePropertyWithOnlineImages(id);
          }
          
          return property;
        });
        
        const properties = await Promise.all(propertiesPromises);
        setRecentProperties(properties.filter(Boolean) as Property[]);
      } catch (error) {
        console.error('Error fetching properties with images:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPropertiesWithImages();
  }, [currentPropertyId, limit]);
  
  if (loading) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-lg flex items-center">
            <Clock className="mr-2 h-5 w-5" /> 
            Recently Viewed
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="animate-pulse rounded-lg border p-3 h-64">
              <div className="bg-slate-200 w-full h-40 rounded-md mb-2"></div>
              <div className="bg-slate-200 w-3/4 h-4 rounded-md mb-2"></div>
              <div className="bg-slate-200 w-1/2 h-4 rounded-md"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  if (recentProperties.length === 0) {
    return null; // Don't show if no recent properties
  }

  // Helper function to ensure image URLs are properly formatted
  const getImageUrl = (property: Property) => {
    // First check if the property has online images
    if (property.onlineImages && property.onlineImages.length > 0) {
      return property.onlineImages[0];
    }
    
    const url = property.imageUrl;
    
    // If the URL starts with http or https, return it as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // For relative URLs, ensure they're properly formatted
    return url.startsWith('/') ? url : `/${url}`;
  };

  return (
    <div className="space-y-4 mt-8 border-t pt-8">
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
          <Card key={property.id} className="overflow-hidden group hover:border-blue-300 transition-colors">
            <Link to={`/property/${property.id}`}>
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={getImageUrl(property)} 
                  alt={property.title} 
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                    target.onerror = null; // Prevent infinite loop
                  }}
                />
              </div>
              <CardContent className="p-3">
                <h4 className="font-medium line-clamp-1">{property.title}</h4>
                <p className="text-sm text-gray-500 line-clamp-1">{property.location}</p>
                <div className="mt-2 flex items-center justify-between">
                  <Badge variant="outline">{property.roomType}</Badge>
                  <span className="font-bold">¢{property.price.toLocaleString()}</span>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
