// Griffin Parker
// 3.24.2023
// Weather App Rebuild
// I really struggled building this app. When before in Javascript things were easy and fun, in React they were difficult and frustrating.
// I was able to get some of the original functionality working, but it feels extremely cobbled together and like it might break at any moment
// It's very difficult to learn from your mistakes in React. I'll change something seemingly innocuous, that causes an error on line 29,341 
// in some random libray. I'm not sure what I did wrong, so I'll control z and just try my best avoiding doing the same thing again, never sure why.

// I'm pretty dissapointed in how I did in this project. I got a pretty rough cold at the beginning of the week, so I wasn't able to put in as much effort
// as I could, but I still think I could and should have done a lot better. There were just constant things that didn't work right or had to be adjusted.
// I'm

import logo from './logo.svg';
import './App.css';
import WeatherFetcher from './Components/desktop.js';
import weather from './Components/fetch';
import Rain from './Assets/Rain.png'
import Clear from'./Assets/Clear.png'
import Snow from './Assets/Snow.png'
import Clouds from './Assets/Clouds.png'

function App() {

  // console.log(weather);
  return (
    <div>
    <WeatherFetcher />
    </div>
  );
}

export default App;
