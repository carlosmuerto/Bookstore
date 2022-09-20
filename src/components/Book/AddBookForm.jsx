/* eslint-disable react/jsx-props-no-spreading */
/* props-no-spreading disabled because is quired for react-hook-form */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as bookActions from '../../redux/books/books';

const AddBookForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => { dispatch(bookActions.addBook(data)); };
  return (
    <div className="add-book-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} placeholder="title" />
        <input {...register('author')} placeholder="author" />
        <input {...register('genre')} placeholder="genre" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddBookForm;
