import PantryShelf from "../features/pantry/components/PantryShelf.tsx";
import "../features/pantry/pantry.css";
import CanolaOilImg from "../assets/sauces/CanolaOil.png";
import FishSauceImg from "../assets/sauces/FishSauce.png";
import SeasoningSauceImg from "../assets/sauces/SeasoningSauce.png";
import OysterSauceImg from "../assets/sauces/OysterSauce.png";
import VegetableOilImg from "../assets/sauces/VegetableOil.png";

import BottomNav from "../components/BottomNav";

function PantryPage() {
  return (
    <>
      <main className="pantry-page">
        <div className="pantry-page__header">
          <div>
            <p className="pantry-page__eyebrow">MY CUPBOARD</p>
            <h1>Pantry</h1>
          </div>

          <button className="pantry-page__add-button">
            +
          </button>
        </div>

        <div className="pantry-page__shelves">
          <PantryShelf
              title="Sauces"
              items={[
                  {
                  name: "Soy Sauce",
                  image: CanolaOilImg,
                  },
                  {
                  name: "FishSauce",
                  image: FishSauceImg,
                  },
                  {
                  name: "Sriracha",
                  image: SeasoningSauceImg,
                  },
                  {
                  name: "Oyster Sauce",
                  image: OysterSauceImg,
                  },
                  {
                  name: "Fish Sauce",
                  image: VegetableOilImg,
                  },
                  {
                  name: "Soy Sauce 1",
                  image: CanolaOilImg,
                  },
                  {
                  name: "FishSauce 2",
                  image: FishSauceImg,
                  },
              ]}
              />
        </div>
      </main>
      <BottomNav />
    </>
  );
}

export default PantryPage;