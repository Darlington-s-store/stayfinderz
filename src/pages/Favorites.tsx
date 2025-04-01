
import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";
import { getFavoriteProperties, Property } from "@/services/propertyService";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const Favorites = () => {
  const [favorites, setFavorites] = useState<Property[]>([]);
  
  useEffect(() => {
    // Load favorites when component mounts
    setFavorites(getFavoriteProperties());
    
    // Set up event listener for storage changes (in case favorites are updated in another tab)
    const handleStorageChange = () => {
      setFavorites(getFavoriteProperties());
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Saved Properties</h1>
        
        {favorites.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((property) => (
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
                  landlordName={property.landlord.name}
                  landlordPhone={property.landlord.phone}
                  roomAvailability={property.roomAvailability}
                />
              ))}
            </div>
            
            <div className="mt-8">
              <Link to="/compare">
                <Button className="bg-unistay-blue">Compare Saved Properties</Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <Heart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">No Saved Properties</h2>
            <p className="text-gray-600 mb-6">Your saved properties will appear here</p>
            <Link to="/listings">
              <Button className="bg-unistay-blue">Browse Properties</Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
