import React from "react";
import { useSearchParams } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { Helmet } from "react-helmet";
import ProductItem from "../components/ProductItem";

const Search = () => {
  const [searchParams] = useSearchParams();
  const { products } = useAppSelector((store) => store.products);

  const param = searchParams.get("product");
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(param ? param.toLowerCase() : "")
  );
  console.log(products.map((product) => product.title));
  return (
    <div className="flex flex-col sm:flex-row mt-10 sm:space-x-10 p-3">
      <Helmet>
        <title>ECOMMERCE-SEARCH</title>
        <meta name="description" content="Best clothes in town" />
      </Helmet>
      <div></div>
      <div className="grid grid-cols-4 gap-4 mt-5 sm:mt-0">
        {filteredProducts?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Search;
