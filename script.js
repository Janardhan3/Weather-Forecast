addEventListener('load', (searchWeather()))
function searchWeather() {
    let searchValue = document.querySelector("#city-input").value
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&APPID=4a949961da9c8af56ac06f562f02df35&units=metric")

        .then(function(response){
            return response.json();
        })
    
        .then(function (data){
            console.log(data);
            document.getElementById('city-name').innerText = "City : " + data.name;
            document.getElementById('weather-type').innerText = "Weather-type : " + data.weather[0].description;
            document.getElementById('temp').innerText = "Temperature : " + data.main.temp + "° C";
            document.getElementById('min-temp').innerText = "Min-temp : " + data.main.temp_min + "° C";
            document.getElementById('max-temp').innerText = "Max-temp : " + data.main.temp_max + "° C";
        })

        .catch(function () {
            alert("Please enter a valid City.  " + searchValue + " is not a valid City");
        });

}