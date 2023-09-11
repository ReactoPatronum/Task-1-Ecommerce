import React from "react";
import useFetch from "../hooks/useFetch";
import { Skeleton } from "../components/ui/skeleton";
import { Product } from "../types";
import ProductItem from "../components/ProductItem";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  const { data, isLoading } = useFetch<Product[]>(
    "https://fakestoreapi.com/products",
    2000
  );

  return (
    <div className="p-3">
      <Helmet>
        <title>ECOMMERCE</title>
        <meta name="description" content="Best clothes in town" />
      </Helmet>

      <img
        className="rounded-lg"
        alt="banner"
        src="https://aydinli-polo.a-cdn.akinoncdn.com/cms/2023/08/22/8e122ac1-e331-43a8-8ac2-e274d1057984.jpg"
      />

      <div className="flex items-center justify-between mt-4">
        <h2 className="sm:text-2xl font-semibold">Super Price, Super Offer</h2>

        <Link to="/products">
          <Button>Show All Products</Button>
        </Link>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        {isLoading
          ? Array(4)
              .fill(1)
              .map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-[200px] col-span-4 sm:col-span-2 lg:col-span-1"
                />
              ))
          : (data || [])
              .slice(0, 4)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default Home;
