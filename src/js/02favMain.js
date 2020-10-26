"use strict";

//fav list => paint cards and html in DOM <ul1>

function paintFav() {
  document.querySelector(".js-containerFav").innerHTML = "";

  for (let i = 0; i < favoritesList.length; i++) {
    title = favoritesList[i].show.name;
    newTitle = document.createTextNode(`${title}`); //create title of serial to be printed

    const newImg = document.createElement("img"); //create <img>
    const nullImg = newImg.src;

    if (favoritesList[i].show.image != null) {
      newImg.src = favoritesList[i].show.image.medium;
      newImg.alt = "Cartel de tu serie favorita";
    } else {
      newImg.src = `https://via.placeholder.com/210x295/ffffff/008000/?text=${title}`; //paint default img
      newImg.alt = "Imagen no disponible";
    }

    newParagraph = document.createElement("p"); //create <p>
    newParagraph.appendChild(newTitle); //add title to <p>

    newDiv = document.createElement("div"); //create <div>
    newDiv.appendChild(newImg); //keep <img> in <div>

    newLi = document.createElement("li"); //create <li>

    newLi.setAttribute("class", "js-cardsItemFav"); // add class to <li>
    newLi.setAttribute("id", `${i}`); //add id to <li>

    newLi.appendChild(newParagraph); //add <p> with title to <li>
    newLi.appendChild(newDiv); //keep <div> in <li>

    document.querySelector(".js-containerFav").appendChild(newLi); //keep <li>(with its <div> and img and <p>) in <ul>
  }
}
