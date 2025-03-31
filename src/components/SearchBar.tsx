
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const SearchBar = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [university, setUniversity] = useState("");
  const [roomType, setRoomType] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (university) params.append("university", university);
    if (roomType) params.append("roomType", roomType);
    
    navigate(`/listings?${params.toString()}`);
  };

  const universities = [
    "University of Ghana",
    "Kwame Nkrumah University of Science and Technology",
    "University of Cape Coast",
    "Ghana Institute of Management and Public Administration",
    "Ashesi University",
  ];

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full max-w-4xl mx-auto"
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="location" className="block text-sm font-medium mb-1">Location</label>
          <Input
            id="location"
            type="text"
            placeholder="City, neighborhood or address"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div className="flex-1">
          <label htmlFor="university" className="block text-sm font-medium mb-1">University</label>
          <Select value={university} onValueChange={setUniversity}>
            <SelectTrigger>
              <SelectValue placeholder="Select university" />
            </SelectTrigger>
            <SelectContent>
              {universities.map((uni) => (
                <SelectItem key={uni} value={uni}>
                  {uni}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex-1">
          <label htmlFor="roomType" className="block text-sm font-medium mb-1">Room Type</label>
          <Select value={roomType} onValueChange={setRoomType}>
            <SelectTrigger>
              <SelectValue placeholder="Any room type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="single">Single Room</SelectItem>
              <SelectItem value="shared">Shared Room</SelectItem>
              <SelectItem value="self-contained">Self-contained</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex items-end">
          <Button type="submit" className="bg-unistay-blue hover:bg-blue-600 w-full md:w-auto">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
