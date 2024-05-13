import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/Routes";
import "./App.css";
import { useEffect, useState } from "react";
import MainContext from "./context/context";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const router = createBrowserRouter(ROUTES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((res) => {
      setData([...res.data]);
    });
  }, []);
  const contextData = {
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
  };
  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
};

export default App;
