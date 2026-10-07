import PantryShelf from "../features/pantry/components/PantryShelf.tsx";
import "../features/pantry/pantry.css";
import CanolaOilImg from "../assets/Sauces/CanolaOil.png";
import FishSauceImg from "../assets/Sauces/FishSauce.png";
import SeasoningSauceImg from "../assets/Sauces/SeasoningSauce.png";
import OysterSauceImg from "../assets/Sauces/OysterSauce.png";
import VegetableOilImg from "../assets/Sauces/VegetableOil.png";

function PantryPage() {
  return (
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
                name: "Ketchup",
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
            ]}
            />
      </div>
    </main>
  );
}

export default PantryPage;