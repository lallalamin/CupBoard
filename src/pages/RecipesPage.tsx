import { Link } from "react-router-dom";
import { Heart, Search } from "lucide-react";
import BoatNoodle from "../assets/recipes/BoatNoodle.jpg";
import ChickenRice from "../assets/recipes/ChickenRice.jpg";
import CrepeCake from "../assets/recipes/CrepeCake.jpg";
import PadKraPao from "../assets/recipes/PadKaprao.jpg";
import Hamburger from "../assets/recipes/Hamburger.jpg";
import ToffeeCake from "../assets/recipes/ToffeeCake.jpg";
import Palo from "../assets/recipes/Palo.jpg";

import "./RecipesPage.css";

const recipes = [
  {
    id: 1,
    name: "Pad Kaprao",
    cuisine: "Thai",
    time: "20 min",
    image: PadKraPao,
  },
  {
    id: 2,
    name: "Boat Noodles",
    cuisine: "Thai",
    time: "45 min",
    image: BoatNoodle,
    isNew: true,
  },
  {
    id: 3,
    name: "Crepe Cake",
    cuisine: "Dessert",
    time: "60 min",
    image: CrepeCake,
  },
  {
    id: 4,
    name: "Chicken Rice",
    cuisine: "Thai",
    time: "40 min",
    image: ChickenRice,
  },
  {
    id: 5,
    name: "Hamburger",
    cuisine: "American",
    time: "30 min",
    image: Hamburger,
  },
  {
    id: 5,
    name: "Toffee Cake",
    cuisine: "Dessert",
    time: "60 min",
    image: ToffeeCake,
    isNew: true,
  },
  {
    id: 5,
    name: "Palo",
    cuisine: "Thai",
    time: "60 min",
    image: Palo,
  },
];

function RecipesPage() {
  return (
    <div className="recipes-page">
      <div className="recipes-page__header">
        <div>
          <p className="recipes-page__eyebrow">MY CUPBOARD</p>
          <h1>Recipes</h1>
        </div>
      </div>

      <div className="recipes-search">
        <Search size={19} strokeWidth={1.8} />

        <input
          type="text"
          placeholder="Search recipes..."
        />
      </div>

      <div className="recipe-filters">
        <button className="recipe-filter active">All</button>
        <button className="recipe-filter">Favorites</button>
        <button className="recipe-filter">Quick</button>
        <button className="recipe-filter">Meal Prep</button>
      </div>

      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipes/${recipe.id}`}
            className="recipe-card"
          >
            <div className="recipe-card__image-wrap">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="recipe-card__image"
              />

              {recipe.isNew && (
                <span className="recipe-card__new-tag">
                  New!
                </span>
              )}

              <button
                type="button"
                className="recipe-card__favorite"
                aria-label={`Favorite ${recipe.name}`}
                onClick={(event) => {
                  event.preventDefault();
                }}
              >
                <Heart size={18} strokeWidth={1.8} />
              </button>
            </div>

            <div className="recipe-card__content">
              <h2>{recipe.name}</h2>

              <p>
                {recipe.cuisine} · {recipe.time}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecipesPage;