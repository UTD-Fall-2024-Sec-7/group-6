import React from "react";
import CustomCard from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";

function CardWrapper({ books, heading }) {
  return (
    <>
      <h1 className="text-center mb-4">{heading}</h1>
      <div
        className="d-flex overflow-auto gap-3 p-3"
        style={{ whiteSpace: "nowrap", minWidth: "100vw" }}
      >
        {books.map((book, index) => (
          <div key={index} style={{ flex: "0 0 auto" }}>
            <CustomCard book={book} />
          </div>
        ))}
      </div>
    </>
  );
}

export default CardWrapper;
