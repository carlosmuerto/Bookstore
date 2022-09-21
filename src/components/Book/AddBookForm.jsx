/* eslint-disable react/jsx-props-no-spreading */
/* props-no-spreading disabled because is quired for react-hook-form */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { actions as bookActions } from '../../redux/books/books';

const AddBookForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(bookActions.ADD(data));
    reset();
  };
  return (
    <div className="add-book-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} placeholder="title" />
        <input {...register('author')} placeholder="author" />
        <input {...register('genre')} placeholder="genre" />
        <button type="submit">add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
