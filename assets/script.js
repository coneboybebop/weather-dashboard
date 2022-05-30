var searches = [];

var cityInputEl = document.querySelector("#city-input");
var cityFormEl = document.querySelector("#city-form");
var todayWeatherEl = document.querySelector("#today-weather");

var searchSubmitHandler = function(event) {

    // prevent page from refreshing
    event.preventDefault();

    // clear search box
    cityInputEl.textContent= "";

    // get text from input
    var city = cityInputEl.value.trim();

    if (city) {
        getCoord(city);

        //clear input
        cityInputEl.textContent = "";
    } else {
        alert("please type a city name");
    };

    saveSearch(cityInputEl);

    

    
    

};
// variable for storing past searches
var saveSearch = function() {
    localStorage.setItem("searches",JSON.stringify(searches));

};


var getCoord = function(city) {
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&limit=1&appid=974d21a8200f2a8724bff9bbf087d1a6";
fetch(apiUrl)
    .then(function(response) {
        // request was successful
        if (response.ok) {
        
        response.json().then(function(data) {
            
            
            getWeather(data, city);
            getLatAndLon(data);
            
        });
        } else {
        alert('Error: City Not Found');
        }
    })
    .catch(function(error) {
        alert("Unable to connect to server");
    });

// get latitude and longitude variables for next api call
var getLatAndLon = function(forecast) {
    var apiUrlFore = "https://api.openweathermap.org/data/2.5/forecast?lat=" + forecast.coord.lat + "&lon=" + forecast.coord.lon + "&appid=974d21a8200f2a8724bff9bbf087d1a6";
    fetch(apiUrlFore)
        .then(function(response) {
            response.json().then(function(data) {

                getForecast(data);
                console.log(data);
            });
        }
        
        )
}
    

};

var getWeather = function(weather, city) {

   // format unix timestamp to date
   var milliseconds = (weather.dt * 1000);
   var dateObject = new Date(milliseconds);
   var date = dateObject.toLocaleString();

   // clear previous content
   todayWeatherEl.innerHTML = ""
  

    // create border for today's weather element
    todayWeatherEl.classList = "border border-dark border-3 col-8 m-1";


    // create element for today's date and city name
    var todayDateEl = document.createElement("h1");
    todayDateEl.innerHTML = (city) + " (" + (date) + ")";
    // append to page
    todayWeatherEl.appendChild(todayDateEl);


    // create element for temp data
    var todayTempEl = document.createElement("h5");
    todayTempEl.innerHTML = "Temp: " + (weather.main.temp) + " F";
    todayWeatherEl.appendChild(todayTempEl);
    
    // create element for wind data
    var todayWindEl = document.createElement("h5");
    todayWindEl.innerHTML = "Wind: " + (weather.wind.speed) + " MPH"
    todayWeatherEl.appendChild(todayWindEl);

    // create element for humidity data
    var todayHumidEl = document.createElement("h5");
    todayHumidEl.innerHTML = "Humidity: " + (weather.main.humidity) + "%";
    todayWeatherEl.appendChild(todayHumidEl);

    // create element for UV data
    var todayUvEl = document.createElement("h5");
    var UV = document.createElement("span")
    UV.innerHTML = 
    todayUvEl.innerHTML = "UV: Index" + UV

};


var getForecast = function(forecast) {

    var forecastTitleEl = document.createElement("h3");
    
    forecastTitleEl.innerHTML = "Five Day Forecast";

}





// event listener for submitting search
cityFormEl.addEventListener("submit", searchSubmitHandler);