/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as bookActions from '../../redux/books/books';

import './Book.scss';

const Book = ({ book }) => {
  const {
    item_id,
    title,
    genre,
    author,
  } = book;
  const dispatch = useDispatch();
  const onClick = () => { dispatch(bookActions.removeBook(item_id)); };
  return (
    <div className="book-card" id={item_id}>
      <div className="info">
        <h5 className="genres">
          {genre}
        </h5>
        <h4 className="title">{title}</h4>
        <h5 className="authors">
          {author}
        </h5>
      </div>
      <div className="read-status">
        <button type="button" onClick={onClick}>Delete</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    //    completed: PropTypes.number.isRequired,
    //    currentChapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
