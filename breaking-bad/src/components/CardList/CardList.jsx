import "./CardList.scss";
import PersonCard from "../PersonCard/PersonCard";

function CardList({ persons }) {
  return (
    <div>
      <h1 className="title">Доска персонажей</h1>
      <ul className="card-list">
        {persons.map((person) => (
          <PersonCard
            key={person.id}
            id={person.id}
            name={person.name}
            birthday={person.birthday}
            img={person.img}
            status={person.status}
          />
        ))}
      </ul>
    </div>
  );
}

export default CardList;
