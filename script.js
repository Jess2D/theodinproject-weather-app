
fetch('http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=27498aefb60e29be93db8f28bc8e7bbd')
  .then(function(response) {
    console.log(response.json())
    return response.json();
  })
  .then(function(response) {
     console.log(response.data)
  });