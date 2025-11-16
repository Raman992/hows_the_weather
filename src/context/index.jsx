import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
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
      
      if (!thisData) {
        throw new Error("Location not found");
      }
      
      setLocation(thisData.address);
      setValues(thisData.values.slice(0, 7));
      setWeather(thisData.values[0] || thisData.values[1]); // Handle index properly
    } catch (e) {
      console.error("Error fetching weather:", e);
      setWeather({});
      setValues([]);
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
