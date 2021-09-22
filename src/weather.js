/* @description Represents a Weather condition Function
 * @param {string} weather
 */
function Weather(weather) {
  const description = weather[0].description;
  const weatherID = document.getElementById("weather");
  weatherID.innerHTML = description;
}

/* @description Represents a Weather icon id from API
 * @param {string} weather
 */
function WeatherIcon(weather) {
  const icon = weather[0].icon;
  const weatherIconID = document.getElementById("weatherIcon");
  weatherIconID.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png"/>`;
}

module.exports = {
  WeatherIcon: WeatherIcon,
  Weather: Weather,
};
