import { without } from 'lodash';

const initBooks = [
  {
    id: 'The Hunger Games',
    title: 'The Hunger Games',
    genres: 'Action',
    authors: 'Suzanne Collins',
    completed: 64,
    currentChapter: 'Chapter 17',
  },
  {
    id: 'Dune',
    title: 'Dune',
    genres: 'Science Fiction',
    authors: 'Frank Herbert',
    completed: 8,
    currentChapter: 'Chapter 3: "A Lesson Learned"',
  },
  {
    id: 'Capital in the Twenty-First Century',
    title: 'Capital in the Twenty-First Century',
    genres: 'Economy',
    authors: 'Suzanne Collins',
    completed: 0,
    currentChapter: 'Introduction',
  },

];
const initState = { books: initBooks };

// Actions
const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const createBook = (data) => {
  const { title, author, genre } = data;
  return {
    id: title,
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
