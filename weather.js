let API_KEY = "8c7b3ce9f0787f9c1c15d3911b886a63";

const getWeatherData = (city) => {
    const URL = 'https://api.openweathermap.org/data/2.5/weather';
    const fullUrl = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    const weatherPromise = fetch(fullUrl);

    return weatherPromise.then((response) => {
        return response.json();
    });
};

function searchcity() {
    const city = document.getElementById("city-input").value;

    getWeatherData(city)
        .then((response) => {
            console.log(response); // If needed for debugging
            showWeatherData(response);
        })
        .catch((err) => {
            console.log(err);
        });
}

function showWeatherData(weatherData) {
    document.getElementById('city-name').innerText = weatherData.name;
    document.getElementById('weathar-type').innerText = weatherData.weather[0].description;
    document.getElementById('temp').innerText = weatherData.main.temp;
    document.getElementById('min-temp').innerText = weatherData.main.temp_min;
    document.getElementById('max-temp').innerText = weatherData.main.temp_max;
}
