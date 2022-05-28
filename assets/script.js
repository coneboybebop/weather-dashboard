
var cityInputEl = document.querySelector("#city-input")
var cityFormEl = document.querySelector("#city-form")

var searchSubmitHandler = function(event) {

// get text from input
var city = cityInputEl.value.trim();

var getCoord = function() {
fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=974d21a8200f2a8724bff9bbf087d1a6")

    console.log(getCoord);
}

}

// event listener for submitting search
cityFormEl.addEventListener("submit", searchSubmitHandler);