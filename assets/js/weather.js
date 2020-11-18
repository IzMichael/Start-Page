const key = '8b49854cb7747b81c0b0d9d9b4705806';

function weatherBallon(cityID) {
    console.log('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) {
            return resp.json()
        }) // Convert data to json
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {
            // catch any errors
        });
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var description = d.weather[0].description;

    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
    if (d.sys.country = "NZ") {
        document.getElementById('country').innerHTML = "New Zealand";
    } else {
        document.getElementById('country').innerHTML = d.sys.country;
    }

    var container = document.getElementById('weather');
    var iconContainer = document.getElementById('iconContainer');

    if (description.indexOf('rain') > 0) {
        container.className = 'rainy';
        iconContainer.innerHTML = '<img class="w-32 h-32 rounded-lg" src="/assets/img/weather/rainy.png">';
    } else if (description.indexOf('cloud') > 0) {
        container.className = 'cloudy';
        iconContainer.innerHTML = '<img class="w-32 h-32 rounded-lg" src="/assets/img/weather/cloudy.png">';
    } else if (description.indexOf('sunny') > 0) {
        container.className = 'sunny';
        iconContainer.innerHTML = '<img class="w-32 h-32 rounded-lg" src="/assets/img/weather/sunny.png">';
    } else {
        container.className = 'clear';
        iconContainer.innerHTML = '<img class="w-32 h-32 rounded-lg" src="/assets/img/weather/clear.png">';
    }
}