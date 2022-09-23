import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookComponent from './Book';
import { fetchBooks } from '../../redux/books/books';
import loadingStatus from '../../redux/reduxConst';
import '@fontsource/montserrat';
import './ListOfBooks.scss';

const ListOfBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books.books);
  const loading = useSelector((store) => store.books.loading);
  useEffect(() => {
    if (loading === loadingStatus.idle) dispatch(fetchBooks());
  }, [dispatch, loading]);

  return (
    <div className="books-lisk">
      {books.map((book) => (<BookComponent key={`books-lisk-card-${book.item_id}`} book={book} />))}
    </div>
  );
};

export default ListOfBooks;
