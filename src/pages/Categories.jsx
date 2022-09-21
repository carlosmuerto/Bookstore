import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as categoriesRedux from '../redux/categories/categories';
import './page.scss';

const CategoriesPage = () => {
  const status = useSelector((store) => store.categories.status);
  const dispatch = useDispatch();
  const onClick = () => { dispatch(categoriesRedux.fetchCategoriesStatus()); };
  return (
    <main className="app-main categories-page">
      <h2>
        status:
        {` ${status}`}
      </h2>
      <button type="button" onClick={onClick}>Check status</button>
    </main>
  );
};

export default CategoriesPage;
