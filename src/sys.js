
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


  module.exports = {
    Sunrise: Sunrise,
    Sunset: Sunset,
    Sunset: Sunset,
    Country: Country,
  };