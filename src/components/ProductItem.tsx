import React from "react";
import { Product } from "../types";
import { Star } from "lucide-react";

type ProductProps = {
  product: Product;
};

const ProductItem: React.FC<ProductProps> = ({ product }) => {
  return (
    <div
      className="col-span-4 sm:col-span-2 lg:col-span-1  border rounded-lg p-3 group 
  hover:shadow-lg  transition-all duration-200 dark:brightness-75"
      key={product.id}
    >
      <div className="flex items-center justify-center">
        <p className="flex items-center justify-center">
          {Array(Math.floor(product.rating.rate))
            .fill(0)
            .map((_, index) => (
              <Star
                className="w-3 h-3"
                fill="orange"
                color="orange"
                key={index}
              />
            ))}
        </p>
        <p>
          <span className="ml-3 text-gray-500 text-xs">
            {product.rating.count}
          </span>
        </p>
      </div>
      <p className="text-center text-gray-500 font-semibold text-sm h-14">
        {product.title}
      </p>
      <img
        className="h-80 mx-auto object-cover group-hover:scale-105 transition-all duration-200"
        src={product.image}
        alt={product.title}
      />
      <p className="text-center text-orange-500 text-2xl mt-5 font-bold">
        {product.price} ₺
      </p>
    </div>
  );
};

export default ProductItem;
