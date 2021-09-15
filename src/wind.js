
function WindSpeed(wind){
    const speed = wind.speed
    const windSpeedID = document.getElementById("windSpeed")
    console.log(speed)
    windSpeedID.innerHTML = "Wind: "+((speed*3.6).toFixed(2))+ "km/h"
  }

function WindSDeg(wind){
    const deg = wind.deg
    const windDegID = document.getElementById("windDeg")
    windDegID.innerHTML = "  "+degToCompass(deg)
  }


function degToCompass(num) {
    var val = Math.floor((num / 22.5) + 0.5);
    var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
    return arr[(val % 16)];
  }
  
  
  module.exports = {
    WindSpeed: WindSpeed,
    WindSDeg: WindSDeg,
  };