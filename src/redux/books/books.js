import { without } from 'lodash';

const initState = { books: [] };

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const createBook = (data) => {
  const { title, author, genre } = data;
  return {
    id: title, // TODO use UUID later
    title,
    genres: genre,
    authors: author,
    completed: 0,
    currentChapter: 'Introduction',
  };
};

const addBookAction = (prevState, data) => ({
  books: [...prevState.books, createBook(data)],
});

const removeBookAction = (prevState, id) => ({
  books: without(prevState.books, [id]),
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
