"use strict";

console.log("hola 02favMain");

//fav list => paint cards and html in DOM <ul1>

function paintFav() {
  document.querySelector(".js-containerFav").innerHTML = "";

  for (let i = 0; i < favoritesList.length; i++) {
    title = favoritesList[i].show.name;
    newTitle = document.createTextNode(`${title}`); //create title of serial to be printed
    console.log(paintFav);

    const newImg = document.createElement("img"); //creo el <img>
    const nullImg = newImg.src;

    if (favoritesList[i].show.image != null) {
      newImg.src = favoritesList[i].show.image.medium; //añado a html la src de img: camino de la img
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

    newLi.setAttribute("class", "js-cardsItemFav"); // add class to <li>
    newLi.setAttribute("id", `${i}`); //add id to <li>

    newLi.appendChild(newParagraph); //add <p> with title to <li>
    newLi.appendChild(newDiv); //meto <div> en <li>

    document.querySelector(".js-containerFav").appendChild(newLi); //meto <li>(que ya tiene <div> conla img y <p>) en <ul>
  }
}
