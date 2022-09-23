import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as categoriesRedux from '../redux/categories/categories';
import './page.scss';

const CategoriesPage = () => {
  const status = useSelector((store) => store.categories.status);
  const dispatch = useDispatch();
  const onClick = () => { dispatch(categoriesRedux.checkStatus()); };
  return (
    <main className="app-main categories-page">
      <button className="primary-button-big" type="button" onClick={onClick}>
        <h2>
          {`${status}`}
        </h2>
      </button>
    </main>
  );
};

export default CategoriesPage;
