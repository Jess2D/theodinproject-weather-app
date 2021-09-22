/* @description Represents a Function to get temperature in Celsius
 * @param {string} tempt
 */
function Temperature(tempt) {
  const temp = tempt["temp"];
  const temperatureID = document.getElementById("temperature");
  temperatureID.innerHTML = Math.round(temp) + "°C";
}

/* @description Represents a Function to get fells like temperature in Celsius 
  .This temperature parameter accounts for the human perception of weather.
 * @param {string} temperature 
*/
function FellsLike(temperature) {
  const fells_Like = temperature["feels_like"];
  const fellsLikeID = document.getElementById("fellsLike");
  fellsLikeID.innerHTML = "Fells like: " + Math.round(fells_Like) + "°C";
}

/* @description Represents a Temperature Max Function in Celsius. 
    Maximum temperature at the moment. This is maximal currently observed temperature  
  * @param {string} temperature 
  */
function TemperatureMax(temperature) {
  const max = temperature["temp_max"];
  const maxID = document.getElementById("temperatureMax");
  maxID.innerHTML = "|  Max: " + Math.round(max) + "°C";
}

/* @description Represents a Temperature Min Function in Celsius.Minimum temperature at the moment. 
    This is minimal currently observed temperature 
    * @param {string} temperature 
    */
function TemperatureMin(temperature) {
  const min = temperature["temp_min"];
  const minID = document.getElementById("temperatureMin");
  minID.innerHTML = "Min: " + Math.round(min) + "°C";
}

/* @description Represents a Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa function.
 * @param {string} temperature
 */
function Pressure(temperature) {
  const pressure = temperature["pressure"];
  const pressureID = document.getElementById("pressure");
  pressureID.innerHTML = "Pressure: " + Math.round(pressure) + " hPa";
}

/* @description Represents a Humidity Function in  %
 * @param {string} temperature
 */
function Humidity(temperature) {
  const humidity = temperature["humidity"];
  const humidityID = document.getElementById("humidity");
  humidityID.innerHTML = "Humidity: " + Math.round(humidity) + " %";
}

module.exports = {
  Temperature: Temperature,
  TemperatureMax: TemperatureMax,
  TemperatureMin: TemperatureMin,
  FellsLike: FellsLike,
  Pressure: Pressure,
  Humidity: Humidity,
};
