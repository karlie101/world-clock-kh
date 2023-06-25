function updateTime() {
  // Punta Cana
  let puntaCanaElement = document.querySelector("#punta-cana");
  let puntaCanaDateElement = puntaCanaElement.querySelector(".date");
  let puntaCanaTimeElement = puntaCanaElement.querySelector(".time");
  let puntaCanaTime = moment().tz("America/Dominica");
  puntaCanaDateElement.innerHTML = puntaCanaTime.format("MMMM Do YYYY");
  puntaCanaTimeElement.innerHTML = puntaCanaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Fiji
  let fijiElement = document.querySelector("#fiji");
  let fijiDateElement = fijiElement.querySelector(".date");
  let fijiTimeElement = fijiElement.querySelector(".time");
  let fijiTime = moment().tz("Pacific/Fiji");
  fijiDateElement.innerHTML = moment().format("MMMM Do YYYY");
  fijiTimeElement.innerHTML = fijiTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);
