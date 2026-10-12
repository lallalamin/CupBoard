import { NavLink } from "react-router-dom";
import {
  House,BookOpen,CalendarDays,ShoppingBasket,PackageOpen,
} from "lucide-react";
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
        <House size={26} strokeWidth={1.8} />
      </NavLink>

      <NavLink
        to="/recipes"
        className={({ isActive }) =>
          isActive ? "bottom-nav__item active" : "bottom-nav__item"
        }
      >
        <BookOpen size={26} strokeWidth={1.8} />
      </NavLink>

      <NavLink
        to="/meal-plan"
        className={({ isActive }) =>
          isActive ? "bottom-nav__item active" : "bottom-nav__item"
        }
      >
        <CalendarDays size={26} strokeWidth={1.8} />
      </NavLink>

      <NavLink
        to="/grocery"
        className={({ isActive }) =>
          isActive ? "bottom-nav__item active" : "bottom-nav__item"
        }
      >
        <ShoppingBasket size={26} strokeWidth={1.8} />
      </NavLink>

      <NavLink
        to="/pantry"
        className={({ isActive }) =>
          isActive ? "bottom-nav__item active" : "bottom-nav__item"
        }
      >
        <PackageOpen size={26} strokeWidth={1.8} />
      </NavLink>
    </nav>
  );
}

export default BottomNav;