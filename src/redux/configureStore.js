import { configureStore } from '@reduxjs/toolkit';
import booksReducers from './books/books';
import categoriesReducers from './categories/categories';

const reducer = {
  books: booksReducers,
  categories: categoriesReducers,
};

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
