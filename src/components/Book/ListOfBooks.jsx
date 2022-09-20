import BookComponent from './Book';

const ListOfBooks = () => {
  const books = [];
  return (
    <div className="books-lisk">
      {books.map((book) => (<BookComponent key={`books-lisk-card-${book.id}`} book={book} />))}
    </div>
  );
};

export default ListOfBooks;
