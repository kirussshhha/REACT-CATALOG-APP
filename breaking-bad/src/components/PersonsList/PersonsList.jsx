import "./PersonsList.scss";
import Person from "../Person/Person";

function PersonsList({ persons }) {
  return (
    <div>
      <h1 className="title">Список персонажей</h1>
      <div className="list__container">
        {persons.map((person) => (
          <div key={person.id} className="person-border">
            <Person
              id={person.id}
              name={person.name}
              status={person.status}
              birthday={person.birthday}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PersonsList;
