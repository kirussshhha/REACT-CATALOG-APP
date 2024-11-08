import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./DetailPage.scss";
import PersonStatus from "../../components/PersonStatus/PersonStatus";
import BackBtn from "../../components/BackBtn/BackBtn";

function DetailPage() {
  const { id } = useParams();
  const card = useSelector((state) =>
    state.cards.find((card) => card.id === id)
  );

  if (!card) {
    return (
      <div className="not-found">
        <BackBtn />
        <h1 className="not-found-title">Персонаж не найден</h1>
      </div>
    );
  }

  return (
    <div className="detail">
      <BackBtn />
      <div className="detail__container">
        <div className="detail-img">
          <img
            className="person-image"
            src={card.img}
            alt="Изображение персонажа"
          />
        </div>
        <div className="detail-content">
          <PersonStatus status={card.status} />
          <p className="person-name">{card.name}</p>
          <p className="person-birthday">
            <span className="prop-title">Дата рождения: </span>
            {card.birthday}
          </p>
          <p className="person-nickname">
            <span className="prop-title">Ник-нейм: </span>Ник-нейм персонажа
          </p>
          <p className="person-inf">
            <span className="prop-title">Цитата: </span>Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Deleniti, debitis, magni saepe
            eius corporis rerum perspiciatis eos cumque molestias accusamus enim
            dolorem similique alias vero aut unde nesciunt asperiores minus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
