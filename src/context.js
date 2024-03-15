import axios from "axios";
import { createContext, useEffect, useState } from "react";

const Context = createContext();
const ContextProvider = ({ childern }) => {
  const [array, setArray] = useState([]);


const getPost = async () => {
    const res = await axios.get("https://course-api.com/react-tours-project");
    const data = res.data;
    setArray(data)
};
useEffect(() => {
    getPost();
}, []);

return (
  <Context.Provider
    value={{
      array,
      getPost,
    }}
  >
    {childern}
  </Context.Provider>
);
}

export default { Context, ContextProvider };
