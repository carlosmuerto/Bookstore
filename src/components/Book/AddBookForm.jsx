/* eslint-disable react/jsx-props-no-spreading */
/* props-no-spreading disabled because is quired for react-hook-form */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/books';

const AddBookForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addBook(data));
    reset();
  };
  return (
    <div className="add-book-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('title')} placeholder="title" />
        <input {...register('author')} placeholder="author" />
        <input {...register('category')} placeholder="category" />
        <button type="submit">add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;
