
//import {countryCodeEmoji} from 'country-code-emoji'
import { Temperature, TemperatureMax, TemperatureMin,FellsLike, Pressure, Humidity } from "./temperature";
import {Weather, Weather} from "./weather.js"
import {WindSpeed, WindSDeg} from "/.wind.js"

let form = document.getElementById("form");
let dataName, dataTemperature,  dataWeather;

form.addEventListener("submit", function(event){
  event.preventDefault();
  let search = form.elements["search"].value
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+ search +'&appid=27498aefb60e29be93db8f28bc8e7bbd&units=metric')
    .then(response  => response.json())
    .then(response => {
      console.log(response);
       dataName = response.name
       dataTemperature = {...response.main}
       dataWeather = {...response.weather}
       dataWind = {...response.wind}
       dataSys = {...response.sys}
       console.log(response.main["temp"])
       ViewName(dataName)
       Temperature(dataTemperature)
       TemperatureMax(dataTemperature)
       TemperatureMin(dataTemperature)
       FellsLike(dataTemperature)
       Pressure(dataTemperature)
       Humidity(dataTemperature)
       Weather(dataWeather)
       WeatherIcon(dataWeather)
       WindSpeed(dataWind)
       WindSDeg(dataWind)
       Sunrise(dataSys)
       Sunset(dataSys)
       Country(dataSys)
       //Emoj(dataSys)
    })



});

function ViewName(name){
  const locationName = name
  const nameID = document.getElementById("name")
  nameID.innerHTML = locationName
}

function Sunrise(sys){
  const sunrise = sys.sunrise
  const sunriseID = document.getElementById("sunrise")
  sunriseID.innerHTML ="Sunrise: " + getTime(sunrise)
}

function Sunset(sys){
  const sunset = sys.sunset
  const sunsetID = document.getElementById("sunset")
  sunsetID.innerHTML ="Sunset: " + getTime(sunset)
}

function getTime(time){
  let unix_timestamp = time
  let date = new Date(unix_timestamp * 1000);
  let newtime = date.toLocaleTimeString('en-US',{hour: '2-digit', minute: '2-digit'}) 
  return newtime
}

function Country(sys){
  const country = sys.country
  const countryID = document.getElementById("country")
  countryID.innerHTML =  " ," + country
}

/*function Emoj(sys){
  const emoj = sys.country
  const emojID = document.getElementById("emoj")
  emojID.innerHTML =  countryCodeEmoji(emoj);
}*/

export default script;