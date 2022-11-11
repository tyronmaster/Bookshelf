const URL = "https://www.googleapis.com/books/v1/volumes?q=java&key=";
const API_KEY = "AIzaSyDCuAG6erQNSx2GKW2X_EzAFD_uIXIlxqw";

fetch(URL + API_KEY)
  .then((response) => response.json())
  .then((result) => {
    // eslint-disable-next-line no-console
    console.log(result);
  });

const searchBox = document.querySelector(".search__str");
const clearButton = document.querySelector(".clear__btn");
const searchButton = document.querySelector(".search__btn");

window.onload = () => {
  searchBox.focus();
};

// BUTTON SEARCH ACTION
// searchButton.addEventListener("click", () => {
//   if (searchBox.value !== "") {
//     url = `${basicURL}s=${this.value}&`;
//     drawContent(url);
//     // console.log(url);
//   }
// });

// ON INPUT CHANGE FOCUS
searchBox.addEventListener("input", () => {
  if (this.value !== "") {
    clearButton.classList.add("active");
    searchButton.classList.add("active");
  } else {
    clearButton.classList.remove("active");
    searchButton.classList.remove("active");
  }
});
clearButton.addEventListener("click", () => {
  searchBox.value = "";
  this.classList.remove("active");
  searchButton.classList.remove("active");
});
