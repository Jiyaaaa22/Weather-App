const input = document.querySelector(".srch-input");
const btn = document.querySelector(".srch-btn");
const image = document.querySelector(".weather-image");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const wind_speed = document.querySelector("#wind-speed");
const error_msg = document.querySelector(".error");
const weather_body = document.querySelector(".main");

let api_key = "910349fbd1e56ac7e5b6223147e22136";
let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

async function checkWeather(city) {
  const response = await fetch(url + city + `&appid=${api_key}`);
  let data = await response.json();

  if (data.cod === "404") {
    error_msg.style.display = "flex";
    weather_body.style.display = "none";
  } else {
    error_msg.style.display = "none";
    weather_body.style.display = "flex";
  }
  console.log(data);
  temperature.innerHTML = Math.round(data.main.temp) + "℃";
  description.innerHTML = data.weather[0].main;
  humidity.innerHTML = data.main.humidity + "%";
  wind_speed.innerHTML = data.wind.speed + "Km/h";

  switch (data.weather[0].main) {
    case "Clouds":
      image.src = "/images/cloud.png";
      break;
    case "Clear":
      image.src = "/images/clear.png";
      break;
    case "Mist":
      image.src = "/images/mist.png";
      break;
    case "Rain":
      image.src = "/images/rain.png";
      break;
    case "Snow":
      image.src = "/images/snow.png";
      break;
  }
}

btn.addEventListener("click", () => {
  checkWeather(input.value);
});
