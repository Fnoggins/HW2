function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function showPosition(position) {
  console.log(position)
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  getWeather(latitude, longitude);
}

let getWeather = function(latitude, longitude) {
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'
  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather);
}

let convertToJSON = function(response) {
  return response.json();
}

let updateWeather = function(dataFromService) {
  console.log(dataFromService);
  let city = dataFromService.name;
  let temperature = dataFromService.main.temp;
  let icon = dataFromService.weather[0].icon;

  let cardTitleElement = document.getElementsByClassName("card-title")[0];
  cardTitleElement.innerText=city;
  let cardTextElement = document.getElementsByClassName("card-text")[0];
  cardTextElement.innerText="It is "+temperature.toFixed(0)+" degrees outside.";
  let cardIconElement = document.getElementsByClassName("card-img-top")[0];
  cardIconElement.src = "http://openweathermap.org/img/w/"+icon+".png";
}

document.getElementById("get_forecast").addEventListener("click", getLocation);
