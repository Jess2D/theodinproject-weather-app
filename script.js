
let form = document.getElementById("form");
let dataName, dataFellsLike, dataTemperature, dataTemperatureMax, dataTemperatureMin, dataWeather, dataWeatherIcon, dataSunrise, dataSunset;
let dataChanceRain, dataHumidity, dataWind, dataPrecipitation, dataUvIndex

form.addEventListener("submit", function(event){
  event.preventDefault();
  let search = form.elements["search"].value
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+ search +'&appid=27498aefb60e29be93db8f28bc8e7bbd&units=metric')
    .then(response  => response.json())
    .then(response => {
      console.log(response);
       dataName = response.name
       dataTemperature = {...response.main}
       console.log(response.main["temp"])
       ViewName(dataName)
       Temperature(dataTemperature)
       TemperatureMax(dataTemperature)
       TemperatureMin(dataTemperature)
       FellsLike(dataTemperature)
       Pressure(dataTemperature)
     
    })



});

function ViewName(name){
  const locationName = name
  const nameID = document.getElementById("name")
  nameID.innerHTML = locationName
}

function Temperature(tempt){
  const temp = tempt["temp"]
  const temperatureID = document.getElementById("temperature")
  temperatureID.innerHTML = "Temp: "+ Math.round(temp)
}

function FellsLike(temperature){
  const fells_Like = temperature["feels_like"]
  const fellsLikeID = document.getElementById("fellsLike")
  fellsLikeID.innerHTML = "Fells like: "+ Math.round(fells_Like)
}

function TemperatureMax(temperature){
  const max = temperature["temp_max"]
  const maxID = document.getElementById("temperatureMax")
  maxID.innerHTML = "Max: "+ Math.round(max)
}

function TemperatureMin(temperature){
  const min = temperature["temp_min"]
  const minID = document.getElementById("temperatureMin")
  minID.innerHTML = "Min: "+ Math.round(min)
}

function Pressure(temperature){
  const pressure = temperature["temp_min"]
  const pressureID = document.getElementById("pressure")
  pressureID.innerHTML = "Pressure: "+ Math.round(pressure)
}

