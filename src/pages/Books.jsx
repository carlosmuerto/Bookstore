import React from 'react';
import AddBookForm from '../components/Book/AddBookForm';
import ListOfBooks from '../components/Book/ListOfBooks';
import './page.scss';

const BooksPage = () => (
  <main className="app-main books-page">
    <h2>
      Books
    </h2>
    <AddBookForm />
    <ListOfBooks />
  </main>
);

export default BooksPage;
