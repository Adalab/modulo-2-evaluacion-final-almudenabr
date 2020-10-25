"use strict";

console.log("Hola");

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
      dataSerials = data; //hago un array con las series
      console.log(dataSerials);
      console.log("entro en getData");
      // paintTitle();
      paintCard();
      listenFav();
      setLocalStorage();
    });
}
let newUl = "";
let newLi = "";
let newParagraph = "";
let newDiv = "";
let title = "";
let newTitle = "";

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
    // newLi.setAttribute("class", "container__containerCards--cardsItem");

    newLi.appendChild(newParagraph); //add <p> with title to <li>
    newLi.appendChild(newDiv); //meto <div> en <li>

    document.querySelector("ul").appendChild(newLi); //meto <li>(que ya tiene <div> conla img y <p>) en <ul>
  }
}

// function classFavF() {
//   for (let i = 0; i < favoritesList.length; i++) {
//     let classFav;

//     const indexFav = favoritesList.indexOf(i);
//     const theFavorite = indexFav != -1;

//     if (indexFav === true) {
//       classFav = "container__containerCards--cardsItem";
//     } else {
//       classFav = "";
//     }
//   }
//   return classFav;
// }

// select fav and add it to favoritesList []

let indexClicked = "";
function selectFav(ev) {
  indexClicked = parseInt(ev.currentTarget.id); //clicked ev

  const indexFav = favoritesList.indexOf(indexClicked); //.indexOF() gives the position value of clicked element, if element is not found returns -1
  const theFavorite = indexFav === -1;

  if (theFavorite === true) {
    console.log("lo meto en fav");
    favoritesList.push(indexClicked); //add new clicked ev to []

    console.log(favoritesList);
  } else {
    console.log("lo quito de fav");
    favoritesList.splice(indexFav, 1);

    console.log(favoritesList);
  }
}

//add class to fav
let array = [];
function classFav() {
  // const indexClicked = parseInt(ev.currentTarget.id); //clicked ev

  //quiero cambiar la clase al <li>¨que coincide con el valor del elem clicado -indeClicked
  const liClicked = array.indexOf(indexClicked); //.indexOF() gives the position value of clicked element, if element is not found returns -1
  const addClass = liClicked === -1;

  if (addClass === true) {
    console.log("añado clase a fav");

    //  .setAttribute("class", "container__containerCards--items");
    console.log(array);
  } else {
    console.log(" quito clase de fav");
    // .setAttribute("class", "container__containerCards");
    console.log(array);
  }
}

// listen event click

function clickCard(ev) {
  selectFav(ev);
  classFav(ev);
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

/////////////////////////

//localStorage

// function setLocalStorage() {
//   localStorage.setItem("dataSerials", JSON.stringify(dataSerials));
// }

//si queremos guardar en localStorage los favoritos

// function setLocalStorage() {
//   localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
//   console.log(localStorage);
// }

// //cuando localStorage tenga info guardada, pintar los datos guardados al recargar la pág

// function getLocalStorage() {
//   const localDataSerials = localStorage.getItem("favoritesList");
//   //hago parse porque devuelve string y tengo que convertirlo a json
//   const localDataSerialsJson = JSON.parse(localDataSerials);

//   if (localDataSerialsJson === null) {
//     getData();
//   } else {
//     dataSerials = localDataSerialsJson;
//     paintCard();
//     listenFav();
//   }
// }
