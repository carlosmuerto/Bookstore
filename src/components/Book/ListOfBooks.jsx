import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import BookComponent from './Book';
import { fetchBooks } from '../../redux/books/books';

const ListOfBooks = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.books.books);
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div className="books-lisk">
      {books.map((book) => (<BookComponent key={`books-lisk-card-${book.item_id}`} book={book} />))}
    </div>
  );
};

export default ListOfBooks;
