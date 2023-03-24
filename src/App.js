// Griffin Parker
// 3.24.2023
// Weather App Rebuild
// I really struggled building this app. When before in Javascript things were easy and fun, in React they were difficult and frustrating.
// I was able to get some of the original functionality working, but it feels extremely cobbled together and like it might break at any moment
// It's very difficult to learn from your mistakes in React. I'll change something seemingly innocuous, that causes an error on line 29,341 
// in some random libray. I'm not sure what I did wrong, so I'll control z and just try my best avoiding doing the same thing again, never sure why.

// I'm pretty dissapointed in how I did in this project. I got a pretty rough cold at the beginning of the week, so I wasn't able to put in as much effort
// as I could, but I still think I could and should have done a lot better. There were just constant things that didn't work right or had to be adjusted.

// Peer reviewed by Harrison Busby:
// Griffins website is decent. I like how his cards change colors depending on the weather and I like the background image. Another thing is that the current weather and the 5 day forecast populates information and shows the icons which is great!
// Now for the rough part. Griffins website is neither responsive nor does it have a favorites function. Also his cards for the 5 day forecast and his main box are very sharp. There is also no spacing between the cards which makes it rough to look at. Another tiny thing is it doesn't say the specific day of the week rather the date time. Also, when he fetches the information, sometimes you have to press the fetch button twice for it to populate information.
// All in all I think that Griffin's project is decent but if he had a little more time I think he could have made the changes I said above.
// Good job!

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
