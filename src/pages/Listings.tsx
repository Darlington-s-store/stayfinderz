
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Layout from "@/components/Layout";
import PropertyCard from "@/components/PropertyCard";
import PropertyPagination from "@/components/PropertyPagination";
import { properties as allProperties } from "@/data/properties";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, X } from "lucide-react";
import PriceRangeFilter from "@/components/PriceRangeFilter";
import AmenitiesFilter from "@/components/AmenitiesFilter";
import { getPriceRange, getAllAmenities } from "@/services/propertyService";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

const Listings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Show 6 properties per page
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState(searchParams.get("location") || "");
  const [university, setUniversity] = useState(searchParams.get("university") || "");
  const [roomType, setRoomType] = useState(searchParams.get("roomType") || "");
  
  // Get price range and amenities for filters
  const { min: minPriceAvailable, max: maxPriceAvailable } = getPriceRange();
  const [minPrice, setMinPrice] = useState(minPriceAvailable);
  const [maxPrice, setMaxPrice] = useState(maxPriceAvailable);
  const allAvailableAmenities = getAllAmenities();
  const [amenities, setAmenities] = useState<string[]>([]);
  
  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, university, roomType, minPrice, maxPrice, amenities]);
  
  // Apply filters
  useEffect(() => {
    let result = allProperties;
    
    if (searchTerm) {
      result = result.filter(
        property => 
          property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          property.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (university) {
      result = result.filter(
        property => property.university === university
      );
    }
    
    if (roomType) {
      result = result.filter(
        property => property.roomType === roomType
      );
    }
    
    // Price filter
    result = result.filter(
      property => property.price >= minPrice && property.price <= maxPrice
    );
    
    // Amenities filter
    if (amenities.length > 0) {
      result = result.filter(
        property => amenities.every(amenity => property.amenities.includes(amenity))
      );
    }
    
    setFilteredProperties(result);
  }, [searchTerm, university, roomType, minPrice, maxPrice, amenities]);
  
  // Set initial filters from URL params
  useEffect(() => {
    const location = searchParams.get("location");
    const uni = searchParams.get("university");
    const room = searchParams.get("roomType");
    
    if (location) setSearchTerm(location);
    if (uni) setUniversity(uni);
    if (room) setRoomType(room);
  }, [searchParams]);
  
  const clearFilters = () => {
    setSearchTerm("");
    setUniversity("");
    setRoomType("");
    setMinPrice(minPriceAvailable);
    setMaxPrice(maxPriceAvailable);
    setAmenities([]);
  };

  const universities = [
    "University of Ghana",
    "Kwame Nkrumah University of Science and Technology",
    "University of Cape Coast",
    "Ghana Institute of Management and Public Administration",
    "Ashesi University",
  ];

  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleAmenitiesChange = (selectedAmenities: string[]) => {
    setAmenities(selectedAmenities);
  };
  
  // Calculate pagination indexes
  const indexOfLastProperty = currentPage * itemsPerPage;
  const indexOfFirstProperty = indexOfLastProperty - itemsPerPage;
  const currentProperties = filteredProperties.slice(indexOfFirstProperty, indexOfLastProperty);
  
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Find Your Perfect Accommodation</h1>
        
        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Search by location or property name"
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <SlidersHorizontal size={18} />
            Filters
          </Button>
        </div>
        
        {/* Filters */}
        {showFilters && (
          <div className="bg-white border rounded-lg p-6 mb-6 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Filters</h2>
              <Button variant="ghost" size="sm" onClick={clearFilters} className="text-sm">
                <X size={16} className="mr-1" /> Clear Filters
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="university" className="mb-2 block">University</Label>
                <Select value={university} onValueChange={setUniversity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any university" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any university</SelectItem>
                    {universities.map((uni) => (
                      <SelectItem key={uni} value={uni}>
                        {uni}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="roomType" className="mb-2 block">Room Type</Label>
                <Select value={roomType} onValueChange={setRoomType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Any room type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Any room type</SelectItem>
                    <SelectItem value="Single Room">Single Room</SelectItem>
                    <SelectItem value="Shared Room">Shared Room</SelectItem>
                    <SelectItem value="Self-contained">Self-contained</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <PriceRangeFilter
                  minPrice={minPriceAvailable}
                  maxPrice={maxPriceAvailable}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
            
            <div className="mt-6">
              <AmenitiesFilter
                amenities={allAvailableAmenities}
                selectedAmenities={amenities}
                onChange={handleAmenitiesChange}
              />
            </div>
          </div>
        )}
        
        {/* Results */}
        <div>
          <p className="text-gray-600 mb-4">{filteredProperties.length} accommodations found</p>
          
          {filteredProperties.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium mb-2">No accommodations found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <Button onClick={clearFilters}>Clear All Filters</Button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentProperties.map((property) => (
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
              
              <PropertyPagination 
                totalItems={filteredProperties.length} 
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Listings;
