
import React, { useState } from 'react';
import Layout from "@/components/Layout";
import { getProperties } from '@/services/propertyService';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PropertyCard from '@/components/PropertyCard';
import { MapPin, List, Grid, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Map = () => {
  const [view, setView] = useState<'map' | 'list'>('map');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get all properties
  const properties = getProperties();
  
  const filteredProperties = searchQuery
    ? properties.filter(p => 
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.university.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : properties;

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Explore Accommodations on Map</h1>
        
        <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search for a property or location"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant={view === 'map' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setView('map')}
            >
              <MapPin size={16} className="mr-1" /> Map View
            </Button>
            <Button 
              variant={view === 'list' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setView('list')}
            >
              <List size={16} className="mr-1" /> List View
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue={view} onValueChange={(v) => setView(v as 'map' | 'list')}>
          <TabsList className="hidden">
            <TabsTrigger value="map">Map View</TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="map" className="bg-white p-4 rounded-lg border">
            <div className="bg-slate-100 rounded-lg h-[600px] flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin size={48} className="mx-auto mb-4 text-slate-400" />
                <h3 className="text-xl font-medium mb-2">Map View</h3>
                <p className="text-gray-500 mb-4">
                  This feature requires integration with a mapping service like Google Maps or Mapbox.
                </p>
                <p className="text-sm text-gray-400">
                  Properties would be shown as pins on the map with popup info windows.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="list">
            <div>
              <p className="text-gray-600 mb-4">{filteredProperties.length} accommodations found</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProperties.map((property) => (
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
              
              {filteredProperties.length === 0 && (
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium mb-2">No accommodations found</h3>
                  <p className="text-gray-500">Try adjusting your search terms</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Map;
