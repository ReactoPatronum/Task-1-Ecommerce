import React from "react";
import { useAppSelector } from "../redux/store";
import FilterSidebar from "../components/FilterSidebar";
import ProductItem from "../components/ProductItem";
import { Helmet } from "react-helmet";

const Products = () => {
  //We get filtered products from the Redux store.
  const { filteredProducts } = useAppSelector((store) => store.products);

  return (
    <div className="flex flex-col sm:flex-row mt-10 sm:space-x-10 p-3">
      <Helmet>
        <title>ECOMMERCE-PRODUCTS</title>
        <meta name="description" content="Best clothes in town" />
      </Helmet>
      <div className="">
        <FilterSidebar length={filteredProducts.length} />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-5 sm:mt-0">
        {filteredProducts?.map((product, i) => (
          <ProductItem key={i} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
