window.onload = function() {
    
    var apiUrl = "https://fcc-weather-api.glitch.me/api/current?";
    
    var locationDisplay = document
        .querySelector(".apps__localWeather__locationDisplay");
    var iconDisplay = document
        .querySelector(".apps__localWeather__iconDisplay");
    var descriptionDisplay = document
        .querySelector(".apps__localWeather__descriptionDisplay");
    var temperatureDisplay = document
        .querySelector(".apps__localWeather__temperatureDisplay");
    var temperatureButton = document
        .querySelector(".apps__localWeather__temperatureConverter");
    var spinner = document.querySelector(".apps__localWeather__spinner");
    
    var temperature = 0;

    var CELSIUS = 0;
    var FAHRENHEIT = 1;

    // 0 is Celsius, 1 is Fahrenheit
    var currentScale = CELSIUS;

    function setIcon(weatherDescription) {
        switch(weatherDescription) {
        case "few clouds":
        case "scatter clouds":
        case "broken clouds":
            iconDisplay.className += " fas fa-cloud fa-5x";
            break;
        case "shower rain":
        case "rain":
        case "mist":            
            iconDisplay.className += " fas fa-tint fa-5x";
            break;
        case "thunderstorm":
            iconDisplay.className += " fas fa-bolt fa-5x";
            break;
        case "snow":
            iconDisplay.className += " fas fa-snowflake fa-5x";
            break;
        default:
            iconDisplay.className += " fas fa-sun fa-5x";
        }
    }

    function convertTemperature() {
        if (currentScale === FAHRENHEIT) {
            currentScale = CELSIUS;
            temperature = Math.round((temperature - 32) * 5 / 9);
            temperatureDisplay.innerHTML = `${temperature}&deg;C`;
        } else {
            currentScale = FAHRENHEIT;
            temperature = Math.round((temperature * 9 / 5) + 32);
            temperatureDisplay.innerHTML = `${temperature}&deg;F`;
        }
    }

    function setDisplays(response) {
        setIcon(response.weather[0].description.toString());

        var city = response.name.toString();
        var country = response.sys.country.toString();

        temperature = Math.round(response.main.temp);
        
        locationDisplay.innerHTML = `${city}, ${country}`;
        
        descriptionDisplay.innerHTML = response
            .weather[0].description.toString();
        
        temperatureDisplay.innerHTML = `${temperature}&deg;C`;
    }    
    
    function success(pos) {
        
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        var apiRequest = new Request(`${apiUrl}lat=${lat}lon=${lon}`, {
            method: "GET",
            mode: "cors",
            headers: new Headers({
                "Content-Type": "text/plain"
            })
        });

        fetch(`${apiUrl}lat=${lat}&lon=${lon}`)
            .then(function(response) {
                return response.json();
            }).then(function(response) {
                document.querySelector(".apps__localWeather")
                    .removeChild(spinner);
                setDisplays(response);
            });
    }

    function error(err) {
        console.log(error.message);
    }

    temperatureButton.addEventListener("click", convertTemperature);
    
    navigator.geolocation.getCurrentPosition(success, error)
    
}
