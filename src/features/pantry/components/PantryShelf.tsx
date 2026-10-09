import shelfImage from "../../../assets/ui/pantry-shelf.png";

type PantryItem = {
  name: string;
  image: string;
};

type PantryShelfProps = {
  title: string;
  items: PantryItem[];
};

function PantryShelf({ title, items }: PantryShelfProps) {
  return (
    <section className="pantry-shelf">
      <h2 className="pantry-shelf__title">{title}</h2>

      <div className="pantry-shelf__scene">
        <img
          src={shelfImage}
          alt=""
          className="pantry-shelf__background"
        />

        <div className="pantry-shelf__items">
          {items.map((item) => (
            <div className="pantry-item" key={item.name}>
              <img
                src={item.image}
                alt={item.name}
                className="pantry-item__image"
              />
              {/* <span className="pantry-item__name">
                {item.name}
              </span> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PantryShelf;