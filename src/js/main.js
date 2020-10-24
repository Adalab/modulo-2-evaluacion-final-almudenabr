"use strict";

console.log("Hola");

const btnSearch = document.querySelector(".js-btn");
let section2 = document.querySelector(".js-section2");

//array de las series que me va a mostrar, que coge del fetch
let dataSerials = [];
let favoritesList = [];

//función escuchadora del click-al hacer click recoje los datos que ha traido del servidor
//function listener of click - get data from server when clicking
function searchSerial() {
  const input = document.querySelector(".js-input").value; //value entered in input

  fetch(`//api.tvmaze.com/search/shows?q=${input}`) // ahora solo tengo las que continen palabra: girls
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      // me da todo lo del json
      dataSerials = data; //hago un array con las series
      console.log(dataSerials);
      // paintTitle();
      paintCard();
      listenFav();
    });
}
let newUl = "";
let newLi = "";
let newParagraph = "";
let newDiv = "";
let title = "";
let newTitle = "";

function paintCard() {
  const ul = document.querySelector(".js-containerCards");

  if (ul != null) {
    ul.innerHTML = ""; //vaciar <ul> html
  }

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

//listen event click
function selectFav(ev) {
  const indexClicked = parseInt(ev.currentTarget.id); //clicked ev
  // favoritesList.push(clicked); //add new clicked ev to []
  console.log(favoritesList);
  console.log(indexClicked);

  const elementsList = document.querySelectorAll("li");

  for (const elementList of elementsList) {
    if (elementList.id === indexClicked) {
    }
  }

  //.find() => localiza el elem: retorna undefined si no se encuentra, y si no su valor

  const theFavorite = favoritesList.find(
    (favoriteList) => favoriteList.id === indexClicked
  );
  console.log(theFavorite);

  if (theFavorite === undefined) {
    //buscar
    const theFavId = dataSerials.findIndex(
      (dataSerial) => dataSerial.show.id === indexClicked
    );

    favoritesList.push(theFavId);

    console.log("entra en if");
    console.log(favoritesList);
  } else {
    // favoritesList
    console.log("entra en else");
  }

  // for (const favoriteList of favoritesList) {
  //   if (favoriteList === clicked) {
  //     favoriteList.add("container__containerCards--cardsItem");
  //     console.log("entra en if");
  //   } else {
  //     console.log("entra en else");

  // favoritesList.remove("container__containerCards--cardsItem");
  //   }
  // }
  // favoritesList.find;
}

//event click to select fav
function listenFav() {
  const cardsItems = document.querySelectorAll(".js-cardsItem"); //no puedo subirlo arriba porque aún no existe la class
  for (const cardsItem of cardsItems) {
    cardsItem.addEventListener("click", selectFav);
  }
}

btnSearch.addEventListener("click", searchSerial);
btnSearch.click(); // para quitar al final--se clicka el bton al cargar página
