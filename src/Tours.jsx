import React from "react";
import Tour from "./Tour";

function Tours({ tours, removeTours }) {
  return (
    <section>
      <div className="title"> our toors</div>
      <div className="title_underline"></div>
      <div className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTours={removeTours} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
