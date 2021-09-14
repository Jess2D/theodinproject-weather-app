

function Temperature(tempt){
    const temp = tempt["temp"]
    const temperatureID = document.getElementById("temperature")
    temperatureID.innerHTML = Math.round(temp) +"°C"
  }
  
  function FellsLike(temperature){
    const fells_Like = temperature["feels_like"]
    const fellsLikeID = document.getElementById("fellsLike")
    fellsLikeID.innerHTML = "Fells like: "+ Math.round(fells_Like) +"°C"
  }
  
  function TemperatureMax(temperature){
    const max = temperature["temp_max"]
    const maxID = document.getElementById("temperatureMax")
    maxID.innerHTML ="|  Max: "+ Math.round(max)+"°C"
  }
  
  function TemperatureMin(temperature){
    const min = temperature["temp_min"]
    const minID = document.getElementById("temperatureMin")
    minID.innerHTML = "Min: " +Math.round(min)+"°C"
  }
  
  function Pressure(temperature){
    const pressure = temperature["pressure"]
    const pressureID = document.getElementById("pressure")
    pressureID.innerHTML = "Pressure: "+ Math.round(pressure) +" hPa"
  }
  
  function Humidity(temperature){
    const humidity = temperature["humidity"]
    const humidityID = document.getElementById("humidity")
    humidityID.innerHTML = "Humidity: "+ Math.round(humidity) +" %"
  }
  

  export default temperature.js