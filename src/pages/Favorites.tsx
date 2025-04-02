
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { getFavoriteProperties } from '@/services/propertyService';
import { Heart, ArrowRight } from 'lucide-react';

const Favorites = () => {
  const favoriteProperties = getFavoriteProperties();
  const hasProperties = favoriteProperties.length > 0;

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold flex items-center mb-6">
          <Heart className="mr-2 h-6 w-6 text-red-500" /> 
          My Saved Properties
        </h1>
        
        {hasProperties ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteProperties.map((property) => (
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
            
            <div className="mt-8 text-center">
              <Link to="/listings">
                <Button>
                  <ArrowRight className="mr-2 h-4 w-4" /> Explore More Properties
                </Button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16 bg-white rounded-lg border">
            <Heart className="h-16 w-16 mx-auto mb-4 text-gray-300" />
            <h2 className="text-2xl font-semibold mb-4">No Saved Properties</h2>
            <p className="text-gray-600 max-w-md mx-auto mb-6">
              You haven't saved any properties yet. Browse listings and click the heart icon to add properties to your favorites.
            </p>
            <Link to="/listings">
              <Button>
                <ArrowRight className="mr-2 h-4 w-4" /> Browse Listings
              </Button>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
