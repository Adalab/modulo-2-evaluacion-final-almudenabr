"use strict";

//localStorage

//set fav in localStorage

function setLocalStorage() {
  localStorage.setItem("favoritesList", JSON.stringify(favoritesList)); // change data from json to string
  console.log(localStorage);
}

//when localStorage has info, paint cards when loading page

// function getLocalStorage() {
//   const localFavoritesListJson = localStorage.getItem("favoritesList"); //change data from string to json

//   favoritesList = JSON.parse(localFavoritesListJson);
// }
