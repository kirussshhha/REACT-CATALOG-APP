import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="logo">
          <NavLink to="/" className="logo-text">
            Breaking bad
          </NavLink>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "item-active" : "item"
                }
              >
                Главная
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/list"
                className={({ isActive }) =>
                  isActive ? "item-active" : "item"
                }
              >
                Все персонажи
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
