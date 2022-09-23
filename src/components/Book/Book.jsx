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
        <h5 className="categories">{category}</h5>
        <h4 className="title">{title}</h4>
        <h5 className="authors">{author}</h5>
        <div className="action-buttons">
          <button className="button-outline" type="button">Comments</button>
          <div className="vertical-divider" />
          <button className="button-outline" type="button" onClick={onClick}>Remove</button>
          <div className="vertical-divider" />
          <button className="button-outline" type="button">Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress-container"><div className="circular-progress" /></div>
        <div className="progress-stat">
          <p className="percent-complete">64%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-label">CURRENT CHAPTER</p>
            <p className="current-chapter">Chapter 17</p>
          </div>
          <div><button className="primary-button" type="button">UPDATE PROGRESS</button></div>
        </div>
      </div>
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
