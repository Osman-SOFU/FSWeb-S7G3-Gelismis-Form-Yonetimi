import React from "react";

const Error = ({ errors = {} }) => {
  const errorArray = Object.values(errors);

  if (errorArray.length === 0) {
    return null; // Hata olmadığında hiçbir şey göstermemek
  }

  return (
    <div>
      {errorArray.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default Error;
