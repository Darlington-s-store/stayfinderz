
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Bed, Check, X, Users } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface RoomAvailabilityProps {
  roomAvailability: {
    total: number;
    available: number;
    occupied: number;
  };
  showDetails?: boolean;
}

const RoomAvailabilityDisplay: React.FC<RoomAvailabilityProps> = ({
  roomAvailability,
  showDetails = true
}) => {
  const { total, available, occupied } = roomAvailability;
  const availabilityPercentage = (available / total) * 100;
  const hasAvailableRooms = available > 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="font-medium flex items-center">
          <Bed className="mr-2 h-5 w-5" /> Room Availability
        </h3>
        <Badge className={`${hasAvailableRooms ? 'bg-green-500' : 'bg-red-500'}`}>
          {hasAvailableRooms ? (
            <span className="flex items-center"><Check size={14} className="mr-1" /> Available</span>
          ) : (
            <span className="flex items-center"><X size={14} className="mr-1" /> Fully Occupied</span>
          )}
        </Badge>
      </div>

      <div>
        <div className="flex justify-between mb-1 text-sm">
          <span>{available} of {total} rooms available</span>
          <span>{availabilityPercentage.toFixed(0)}%</span>
        </div>
        <HoverCard>
          <HoverCardTrigger asChild>
            <div>
              <Progress value={availabilityPercentage} className="h-2" />
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="space-y-2">
              <p className="text-sm font-medium">Room Breakdown</p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span>Available: {available}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <span>Occupied: {occupied}</span>
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>

      {showDetails && !hasAvailableRooms && (
        <Alert variant="destructive" className="mt-4">
          <Users className="h-4 w-4" />
          <AlertDescription>
            This property is currently fully occupied. Please check back later or consider our alternative accommodation options below.
          </AlertDescription>
        </Alert>
      )}
      
      {showDetails && hasAvailableRooms && available <= 2 && (
        <Alert className="bg-amber-50 text-amber-800 border-amber-200">
          <AlertDescription className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            Only {available} {available === 1 ? 'room' : 'rooms'} left! Book soon to secure your accommodation.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default RoomAvailabilityDisplay;
