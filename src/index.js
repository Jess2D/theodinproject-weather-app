
//import {countryCodeEmoji} from 'country-code-emoji'
import { Temperature, TemperatureMax, TemperatureMin,FellsLike, Pressure, Humidity } from "./temperature";
import {Weather, Weather} from "./weather.js"
import {WindSpeed, WindSDeg} from "/.wind.js"
import {Country, Sunset, Sunrise} from "./sys"

let form = document.getElementById("form");
let dataName, dataTemperature,  dataWeather;

form.addEventListener("submit", function(event){
  event.preventDefault();
  let search = form.elements["search"].value
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+ search +'&appid=27498aefb60e29be93db8f28bc8e7bbd&units=metric', {mode: 'cors'} )
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


export default script;