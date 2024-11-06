import "./PersonCard.scss";

function PersonCard({ name, birthday, img, status }) {
  return (
    <div className="card">
      <div className="card-img">
        <img className="user-img" src={img} alt="изображение персонажа" />
      </div>
      <div className="card-inf">
        <p className={status === "Alive" ? "_alive" : "_deceased"}>{status}</p>
        <p className="username">{name}</p>
        <p className="user-birthday">{birthday}</p>
      </div>
    </div>
  );
}

PersonCard.defaultProps = {
  id: 1,
  name: "Walter White",
  birthday: "09-07-1958",
  img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
  status: "Deceased",
};

export default PersonCard;
