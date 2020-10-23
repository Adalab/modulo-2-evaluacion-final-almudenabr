"use strict";

console.log("Hola");

const btnSearch = document.querySelector(".js-btn");

//array de las series que me va a mostrar, que coje del fetch
let showedSerials = [];

//función escuchadora del click-al hacer click recoje los datos que ha traido del servidor

function searchSerial() {
  const input = document.querySelector(".js-input").value;
  console.log(input);

  fetch(`//api.tvmaze.com/search/shows?q=${input}`) // ahora solo tengo las que continen palabra: girls
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      // me da todo lo del json
      console.log(data);
      showedSerials = data; //hago un array con las series
      console.log(showedSerials);
      console.log("entró");
      paintSerials();
    });
}

function paintSerials() {
  const newImg = document.createElement("img");
  newImg.src = showedSerials[0].show.image.medium; //añado a html la src de img: camino de la img
  // newImg.alt = "Cartel de tu serie favorita";
  // newImg.appendChild(newImg.src);
  console.log(newImg);
  document.querySelector("ul").appendChild(newImg);
}

btnSearch.addEventListener("click", searchSerial);
btnSearch.click(); // para quitar al final--se clicka el bton al cargar pagina
