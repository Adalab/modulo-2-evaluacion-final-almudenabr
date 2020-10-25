"use strict";

console.log("hola main01");

const btnSearch = document.querySelector(".js-btn");
let section2 = document.querySelector(".js-section2");

//array de las series que me va a mostrar, que coge del fetch
let dataSerials = [];
let favoritesList = [];

//función escuchadora del click-al hacer click recoje los datos que ha traido del servidor
//function listener of click - get data from server when clicking

function getData() {
  const input = document.querySelector(".js-input").value; //value entered in input

  fetch(`//api.tvmaze.com/search/shows?q=${input}`) // ahora solo tengo las que continen palabra: girls
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      // me da todo lo del json
      dataSerials = data; //hago un array con las series que ha buscado
      paintCard();
      paintFav();
      listenFav();
    });
}

let newLi = "";
let newParagraph = "";
let newDiv = "";
let title = "";
let newTitle = "";

//paint cards and html in DOM

function paintCard() {
  for (let i = 0; i < dataSerials.length; i++) {
    title = dataSerials[i].show.name;
    newTitle = document.createTextNode(`${title}`); //create title of serial to be printed

    const newImg = document.createElement("img"); //creo el <img>
    const nullImg = newImg.src;

    if (dataSerials[i].show.image != null) {
      newImg.src = dataSerials[i].show.image.medium; //añado a html la src de img: camino de la img
      newImg.alt = "Cartel de tu serie favorita"; //añado alt a img
    } else {
      newImg.src = `https://via.placeholder.com/210x295/ffffff/008000/?text=${title}`; //paint default img
      newImg.alt = "Imagen no disponible"; //añado alt a img
    }

    newParagraph = document.createElement("p"); //creo <p>
    newParagraph.appendChild(newTitle); //add title to <p>

    newDiv = document.createElement("div"); //creo <div>
    newDiv.appendChild(newImg); //meto <img> en <div>

    newLi = document.createElement("li"); //creo el <li>

    newLi.setAttribute("class", "js-cardsItem"); // add class to <li>
    newLi.setAttribute("id", `${i}`); //add id to <li>

    newLi.appendChild(newParagraph); //add <p> with title to <li>
    newLi.appendChild(newDiv); //meto <div> en <li>

    document.querySelector(".js-containerCards").appendChild(newLi); //meto <li>(que ya tiene <div> conla img y <p>) en <ul>
  }
}

//add value of ev and add it to array favoritesList[]

let indexClicked = "";

function selectFav(ev) {
  indexClicked = ev.currentTarget.id; //clicked ev

  // Look for index:
  let elementInDatSerialsSelected = dataSerials[indexClicked];

  const indexFav = favoritesList.indexOf(elementInDatSerialsSelected); //.indexOF() gives the position value of clicked element, if element is not found returns -1
  const theFavorite = indexFav === -1;

  if (theFavorite === true) {
    favoritesList.push(elementInDatSerialsSelected); //add new clicked ev to []

    console.log("añado", elementInDatSerialsSelected);
  } else {
    favoritesList.splice(indexFav, 1);

    console.log("quito", elementInDatSerialsSelected);
  }
}

//change class to fav

let classFavList = [];
function classFav() {
  //quiero cambiar la clase al <li>¨que coincide con el valor del elem clicado -indeClicked
  const liClicked = classFavList.indexOf(indexClicked); //.indexOF() gives the position value of clicked element, if element is not found returns -1
  const modifyClass = liClicked === -1;

  if (modifyClass === true) {
    console.log("cambio clase a fav");

    const cardsItems = document.querySelectorAll(".js-cardsItem"); //no puedo subirlo arriba porque aún no existe la class

    const li = cardsItems[indexClicked];

    li.classList.toggle("container__containerCards--cardsItem");
  }
}

// listen event click

function clickCard(ev) {
  selectFav(ev);
  classFav();
  paintFav();
}

//event click to select fav

function listenFav() {
  const cardsItems = document.querySelectorAll(".js-cardsItem"); //no puedo subirlo arriba porque aún no existe la class
  for (const cardsItem of cardsItems) {
    cardsItem.addEventListener("click", clickCard);
  }
}

btnSearch.addEventListener("click", getData);
btnSearch.click(); // para quitar al final--se clicka el bton al cargar página
