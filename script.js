const searchBox = document.querySelector(".search__str");
const clearButton = document.querySelector(".clear__btn");
const searchButton = document.querySelector(".search__btn");
const booksContainer = document.querySelector(".library__list");

const basicURL = "https://www.googleapis.com/books/v1/volumes?q=";
const restParams = "&filter=paid-ebooks&maxResults=20&startIndex=0&key=";
const API_KEY = "AIzaSyDCuAG6erQNSx2GKW2X_EzAFD_uIXIlxqw";
const searchSrting = "harry+potter";
let URL = basicURL + searchSrting + restParams + API_KEY;

/* HELP FUNCTIONS */

// windows loader
function loader() {
  booksContainer.innerHTML = `<div class="loader">
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  <div class="circle"></div>
  </div>`;
}

// FUNCTION GETS DATA FROM API and DRAW books SECTION CONTENT
function getBooksData(element) {
  const { title } = element.volumeInfo;
  const author = element.volumeInfo.authors;
  const { thumbnail } = element.volumeInfo.imageLinks;
  const priceNum = element.saleInfo.listPrice.amount;
  const priceCur = element.saleInfo.listPrice.currencyCode;
  const { description } = element.volumeInfo;
  const book = `<li class="library__item" draggable="true">
  <div class="item__picture">
      <img class="item__image" src="${thumbnail}" alt="item image">
  </div>
  <div class="item__content">
      <h2 class="item__title">${title}</h2>
      <h3 class="item__author">${author}</h3>
      <p class="item__description">${description}</p>
      <div class="item__price">
          <p class="price__amount">${priceNum}</p>
          <p class="price__currency">${priceCur}</p>
      </div>
      <div class="item__buttons">
          <a class="quickview button" href="#">Quick View</a>
          <a class="addtocart button" href="#">Add to Cart</a>
      </div>
  </div>
</li>`;

  booksContainer.innerHTML += book;
}

// FUNCTION GETS MOVIE DATA FROM API BY ***ANY**** URL and DRAW books SECTION CONTENT
async function getApiData(url) {
  const response = await fetch(url);
  const data = await response.json();

  booksContainer.innerHTML = "";

  // console.log(data);
  const list = data.items;
  console.log(list);

  list.map((item) => getBooksData(item));
}

// draw content from url and show 404 if not found
function drawContent(url) {
  loader();
  getApiData(url)
    .catch((err) => {
      console.error(err);
      booksContainer.innerHTML = "";
      let i = 0;
      const interval = setInterval(() => {
        booksContainer.innerHTML = `<div class="error__404">${i}</div>`;
        if (i <= 350) {
          i += 10;
        } else {
          i += 1;
        }
        if (i === 405) {
          clearInterval(interval);
        }
      }, 0);
      setTimeout(() => {
        booksContainer.innerHTML += `<div class="noresults">Oooooooooooops!<br><br>No results or inappropriate content.</div>`;
      }, 1500);
    });
}
/* book SECTION CONTENT BUILDER ---------------------------------------------------------- */

window.onload = () => {
  searchBox.focus();
  drawContent(URL); // content for books section
};

// function dragAndDrop(element, target){

// }
function changeContent(e) {
  if (searchBox.value !== "") {
    URL = basicURL + e.target.value + restParams + API_KEY;
    // console.log(this);
    // console.log(URL);
    drawContent(URL);
    searchBox.value = "";
    clearButton.classList.remove("active");
    searchButton.classList.remove("active");
  }
}

// ON PRESS ENTER ON INPUT ACTION
searchBox.addEventListener("change", changeContent);

// BUTTON SEARCH ACTION
searchButton.addEventListener("click", changeContent);
// ON INPUT CHANGE FOCUS
searchBox.addEventListener("input", function () {
  if (this.value !== "") {
    clearButton.classList.add("active");
    searchButton.classList.add("active");
  } else {
    clearButton.classList.remove("active");
    searchButton.classList.remove("active");
  }
});
clearButton.addEventListener("click", function () {
  searchBox.value = "";
  this.classList.remove("active");
  searchButton.classList.remove("active");
});
