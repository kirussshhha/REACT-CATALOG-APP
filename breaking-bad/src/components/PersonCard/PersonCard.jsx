import "./PersonCard.scss";
import { useNavigate } from "react-router-dom";

function PersonCard({ name, birthday, img, status, id }) {
  const navigate = useNavigate();

  const getUrlOnClick = (id) => {
    navigate(`/details/${id}`)
  }

  return (
    <li className="card" onClick={() => getUrlOnClick(id)}>
      <div className="card-img">
        <img className="user-img" src={img} alt="изображение персонажа" />
      </div>
      <div className="card-inf">
        <p className={status === "Alive" ? "_alive" : "_deceased"}>{status}</p>
        <p className="username">{name}</p>
        <p className="user-birthday">{birthday}</p>
      </div>
    </li>
  );
}

export default PersonCard;
