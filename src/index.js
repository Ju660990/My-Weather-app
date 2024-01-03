function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  let city = searchInputElement.value;
  cityElement.innerHTML = searchInputElement.value;
  let apiKey = "a23921o2t3f0b57e86a4e973079a01b8";
  let units = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

function showTemperature(response) {
  let temperatureValue = Math.round(response.data.temperature.current);
  let currentTemperature = document.querySelector(".current-temperature-value");
  currentTemperature.innerHTML = temperatureValue;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateELement.innerHTML = formatDate(currentDate);
