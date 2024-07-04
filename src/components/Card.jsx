import React, { useState } from "react";

function Card({ id, name, info, image, price, removehandeler }) {
  const [readmore, setReadmore] = useState(false);

  const description = readmore ? info : `${info.substring(0, 200)}...`;

  function Truefalse() {
    setReadmore(!readmore);
  }

  return (
    <div className="card">
      <div className="tourInfo">
        <img className="image" src={image} alt="" />

        <div className="tourDetails">
          <h4 className="tourPrice">{price}</h4>
          <h4 className="tourName">{name}</h4>
        </div>

        <div className="description">
          <h4>{description}</h4>
          <button>
            <span className="readMore" onClick={Truefalse}>
              {readmore ? `Show less` : `Read more`}
            </span>
          </button>
        </div>
        <button className="btnRed" onClick={() => removehandeler(id)}>
          not intrested
        </button>
      </div>
    </div>
  );
}

export default Card;
