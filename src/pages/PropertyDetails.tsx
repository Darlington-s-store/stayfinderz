import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { properties } from "@/data/properties";
import { Property } from "@/services/propertyService"; 
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
  Bed,
  AlertTriangle,
} from "lucide-react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import RecentlyViewed from "@/components/RecentlyViewed";

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [similarProperties, setSimilarProperties] = useState<Property[]>([]);

  useEffect(() => {
    // Simulate data fetching delay for a more realistic experience
    const timer = setTimeout(() => {
      const foundProperty = properties.find((p) => p.id === id);
      setProperty(foundProperty || null);
      
      // Find similar properties with available rooms
      if (foundProperty) {
        const similar = properties
          .filter(p => 
            p.id !== id && 
            p.university === foundProperty.university &&
            p.roomAvailability?.available > 0
          )
          .slice(0, 3);
        setSimilarProperties(similar);
      }
      
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  // Check if property has available rooms
  const hasAvailableRooms = property?.roomAvailability && property.roomAvailability.available > 0;

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

  // Helper function to ensure image URLs are properly formatted
  const getImageUrl = (url: string) => {
    // If the URL starts with http or https, return it as is
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    
    // For relative URLs, ensure they're properly formatted
    // If the URL starts with a slash, use it as is, otherwise add a leading slash
    return url.startsWith('/') ? url : `/${url}`;
  };

  // Get all available images for the property
  const allImages = [
    property.imageUrl,
    ...(property.images || []),
    ...(property.onlineImages || [])
  ].filter(Boolean);

  return (
    <Layout>
      <div className="container py-8">
        <div className="mb-6">
          <Link to="/listings" className="text-unistay-blue hover:underline inline-flex items-center">
            &larr; Back to listings
          </Link>
        </div>

        {/* Property Images Carousel */}
        <div className="mb-8 relative">
          {allImages.length > 0 ? (
            <Carousel className="w-full">
              <CarouselContent>
                {allImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg">
                        <img
                          src={getImageUrl(image)}
                          alt={`${property.title} - Image ${index + 1}`}
                          className="w-full h-[400px] object-cover rounded-lg shadow-md"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/placeholder.svg";
                            target.onerror = null;
                          }}
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          ) : (
            <img
              src="/placeholder.svg"
              alt={property.title}
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Room Availability Alert */}
        {property.roomAvailability && (
          <div className="mb-8">
            {!hasAvailableRooms ? (
              <Alert variant="destructive" className="mb-4">
                <AlertTriangle className="h-4 w-4 mr-2" />
                <AlertTitle>No rooms available</AlertTitle>
                <AlertDescription>
                  This property is currently fully occupied. Please check our similar properties below.
                </AlertDescription>
              </Alert>
            ) : (
              <Alert className="bg-[#F2FCE2] border-green-300 mb-4">
                <Check className="h-4 w-4 mr-2 text-green-600" />
                <AlertTitle className="text-green-800">Rooms Available</AlertTitle>
                <AlertDescription className="text-green-700">
                  {property.roomAvailability.available} out of {property.roomAvailability.total} rooms available for booking.
                </AlertDescription>
              </Alert>
            )}
          </div>
        )}

        {/* Property Header */}
        <div className="flex flex-wrap justify-between items-start gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin size={18} className="mr-1" />
              <span>{property.location}</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Badge className="bg-unistay-blue">{property.roomType}</Badge>
              <Badge variant="outline">Near {property.university}</Badge>
              {property.distanceFromUniversity && (
                <Badge variant="outline">{property.distanceFromUniversity} from campus</Badge>
              )}
              {property.roomAvailability && (
                <Badge variant={hasAvailableRooms ? "outline" : "destructive"} className="flex items-center">
                  <Bed size={14} className="mr-1" /> 
                  {hasAvailableRooms 
                    ? `${property.roomAvailability.available}/${property.roomAvailability.total} Available` 
                    : "No Rooms Available"}
                </Badge>
              )}
            </div>
          </div>

          <div className="text-right">
            <div className="text-3xl font-bold text-unistay-blue mb-1">
              ¢{property.price.toLocaleString()}
              <span className="text-base font-normal text-gray-500">/semester</span>
            </div>
            {property.rating && property.reviews && (
              <div className="flex items-center justify-end">
                <Star className="fill-yellow-400 text-yellow-400 mr-1" size={18} />
                <span className="font-medium mr-1">{property.rating}</span>
                <span className="text-gray-500">({property.reviews.length} reviews)</span>
              </div>
            )}
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
            <TabsTrigger value="rooms">Room Availability</TabsTrigger>
          </TabsList>
          
          <TabsContent value="details" className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">About this property</h3>
              <p className="text-gray-700">{property.description}</p>
            </div>
            
            {property.features && (
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
            )}
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
              This property is located at {property.location}
              {property.distanceFromUniversity && (
                <>, approximately {property.distanceFromUniversity} from {property.university}</>
              )}.
            </p>
            <div className="bg-slate-200 rounded-lg h-64 flex items-center justify-center">
              <p className="text-gray-500 flex items-center gap-2">
                <MapPin />
                Map view available in the full version
              </p>
            </div>
          </TabsContent>
          
          {/* Rooms Availability Tab */}
          <TabsContent value="rooms">
            <h3 className="text-xl font-semibold mb-4">Room Availability</h3>
            
            {property.roomAvailability ? (
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="text-lg font-medium mb-3">Current Status</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white shadow p-4 rounded-lg text-center">
                      <p className="text-gray-600 mb-2">Total Rooms</p>
                      <p className="text-2xl font-bold">{property.roomAvailability.total}</p>
                    </div>
                    <div className="bg-white shadow p-4 rounded-lg text-center">
                      <p className="text-gray-600 mb-2">Available</p>
                      <p className="text-2xl font-bold text-green-600">{property.roomAvailability.available}</p>
                    </div>
                    <div className="bg-white shadow p-4 rounded-lg text-center">
                      <p className="text-gray-600 mb-2">Occupied</p>
                      <p className="text-2xl font-bold text-red-500">{property.roomAvailability.occupied}</p>
                    </div>
                  </div>
                  
                  {!hasAvailableRooms && similarProperties.length > 0 && (
                    <div className="mt-6">
                      <Alert variant="destructive">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        <AlertTitle>No rooms currently available</AlertTitle>
                        <AlertDescription>
                          This property is currently fully occupied. Check out similar properties below or contact the landlord for future availability.
                        </AlertDescription>
                      </Alert>
                    </div>
                  )}
                  
                  <div className="mt-6">
                    {hasAvailableRooms ? (
                      <Link to={`/booking/${property.id}`}>
                        <Button className="bg-unistay-blue hover:bg-unistay-blue/90">
                          Book Available Room
                        </Button>
                      </Link>
                    ) : (
                      <Button disabled className="opacity-50 cursor-not-allowed">
                        No Rooms Available
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">Room availability information is not available for this property.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Landlord Information and Contact */}
        <div className="border-t pt-8 mb-8">
          <h3 className="text-xl font-semibold mb-4">Property managed by {property.landlord.name}</h3>
          <div className="flex items-start gap-8 flex-wrap">
            <div>
              {property.landlord.verified !== undefined && (
                property.landlord.verified ? (
                  <Badge className="mb-4 bg-green-600">
                    <Shield className="mr-1" size={14} /> Verified Landlord
                  </Badge>
                ) : (
                  <Badge variant="outline" className="mb-4">
                    Verification Pending
                  </Badge>
                )
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
              {hasAvailableRooms ? (
                <Link to={`/booking/${property.id}`}>
                  <Button className="bg-unistay-blue hover:bg-unistay-blue/90 w-full mb-3">
                    Book Now
                  </Button>
                </Link>
              ) : (
                <Button disabled className="w-full mb-3 opacity-50 cursor-not-allowed">
                  No Rooms Available
                </Button>
              )}
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
        
        {/* Similar Properties Section */}
        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold mb-2">Similar Properties</h3>
          
          {!hasAvailableRooms && similarProperties.length > 0 ? (
            <div>
              <p className="text-gray-600 mb-4">Check these available alternatives near {property.university}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {similarProperties.map(prop => (
                  <div key={prop.id} className="border rounded-lg overflow-hidden shadow-sm">
                    <Link to={`/property/${prop.id}`}>
                      <img 
                        src={getImageUrl(prop.imageUrl)} 
                        alt={prop.title} 
                        className="w-full h-36 object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/placeholder.svg";
                          target.onerror = null;
                        }} 
                      />
                      <div className="p-4">
                        <h4 className="font-medium">{prop.title}</h4>
                        <div className="flex items-center justify-between mt-2">
                          <Badge className="bg-green-500 flex items-center">
                            <Check size={14} className="mr-1" /> {prop.roomAvailability?.available} Available
                          </Badge>
                          <span className="font-semibold">¢{prop.price.toLocaleString()}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex justify-center">
              <Link to="/listings">
                <Button variant="outline" className="flex items-center gap-2">
                  View All Listings <ExternalLink size={16} />
                </Button>
              </Link>
            </div>
          )}
        </div>
        
        {/* Recently Viewed Properties */}
        <RecentlyViewed currentPropertyId={id} limit={3} />
      </div>
    </Layout>
  );
};

export default PropertyDetails;
