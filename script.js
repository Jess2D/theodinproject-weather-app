
let form = document.getElementById("form");
let dataName, dataTemperature;

form.addEventListener("submit", function(event){
  event.preventDefault();
  let search = form.elements["search"].value
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+ search +'&appid=27498aefb60e29be93db8f28bc8e7bbd')
    .then(response  => response.json())
    .then(response => {
      console.log(response);
       dataName = response.name
       dataTemperature = {...response.temp}
       console.log(dataTemperature)
       console.log(dataTemperature["fells_like"])
       viewName(dataName)
       temperature(dataTemperature)
    })



});

function viewName(name){
  const locationName = name
  const nameID = document.getElementById("name")
  nameID.innerHTML = locationName
}

function temperature(temperature){
  const fells_Like = temperature["feels_like"]
  const temperatureID = document.getElementById("temperature")
  temperatureID.innerHTML = fells_Like
}



