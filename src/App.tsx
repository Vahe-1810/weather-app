import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "./redux";
import Layout from "./components/Layout";
import { getWeatherData } from "./utils/getWeatherData";
import NotFoundModal from "./components/NotFoundModal";

function App() {
  const defaultCity = useSelector((state) => state.defaultCity);
  const dispatch = useDispatch();

  useEffect(() => {
    getWeatherData(defaultCity, dispatch);
  }, []);

  return (
    <div className="app">
      <NotFoundModal />
      <Routes>
        <Route index element={<Layout />} />
      </Routes>
    </div>
  );
}

export default App;
