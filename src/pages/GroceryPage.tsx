import { useState } from "react";

import Basil from "../assets/ingredients/Basil.png";
import Butter from "../assets/ingredients/Butter.png";
import Chilli from "../assets/ingredients/Chilli.png";
import Egg from "../assets/ingredients/Egg.png";
import Pork from "../assets/ingredients/Pork.png";

import "./GroceryPage.css";

type GroceryItem = {
  id: number;
  name: string;
  image?: string;
  have: boolean;
};

type GrocerySection = {
  title: string;
  items: GroceryItem[];
};
const initialSections: GrocerySection[] = [
  {
    title: "Produce",
    items: [
      {
        id: 1,
        name: "Basil",
        image: Basil,
        have: false,
      },
      {
        id: 2,
        name: "Chilli",
        image: Chilli,
        have: false,
      },
    ],
  },
  {
    title: "Meat",
    items: [
      {
        id: 3,
        name: "Pork",
        image: Pork,
        have: false,
      },
    ],
  },
  {
    title: "Dairy & Others",
    items: [
      {
        id: 4,
        name: "Egg",
        image: Egg,
        have: false,
      },
      {
        id: 5,
        name: "Butter",
        image: Butter,
        have: false,
      },
    ],
  },
];

function GroceryPage() {
  const [sections, setSections] = useState(initialSections);

  const neededSections = sections.map((section) => ({
    ...section,
    items: section.items.filter((item) => !item.have),
  }));

  const alreadyHave = sections
    .flatMap((section) => section.items)
    .filter((item) => item.have);

  function toggleItem(id: number) {
  setSections((current) =>
    current.map((section) => ({
      ...section,
      items: section.items.map((item) =>
        item.id === id
          ? { ...item, have: !item.have }
          : item
      ),
    }))
  );
}

  return (
    <div className="grocery-page">
      <header className="recipes-page__header">
        <h1>Recipes</h1>
      </header>

      <div className="grocery-filters">
        <button className="grocery-filter active">
          All Items
        </button>

        <button className="grocery-filter">
          By Recipe
        </button>

        <button className="grocery-filter">
          Need Only
        </button>
      </div>

      <div className="grocery-sections">
        {neededSections.map((section) => {
          if (section.items.length === 0) return null;

          return (
            <section
              key={section.title}
              className="grocery-section"
            >
              <h2>{section.title}</h2>

              <div className="grocery-section__items">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="grocery-item"
                    onClick={() => toggleItem(item.id)}
                  >
                    <span className="grocery-item__checkbox" />

                    <div className="grocery-item__image-wrap">
                      {item.image && (
                        <img
                          src={item.image}
                          alt=""
                          className="grocery-item__image"
                        />
                      )}
                    </div>

                    <span className="grocery-item__name">
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      {alreadyHave.length > 0 && (
        <section className="grocery-section grocery-section--have">
          <h2>Already Have</h2>

          <div className="grocery-section__items">
            {alreadyHave.map((item) => (
              <button
                key={item.id}
                type="button"
                className="grocery-item grocery-item--have"
                onClick={() => toggleItem(item.id)}
              >
                <span className="grocery-item__checkbox grocery-item__checkbox--checked">
                  ✓
                </span>

                <div className="grocery-item__image-wrap">
                  {item.image && (
                    <img
                      src={item.image}
                      alt=""
                      className="grocery-item__image"
                    />
                  )}
                </div>

                <span className="grocery-item__name">
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default GroceryPage;