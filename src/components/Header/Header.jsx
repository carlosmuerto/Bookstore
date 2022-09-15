import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ links }) => (
  <header className="app-header">
    <h3>Header</h3>
    <nav>
      {links.map((link) => (
        <div key={`NavLinkTo${link.text}`}>
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
  </header>
);

Header.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Header;
