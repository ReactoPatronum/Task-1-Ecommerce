import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { useAppDispatch } from "../../../src/redux/store";
import {
  filterByHighest,
  filterByHighlyRated,
  filterByLowest,
} from "../../../src/redux/features/productSlice";

const Order = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="p-3">
      <h5 className=" font-semibold">Order By</h5>
      <div className=" mt-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="w-full">
            <div>
              <Button className="flex w-full items-center justify-between space-x-4">
                <span>ORDER</span>
                <ArrowUpDown className="" />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem onClick={() => dispatch(filterByLowest())}>
              Lowest Price
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => dispatch(filterByHighest())}>
              Highest Price
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => dispatch(filterByHighlyRated())}>
              Highly Rated
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Order;
