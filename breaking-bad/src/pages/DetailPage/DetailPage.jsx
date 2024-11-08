import "./DetailPage.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailPage() {
  const { id } = useParams();
  const card = useSelector((state) =>
    state.cards.find((card) => card.id === id)
  );

  if (!card) {
    return <h2>Персонаж не найден</h2>;
  }

  return (
    <div>
      <h1>страница с выбраным персонажем</h1>
      <p>{card.id}</p>
    </div>
  );
}

export default DetailPage;
