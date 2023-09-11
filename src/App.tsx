import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import MainLayout from "./components/MainLayout";
import { Product as IProduct } from "./types";
import useFetch from "./hooks/useFetch";
import { useAppDispatch } from "./redux/store";
import { getAllProducts } from "./redux/features/productSlice";

function App() {
  const dispatch = useAppDispatch();
  const { data } = useFetch<IProduct[]>("https://fakestoreapi.com/products", 0);

  useEffect(() => {
    if (data) {
      dispatch(getAllProducts(data));
    }
  }, [data]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
