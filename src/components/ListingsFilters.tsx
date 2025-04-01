
import { useState } from 'react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Filter, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import PriceRangeFilter from './PriceRangeFilter';
import AmenitiesFilter from './AmenitiesFilter';
import { getAllAmenities, getPriceRange } from '@/services/propertyService';

interface FiltersProps {
  onApplyFilters: (filters: FilterOptions) => void;
}

export interface FilterOptions {
  university?: string;
  location?: string;
  roomType?: string;
  availableOnly: boolean;
  minPrice?: number;
  maxPrice?: number;
  amenities: string[];
}

const ListingsFilters: React.FC<FiltersProps> = ({ onApplyFilters }) => {
  const { min: minPriceAvailable, max: maxPriceAvailable } = getPriceRange();
  const allAmenities = getAllAmenities();
  
  const [filters, setFilters] = useState<FilterOptions>({
    availableOnly: false,
    amenities: [],
  });
  
  const [universities] = useState([
    "University of Ghana",
    "Kwame Nkrumah University of Science and Technology",
    "University of Cape Coast",
    "Ghana Institute of Management and Public Administration",
    "Ashesi University",
  ]);
  
  const [locations] = useState([
    "Accra",
    "Kumasi",
    "Cape Coast",
    "Tema",
    "Legon",
    "East Legon",
  ]);
  
  const [roomTypes] = useState([
    "Single Room", 
    "Shared Room", 
    "Self-contained"
  ]);

  const [minPrice, setMinPrice] = useState(minPriceAvailable);
  const [maxPrice, setMaxPrice] = useState(maxPriceAvailable);
  
  // Count active filters
  const getActiveFilterCount = () => {
    let count = 0;
    if (filters.university) count++;
    if (filters.location) count++;
    if (filters.roomType) count++;
    if (filters.availableOnly) count++;
    if (filters.minPrice !== minPriceAvailable || filters.maxPrice !== maxPriceAvailable) count++;
    if (filters.amenities.length > 0) count += 1; // Count amenities as one filter
    return count;
  };
  
  const handlePriceChange = (min: number, max: number) => {
    setMinPrice(min);
    setMaxPrice(max);
    setFilters({ ...filters, minPrice: min, maxPrice: max });
  };

  const handleResetFilters = () => {
    setFilters({
      availableOnly: false,
      amenities: [],
    });
    setMinPrice(minPriceAvailable);
    setMaxPrice(maxPriceAvailable);
  };

  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold flex items-center">
          <Filter className="mr-2 h-5 w-5" /> Filters 
          {getActiveFilterCount() > 0 && (
            <Badge className="ml-2 bg-unistay-blue">{getActiveFilterCount()}</Badge>
          )}
        </h2>
        {getActiveFilterCount() > 0 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleResetFilters}
            className="text-sm text-gray-500 flex items-center"
          >
            <X className="mr-1 h-3 w-3" /> Reset
          </Button>
        )}
      </div>
      
      <Accordion type="multiple" defaultValue={["availability", "university", "price"]}>
        <AccordionItem value="availability">
          <AccordionTrigger>Availability</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center space-x-2">
              <Switch 
                id="available-only" 
                checked={filters.availableOnly}
                onCheckedChange={(checked) => 
                  setFilters({ ...filters, availableOnly: checked })
                }
              />
              <Label htmlFor="available-only">Show available rooms only</Label>
            </div>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="university">
          <AccordionTrigger>University</AccordionTrigger>
          <AccordionContent>
            <Select 
              value={filters.university} 
              onValueChange={(value) => setFilters({ ...filters, university: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select university" />
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
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="location">
          <AccordionTrigger>Location</AccordionTrigger>
          <AccordionContent>
            <Select 
              value={filters.location} 
              onValueChange={(value) => setFilters({ ...filters, location: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any location</SelectItem>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="roomType">
          <AccordionTrigger>Room Type</AccordionTrigger>
          <AccordionContent>
            <Select 
              value={filters.roomType} 
              onValueChange={(value) => setFilters({ ...filters, roomType: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Any room type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any room type</SelectItem>
                {roomTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <PriceRangeFilter
              minPrice={minPriceAvailable}
              maxPrice={maxPriceAvailable}
              onChange={handlePriceChange}
            />
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="amenities">
          <AccordionTrigger>Amenities</AccordionTrigger>
          <AccordionContent>
            <AmenitiesFilter
              amenities={allAmenities}
              selectedAmenities={filters.amenities}
              onChange={(amenities) => setFilters({ ...filters, amenities })}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Button 
        className="w-full mt-6 bg-unistay-blue"
        onClick={handleApplyFilters}
      >
        Apply Filters
      </Button>
    </div>
  );
};

export default ListingsFilters;
