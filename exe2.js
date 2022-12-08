function getFahrenheitValue() {
    const temperatureElement = document.getElementById("temperature");
    const title = document.getElementById("resultTitle");
    const result = document.getElementById("result");
    const temperature = parseInt(temperatureElement.value);

    title.innerHTML = "Temperatura convertida para °F"
    result.innerHTML = getFahrenheitByCelcius(temperature).toFixed(2);;
    temperatureElement.value = "";
}

function getCelciusValue() {
    const temperatureElement = document.getElementById("temperature");
    const title = document.getElementById("resultTitle");
    const result = document.getElementById("result");
    const temperature = parseInt(temperatureElement.value);

    title.innerHTML = "Temperatura convertida para °C"
    result.innerHTML = getCelciusByFahrenheit(temperature).toFixed(2);;
    temperatureElement.value = "";
}

function getFahrenheitByCelcius(celcius) {
    return celcius * 1.8 + 32
}

function getCelciusByFahrenheit(fahrenheit) {
    return (fahrenheit - 32) / 1.8
}