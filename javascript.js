function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");

  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss");
  }
  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML += `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
