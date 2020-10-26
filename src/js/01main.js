"use strict";

console.log("hola main01");

const btnSearch = document.querySelector(".js-btn");
let section2 = document.querySelector(".js-section2");

//array with serails to show, from fetch
let dataSerials = [];
let favoritesList = [];

//function listener of click - get data from server when clicking

function getData() {
  const input = document.querySelector(".js-input").value; //value entered in input

  fetch(`//api.tvmaze.com/search/shows?q=${input}`)
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      dataSerials = data; //keep serials searched in array
      // getLocalStorage();
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
  document.querySelector(".js-containerCards").innerHTML = "";

  for (let i = 0; i < dataSerials.length; i++) {
    title = dataSerials[i].show.name;
    newTitle = document.createTextNode(`${title}`); //create title of serial to be printed

    const newImg = document.createElement("img"); //create <img>
    const nullImg = newImg.src;

    if (dataSerials[i].show.image != null) {
      newImg.src = dataSerials[i].show.image.medium; //add src of the img to html
      newImg.alt = "Cartel de tu serie favorita"; //add alt to <img>
    } else {
      newImg.src = `https://via.placeholder.com/210x295/ffffff/008000/?text=${title}`; //paint default img
      newImg.alt = "Imagen no disponible"; //añado alt a img
    }

    newParagraph = document.createElement("p"); //create <p>
    newParagraph.appendChild(newTitle); //add title to <p>

    newDiv = document.createElement("div"); //create <div>
    newDiv.appendChild(newImg); //keep <img> in <div>

    newLi = document.createElement("li"); //create <li>

    newLi.setAttribute("class", "js-cardsItem"); // add class to <li>
    newLi.setAttribute("id", `${i}`); //add id to <li>

    newLi.appendChild(newParagraph); //add <p> with title to <li>
    newLi.appendChild(newDiv); //keep <div> in <li>

    document.querySelector(".js-containerCards").appendChild(newLi); //keep <li>(with <div> and img and <p>) in <ul>
  }
}

//add value of ev and add it to array favoritesList[]

let indexClicked = "";

function selectFav(ev) {
  indexClicked = ev.currentTarget.id; //clicked ev

  // Look for index:

  let elementInDataSerialsSelected = dataSerials[indexClicked];

  const indexFav = favoritesList.indexOf(elementInDataSerialsSelected); //.indexOF() gives the position value of clicked element, if element is not found returns -1
  const theFavorite = indexFav === -1;

  if (theFavorite === true) {
    favoritesList.push(elementInDataSerialsSelected); //add new clicked ev to []

    console.log("añado", elementInDataSerialsSelected);
  } else {
    favoritesList.splice(indexFav, 1);

    console.log("quito", elementInDataSerialsSelected);
  }
}

//change class to fav

let classFavList = [];
function classFav() {
  //change class to <li> that matches with clicked element (indexClicked)

  const liClicked = classFavList.indexOf(indexClicked); //.indexOF() gives the position value of clicked element, if element is not found returns -1
  const modifyClass = liClicked === -1;

  if (modifyClass === true) {
    console.log("cambio clase a fav");

    const cardsItems = document.querySelectorAll(".js-cardsItem"); //cannot write it on top because it  still does not exist the class

    const li = cardsItems[indexClicked];

    li.classList.toggle("container__containerCards--cardsItem");
  }
}

// listen event click

function clickCard(ev) {
  selectFav(ev);
  classFav();
  paintFav();
  setLocalStorage();
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
