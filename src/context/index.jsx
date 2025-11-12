import { Children, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

import React from 'react'

const StateContext = createContext()

export const StateContextProvider = ({Children})=>{
    const [weather, setWeather] = useState([])

    const [values, setValues] = useState([])
    
    const [place, setPlace] = useState('Kathmandu')
    
    const [currentLocation, setLocation] = useState('')

    const fetchWeather = async()=>{
        const options = {
            method: 'GET',
            url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
            params :{
                contentType: 'json',
                unitGroup : 'metric',
                aggregateHours: '24',
                location : place,
                shortColumnNames: false, 
            },
            headers :{
                'x-rapidapi-host' : 'visual-crossing-weather.p.rapidapi.com',
                'x-rapidapi-key' : import.meta.env.VITE_API_KEY
            }
        }

    try{
        const response = await axios.request(options);
        console.log(response.data);
        const thisData = Object.values(response.data.locations)[0];
        setLocation(thisData.address);
        setValues(thisData.values);
        setWeather(thisData.values[0]);
    }
    catch(e){

        console.error(e);
    }
    }
    useEffect(()=>{
        fetchWeather()
    },[place])
    useEffect(()=>{
        console.log(values)
    },[values])
    return(
        <StateContextProvider value={{
            weather,
            setPlace,
            values,
            currentLocation
        }}>
            {Children}
        </StateContextProvider>
    )
}

export const useStateContext = () => useContext(StateContext);