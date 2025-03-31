
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { properties as allProperties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Check, X, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Property {
  id: string;
  title: string;
  location: string;
  university: string;
  price: number;
  imageUrl: string;
  roomType: string;
  amenities: string[];
}

const Compare = () => {
  const [searchParams] = useSearchParams();
  const [properties, setProperties] = useState<Property[]>([]);
  
  useEffect(() => {
    const ids = searchParams.get("ids")?.split(",") || [];
    const filteredProperties = allProperties.filter(p => ids.includes(p.id));
    setProperties(filteredProperties);
  }, [searchParams]);
  
  if (properties.length < 2) {
    return (
      <Layout>
        <div className="container py-8 text-center">
          <h1 className="text-3xl font-bold mb-6">Compare Properties</h1>
          <p className="mb-6">Please select at least 2 properties to compare</p>
          <Link to="/listings">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Listings
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }
  
  const allAmenities = [...new Set(properties.flatMap(p => p.amenities))].sort();
  
  return (
    <Layout>
      <div className="container py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold">Compare Properties</h1>
          <Link to="/listings">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Listings
            </Button>
          </Link>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-left w-1/4">Property</th>
                {properties.map((property) => (
                  <th key={property.id} className="py-4 px-6 text-center">
                    <Link to={`/property/${property.id}`}>
                      <img 
                        src={property.imageUrl} 
                        alt={property.title} 
                        className="w-full h-48 object-cover rounded-lg mb-2"
                      />
                      <h3 className="font-semibold text-lg">{property.title}</h3>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Location</td>
                {properties.map((property) => (
                  <td key={property.id} className="py-4 px-6 text-center">
                    {property.location}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">University</td>
                {properties.map((property) => (
                  <td key={property.id} className="py-4 px-6 text-center">
                    {property.university}
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Price</td>
                {properties.map((property) => (
                  <td key={property.id} className="py-4 px-6 text-center font-bold">
                    ¢{property.price.toLocaleString()}/semester
                  </td>
                ))}
              </tr>
              <tr className="border-b">
                <td className="py-4 px-6 font-medium">Room Type</td>
                {properties.map((property) => (
                  <td key={property.id} className="py-4 px-6 text-center">
                    <Badge className="bg-unistay-blue">{property.roomType}</Badge>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="py-4 px-6 font-medium">Amenities</td>
                {properties.map((property) => (
                  <td key={property.id} className="py-4 px-6">
                    <ul>
                      {allAmenities.map((amenity) => (
                        <li key={amenity} className="flex items-center py-1">
                          {property.amenities.includes(amenity) ? (
                            <Check className="h-4 w-4 text-green-500 mr-2" />
                          ) : (
                            <X className="h-4 w-4 text-red-500 mr-2" />
                          )}
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Compare;
