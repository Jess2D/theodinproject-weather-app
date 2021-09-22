/* @description Represents a Sunrise Function
* @param {string} sys - The Sunrise time, unix, UTC
*/
function Sunrise(sys){
    const sunrise = sys.sunrise
    const sunriseID = document.getElementById("sunrise")
    sunriseID.innerHTML ="Sunrise: " + getTime(sunrise)
  }
  

/* @description Represents a Sunset Function
 * @param {string} sys - The Sunset time, unix, UTC
*/
  function Sunset(sys){
    const sunset = sys.sunset
    const sunsetID = document.getElementById("sunset")
    sunsetID.innerHTML ="Sunset: " + getTime(sunset)
  }
  
  /* @description Represents the getTime() Function. Transform unix, UTC to en-US
   * @param {string} time 
   */
  function getTime(time){
    let unix_timestamp = time
    let date = new Date(unix_timestamp * 1000);
    let newtime = date.toLocaleTimeString('en-US',{hour: '2-digit', minute: '2-digit'}) 
    return newtime
  }
  
  /* @description Represents a Function to get name of the Country
 * @param {string} sys 
*/
  function Country(sys){
    const country = sys.country
    const countryID = document.getElementById("country")
    countryID.innerHTML =  " ," + country
  }

  module.exports = {
    Sunrise: Sunrise,
    Sunset: Sunset,
    Sunset: Sunset,
    Country: Country,
  };