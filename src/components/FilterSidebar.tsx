import React from "react";
import Categories from "./options/Categories";
import { Separator } from "./ui/separator";
import PriceRange from "./options/PriceRange";
import RatingScore from "./options/RatingScore";
import Order from "./options/Order";

type Props = {
  length: number;
};

const FilterSidebar = ({ length }: Props) => {
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
      </div>
    </div>
  );
};

export default FilterSidebar;
