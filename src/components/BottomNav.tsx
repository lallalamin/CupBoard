import { NavLink } from "react-router-dom";
import "./BottomNav.css";

function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive ? "bottom-nav__item active" : "bottom-nav__item"
        }
      >
        <span className="bottom-nav__icon">⌂</span>
        <span className="bottom-nav__label">Home</span>
      </NavLink>

      <NavLink
        to="/recipes"
        className={({ isActive }) =>
          isActive ? "bottom-nav__item active" : "bottom-nav__item"
        }
      >
        <span className="bottom-nav__icon">▤</span>
        <span className="bottom-nav__label">Recipes</span>
      </NavLink>

      <NavLink
        to="/meal-plan"
        className={({ isActive }) =>
          isActive ? "bottom-nav__item active" : "bottom-nav__item"
        }
      >
        <span className="bottom-nav__icon">□</span>
        <span className="bottom-nav__label">Plan</span>
      </NavLink>

      <NavLink
        to="/grocery"
        className={({ isActive }) =>
          isActive ? "bottom-nav__item active" : "bottom-nav__item"
        }
      >
        <span className="bottom-nav__icon">⌑</span>
        <span className="bottom-nav__label">Grocery</span>
      </NavLink>

      <NavLink
        to="/pantry"
        className={({ isActive }) =>
          isActive ? "bottom-nav__item active" : "bottom-nav__item"
        }
      >
        <span className="bottom-nav__icon">▥</span>
        <span className="bottom-nav__label">Pantry</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;