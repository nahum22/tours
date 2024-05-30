import { useState } from "react";

function Tour({ id, image, info, name, price, removeTours }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleInfo = () => setIsExpanded(!isExpanded);

  const truncatedInfo = isExpanded? info : `${info.substring(0, 100)}...`;

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>{truncatedInfo}</p>
        <button
          type="button"
          className="btn info-btn"
          onClick={toggleInfo}
        >
          {isExpanded? "Show Less" : "Read More"}
        </button>

        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTours(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default Tour;
