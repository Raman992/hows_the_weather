import React, { useEffect, useState } from 'react'
import sun from '/icons/sun.png';
import cloud from '/icons/cloud.png';
import fog from '/icons/fog.png';
import rain from '/icons/rain.png';
import snow from '/icons/snow.png';
import storm from '/icons/storm.png';
import wind from '/icons/windy.png';


const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState('cloud')

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
    <div className="weatherCard flex flex-col items-center justify-between w-32 h-40 p-4 
      rounded-2xl hover:scale-105 transition-transform duration-300">
      <p className="text-center">
        {new Date(time).toLocaleDateString('en', { weekday: 'long' })}
      </p>
      <img src={icon} alt="forecast" className="w-12 h-12" />
      <p className="text-lg font-bold">{temp ? `${temp}°C` : "--°C"}</p>
    </div>
  )
}

export default MiniCard
