import { useSelector } from 'react-redux';
import BookComponent from './Book';
// import * as BooksActions from '../../redux/books/books';

const ListOfBooks = () => {
  const books = useSelector((store) => store.books.books);
  return (
    <div className="books-lisk">
      {books.map((book) => (<BookComponent key={`books-lisk-card-${book.id}`} book={book} />))}
    </div>
  );
};

export default ListOfBooks;
