import {
  BrowserRouter as Router,
  Routes,
  Route,
  //  Link,
} from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import BooksPage from './pages/Books';
import CategoriesPage from './pages/Categories';

const links = [
  {
    path: '/',
    text: 'Books',
    element: (<BooksPage />),
  },
  {
    path: '/categories',
    text: 'Categories',
    element: (<CategoriesPage />),
  },
];

const App = () => (
  <div className="app">
    <Router>
      <Header links={links} />
      <Routes>
        {links.map((link) => (
          <Route
            key={`RouteTo:${link.text}`}
            path={link.path}
            element={link.element}
          />
        ))}
      </Routes>
    </Router>
  </div>
);

export default App;
