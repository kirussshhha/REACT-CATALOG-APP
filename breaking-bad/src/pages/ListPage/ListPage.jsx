import { useState } from "react";
import CardList from "../../components/CardList/CardList";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import "./ListPage.scss";
import PersonsList from "../../components/PersonsList/PersonsList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSelector } from "react-redux";

function ListPage() {
  const [isCardView, setIsCardView] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const persons = useSelector((state) => state.cards);

  const filteredPerson = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggle = () => {
    if (isCardView === false) {
      setIsCardView(true);
    } else {
      setIsCardView(false);
    }
  };

  return (
    <div className="toggle-view">
      <div className="list-controls">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <div className="view-toggle">
          <p className="prop-name">Доска</p>
          <ToggleSwitch onToggle={handleToggle} />
          <p className="prop-name">Список</p>
        </div>
      </div>

      {isCardView ? (
        <PersonsList persons={filteredPerson} />
      ) : (
        <CardList persons={filteredPerson} />
      )}
    </div>
  );
}

export default ListPage;
