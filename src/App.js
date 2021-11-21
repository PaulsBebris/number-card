import React, { useEffect, useMemo, useState } from "react";
import "./app.css";

const App = () => {
  const cardSize = 24;
  const numbersSource = [];
  let numbers = [];

  const fillNumbersSource = () => {
    for (let index = 1; index <= cardSize; index++) {
      numbersSource.push(index);
    }
  };
  fillNumbersSource();

  const scrambleNumbers = () => {
    while (numbersSource.length > 0) {
      const possition = Math.floor(Math.random() * numbersSource.length);
      numbers.push(numbersSource[possition]);
      numbersSource.splice(possition, 1);
    }
  };
  scrambleNumbers();

  const renderGrid = () => {
    return numbers.map((number, i) => {
      return (
        <div className="number" key={i}>
          {number}
        </div>
      );
    });
  };

  return <div className="app">{renderGrid()}</div>;
};

export default App;
