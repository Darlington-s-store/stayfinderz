
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Layout from "@/components/Layout";
import { getPropertyById } from '@/services/propertyService';
import { Button } from '@/components/ui/button';
import PropertyReviews from '@/components/PropertyReviews';
import { ArrowLeft, Star, Home } from 'lucide-react';

const Reviews = () => {
  const { id } = useParams<{ id: string }>();
  const property = id ? getPropertyById(id) : undefined;
  
  // Reviews data - in a real app, this would come from an API
  const mockReviews = [
    {
      id: '1',
      user: 'John Doe',
      rating: 5,
      comment: 'Great place to stay! Close to campus and very clean.',
      date: '2023-06-15'
    },
    {
      id: '2',
      user: 'Jane Smith',
      rating: 4,
      comment: 'Nice accommodation, but a bit noisy at night.',
      date: '2023-05-22'
    },
    {
      id: '3',
      user: 'Michael Johnson',
      rating: 5,
      comment: 'The landlord was very helpful and responsive. Highly recommended!',
      date: '2023-04-10'
    }
  ];

  if (!property) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <p className="text-gray-600 mb-6">The property you are looking for does not exist or has been removed.</p>
          <Link to="/listings">
            <Button>
              <Home className="mr-2 h-4 w-4" /> Back to Listings
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-6">
          <Link to={`/property/${id}`} className="flex items-center text-blue-600 hover:underline">
            <ArrowLeft className="mr-1 h-4 w-4" /> Back to property
          </Link>
        </div>
        
        <div className="bg-white border rounded-lg p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start mb-8">
            <img 
              src={property.imageUrl} 
              alt={property.title} 
              className="w-full md:w-64 h-48 object-cover rounded-lg"
            />
            
            <div>
              <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
              <p className="text-gray-600 mb-2">{property.location}</p>
              <p className="mb-3">Near {property.university}</p>
              
              <div className="flex items-center mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={18}
                    className={star <= (property.rating || 0) 
                      ? "text-yellow-400 fill-yellow-400" 
                      : "text-gray-300"
                    }
                  />
                ))}
                <span className="ml-2 font-medium">{property.rating || 'No ratings'}</span>
                <span className="ml-2 text-gray-500">({mockReviews.length} reviews)</span>
              </div>
              
              <Link to={`/property/${id}`}>
                <Button variant="outline">View Property Details</Button>
              </Link>
            </div>
          </div>
          
          <PropertyReviews propertyId={id} reviews={mockReviews} />
        </div>
      </div>
    </Layout>
  );
};

export default Reviews;
