import React from 'react';
import Book from '../components/Book/Book';
import './page.scss';

const BooksPage = () => {
  const Books = [
    {
      id: 'The Hunger Games',
      title: 'The Hunger Games',
      genres: ['Action'],
      authors: ['Suzanne Collins'],
      completed: 64,
      currentChapter: 'Chapter 17',
    },
    {
      id: 'Dune',
      title: 'Dune',
      genres: ['Science Fiction'],
      authors: ['Frank Herbert'],
      completed: 8,
      currentChapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: 'Capital in the Twenty-First Century',
      title: 'Capital in the Twenty-First Century',
      genres: ['Economy'],
      authors: ['Suzanne Collins'],
      completed: 0,
      currentChapter: 'Introduction',
    },

  ];
  return (
    <main className="app-main books-page">
      <h2>
        Books
      </h2>
      <div className="books-lisk">
        {Books.map((book) => (<Book key={`books-lisk-card-${book.id}`} book={book} />))}
      </div>
    </main>
  );
};

export default BooksPage;
