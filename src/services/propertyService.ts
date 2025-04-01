
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
}

// Get all properties with filtering capabilities
export const getProperties = ({
  university,
  location,
  roomType,
  availableOnly = false,
}: {
  university?: string;
  location?: string;
  roomType?: string;
  availableOnly?: boolean;
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
