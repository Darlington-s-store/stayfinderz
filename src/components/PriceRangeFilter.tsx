
import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  onChange: (min: number, max: number) => void;
}

const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({
  minPrice,
  maxPrice,
  onChange
}) => {
  const [range, setRange] = useState<[number, number]>([minPrice, maxPrice]);
  
  const handleSliderChange = (value: number[]) => {
    const newRange: [number, number] = [value[0], value[1]];
    setRange(newRange);
    onChange(newRange[0], newRange[1]);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label>Price Range (¢)</Label>
        <div className="flex justify-between text-sm text-gray-500 mt-1 mb-3">
          <span>¢{range[0].toLocaleString()}</span>
          <span>¢{range[1].toLocaleString()}</span>
        </div>
        <Slider 
          defaultValue={range} 
          min={minPrice} 
          max={maxPrice} 
          step={100}
          value={range}
          onValueChange={handleSliderChange}
          className="my-4"
        />
      </div>
    </div>
  );
};

export default PriceRangeFilter;
