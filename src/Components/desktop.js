import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import "../Assets/RainOnWindowsGif.gif";
import "../App.css";
import Rain from '../Assets/Rain.png'
import Clear from'../Assets/Clear.png'
import Snow from '../Assets/Snow.png'
import Clouds from '../Assets/Clouds.png'
import ForecastCard from "./card";
import weatherImages from "./icons";
import key from "./key";

function WeatherFetcher() {
    
    const [imageSrc, setImageSrc] = useState("Clear");
    const [weather, setWeather] = useState(null);
    const [weatherName, setWeatherName] = useState(null);
    const [forecast, setforecast] = useState(null);
    const [cityName, setCityName] = useState(null);
    const [cityLat, setCityLat] = useState(null);
    const [cityLon, setCityLon] = useState(null);
    const [currentCondition, setCondition] = useState("");
    const [currentTemp, setcurrentTemp] = useState(0);
    const [highTemp, sethighTemp] = useState(0);
    const [lowTemp, setlowTemp] = useState(0);
    const [castHigh, setCastHigh] = useState(0);
    const [castLow, setCastLow] = useState(0);
    const [cond1, setCond1] = useState(0);
    const [cond2, setCond2] = useState(0);
    const [cond3, setCond3] = useState(0);
    const [cond4, setCond4] = useState(0);
    const [cond5, setCond5] = useState(0);
    const [class1, setClass1] = useState(0);
    const [class2, setClass2] = useState(0);
    const [class3, setClass3] = useState(0);
    const [class4, setClass4] = useState(0);
    const [class5, setClass5] = useState(0);
    const [day1, setDay1] = useState(0);
    const [day2, setDay2] = useState(0);
    const [day3, setDay3] = useState(0);
    const [day4, setDay4] = useState(0);
    const [day5, setDay5] = useState(0);
    const [high1, setHigh1] = useState(0);
    const [low1, setLow1] = useState(0);
    const [high2, setHigh2] = useState(0);
    const [low2, setLow2] = useState(0);
    const [high3, setHigh3] = useState(0);
    const [low3, setLow3] = useState(0);
    const [high4, setHigh4] = useState(0);
    const [low4, setLow4] = useState(0);
    const [high5, setHigh5] = useState(0);
    const [low5, setLow5] = useState(0);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // get geolocation
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            // make API call
            const url1 = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}${key}`;
            const url2 = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}${key}`;
            const response = await fetch(url1);
            const data = await response.json();
            console.log(data);
            setforecast(data);
            const response2 = await fetch(url2);
            const data2 = await response2.json();
            setWeather(data2);
            console.log(data2);
            if (cityName){
                const url3 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&${key}`;
                const response3 = await fetch(url3);
                const data3 = await response2.json();
                setWeather(data3);
                console.log(data3);
            }
        });
    }, []);

    const handleFetchWeather = async () => {
        try {
            setforecast(null);
            const url3 = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&${key}`;
            const response3 = await fetch(url3);
            const data3 = await response3.json();
            setWeatherName(data3);
            setWeather(data3);
            console.log(data3);
            setCityLat(data3.coord.lat);
            setCityLon(data3.coord.lon);

        } catch (error) {
            console.log(error);
        }
        if (weatherName){

            setforecast(null);
            const url4 = `https://api.openweathermap.org/data/2.5/forecast?lat=${cityLat}&lon=${cityLon}${key}`;
            const response4 = await fetch(url4);
            const data4 = await response4.json();
            setforecast(data4);
            console.log(data4);
            console.log(forecast);
            
        }
      };

    useEffect(() => {

        if (forecast) {
            for (let i = 0; i < 40; i += 8) {
                let max = forecast.list[i].main.temp_max;
                let min = forecast.list[i].main.temp_min;
                for (let j = i + 1; j <= i + 7; j++) {
                    if (forecast.list[j].main.temp_max > max) {
                        max = forecast.list[j].main.temp_max;
                    }
                    if (forecast.list[j].main.temp_min < min) {
                        min = forecast.list[j].main.temp_min;
                    }
                }
                switch (i) {
                    case 0:
                        setHigh1(Math.floor(max));
                        setLow1(Math.floor(min));
                        break;
                    case 8:
                        setHigh2(Math.floor(max));
                        setLow2(Math.floor(min));
                        break;
                    case 16:
                        setHigh3(Math.floor(max));
                        setLow3(Math.floor(min));
                        break;
                    case 24:
                        setHigh4(Math.floor(max));
                        setLow4(Math.floor(min));
                        break;
                    case 32:
                        setHigh5(Math.floor(max));
                        setLow5(Math.floor(min));
                        break;
                }
            }
        }
        if (forecast){
            setCond1(forecast.list[4].weather[0].main)
            setClass1(forecast.list[4].weather[0].main + "Bar")
            setDay1(forecast.list[4].dt_txt)
            setDay2(forecast.list[12].dt_txt)
            setDay3(forecast.list[20].dt_txt)
            setDay4(forecast.list[28].dt_txt)
            setDay5(forecast.list[36].dt_txt)
            // setDay1(day1.slice(0,10))
            // setDay2(day2.slice(0,10))
            // setDay3(day3.slice(0,10))
            // setDay4(day4.slice(0,10))
            // setDay5(day5.slice(0,10))
            setCond2(forecast.list[12].weather[0].main)
            setClass2(forecast.list[12].weather[0].main + "Bar")
            setCond3(forecast.list[20].weather[0].main)
            setClass3(forecast.list[20].weather[0].main + "Bar")
            setCond4(forecast.list[28].weather[0].main)
            setClass4(forecast.list[28].weather[0].main + "Bar")
            setCond5(forecast.list[36].weather[0].main)
            setClass5(forecast.list[36].weather[0].main + "Bar")
        }
        if (weather){
            setcurrentTemp(Math.floor(weather.main.temp));
            sethighTemp(Math.floor(weather.main.temp_max));
            setlowTemp(Math.floor(weather.main.temp_min));
        }
    }, [forecast]);

    console.log(forecast);
    console.log(cond1);
    const handleInput = (event) => {
        setCityName(event.target.value);
        console.log(cityName);
        
      };

    return (forecast && weather) ? (
        <>
            <Container className={weather.weather[0].main}>
                <input type="text" onChange={handleInput} placeholder="Search" className="inputBox"></input> <Button type="submit" onClick={handleFetchWeather} className="fetchButton">Fetch Weather (press twice)</Button>
                <div className="backBox">
                <h1 className="headerName">{weather.name}, {weather.sys.country}</h1>
                <h1 className="headerCond">{weather.weather[0].main}</h1>
                {/* <img src={imageSrc}/> */}
                <h1 className="headerTemp">{currentTemp}°</h1>
                </div>
                <div className="backBox2">

                <h1 className="headerHigh">High: {highTemp}°</h1>
                <h1 className="headerLow">Low: {lowTemp}°</h1>
                </div>
            </Container>
            <Container className="forecastContainer">
                <ForecastCard
                day={day1}
                    class={class1}
                    icon=""
                    condition={cond1}
                    high={high1}
                    low={low1}
                />
                <ForecastCard
                day={day2}
                    class={class2}
                    icon=""
                    condition={cond2}
                    high={high2}
                    low={low2}
                />
                <ForecastCard
                day={day3}
                    class={class3}
                    icon=""
                    condition={cond3}
                    high={high3}
                    low={low3}
                />
                <ForecastCard
                day={day4}
                    class={class4}
                    icon=""
                    condition={cond4}
                    high={high4}
                    low={low4}
                />
                <ForecastCard
                day={day5}
                    class={class5}
                    icon=""
                    condition={cond5}
                    high={high5}
                    low={low5}
                />
            </Container>
        </>
    ) : (
        <>
            <Container className="loading">
                <h1 className="loadingText">Loading...</h1>
            </Container>
                <Button type="submit" onClick={handleFetchWeather} className="loadingButton">Fix Loading</Button>
        </>
    );

}


export default WeatherFetcher;