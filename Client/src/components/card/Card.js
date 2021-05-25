import React from "react";
import { useHistory } from "react-router-dom";

function Card({ film }) {
  const { id, thumbnail } = film;

  const router = useHistory();

  const goToPage = () => {
    router.push(`/films/${id}`);
  };

  return (
    <div>
      <div className="cards mb-5">
        <div className="cardimage" onClick={goToPage}>
          <img src={`http://localhost:5000/uploads/${thumbnail}`}></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
