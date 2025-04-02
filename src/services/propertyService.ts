import { properties } from '@/data/properties';

// Types
export interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  university: string;
  price: number;
  imageUrl: string;
  roomType: string;
  amenities: string[];
  landlord: {
    name: string;
    phone: string;
    email: string;
    verified?: boolean;
  };
  roomAvailability?: {
    total: number;
    available: number;
    occupied: number;
  };
  features?: {
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
  images?: string[];
  reviews?: {
    id: string;
    user: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  rating?: number;
  distanceFromUniversity?: string;
  onlineImages?: string[];
}

// Get all properties with filtering capabilities
export const getProperties = ({
  university,
  location,
  roomType,
  availableOnly = false,
  minPrice,
  maxPrice,
  amenities = [],
}: {
  university?: string;
  location?: string;
  roomType?: string;
  availableOnly?: boolean;
  minPrice?: number;
  maxPrice?: number;
  amenities?: string[];
} = {}) => {
  let filteredProperties = [...properties];

  if (university) {
    filteredProperties = filteredProperties.filter(p => 
      p.university.toLowerCase().includes(university.toLowerCase())
    );
  }

  if (location) {
    filteredProperties = filteredProperties.filter(p => 
      p.location.toLowerCase().includes(location.toLowerCase())
    );
  }

  if (roomType) {
    filteredProperties = filteredProperties.filter(p => 
      p.roomType.toLowerCase() === roomType.toLowerCase()
    );
  }

  if (availableOnly) {
    filteredProperties = filteredProperties.filter(p => 
      p.roomAvailability && p.roomAvailability.available > 0
    );
  }

  if (minPrice !== undefined) {
    filteredProperties = filteredProperties.filter(p => p.price >= minPrice);
  }

  if (maxPrice !== undefined) {
    filteredProperties = filteredProperties.filter(p => p.price <= maxPrice);
  }

  if (amenities && amenities.length > 0) {
    filteredProperties = filteredProperties.filter(property => 
      amenities.every(amenity => property.amenities.includes(amenity))
    );
  }

  return filteredProperties;
};

// Get a single property by id
export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(p => p.id === id);
};

// Get similar properties based on university and availability
export const getSimilarProperties = (
  currentPropertyId: string,
  university: string,
  limit = 3
): Property[] => {
  return properties
    .filter(
      p => 
        p.id !== currentPropertyId && 
        p.university === university &&
        p.roomAvailability &&
        p.roomAvailability.available > 0
    )
    .slice(0, limit);
};

// Get all available amenities
export const getAllAmenities = (): string[] => {
  const amenitiesSet = new Set<string>();
  
  properties.forEach(property => {
    property.amenities.forEach(amenity => {
      amenitiesSet.add(amenity);
    });
  });
  
  return Array.from(amenitiesSet).sort();
};

// Get price range
export const getPriceRange = (): { min: number; max: number } => {
  const prices = properties.map(p => p.price);
  return {
    min: Math.min(...prices),
    max: Math.max(...prices)
  };
};

// Simulate booking a room
export const bookRoom = async (propertyId: string, userData: any) => {
  // In a real app, this would make an API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        bookingId: `booking-${Math.random().toString(36).substring(2, 9)}`,
        property: getPropertyById(propertyId),
        userData
      });
    }, 800);
  });
};

// User favorites system
const FAVORITES_KEY = 'unistay_favorites';

export const getUserFavorites = (): string[] => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (propertyId: string): string[] => {
  const favorites = getUserFavorites();
  if (!favorites.includes(propertyId)) {
    const newFavorites = [...favorites, propertyId];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
    return newFavorites;
  }
  return favorites;
};

export const removeFromFavorites = (propertyId: string): string[] => {
  const favorites = getUserFavorites();
  const newFavorites = favorites.filter(id => id !== propertyId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  return newFavorites;
};

export const isPropertyInFavorites = (propertyId: string): boolean => {
  const favorites = getUserFavorites();
  return favorites.includes(propertyId);
};

export const getFavoriteProperties = (): Property[] => {
  const favoriteIds = getUserFavorites();
  return properties.filter(property => favoriteIds.includes(property.id));
};

// Compare properties
export const compareProperties = (propertyIds: string[]): Property[] => {
  return propertyIds.map(id => {
    const property = getPropertyById(id);
    if (!property) {
      throw new Error(`Property with ID ${id} not found`);
    }
    return property;
  });
};

// Online images for properties
const UNSPLASH_API = 'https://source.unsplash.com/random/800x600?';

// Fetch random online images for a property based on its type and title
export const fetchOnlineImagesForProperty = async (property: Property, count = 3): Promise<string[]> => {
  try {
    // Create search terms based on property details
    const searchTerms = [
      property.roomType.toLowerCase().replace(' ', '-'),
      'student-accommodation',
      'hostel',
      'room'
    ];
    
    // Use property title words as additional search terms
    const titleTerms = property.title
      .toLowerCase()
      .split(' ')
      .filter(word => word.length > 3)
      .slice(0, 2);
    
    const allTerms = [...searchTerms, ...titleTerms].join(',');
    
    // Generate promises for fetching images
    const imagePromises = Array(count).fill(0).map(async (_, index) => {
      // Add a random seed to prevent getting the same image
      const randomSeed = Math.floor(Math.random() * 1000);
      const url = `${UNSPLASH_API}${allTerms}&seed=${randomSeed + index}`;
      
      try {
        // We're using fetch to get the final URL after redirects
        const response = await fetch(url, { method: 'HEAD', cache: 'no-store' });
        return response.url;
      } catch (error) {
        console.error('Error fetching image:', error);
        return null;
      }
    });
    
    // Wait for all promises to resolve
    const images = await Promise.all(imagePromises);
    
    // Filter out any failed image fetches
    return images.filter(Boolean) as string[];
  } catch (error) {
    console.error('Failed to fetch online images:', error);
    return [];
  }
};

// Update a property with online images
export const updatePropertyWithOnlineImages = async (propertyId: string): Promise<Property | null> => {
  const property = getPropertyById(propertyId);
  
  if (!property) return null;
  
  // Check if property already has online images
  if (property.onlineImages && property.onlineImages.length > 0) {
    return property;
  }
  
  try {
    const images = await fetchOnlineImagesForProperty(property);
    
    if (images.length > 0) {
      // Update the property with fetched images
      property.onlineImages = images;
    }
    
    return property;
  } catch (error) {
    console.error('Error updating property with online images:', error);
    return property;
  }
};

// Fetch online images for multiple properties
export const fetchOnlineImagesForProperties = async (limit = 5): Promise<void> => {
  try {
    const propertiesToUpdate = properties
      .filter(p => !p.onlineImages || p.onlineImages.length === 0)
      .slice(0, limit);
    
    const promises = propertiesToUpdate.map(property => updatePropertyWithOnlineImages(property.id));
    
    await Promise.all(promises);
    console.log(`Updated ${propertiesToUpdate.length} properties with online images`);
  } catch (error) {
    console.error('Error fetching images for multiple properties:', error);
  }
};
