import "./PersonCard.scss";

function PersonCard({ name, birthday, img, status }) {
  return (
    <li className="card">
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
