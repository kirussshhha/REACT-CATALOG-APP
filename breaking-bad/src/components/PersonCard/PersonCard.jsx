import { useNavigate } from "react-router-dom";
import PersonStatus from "../PersonStatus/PersonStatus";
import "./PersonCard.scss";

function PersonCard({ name, birthday, img, status, id }) {
  const navigate = useNavigate();

  const getUrlOnClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <li className="card" onClick={() => getUrlOnClick(id)}>
      <div className="card-img">
        <img className="user-img" src={img} alt="изображение персонажа" />
      </div>
      <div className="card-inf">
        <PersonStatus status={status} />
        <p className="username">{name}</p>
        <p className="user-birthday">{birthday}</p>
      </div>
    </li>
  );
}

export default PersonCard;
