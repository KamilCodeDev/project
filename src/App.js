import React, { useContext } from "react";
import "./App.css";
import Context from "./context";
const App = () => {
  const { array } = useContext(Context);
  return (
    <div>
      <h1>Our Tours</h1>
      <div>
        {array.map((el) => {
            return(
              <div>
                <img src={el.image} alt="" />
                <p>{el.info}</p>
                <p>{el.price}</p>
              </div>
            )
        })}
      </div>
    </div>
  );
};

export default App;
