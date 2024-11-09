import { useNavigate } from "react-router-dom";
import "./Person.scss";
import PersonStatus from "../PersonStatus/PersonStatus";

function Person({ name, status, birthday, id }) {
  const navigate = useNavigate();

  const getUrlOnClick = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="person__container" onClick={() => getUrlOnClick(id)}>
      <p className="person-name">{name}</p>
      <PersonStatus status={status} />
      <p className="person-birthday">{birthday}</p>
    </div>
  );
}

export default Person;
