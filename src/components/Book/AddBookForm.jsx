/* eslint-disable react/jsx-props-no-spreading */
/* props-no-spreading disabled because is quired for react-hook-form */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { addBook } from '../../redux/books/books';
import '@fontsource/montserrat';
import '@fontsource/roboto-slab';
import './AddBookForm.scss';

const schema = yup.object({
  title: yup.string().required(),
  author: yup.string().required(),
  category: yup.string().required(),
}).required();

const AddBookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    reset();
    dispatch(addBook(data));
  };

  return (
    <div className="add-book-form">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
        <input className="input title-input" {...register('title')} placeholder="title" />
        <input className="input author-input" {...register('author')} placeholder="author" />
        <select className="input category-input" {...register('category')}>
          <option value="">Categoty...</option>
          <option value="Fiction">Fiction</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
          <option value="Comedy">Comedy</option>
          <option value="Education">Education</option>
        </select>
        <button className="primary-button-big" type="submit">add Book</button>
      </form>
      <p>{errors.title?.message}</p>
      <p>{errors.author?.message}</p>
      <p>{errors.category?.message}</p>
    </div>
  );
};

export default AddBookForm;
