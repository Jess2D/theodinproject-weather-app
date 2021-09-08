
fetch('http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=27498aefb60e29be93db8f28bc8e7bbd')
  .then(response  => response.json())
  .then(response => console.log(response))