import React from 'react';
import Navbar from './components/Navbar';
import { useStateContext } from './context';
import BackgroundLayout from './components/BackgroundLayout';
import WeatherCard from './components/WeatherCard';
import MiniCard from './components/MiniCard';

const App = () => {
  const { weather, currentLocation, values } = useStateContext();

  return (
    <div className="relative w-full min-h-screen text-black overflow-x-hidden">
      <BackgroundLayout />
      <div className="relative z-10 px-4 py-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <Navbar />
        <div className="flex justify-center mt-6 md:mt-8">
          <div className="w-full max-w-md">
            <WeatherCard
              place={currentLocation}
              windspeed={weather?.wspd}
              humidity={weather?.humidity}
              temperature={weather?.temp}
              heatIndex={weather?.heatindex}
              iconString={weather?.conditions}
              conditions={weather?.conditions}
            />
          </div>
        </div>

        <div className="flex justify-center gap-4 md:gap-10 flex-wrap mt-4">
      {values?.slice(1, 7).map(e => (
        <MiniCard key={e.datetime} time={e.datetime} temp={e.temp} iconString={e.conditions} />
      ))}
    </div>
      </div>
    </div>
  );
};

export default App;