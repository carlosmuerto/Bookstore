/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/books';
import '@fontsource/montserrat';
import '@fontsource/roboto-slab';
import './Book.scss';

const Book = ({ book }) => {
  const {
    // eslint-disable-next-line camelcase
    item_id,
    title,
    category,
    author,
  } = book;
  const dispatch = useDispatch();
  const onClick = () => { dispatch(deleteBook(item_id)); };
  return (
    <div className="book-card" id={item_id}>
      <div className="info">
        <h5 className="categories">
          {category}
        </h5>
        <h4 className="title">{title}</h4>
        <h5 className="authors">{author}</h5>
        <div className="action-buttons">
          <button className="button-outline" type="button" onClick={onClick}>Delete</button>
          <div className="vertical-divider" />
        </div>
      </div>
      <div className="read-status" />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    //    completed: PropTypes.number.isRequired,
    //    currentChapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
