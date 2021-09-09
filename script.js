
let form = document.getElementById("form");


form.addEventListener("submit", function(event){
  event.preventDefault();
  let search = form.elements["search"].value
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+search+'&appid=27498aefb60e29be93db8f28bc8e7bbd')
    .then(response  => response.json())
    .then(response => console.log(response))

})


