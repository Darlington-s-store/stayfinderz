
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { properties } from "@/data/properties";
import { Property } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyContactButtons from "@/components/PropertyContactButtons";
import {
  MapPin,
  Star,
  Building,
  Bath,
  Ruler,
  Check,
  Clock,
  Phone,
  Mail,
  Shield,
  ExternalLink,
} from "lucide-react";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching delay for a more realistic experience
    const timer = setTimeout(() => {
      const foundProperty = properties.find((p) => p.id === id);
      setProperty(foundProperty || null);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <div className="container py-12 flex justify-center">
          <div className="animate-pulse space-y-8 w-full max-w-4xl">
            <div className="h-80 bg-slate-200 rounded-lg w-full"></div>
            <div className="h-8 bg-slate-200 rounded w-3/4"></div>
            <div className="space-y-4">
              <div className="h-4 bg-slate-200 rounded w-full"></div>
              <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              <div className="h-4 bg-slate-200 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!property) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/listings">
            <Button>Browse All Listings</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-6">
          <Link to="/listings" className="text-unistay-blue hover:underline inline-flex items-center">
            &larr; Back to listings
          </Link>
        </div>

        {/* Property Images */}
        <div className="mb-8">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Property Header */}
        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin size={18} className="mr-1" />
              <span>{property.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-unistay-blue">{property.roomType}</Badge>
              <Badge variant="outline">Near {property.university}</Badge>
              <Badge variant="outline">{property.distanceFromUniversity} from campus</Badge>
            </div>
          </div>

          <div className="text-right">
            <div className="text-3xl font-bold text-unistay-blue mb-1">
              ¢{property.price.toLocaleString()}
              <span className="text-base font-normal text-gray-500">/semester</span>
            </div>
            <div className="flex items-center justify-end">
              <Star className="fill-yellow-400 text-yellow-400 mr-1" size={18} />
              <span className="font-medium mr-1">{property.rating}</span>
              <span className="text-gray-500">({property.reviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Quick contact buttons */}
        <div className="mb-8">
          <PropertyContactButtons
            phone={property.landlord.phone}
            name={property.landlord.name}
            propertyTitle={property.title}
            className="flex justify-end"
          />
        </div>

        {/* Property Details Tabs */}
        <Tabs defaultValue="details" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="features">Features & Amenities</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">About this property</h3>
              <p className="text-gray-700">{property.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Property information</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                  <Building className="mr-3 text-unistay-blue" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                    <div className="font-medium">{property.features.bedrooms}</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                  <Bath className="mr-3 text-unistay-blue" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                    <div className="font-medium">{property.features.bathrooms}</div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-lg">
                  <Ruler className="mr-3 text-unistay-blue" size={24} />
                  <div>
                    <div className="text-sm text-gray-600">Room Size</div>
                    <div className="font-medium">{property.features.area} m²</div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="features">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.amenities.map((amenity) => (
                    <li key={amenity} className="flex items-center">
                      <Check className="mr-2 text-green-600" size={18} />
                      <span>{amenity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Booking Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Clock className="mr-3 text-unistay-blue" size={20} />
                    <span>Book at least 2 weeks before move-in</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="mr-3 text-unistay-blue" size={20} />
                    <span>Secure payment through UniStay</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="location">
            <h3 className="text-xl font-semibold mb-4">Location</h3>
            <p className="mb-4 text-gray-700">
              This property is located at {property.location}, approximately {property.distanceFromUniversity} from {property.university}.
            </p>
            <div className="bg-slate-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500 flex items-center gap-2">
                <MapPin />
                Map view available in the full version
              </p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Landlord Information and Contact */}
        <div className="border-t pt-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Property managed by {property.landlord.name}</h3>
          <div className="flex items-start gap-8 flex-wrap">
            <div>
              {property.landlord.verified ? (
                <Badge className="mb-4 bg-green-600">
                  <Shield className="mr-1" size={14} /> Verified Landlord
                </Badge>
              ) : (
                <Badge variant="outline" className="mb-4">
                  Verification Pending
                </Badge>
              )}
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="mr-2 text-gray-500" size={16} />
                  <span>{property.landlord.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 text-gray-500" size={16} />
                  <span>{property.landlord.email}</span>
                </div>
              </div>
            </div>
            <div className="flex-grow">
              <Link to={`/booking/${property.id}`}>
                <Button className="bg-unistay-blue hover:bg-unistay-blue/90 w-full mb-3">
                  Book Now
                </Button>
              </Link>
              <PropertyContactButtons
                phone={property.landlord.phone}
                name={property.landlord.name}
                propertyTitle={property.title}
                variant="outline"
                className="w-full"
              />
            </div>
          </div>
        </div>
        
        {/* Similar Properties - Placeholder for future implementation */}
        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold mb-2">Similar Properties</h3>
          <p className="text-gray-600 mb-4">More properties will be available in the full version</p>
          <div className="flex justify-center">
            <Link to="/listings">
              <Button variant="outline" className="flex items-center gap-2">
                View All Listings <ExternalLink size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PropertyDetails;
