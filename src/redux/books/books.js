import { concat, reject } from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import deepFreeze from 'deep-freeze';

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const createBook = (data, completed = 0, currentChapter = 'Chaper 01') => ({
  id: uuidv4(),
  ...data,
  completed,
  currentChapter,
});

const initState = deepFreeze({
  books: [
    createBook({
      title: 'init fist book',
      author: 'Author 1',
      genre: 'init genre',
    }),
    createBook({
      title: 'init second book',
      author: 'Author 2',
      genre: 'init genre',
    }),
  ],
});
const addBookAction = (prevState, data) => deepFreeze({
  books: concat(prevState.books, createBook(data)),
});

const removeBookAction = (prevState, id) => deepFreeze({
  books: reject(prevState.books, { id }),
});

// Reducer
const reducer = (prevState = initState, action = {}) => {
  switch (action.type) {
    case ADD: return addBookAction(prevState, action.data);
    case REMOVE: return removeBookAction(prevState, action.id);
    default: return prevState;
  }
};

// Action Creators

const addBook = (data) => ({ type: ADD, data });
const removeBook = (id) => ({ type: REMOVE, id });

export default reducer;
export { addBook, removeBook };
