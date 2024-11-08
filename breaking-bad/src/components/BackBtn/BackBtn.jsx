import "./BackBtn.scss";
import { useNavigate } from "react-router-dom";

function BackBtn() {
  const navigate = useNavigate();
  const onBackToList = () => {
    navigate("/list");
  };

  return (
    <div className="detail-btn">
      <button className="back-btn" onClick={() => onBackToList()}>
        Назад в Каталог
      </button>
    </div>
  );
}

export default BackBtn;
