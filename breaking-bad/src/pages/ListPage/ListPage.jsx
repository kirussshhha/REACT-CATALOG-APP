import { useState } from "react";
import CardList from "../../components/CardList/CardList";
import ToggleSwitch from "../../components/ToggleSwitch/ToggleSwitch";
import "./ListPage.scss";
import PersonsList from "../../components/PersonsList/PersonsList";

function ListPage() {
  const [isCardView, setIsCardView] = useState(false);

  const handleToggle = () => {
    if (isCardView === false) {
      setIsCardView(true);
    } else {
      setIsCardView(false);
    }
  };

  return (
    <div className="toggle-view">
      <div className="toggle-list">
        <p className="prop-name">Доска</p>
        <ToggleSwitch onToggle={handleToggle} />
        <p className="prop-name">Список</p>
      </div>

      {isCardView ? <PersonsList /> : <CardList />}
    </div>
  );
}

export default ListPage;
