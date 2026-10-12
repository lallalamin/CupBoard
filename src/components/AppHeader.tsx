import { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Menu,
  ChevronDown,
  Check,
  Plus,
  LogIn,
  Settings,
  User,
} from "lucide-react";

import "./AppHeader.css";

function AppHeader() {
  const location = useLocation();

  const [kitchenOpen, setKitchenOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [selectedKitchen, setSelectedKitchen] = useState("My Kitchen");

  const isHomePage = location.pathname === "/";

  const kitchens = [
    "My Kitchen",
    "Dane's Kitchen",
  ];

  function selectKitchen(kitchen: string) {
    setSelectedKitchen(kitchen);
    setKitchenOpen(false);
  }

  return (
    <header className="app-header">

      {/* LOGO */}
      <img
        src="/CupBoardLogo.png"
        alt="Cupboard"
        className="app-header__logo-image"
        />

      {/* KITCHEN SELECTOR - HOME ONLY */}
      <div className="app-header__center">
        {isHomePage && (
          <div className="kitchen-selector">
            <button
              className="kitchen-selector__button"
              onClick={() => {
                setKitchenOpen(!kitchenOpen);
                setMenuOpen(false);
              }}
            >
              {selectedKitchen}

              <ChevronDown
                size={16}
                className={
                  kitchenOpen
                    ? "kitchen-selector__chevron open"
                    : "kitchen-selector__chevron"
                }
              />
            </button>

            {kitchenOpen && (
              <div className="kitchen-menu">
                {kitchens.map((kitchen) => (
                  <button
                    key={kitchen}
                    className="kitchen-menu__item"
                    onClick={() => selectKitchen(kitchen)}
                  >
                    <span>
                      {kitchen === selectedKitchen && (
                        <Check size={15} />
                      )}
                    </span>

                    {kitchen}
                  </button>
                ))}

                <div className="kitchen-menu__divider" />

                <button className="kitchen-menu__item">
                  <Plus size={16} />
                  Add Kitchen
                </button>

                <button className="kitchen-menu__item">
                  <LogIn size={16} />
                  Join Kitchen
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* USER MENU */}
      <div className="app-header__menu">
        <button
          className="app-header__menu-button"
          aria-label="Open menu"
          onClick={() => {
            setMenuOpen(!menuOpen);
            setKitchenOpen(false);
          }}
        >
          <Menu size={25} />
        </button>

        {menuOpen && (
          <div className="user-menu">
            <button className="user-menu__item">
              <User size={17} />
              Profile
            </button>

            <button className="user-menu__item">
              <Settings size={17} />
              Settings
            </button>
          </div>
        )}
      </div>

    </header>
  );
}

export default AppHeader;