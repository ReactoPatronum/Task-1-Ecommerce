import React from "react";
import { Star } from "lucide-react";
import { useAppDispatch } from "../../../src/redux/store";
import { filterByRating } from "../../../src/redux/features/productSlice";

const Stars = () => {
  const dispatch = useAppDispatch();
  const rate = [1, 2, 3, 4];

  const handleRatingFilter = (rate: number) => {
    dispatch(filterByRating(rate));
  };

  return (
    <div className="p-3">
      <h5 className=" font-semibold">Rating Score</h5>
      <div className=" mt-3">
        {rate.reverse().map((number) => (
          <div key={number} className="flex items-center space-x-2">
            <input
              onClick={() => handleRatingFilter(number)}
              name="options"
              value={number}
              id={`option ${number}`}
              type="radio"
            />
            <Star color="orange" fill="orange" className="w-4" />
            <p className="text-sm">{number} Stars or more</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stars;
