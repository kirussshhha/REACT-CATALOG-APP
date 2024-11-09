import { useSelector } from "react-redux";
import "./CardList.scss";
import PersonCard from "../PersonCard/PersonCard";

function CardList() {
  const cards = useSelector((state) => state.cards);

  return (
    <div>
      <h1 className="title">Доска персонажей</h1>
      <ul className="card-list">
        {cards.map((card) => (
          <PersonCard
            key={card.id}
            id={card.id}
            name={card.name}
            birthday={card.birthday}
            img={card.img}
            status={card.status}
          />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
