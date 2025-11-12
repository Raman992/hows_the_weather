import React, { useEffect, useState } from 'react';
import Cloudy from '/backgrounds/Cloudy.jpg';
import Rainy from '/backgrounds/Rainy.jpg';
import Windy from '/backgrounds/Windy.jpg';
import Foggy from '/backgrounds/foggy.jpg';
import Snowy from '/backgrounds/Snowy.jpg';
import Stormy from '/backgrounds/Stormy.jpg';
import Clear from '/backgrounds/Clear.jpg';


import { useStateContext } from '../context';

const BackgroundLayout = () => {

    const {weather} = useStateContext()
    
    const [image, setImage] = useState(Clear)

    useEffect(()=>
    {
        if(weather.conditions){
            let imageString = weather.conditions
            if(imageString.toLowerCase().includes('clear')){
                setImage(Clear)
            }
            else if(imageString.toLowerCase().includes('cloud')){
                setImage(Cloudy)
            }
            else if(imageString.toLowerCase().includes('rain')||imageString.toLowerCase().includes('rain')){
                setImage(Rainy)
            }
            else if(imageString.toLowerCase().includes('wind')){
                setImage(Windy)
            }
            else if(imageString.toLowerCase().includes('fog')){
                setImage(Foggy)
            }
            else if(imageString.toLowerCase().includes('snow')){
                setImage(Snowy)
            }
            else if(imageString.toLowerCase().includes('storm')||imageString.toLowerCase().includes('thunder')){
                setImage(Stormy)
            }            
        }
    },[weather]
    )
  return (
    <div>
      <img src={image} alt="bg" className='h-screen w-full bg-cover bg-center bg-no-repeat -z-10'/>
    </div>
  )
}

export default BackgroundLayout
