function updateTime() {
  // Punta Cana
  let puntaCanaElement = document.querySelector("#punta-cana");
  if (puntaCanaElement) {
    let puntaCanaDateElement = puntaCanaElement.querySelector(".date");
    let puntaCanaTimeElement = puntaCanaElement.querySelector(".time");
    let puntaCanaTime = moment().tz("America/Dominica");
    puntaCanaDateElement.innerHTML = puntaCanaTime.format("MMMM Do YYYY");
    puntaCanaTimeElement.innerHTML = puntaCanaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Fiji
  let fijiElement = document.querySelector("#fiji");
  if (fijiElement) {
    let fijiDateElement = fijiElement.querySelector(".date");
    let fijiTimeElement = fijiElement.querySelector(".time");
    let fijiTime = moment().tz("Pacific/Fiji");
    fijiDateElement.innerHTML = moment().format("MMMM Do YYYY");
    fijiTimeElement.innerHTML = fijiTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
