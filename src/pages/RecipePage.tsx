import { useState } from "react";
import {
  CalendarPlus,
  ShoppingBasket,
  Clock3,
  Users,
  ChefHat,
  Heart,
  Play,
  Timer,
} from "lucide-react";

import PadKaprao from "../assets/recipes/PadKaprao.jpg";

import Basil from "../assets/ingredients/Basil.png";
import Chilli from "../assets/ingredients/Chilli.png";
import Egg from "../assets/ingredients/Egg.png";
import Pork from "../assets/ingredients/Pork.png";

import FishSauce from "../assets/sauces/FishSauce.png";
import SeasoningSauce from "../assets/sauces/SeasoningSauce.png";
import OysterSauce from "../assets/sauces/OysterSauce.png";

import "./RecipePage.css";

type Tab = "ingredients" | "steps" | "notes";

type Ingredient = {
  id: number;
  name: string;
  amount?: string;
  image?: string;
};

type RecipeStep = {
  id: number;
  title: string;
  description: string;
  image?: string;
};

const ingredients: Ingredient[] = [
  {
    id: 1,
    name: "Ground pork",
    amount: "500 g",
    image: Pork,
  },
  {
    id: 2,
    name: "Thai basil",
    amount: "2 cups",
    image: Basil,
  },
  {
    id: 3,
    name: "Chilli",
    amount: "2–3",
    image: Chilli,
  },
  {
    id: 4,
    name: "Fried egg",
    amount: "2 eggs",
    image: Egg,
  },
  {
    id: 5,
    name: "Fish sauce",
    amount: "1.5 tbsp",
    image: FishSauce,
  },
  {
    id: 6,
    name: "Seasoning Sauce",
    amount: "1 tbsp",
    image: SeasoningSauce,
  },
  {
    id: 7,
    name: "Oyster sauce",
    amount: "1 tbsp",
    image: OysterSauce,
  },
  {
    id: 8,
    name: "Sugar",
    amount: "1 tsp",
  },
];

const steps: RecipeStep[] = [
  {
    id: 1,
    title: "Prep the ingredients",
    description:
      "Slice the chilli, pick the basil leaves, and prepare all sauces before cooking.",
  },
  {
    id: 2,
    title: "Cook the pork",
    description:
      "Heat a pan over medium-high heat. Add the ground pork and cook until browned.",
  },
  {
    id: 3,
    title: "Add the sauces",
    description:
      "Add fish sauce, soy sauce, oyster sauce, sugar, and chilli. Stir until everything is well coated.",
    image: PadKaprao,
  },
  {
    id: 4,
    title: "Add basil",
    description:
      "Turn off the heat and fold in the Thai basil until just wilted.",
  },
  {
    id: 5,
    title: "Serve",
    description:
      "Serve over hot rice and top with a fried egg.",
    image: PadKaprao,
  },
];

function RecipePage() {
  const [activeTab, setActiveTab] = useState<Tab>("ingredients");
  const [favorite, setFavorite] = useState(false);
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);

  function toggleIngredient(id: number) {
    setCheckedIngredients((current) =>
      current.includes(id)
        ? current.filter((itemId) => itemId !== id)
        : [...current, id]
    );
  }

  return (
    <div className="recipe-page">
      <section className="recipe-hero">
        <img
          src={PadKaprao}
          alt="Pad Kaprao"
          className="recipe-hero__image"
        />

        <button
          type="button"
          className={
            favorite
              ? "recipe-hero__favorite recipe-hero__favorite--active"
              : "recipe-hero__favorite"
          }
          onClick={() => setFavorite(!favorite)}
          aria-label="Favorite recipe"
        >
          <Heart
            size={21}
            fill={favorite ? "currentColor" : "none"}
          />
        </button>
      </section>

      <section className="recipe-summary">
        <div className="recipe-summary__heading">
          <div>
            <h1>Pad Kaprao</h1>

            <p className="recipe-summary__subtitle">
              Thai · savory weeknight favorite
            </p>
          </div>
        </div>

        <div className="recipe-meta">
          <div className="recipe-meta__item">
            <Clock3 size={17} />
            <span>20 min</span>
          </div>

          <div className="recipe-meta__item">
            <Users size={17} />
            <span>Serves 2</span>
          </div>

          <div className="recipe-meta__item">
            <ChefHat size={17} />
            <span>Easy</span>
          </div>
        </div>

        <div className="recipe-actions">
          <button
            type="button"
            className="recipe-action recipe-action--primary"
          >
            <CalendarPlus size={18} />
            Add to Meal Plan
          </button>

          <button
            type="button"
            className="recipe-action recipe-action--secondary"
          >
            <ShoppingBasket size={18} />
            Add to Grocery
          </button>
        </div>

        <div className="recipe-tags">
          <span>Quick</span>
          <span>Meal Prep</span>
        </div>
      </section>

      <nav className="recipe-tabs">
        <button
          type="button"
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </button>

        <button
          type="button"
          className={activeTab === "steps" ? "active" : ""}
          onClick={() => setActiveTab("steps")}
        >
          Steps
        </button>

        <button
          type="button"
          className={activeTab === "notes" ? "active" : ""}
          onClick={() => setActiveTab("notes")}
        >
          Notes
        </button>
      </nav>

      <section className="recipe-tab-content">
        {activeTab === "ingredients" && (
          <div className="ingredients-card">
            {ingredients.map((ingredient) => {
              const checked = checkedIngredients.includes(ingredient.id);

              return (
                <button
                  key={ingredient.id}
                  type="button"
                  className={
                    checked
                      ? "ingredient-row ingredient-row--checked"
                      : "ingredient-row"
                  }
                  onClick={() => toggleIngredient(ingredient.id)}
                >
                  <span className="ingredient-row__checkbox">
                    {checked ? "✓" : ""}
                  </span>

                  <div className="ingredient-row__image-wrap">
                    {ingredient.image && (
                      <img
                        src={ingredient.image}
                        alt=""
                        className="ingredient-row__image"
                      />
                    )}
                  </div>

                  <span className="ingredient-row__name">
                    {ingredient.name}
                  </span>

                  <span className="ingredient-row__amount">
                    {ingredient.amount}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {activeTab === "steps" && (
          <div className="recipe-steps">
            {steps.map((step) => (
              <article
                key={step.id}
                className={
                  step.image
                    ? "recipe-step recipe-step--with-image"
                    : "recipe-step"
                }
              >
                <div className="recipe-step__number">
                  {step.id}
                </div>

                {step.image && (
                  <img
                    src={step.image}
                    alt=""
                    className="recipe-step__image"
                  />
                )}

                <div className="recipe-step__content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        {activeTab === "notes" && (
          <div className="recipe-notes">
            <h2>Notes</h2>

            <ul>
              <li>Use holy basil if you can find it.</li>
              <li>Add more chilli if you want it spicier.</li>
              <li>Chicken or tofu also work well.</li>
            </ul>
          </div>
        )}
      </section>

      <div className="recipe-cooking-actions">
        <button type="button" className="recipe-cooking-button">
          <Timer size={18} />
          Set Timer
        </button>

        <button
          type="button"
          className="recipe-cooking-button recipe-cooking-button--primary"
        >
          <Play size={18} />
          Cook Mode
        </button>
      </div>
    </div>
  );
}

export default RecipePage;