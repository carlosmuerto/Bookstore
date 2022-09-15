import PropTypes from 'prop-types';
import Book from './Book';

const ListOfBooks = ({ books }) => (
  <div className="books-lisk">
    {books.map((book) => (<Book key={`books-lisk-card-${book.id}`} book={book} />))}
  </div>
);

ListOfBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    completed: PropTypes.number.isRequired,
    currentChapter: PropTypes.string.isRequired,
  })).isRequired,
};

export default ListOfBooks;
