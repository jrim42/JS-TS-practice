const API_KEY = "066334f20bb826c7c0ef4733d06991ce";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const cityContainer = document.querySelector("#weather span:last-child");
            weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            cityContainer.innerText = data.name
        });
}

function onGeoError() {
    alert("no weather info for you...")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);