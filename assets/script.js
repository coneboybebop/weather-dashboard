
var cityInputEl = document.querySelector("#city-input");
var cityFormEl = document.querySelector("#city-form");

var searchSubmitHandler = function(event) {

    // prevent page from refreshing
    event.preventDefault();

    // get text from input
    var city = cityInputEl.value.trim();

    if (city) {
        getCoord(city);

        //clear input
        cityInputEl.textContent = "";
    } else {
        alert("please type a city name");
    };

}
// api url variable

var getCoord = function(city) {
var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=974d21a8200f2a8724bff9bbf087d1a6";
fetch(apiUrl)
    .then(function(response) {
        // request was successful
        if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
            
        });
        } else {
        alert('Error: City Not Found');
        }
    })
    .catch(function(error) {
        alert("Unable to connect to server");
    });
    

};

var getWeather = function(lat, lon) {
    
}

// event listener for submitting search
cityFormEl.addEventListener("submit", searchSubmitHandler);