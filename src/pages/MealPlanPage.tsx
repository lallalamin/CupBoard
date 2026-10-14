import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

import BoatNoodle from "../assets/recipes/BoatNoodle.jpg";
import PadKraPao from "../assets/recipes/PadKaprao.jpg";
import ChickenRice from "../assets/recipes/ChickenRice.jpg";
import CrepeCake from "../assets/recipes/CrepeCake.jpg";
import Palo from "../assets/recipes/Palo.jpg";

import "./MealPlanPage.css";

const week = [
  {
    day: "Mon",
    date: 12,
    meal: "Boat Noodle",
    image: BoatNoodle,
  },
  {
    day: "Tue",
    date: 13,
    meal: "Pad Kaprao",
    image: PadKraPao,
  },
  {
    day: "Wed",
    date: 14,
    meal: null,
    image: null,
  },
  {
    day: "Thu",
    date: 15,
    meal: "Chicken Rice",
    image: ChickenRice,
  },
  {
    day: "Fri",
    date: 16,
    meal: "Crepe Cake",
    image: CrepeCake,
  },
  {
    day: "Sat",
    date: 17,
    meal: "Eat Out",
    image: null,
  },
  {
    day: "Sun",
    date: 18,
    meal: "Palo",
    image: Palo,
  },
];

function MealPlanPage() {
  return (
    <div className="meal-plan-page">
      <header className="recipes-page__header">
        <h1>Meal Plan</h1>
      </header>

      <div className="meal-plan-week">
        <button
          type="button"
          className="meal-plan-week__arrow"
          aria-label="Previous week"
        >
          <ChevronLeft size={20} />
        </button>

        <span className="meal-plan-week__range">
          Oct 12 – Oct 18
        </span>

        <button
          type="button"
          className="meal-plan-week__arrow"
          aria-label="Next week"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="meal-plan-list">
        {week.map((item) => (
          <div
            key={item.day}
            className="meal-plan-row"
          >
            <div className="meal-plan-row__date">
              <span className="meal-plan-row__day">
                {item.day}
              </span>

              <span className="meal-plan-row__number">
                {item.date}
              </span>
            </div>

            {item.meal ? (
              <>
                <div className="meal-plan-row__image-wrap">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.meal}
                      className="meal-plan-row__image"
                    />
                  ) : (
                    <span className="meal-plan-row__emoji">
                      🍴
                    </span>
                  )}
                </div>

                <span className="meal-plan-row__meal">
                  {item.meal}
                </span>

                <ChevronRight
                  size={18}
                  className="meal-plan-row__chevron"
                />
              </>
            ) : (
              <button
                type="button"
                className="meal-plan-row__add"
              >
                <Plus size={16} />
                Add a meal
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MealPlanPage;