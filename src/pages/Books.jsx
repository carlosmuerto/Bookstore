import React from 'react';
import AddBookForm from '../components/Book/AddBookForm';
import ListOfBooks from '../components/Book/ListOfBooks';
import './page.scss';

const BooksPage = () => (
  <main className="app-main books-page">
    <ListOfBooks />
    <div className="horizontal-divider" />
    <AddBookForm />
  </main>
);

export default BooksPage;
