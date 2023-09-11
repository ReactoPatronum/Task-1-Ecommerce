import { CategoriesArray } from "../../../src/types";
import useFetch from "../../../src/hooks/useFetch";
import React from "react";
import { useAppDispatch } from "../../../src/redux/store";
import { filterByCategory } from "../../../src/redux/features/productSlice";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { data } = useFetch<CategoriesArray>(
    "https://fakestoreapi.com/products/categories",
    0
  );

  const handleCategoryFilter = (category: string) => {
    dispatch(filterByCategory(category));
  };

  return (
    <div>
      <div className="p-3">
        <h5 className=" font-semibold">Categories</h5>
        <div className="mt-4 space-y-1">
          {data?.map((category, index) => (
            <div
              onClick={() => handleCategoryFilter(category)}
              className="text-sm hover:underline cursor-pointer hover:text-orange-500"
              key={index}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
