import PropTypes from 'prop-types';
import './Book.scss';

const Book = ({ book }) => {
  const {
    id,
    title,
    genres,
    authors,
    completed,
    currentChapter,
  } = book;
  return (
    <div className="book-card" id={id}>
      <div className="info">
        <h5 className="genres">
          {genres}
        </h5>
        <h4 className="title">{title}</h4>
        <h5 className="authors">
          {authors}
        </h5>
      </div>
      <div className="read-status">
        <h4 className="completed">{`${completed}%`}</h4>
        <h4 className="currentChapter">{currentChapter}</h4>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    completed: PropTypes.number.isRequired,
    currentChapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
