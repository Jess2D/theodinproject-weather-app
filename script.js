
fetch('https://samples.openweathermap.org/data/2.5/weather?q=Lahore,PK&appid=339f059968fb5c38fee031595a383b42')
  .then(function(response) {
    console.log(response.json())
    return response.json();
  })
  .then(function(response) {
     console.log(response.data)
  });