import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '@fontsource/montserrat';
import './header.scss';

const Header = ({ links }) => (
  <header className="app-header">
    <h3>Bookstore CMS</h3>
    <nav>
      {links.map((link) => (
        <div className="nav-links" key={`NavLinkTo${link.text}`}>
          <NavLink
            to={link.path}
            end
            className={`nav-link ${({ isActive }) => (isActive ? 'active' : undefined)}`}
          >
            {link.text}
          </NavLink>
        </div>
      ))}
    </nav>
    <button className="icon-button" type="button">
      <span className="material-icons primary-color"><FaUser /></span>
    </button>
  </header>
);

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
