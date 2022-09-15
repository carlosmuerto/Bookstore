/* eslint-disable react/jsx-props-no-spreading */
/* props-no-spreading disabled because is quired for react-hook-form */
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';

const AddBookForm = ({ addBook }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => addBook(data);
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

AddBookForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddBookForm;
