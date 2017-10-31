let convertToJSON = function(response) {
  console.log(response);
  return response.json();
}

let updateWeather = function(dataFromService) {
  console.log(json);
  return json;

  let city = dataFromService.name;
  let temperature = dataFromService.main.temp;
  // To get the relevant weather icon from the openweathermap API:
  // let icon = dataFromService.weather[0].icon;

  document.getElementByClass("card-title")
    for(var i = 0; i < x.length; i++){
      x[i].innerText=city;
  document.getElementByClass("card-text")
    for(var i = 0; i < x.length; i++){
      x[i].innerText="It is "+temperature+" degrees outside.";
}

let getWeather = function(lat, lon) {
  let latitude = '41.8781';
  let longitude = '-87.6298';

  // SCRIPT FOR RETURNING LATITUDE + LONGITUDE
  //
  // <script>
  // var x = document.getElementById("demo");
  // function getLocation() {
  //     if (navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(showPosition);
  //     } else {
  //         x.innerHTML = "Geolocation is not supported by this browser.";
  //     }
  // }
  // function showPosition(position) {
  //     x.innerHTML = "Latitude: " + position.coords.latitude +
  //     "<br>Longitude: " + position.coords.longitude;
  // }
  // </script>

  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);

  document.getElementById("get_forecast").addEventListener("click", getWeather);

}

let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}
