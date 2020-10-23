"use strict";

console.log("Hola");

const btnSearch = document.querySelector(".js-btn");

//array de las series que me va a mostrar, que coge del fetch
let showedSerials = [];

//función escuchadora del click-al hacer click recoje los datos que ha traido del servidor
//function listener of click - get data from server when clicking
function searchSerial() {
  const input = document.querySelector(".js-input").value; //value entered in input
  console.log(input);

  fetch(`//api.tvmaze.com/search/shows?q=${input}`) // ahora solo tengo las que continen palabra: girls
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      // me da todo lo del json
      showedSerials = data; //hago un array con las series
      console.log(showedSerials);
      paintTitle();
      paintSerials();
    });
}

let title = "";
let titleLi = "";
let newLi = "";
let newParagraph = "";

//function to paint the title of serial (<li><p>title) and add to DOM
function paintTitle() {
  newLi = document.createElement("li"); //creo el <li>
  newParagraph = document.createElement("p"); //creo <p>

  title = showedSerials[0].show.name;
  titleLi = document.createTextNode(`${title}`); //create title of serial to be printed

  newParagraph.appendChild(titleLi); //add title to <p>
  newLi.appendChild(newParagraph); //add <p> with title to <li>
}

//function to paint the serial img and add it to DOM

function paintSerials() {
  const newImg = document.createElement("img"); //creo el <img>

  newImg.src = showedSerials[0].show.image.medium; //añado a html la src de img: camino de la img
  newImg.alt = "Cartel de tu serie favorita"; //añado alt a img

  newLi.appendChild(newImg); //meto <img> en <li>
  console.log(newImg);

  document.querySelector("ul").appendChild(newLi); //meto <li>(que ya tiene la img en <ul>)
}

btnSearch.addEventListener("click", searchSerial);
btnSearch.click(); // para quitar al final--se clicka el bton al cargar pagina
