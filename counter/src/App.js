import React from "react";
import "./App.css";

function App() {
  const [value, setValue] = React.useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div className="App">
      <button onClick={handleDecrement}>-</button>
      <h1>{value}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;
