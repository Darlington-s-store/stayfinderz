
import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, User, Settings, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  // In a real app, this would come from user context or API
  const [savedProperties] = useState(properties.slice(0, 2));
  const [recentlyViewed] = useState(properties.slice(3, 5));
  const { toast } = useToast();
  
  const handleRemoveSaved = (id: string) => {
    // In a real app, this would call an API to remove the property
    toast({
      title: "Property removed",
      description: "Property has been removed from your saved list",
    });
  };

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-2">My Dashboard</h1>
        <p className="text-gray-600 mb-8">Manage your saved properties and account settings</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-4">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gray-100 rounded-full p-3">
                  <User className="h-8 w-8 text-gray-500" />
                </div>
                <div>
                  <h2 className="font-semibold">John Doe</h2>
                  <p className="text-sm text-gray-500">University of Ghana</p>
                </div>
              </div>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="mr-2 h-4 w-4" />
                  Saved Properties
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="saved" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="saved" className="flex items-center">
                  <Heart className="mr-2 h-4 w-4" />
                  Saved Properties
                </TabsTrigger>
                <TabsTrigger value="recent" className="flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Recently Viewed
                </TabsTrigger>
              </TabsList>
              <TabsContent value="saved">
                <h2 className="text-xl font-semibold mb-4">Saved Properties</h2>
                {savedProperties.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {savedProperties.map((property) => (
                      <div key={property.id} className="relative">
                        <PropertyCard
                          id={property.id}
                          title={property.title}
                          location={property.location}
                          university={property.university}
                          price={property.price}
                          imageUrl={property.imageUrl}
                          roomType={property.roomType}
                          amenities={property.amenities}
                        />
                        <Button 
                          variant="secondary"
                          size="sm"
                          className="absolute top-2 right-2 bg-white bg-opacity-75 hover:bg-white"
                          onClick={() => handleRemoveSaved(property.id)}
                        >
                          <Heart className="h-4 w-4 fill-current text-red-500" />
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">No saved properties yet</h3>
                    <p className="text-gray-500 mb-6">Start browsing and save properties that interest you</p>
                    <Link to="/listings">
                      <Button>Browse Listings</Button>
                    </Link>
                  </div>
                )}
              </TabsContent>
              <TabsContent value="recent">
                <h2 className="text-xl font-semibold mb-4">Recently Viewed</h2>
                {recentlyViewed.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recentlyViewed.map((property) => (
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
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-medium mb-2">No recently viewed properties</h3>
                    <p className="text-gray-500 mb-6">Start browsing to see your recently viewed properties</p>
                    <Link to="/listings">
                      <Button>Browse Listings</Button>
                    </Link>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
