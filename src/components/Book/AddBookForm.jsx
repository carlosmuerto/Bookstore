/* eslint-disable react/jsx-props-no-spreading */
/* props-no-spreading disabled because is quired for react-hook-form */
import { useForm } from 'react-hook-form';

const AddBookForm = () => {
  const { register, handleSubmit } = useForm();

  // eslint-disable-next-line no-console
  const onSubmit = (data) => { console.log(data); };
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
