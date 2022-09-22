/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
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

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
};

// FETCHBOOKS
const fetchBooks = createAsyncThunk(
  `${ACTION_PREPEND}/FETCHBOOKS`,
  async () => {
    const res = await axios.get(ENDPOINTBOOKS, config);
    return res.data;
  },
);
// ADDBOOK
// const endPointBookId = (itemId) => `${ENDPOINTBOOKS}/${itemId}`;
const addBook = createAsyncThunk(
  `${ACTION_PREPEND}/ADDBOOK`,
  async (data, thunkAPI) => {
    const book = createBook(data);
    const res = await axios.post(ENDPOINTBOOKS, book, config);
    const resStatus = {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
    };
    if (resStatus.status === 201) thunkAPI.dispatch(fetchBooks());
    return resStatus;
  },
);
// DELETEBOOK
const endPointBookId = (itemId) => `${ENDPOINTBOOKS}/${itemId}`;

const deleteBook = createAsyncThunk(
  `${ACTION_PREPEND}/DELETEBOOK`,
  async (itemId, thunkAPI) => {
    const res = await axios.delete(endPointBookId(itemId), config);

    const resStatus = {
      data: res.data,
      status: res.status,
      statusText: res.statusText,
    };
    if (resStatus.status === 201) thunkAPI.dispatch(fetchBooks());
    return resStatus;
  },
);

const booksSlice = createSlice({
  name: ACTION_PREPEND,
  initialState: {
    loading: loadingStatus.idle,
    books: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // FETCHBOOKS
      .addCase(fetchBooks.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.loading = loadingStatus.succeeded;
        const BooksIds = keys(action.payload);
        state.books = BooksIds.map((item_id) => ({
          item_id,
          ...action.payload[item_id][0],
        }));
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.loading = loadingStatus.failed;
      })
      // ADDBOOK
      .addCase(addBook.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(addBook.fulfilled, (state) => {
        state.loading = loadingStatus.succeeded;
      })
      .addCase(addBook.rejected, (state) => {
        state.loading = loadingStatus.failed;
      })
      // DELETEBOOK
      .addCase(deleteBook.pending, (state) => {
        state.loading = loadingStatus.pending;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.loading = loadingStatus.succeeded;
      })
      .addCase(deleteBook.rejected, (state) => {
        state.loading = loadingStatus.failed;
      });
  },
});

const { actions, reducer } = booksSlice;
export {
  actions,
  fetchBooks,
  addBook,
  deleteBook,
};
export default reducer;
