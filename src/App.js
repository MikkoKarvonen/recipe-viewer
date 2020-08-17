import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1337/foods`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="App">
      {data.map((e) => {
        return (
          <div>
            <h1>{e.Name}</h1>
            <small>{e.Duration} min</small>
            <h2>Ingredients</h2>
            <ul>
              {e.Ingredient.map((f) => {
                return (
                  <li>
                    {f.Ingredient} - {f.Amount} {f.Unit}
                  </li>
                );
              })}
            </ul>
            <h2>Steps</h2>
            <ul>
              {e.Steps.map((f, i) => {
                return (
                  <li>
                    <h3>Step {i + 1}</h3>
                    <small>{f.Duration} min</small>
                    <h3>Ingredients for this step</h3>
                    <ul>
                      {f.Ingredient.map((g) => {
                        return (
                          <li>
                            {g.Ingredient} - {g.Amount} {g.Unit}
                          </li>
                        );
                      })}
                    </ul>
                    {f.Guide}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default App;
