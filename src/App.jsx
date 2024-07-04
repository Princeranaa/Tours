import React, { useState } from "react";
import data from "../Data";
import Tours from "./components/Tours";

function App() {
  const [tours, setTours] = useState(data);

  function removehandeler(id) {
    const newTour = tours.filter((tour) => tour.id !== id);
    setTours(newTour);
  }

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h1>No tours left</h1>
        <button className="btnWhite" onClick={() => setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Tours tours={tours} removehandeler={removehandeler}></Tours>
    </div>
  );
}

export default App;
