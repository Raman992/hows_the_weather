import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState([]);
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Kathmandu");
  const [currentLocation, setLocation] = useState("");

  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        contentType: "json",
        unitGroup: "metric",
        aggregateHours: "24",
        location: place,
        shortColumnNames: false,
      },
      headers: {
        "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      },
    };

    try {
      const response = await axios.request(options);
      const thisData = Object.values(response.data.locations)[0];
      setLocation(thisData.address);
      setValues(thisData.values.slice(0, 7)); // limit to 7 days
      setWeather(thisData.values[1]);
    } catch (e) {
      console.error("Error fetching weather:", e);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  return (
    <StateContext.Provider
      value={{
        weather,
        setPlace,
        values,
        currentLocation,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
