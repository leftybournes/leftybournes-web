window.onload = function() {
    
    var apiUrl = "https://fcc-weather-api.glitch.me/api/current?"

    function success(pos) {
        
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;
        var apiRequest = new Request(`${apiUrl}lat=${lat}lon=${lon}`, {
            method: "GET",
            mode: "cors",
            headers: new Headers({
                'Content-Type': "text/plain"
            })
        });
        

        fetch(`${apiUrl}lat=${lat}&lon=${lon}`)
            .then(function(response) {
                return response.json();
            }).then(function(response) {

                var descriptionView = document
                    .querySelector(".apps__localWeather__description");

                descriptionView.innerHTML = response
                    .weather[0].description.toString();
            });
        
        var weatherDescription = document
            .querySelector(".apps__localWeather__description");

    }

    function error(err) {
        console.log(error.message);
    }
    
    navigator.geolocation.getCurrentPosition(success, error)
    
}
