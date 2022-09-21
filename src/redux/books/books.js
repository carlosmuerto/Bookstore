/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
// import { remove } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { keys } from 'lodash';
import loadingStatus from '../reduxConst';

const createBook = (data) => ({
  item_id: uuidv4(),
  ...data,
});

// actions CONSTANTS
const ACTION_PREPEND = 'bookstore/books';
const BASEURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const APPID = 'rHGdJNyJVhIQoSfdhaAY';
const ENDPOINTBOOKS = `${BASEURL}/apps/${APPID}/books`;

// ASYNC REDUCERS
// FETCHBOOKS
const fetchBooks = createAsyncThunk(
  `${ACTION_PREPEND}/FETCHBOOKS`,
  async () => {
    const res = await axios.get(ENDPOINTBOOKS);
    return res.data;
    /*
    // WAIT -------------------------------------\/ millisecunds
    await new Promise((res) => { setTimeout(res, 750); });
    return [
      createBook({
        title: 'The Great Gatsby',
        author: 'John Smith',
        genre: 'Fiction',
      }),
    ];
    */
  },
);
// ADDBOOK
// const endPointBookId = (itemId) => `${ENDPOINTBOOKS}/${itemId}`;
const addBook = createAsyncThunk(
  `${ACTION_PREPEND}/ADDBOOK`,
  async (data) => {
    // WAIT -------------------------------------\/ millisecunds
    await new Promise((res) => { setTimeout(res, 750); });
    return createBook({ data });
  },
);

const booksSlice = createSlice({
  name: ACTION_PREPEND,
  initialState: {
    loading: loadingStatus.idle,
    books: [],
    error: null,
  },
  reducers: {
    /*
    ADD: (state, param) => {
      const { payload } = param;
      state.books.push(createBook(payload));
    },
    REMOVE: (state, param) => {
      const { payload } = param;
      remove(state.books, { item_id: payload });
    },
    */
  },
  extraReducers: (builder) => {
    builder
      // FETCHBOOKS
      .addCase(fetchBooks.pending, (state) => {
        state.loadingStatus = loadingStatus.pending;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loadingStatus = loadingStatus.succeeded;
        const BooksIds = keys(action.payload);
        state.books = BooksIds.map((item_id) => ({
          item_id,
          ...action.payload[item_id][0],
        }));
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loadingStatus = loadingStatus.failed;
      })
      // ADDBOOK
      .addCase(addBook.pending, (state) => {
        state.loadingStatus = loadingStatus.pending;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.loadingStatus = loadingStatus.succeeded;
      })
      .addCase(addBook.rejected, (state) => {
        state.loadingStatus = loadingStatus.failed;
      });
  },
});

const { actions, reducer } = booksSlice;
export { actions, fetchBooks, addBook };
export default reducer;
