import { remove } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { /* createAsyncThunk, */ createSlice } from '@reduxjs/toolkit';
import loadingStatus from '../reduxConst';

const createBook = (data) => ({
  item_id: uuidv4(),
  ...data,
});

const ACTION_PREPEND = 'bookstore/books';

const booksSlice = createSlice({
  name: ACTION_PREPEND,
  initialState: {
    loading: loadingStatus.idle,
    books: [
      createBook({
        title: 'The Great Gatsby',
        author: 'John Smith',
        genre: 'Fiction',
      }),
    ],
    error: null,
  },
  reducers: {
    ADD: (state, param) => {
      const { payload } = param;
      state.books.push(createBook(payload));
    },
    REMOVE: (state, param) => {
      const { payload } = param;
      remove(state.books, { item_id: payload });
    },
  },
});

const { actions, reducer } = booksSlice;
export { actions };
export default reducer;
