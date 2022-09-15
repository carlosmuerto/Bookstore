import React, { useState } from 'react';
import AddBookForm from '../components/Book/AddBookForm';
import ListOfBooks from '../components/Book/ListOfBooks';
import './page.scss';

const BooksPage = () => {
  const [books, setBooks] = useState([
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

  ]);
  const addBook = (data) => {
    const { title, author, genre } = data;

    setBooks((prevState) => [
      ...prevState,
      {
        id: title,
        title,
        genres: genre,
        authors: author,
        completed: 0,
        currentChapter: 'Introduction',
      },
    ]);
  };

  return (
    <main className="app-main books-page">
      <h2>
        Books
      </h2>
      <ListOfBooks books={books} />
      <AddBookForm addBook={addBook} />
    </main>
  );
};

export default BooksPage;
