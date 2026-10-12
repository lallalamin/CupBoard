import { Link } from "react-router-dom";
import {
  Search,
  Plus,
  BookOpen,
  CalendarPlus,
  ShoppingBasket,
  PackagePlus,
  ChevronRight,
} from "lucide-react";

import "./HomePage.css";

const recentRecipes = [
  {
    id: 1,
    name: "Japanese Curry",
    meta: "Japanese · 45 min",
  },
  {
    id: 2,
    name: "Pad Kra Pao",
    meta: "Thai · 20 min",
  },
  {
    id: 3,
    name: "Chicken Katsu",
    meta: "Japanese · 40 min",
  },
];

const weeklyMeals = [
  {
    day: "Mon",
    name: "Japanese Curry",
  },
  {
    day: "Tue",
    name: "Pad Kra Pao",
  },
  {
    day: "Wed",
    name: "Leftovers",
  },
];

function HomePage() {
  return (
    <div className="home-page">
      <header className="home-header">
        <div>
          <p className="home-header__greeting">
            Good evening, Mari! ✨
          </p>

          <p className="home-header__subtitle">
            What shall we cook today?
          </p>
        </div>

        <div className="home-header__mascot">
          🐱
        </div>
      </header>

      <div className="home-search">
        <Search size={19} strokeWidth={1.8} />

        <input
          type="text"
          placeholder="Search recipes..."
        />
      </div>

      <section className="home-section">
        <h2 className="home-section__title">
          Quick Actions
        </h2>

        <div className="quick-actions">
          <Link
            to="/recipes/new"
            className="quick-action quick-action--recipe"
          >
            <div className="quick-action__icon">
              <BookOpen size={25} />
              <Plus size={14} className="quick-action__plus" />
            </div>

            <span>Add Recipe</span>
          </Link>

          <Link
            to="/meal-plan"
            className="quick-action quick-action--meal"
          >
            <div className="quick-action__icon">
              <CalendarPlus size={27} />
            </div>

            <span>Plan a Meal</span>
          </Link>

          <Link
            to="/grocery"
            className="quick-action quick-action--grocery"
          >
            <div className="quick-action__icon">
              <ShoppingBasket size={27} />
              <Plus size={14} className="quick-action__plus" />
            </div>

            <span>Add Grocery</span>
          </Link>

          <Link
            to="/pantry"
            className="quick-action quick-action--pantry"
          >
            <div className="quick-action__icon">
              <PackagePlus size={27} />
            </div>

            <span>Add Pantry Item</span>
          </Link>
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__header">
          <h2 className="home-section__title">
            Recently Added
          </h2>

          <Link
            to="/recipes"
            className="home-section__link"
          >
            View all
            <ChevronRight size={14} />
          </Link>
        </div>

        <div className="recent-recipes">
          {recentRecipes.map((recipe) => (
            <Link
              key={recipe.id}
              to={`/recipes/${recipe.id}`}
              className="recent-recipe"
            >
              <div className="recent-recipe__image">
                🍛
              </div>

              <div>
                <p className="recent-recipe__name">
                  {recipe.name}
                </p>

                <p className="recent-recipe__meta">
                  {recipe.meta}
                </p>
              </div>

              <ChevronRight
                size={17}
                className="recent-recipe__chevron"
              />
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="home-section__header">
          <h2 className="home-section__title">
            This Week
          </h2>

          <Link
            to="/meal-plan"
            className="home-section__link"
          >
            View all
            <ChevronRight size={14} />
          </Link>
        </div>

        <div className="weekly-meals">
          {weeklyMeals.map((meal) => (
            <Link
              key={meal.day}
              to="/meal-plan"
              className="weekly-meal"
            >
              <span className="weekly-meal__day">
                {meal.day}
              </span>

              <div className="weekly-meal__image">
                🍽️
              </div>

              <span className="weekly-meal__name">
                {meal.name}
              </span>

              <ChevronRight size={17} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;