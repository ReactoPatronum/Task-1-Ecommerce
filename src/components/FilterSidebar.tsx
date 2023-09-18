import React from "react";
import Categories from "./options/Categories";
import { Separator } from "./ui/separator";
import PriceRange from "./options/PriceRange";
import RatingScore from "./options/RatingScore";
import Order from "./options/Order";
import { Button } from "./ui/button";
import { useAppDispatch } from "../redux/store";
import { resetFilters } from "../redux/features/productSlice";

type Props = {
  length: number;
};

const FilterSidebar = ({ length }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="sm:w-48 border rounded-xl sticky top-0">
      <div>
        <h6 className="py-5 px-2 text-sm">
          <span className="font-semibold">{length}</span> Products Listed
        </h6>
        <Separator />
        <Categories />
        <Separator />
        <PriceRange />
        <Separator />
        <RatingScore />
        <Separator />
        <Order />
        <Separator />
        <Button
          onClick={() => dispatch(resetFilters())}
          className="my-2 pr-2"
          variant="ghost"
        >
          Reset Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
