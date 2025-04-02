
import mockProperties from './mockProperties';

// Export the properties data
export const properties = mockProperties;

// Export default for convenience
export default mockProperties;

// Import at the end to avoid circular dependency
import { fetchOnlineImagesForProperties } from '@/services/propertyService';

// Initialize online images for properties in the background
// This will attempt to fetch images for properties that don't have them yet
setTimeout(() => {
  fetchOnlineImagesForProperties(10)
    .then(() => console.log('Successfully fetched online images for properties'))
    .catch(error => console.error('Failed to fetch online images:', error));
}, 100);
