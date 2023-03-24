import React, { useState, useEffect } from "react";
const key = "&appid=365f138cea066f516791f6d7897e34d4&units=imperial";
const everything = [];


function WeatherFetcher() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    // get geolocation
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;

      // make API call
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}${key}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      // set weather data
      setWeather(data);
    });
  }, []);

  console.log(everything);
  return everything;
}

export default WeatherFetcher;