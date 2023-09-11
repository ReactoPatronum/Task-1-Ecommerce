import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useAppDispatch } from "../../../src/redux/store";
import { filterByPrice } from "../../../src/redux/features/productSlice";

const PriceRange = () => {
  const dispatch = useAppDispatch();
  const [range, setRange] = useState({ min: "", max: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(filterByPrice(range));
  };
  return (
    <div className="p-3">
      <h5 className=" font-semibold">Price Range</h5>

      <form
        onSubmit={handleSubmit}
        className="flex items-center space-x-1 mt-3"
      >
        <Input
          type="number"
          value={range.min}
          onChange={(e) =>
            setRange((prev) => ({
              ...prev,
              min: e.target.value,
            }))
          }
          className="h-8 focus:border-orange-500"
          placeholder="Min"
        />
        <span>-</span>
        <Input
          type="number"
          value={range.max}
          onChange={(e) =>
            setRange((prev) => ({
              ...prev,
              max: e.target.value,
            }))
          }
          className="h-8 focus:border-orange-500"
          placeholder="Max"
        />
        <Button type="submit" className="h-8" size="icon">
          <Search className="w-8 h-4" />
        </Button>
      </form>
    </div>
  );
};

export default PriceRange;
