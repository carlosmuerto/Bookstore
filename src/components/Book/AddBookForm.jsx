/* eslint-disable react/jsx-props-no-spreading */
/* props-no-spreading disabled because is quired for react-hook-form */
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as bookActions from '../../redux/books/books';

const AddBookForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  // eslint-disable-next-line no-console
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

/*
return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <Header />
      <input {...register("firstName")} placeholder="First name" />
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>
      <textarea {...register("aboutYou")} placeholder="About you" />
      <p>{data}</p>
      <input type="submit" />
    </form>
  );
*/
/*
AddBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};
*/
export default AddBookForm;
