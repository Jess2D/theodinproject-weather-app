function Weather(weather){
    const description = weather[0].description
    const weatherID = document.getElementById("weather")
    weatherID.innerHTML = description
  }
  
  function WeatherIcon(weather){
    const icon = weather[0].icon
    const weatherIconID = document.getElementById("weatherIcon")
    weatherIconID.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png"/>`
  }

  module.exports = {
    WeatherIcon: WeatherIcon,
    Weather: Weather,
  };