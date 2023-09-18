import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../src/types";

interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  appliedFilters: {
    category?: string;
    price?: { min: number; max: number };
    rating?: number;
  };
}

const initialState: ProductState = {
  products: [],
  filteredProducts: [],
  appliedFilters: {},
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
      state.appliedFilters.category = action.payload;
      applyFilters(state);
    },
    filterByPrice(state, action) {
      state.appliedFilters.price = action.payload;
      applyFilters(state);
    },
    filterByRating(state, action) {
      state.appliedFilters.rating = action.payload;
      applyFilters(state);
    },
    filterByHighest(state) {
      state.filteredProducts = [...state.filteredProducts].sort(
        (a, b) => b.price - a.price
      );
    },
    filterByLowest(state) {
      state.filteredProducts = [...state.filteredProducts].sort(
        (a, b) => a.price - b.price
      );
    },
    filterByHighlyRated(state) {
      state.filteredProducts = [...state.filteredProducts].sort(
        (a, b) => b.rating.count - a.rating.count
      );
    },
    resetFilters(state) {
      state.filteredProducts = state.products;
      state.appliedFilters = {};
    },
    searchProduct(state, action) {},
  },
});

//Define a helper function to apply filters.
function applyFilters(state: ProductState) {
  const { category, price, rating } = state.appliedFilters;
  let filteredProducts = state.products;

  if (category) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  if (price) {
    filteredProducts = filteredProducts.filter(
      (product) => product.price > price.min && product.price < price.max
    );
  }

  if (rating) {
    filteredProducts = filteredProducts.filter(
      (product) => product.rating.rate > rating
    );
  }

  state.filteredProducts = filteredProducts;
}

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
