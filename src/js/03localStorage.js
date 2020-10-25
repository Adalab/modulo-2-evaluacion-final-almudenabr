"use strict";

//localStorage

//  function setLocalStorage() {
//    localStorage.setItem("dataSerials", JSON.stringify(dataSerials));
//  }

//si queremos guardar en localStorage los favoritos

function setLocalStorage() {
  localStorage.setItem("favoritesList", JSON.stringify(favoritesList));
  console.log(localStorage);
}

//cuando localStorage tenga info guardada, pintar los datos guardados al recargar la pág

// function getLocalStorage() {
//   const localFavoritesListJson = localStorage.getItem("favoritesList"); //hago parse porque devuelve string y tengo que convertirlo a json

//   favoritesList = JSON.parse(localFavoritesListJson);
// }
