import { configureStore } from '@reduxjs/toolkit';
import booksReducers from './books/books';
import categoriesReducers from './categories/categories';

const store = configureStore({
  reducer: {
    books: booksReducers,
    categories: categoriesReducers,
  },
});

export default store;
