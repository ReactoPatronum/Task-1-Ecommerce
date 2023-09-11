import { Product } from "../../../src/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [] as Product[],
  filteredProducts: [] as Product[],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts(state, action) {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    filterByCategory(state, action) {
      state.filteredProducts = state.products.filter(
        (product) => product.category === action.payload
      );
    },
    filterByPrice(state, action) {
      state.filteredProducts = state.products.filter(
        (product) =>
          product.price > action.payload.min &&
          product.price < action.payload.max
      );
    },
    filterByRating(state, action) {
      state.filteredProducts = state.products.filter(
        (product) => product.rating.rate > action.payload
      );
    },
    filterByHighest(state) {
      state.filteredProducts = state.filteredProducts.sort(
        (a, b) => b.price - a.price
      );
    },
    filterByLowest(state) {
      state.filteredProducts = state.filteredProducts.sort(
        (a, b) => a.price - b.price
      );
    },
    filterByHighlyRated(state) {
      state.filteredProducts = state.filteredProducts.sort(
        (a, b) => b.rating.count - a.rating.count
      );
    },
    resetFilters(state) {
      state.filteredProducts = state.products;
    },
    searchProduct(state, action) {},
  },
});

export const {
  getAllProducts,
  filterByCategory,
  filterByPrice,
  filterByRating,
  filterByHighest,
  filterByLowest,
  filterByHighlyRated,
  resetFilters,
  searchProduct,
} = productsSlice.actions;
export default productsSlice.reducer;
