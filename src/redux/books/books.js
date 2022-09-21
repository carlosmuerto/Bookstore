/* eslint-disable camelcase */
import { concat, reject } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import deepFreeze from 'deep-freeze';

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const createBook = (data) => ({
  item_id: uuidv4(),
  ...data,
});

const initState = deepFreeze({
  books: [
    createBook({
      title: 'The Great Gatsby',
      author: 'John Smith',
      genre: 'Fiction',
    }),
  ],
});
const addBookAction = (prevState, data) => deepFreeze({
  books: concat(prevState.books, createBook(data)),
});

const removeBookAction = (prevState, item_id) => deepFreeze({
  books: reject(prevState.books, { item_id }),
});

// Reducer
const reducer = (prevState = initState, action = {}) => {
  switch (action.type) {
    case ADD: return addBookAction(prevState, action.data);
    case REMOVE: return removeBookAction(prevState, action.item_id);
    default: return prevState;
  }
};

// Action Creators

const addBook = (data) => ({ type: ADD, data });
const removeBook = (item_id) => ({ type: REMOVE, item_id });

export default reducer;
export { addBook, removeBook };
