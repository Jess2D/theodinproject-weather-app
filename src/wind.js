/* @description Represents a Wind Speed Function in meter/sec
 * @param {string} wind
 */
function WindSpeed(wind) {
  const speed = wind.speed;
  const windSpeedID = document.getElementById("windSpeed");
  console.log(speed);
  windSpeedID.innerHTML = "Wind: " + (speed * 3.6).toFixed(2) + "km/h";
}

/* @description Represents a Wind direction, degrees (meteorological) Function
 * @param {string} wind
 */
function WindSDeg(wind) {
  const deg = wind.deg;
  const windDegID = document.getElementById("windDeg");
  windDegID.innerHTML = "  " + degToCompass(deg);
}

/* @description Represents a Function to get direction in Compass from degrees number
 * @param {number} num
 */
function degToCompass(num) {
  var val = Math.floor(num / 22.5 + 0.5);
  var arr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  return arr[val % 16];
}

module.exports = {
  WindSpeed: WindSpeed,
  WindSDeg: WindSDeg,
};
