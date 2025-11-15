import React, { useEffect, useState } from 'react'
import useDate from '../utils/useDate'
import sun from '/icons/sun.png';
import cloud from '/icons/cloud.png';
import fog from '/icons/fog.png';
import rain from '/icons/rain.png';
import snow from '/icons/snow.png';
import storm from '/icons/storm.png';
import wind from '/icons/windy.png';

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  iconString,
  conditions
}) => {
 const [icon, setIcon] = useState(sun)
  const { date, time } = useDate()

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes('cloud')) {
        setIcon(cloud)
      } else if (iconString.toLowerCase().includes('rain')) {
        setIcon(rain)
      } else if (iconString.toLowerCase().includes('clear')) {
        setIcon(sun)
      } else if (iconString.toLowerCase().includes('thunder')) {
        setIcon(storm)
      } else if (iconString.toLowerCase().includes('fog')) {
        setIcon(fog)
      } else if (iconString.toLowerCase().includes('snow')) {
        setIcon(snow)
      } else if (iconString.toLowerCase().includes('wind')) {
        setIcon(wind)
      }
    }
  }, [iconString])
  return (
    <div className="mx-auto mt-24 w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] rounded-2xl p-6 
      bg-white/20 backdrop-blur-lg shadow-xl border border-white/30 text-white">
      <div className="flex flex-col items-center gap-2">
        <img src={icon} alt="weather" className="w-20 h-20" />
        <h1 className="text-5xl font-bold">{temperature ? `${temperature}°C` : "--°C"}</h1>
        <h2 className="text-lg font-medium text-center">{place}</h2>
      </div>

      <div className="flex justify-between text-sm text-gray-100 mt-4">
        <p>{date}</p>
        <p>{time}</p>
      </div>

      <div className="flex justify-between gap-3 mt-6">
        <div className="flex-1 text-center p-3 bg-blue-600/70 rounded-xl shadow-md">
          <p className="font-semibold">Wind Speed</p>
          <p className="text-lg font-bold">{windspeed ?? "N/A"}</p>
        </div>
        <div className="flex-1 text-center p-3 bg-green-600/70 rounded-xl shadow-md">
          <p className="font-semibold">Humidity</p>
          <p className="text-lg font-bold">{humidity ?? "N/A"}</p>
        </div>
      </div>

      <hr className="my-3 border-white/30" />

      <p className="text-center text-xl font-semibold">{conditions}</p>
    </div>
  )
}

export default WeatherCard
