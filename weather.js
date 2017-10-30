// function getLocation() {
//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       getWeather(position.coords.latitude, position.coords.longitude);
//     })
//   } else {
//     alert("geolocation not available" + e);
//     clearInterval(updateinter);
//   }
// }
//
// var i = 0;
// var updateinter = setInterval(function(){
//   console.log("iteration# " + i++);
//   if ("geolocation" in navigator) {
//     navigator.geolocation.getCurrentPosition(function(position) {
//       getWeather(position.coords.latitude, position.coords.longitude);
//     })
//   } else {
//     alert("geolocation not available" + e);
//   }
// }, 300000);
//
// getLocation();
//
// function success(position) {
//  document.getElementById('latitude').innerHTML = position.coords.latitude;
//  document.getElementById('longitude').innerHTML = position.coords.longitude;
// }

let getWeather = function(lat, lon) {
  let latitude = '41.8781';
  let longitude = '-87.6298';
  let openweathermap_api_url = 'https://api.openweathermap.org/data/2.5/weather?'
  openweathermap_api_url += 'lat=' + latitude
  openweathermap_api_url += '&lon=' + longitude
  openweathermap_api_url +='&appid=4ce6f502d38ddae567bf1702b05e168c&units=imperial'

  fetch(openweathermap_api_url).then(convertToJSON).then(updateWeather).catch(displayError);
}

// document.getElementByClass("card-title")
//   for(var i = 0; i < x.length; i++){
//     x[i].innerText=city;
//
// document.getElementByClass("card-text")
//   for(var i = 0; i < x.length; i++){
//     x[i].innerText="It is "+temp+" degrees outside.";

let displayError = function(error) {
  console.debug(error);
  window.alert("Sorry, something went wrong.");
}
