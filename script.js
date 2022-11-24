// const searchBox = document.querySelector(".search__str");
// const clearButton = document.querySelector(".clear__btn");
// const searchButton = document.querySelector(".search__btn");
// const booksContainer = document.querySelector(".library__list");

const basicURL = "https://www.googleapis.com/books/v1/volumes?q=";
const restParams = "&filter=paid-ebooks&maxResults=20&startIndex=0&key=";
const API_KEY = "AIzaSyDCuAG6erQNSx2GKW2X_EzAFD_uIXIlxqw";
const searchSrting = "harry+potter";
let URL = basicURL + searchSrting + restParams + API_KEY;

/* HELP FUNCTIONS */

// create element with classlist and append it to parent
function drawElement(elementParent, elementType, elementClasslist) {
  const elementName = document.createElement(elementType);

  elementClasslist = elementClasslist.split(" ");
  for (let i = 0; i < elementClasslist.length; i++) {
    elementName.classList.add(`${elementClasslist[i]}`);
  }

  try {
    const parent = document.querySelector(elementParent) || document.querySelector(`.${elementParent}`);
    parent.append(elementName);
  } catch {
    elementParent.append(elementName);
  }

  return elementName;
}

// DRAW PAGE SECTION ==================
const body = document.querySelector("body");
const wrapper = drawElement(body, "div", "wrapper");
drawElement(wrapper, "header", "header");
const headerContainer = drawElement("header", "div", "header__inner container");
const headerLogo = drawElement(headerContainer, "a", "logo");
headerLogo.innerHTML = `<h1 class="logo__top">Bookshelf</h1>
<div class="logo__bottom">store</div>`;
headerLogo.href = "./index.html";

const headerSearch = drawElement(headerContainer, "div", "search__section");
const searchBox = drawElement(headerSearch, "input", "search__str");
searchBox.type = "text";
searchBox.placeholder = "search";
searchBox.tabindex = "1";
searchBox.autocomplete = "off";
const searchButton = drawElement(headerSearch, "button", "search__btn");
searchButton.innerHTML = `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
    d="M27.8 25L20.9 18.1C22.2 16.2 23 13.9 23 11.5C23 5.1 17.8 0 11.5 0C5.2 0 0 5.2 0 11.6C0 18 5.2 23.1 11.5 23.1C14 23.1 16.2 22.3 18.1 21L25 27.9C25.4 28.3 25.9 28.5 26.4 28.5C26.9 28.5 27.4 28.3 27.8 27.9C28.6 27 28.6 25.8 27.8 25ZM4 11.6C4 7.4 7.4 4 11.6 4C15.8 4 19.2 7.4 19.2 11.6C19.2 15.8 15.8 19.2 11.6 19.2C7.4 19.2 4 15.7 4 11.6Z"
    fill="#33CCFF" />
</svg>`;
const clearButton = drawElement(headerSearch, "button", "clear__btn");
clearButton.textContent = "Clear search";

const cartContainer = drawElement(headerContainer, "div", "cart");
const cartIcon = drawElement(cartContainer, "div", "cart__icon");
cartIcon.innerHTML = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 565.5 498.4"
style="enable-background:new 0 0 565.5 498.4;" xml:space="preserve">
<g>
    <path d="M328.2,346.7c-41.4,0-82.9-0.7-124.3,0.2c-33.1,0.8-58.8-19.9-66.4-52.3c-18.9-80.1-38.9-160-58.6-239.9
c-4.7-19.1-18.1-29.7-37.7-29.8c-9.2-0.1-18.5,0.1-27.7,0C5.6,24.8,0,19.6,0,12.5C0,5.4,5.7,0.1,13.7,0.1C26.8,0.2,40.1-0.7,53,1.3
c25.5,3.9,41.8,19.5,49.2,44c2.8,9.4,5,19,7.1,28.5c0.8,3.9,2.5,5,6.3,5c24.3-0.2,48.7-0.1,73.1-0.1c119,0,238,0,357,0
c2.2,0,4.3,0,6.5,0c10,0.3,15,6.7,12.8,16.5c-6,26.6-12.1,53.1-18.2,79.7c-9.4,41.1-18.7,82.2-28.3,123.2
c-6.8,29.4-29.9,48.2-60,48.4C415,346.9,371.6,346.6,328.2,346.7C328.2,346.7,328.2,346.7,328.2,346.7z M117,104
c0.5,2.3,0.8,4.2,1.3,6.1c14.8,60.3,29.6,120.7,44.3,181c4.9,20.2,18.1,30.7,38.8,30.7c84.6,0,169.2,0,253.9,0
c21.8,0,34.8-10.5,39.6-31.8c9.6-42,19.2-84.1,28.9-126.1c4.5-19.8,9.1-39.7,13.7-59.9C397.2,104,257.5,104,117,104z" />
    <path d="M179.9,442.5c0.1-30.8,25.3-55.8,55.9-55.5c30.9,0.3,55.5,25.3,55.3,56.2c-0.2,30.6-25.1,55.2-55.6,55.2
C204.7,498.4,179.8,473.4,179.9,442.5z M204.8,442.8c0,17,13.8,30.8,30.7,30.8c16.9,0,30.7-13.9,30.7-30.8
c0-17-13.7-30.6-30.7-30.6C218.3,412.1,204.8,425.6,204.8,442.8z" />
    <path d="M459.8,442.7c0,30.9-24.9,55.8-55.7,55.7c-30.8-0.1-55.6-25.1-55.5-56c0.1-30.5,24.9-55.3,55.4-55.4
C434.8,386.9,459.8,411.9,459.8,442.7z M434.9,443c0.1-17.2-13.3-30.8-30.4-30.9c-17.1-0.1-30.9,13.4-31,30.4
c-0.1,16.9,13.6,30.9,30.5,31.1C420.8,473.7,434.8,459.9,434.9,443z" />
</g>
</svg>`;
const cartItemsCount = drawElement(cartIcon, "div", "cart__count hidden");
cartItemsCount.textContent = 0;
const cartAmount = drawElement(cartContainer, "div", "cart__amount");
const cartCurrency = drawElement(cartContainer, "div", "cart__currency");
cartAmount.textContent = "0.00";
cartCurrency.textContent = "$";
const cartPopup = drawElement(cartContainer, "div", "cart__popup hide");

const main = drawElement(wrapper, "main", "main");
const aside = drawElement(main, "aside", "aside container");
const bookList = drawElement(aside, "ul", "book__list");
const booksTypesButtons = [];
const bookTypes = ["JavaScript", "HTML", "Poetry", "Adventures", "Nature", "Detective", "Psychology"];
for (let i = 0; i < bookTypes.length; i += 1) {
  const bookButton = drawElement(bookList, "li", "book__item");
  bookButton.innerHTML = `<a class="button" href="#">${bookTypes[i]}</a>`;
  booksTypesButtons.push(bookButton);
}

const library = drawElement(main, "section", "library container");
const booksContainer = drawElement(library, "ul", "library__list");
const booksToDrag = [];
const addToCartButtons = [];
const quickViewButtons = [];
const booksData = {};

const footer = drawElement(wrapper, "footer", "footer");
footer.innerHTML = `<a class="github__link" href="https://github.com/tyronmaster?tab=repositories">github</a>
  <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
  <a class="rsschool__link" href="https://rs.school/">rs.school 2022 ©</a>`;

const popup = drawElement(wrapper, "div", "popup hide");

// DRAW PAGE SECTION ENDS ==============

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
function getBooksData(element, index) {
  const { title } = element.volumeInfo;
  const author = element.volumeInfo.authors["0"];
  const { thumbnail } = element.volumeInfo.imageLinks;
  const priceNum = element.saleInfo.listPrice.amount;
  const priceCur = element.saleInfo.listPrice.currencyCode;
  const { description } = element.volumeInfo;
  const book = drawElement(booksContainer, "li", "library__item");
  book.dataset.index = index;
  book.draggable = true;
  const itemPicture = drawElement(book, "div", "item__picture");
  itemPicture.innerHTML = `<img class="item__image" src="${thumbnail}" alt="item image">`;
  const itemContent = drawElement(book, "div", "item__content");
  const titleElement = drawElement(itemContent, "h2", "item__title");
  titleElement.textContent = title;
  const authorElement = drawElement(itemContent, "h3", "item__author");
  authorElement.textContent = author;
  const descriptionElement = drawElement(itemContent, "p", "item__description");
  descriptionElement.textContent = description;
  const elementPrice = drawElement(itemContent, "div", "item__price");
  elementPrice.innerHTML = `<p class="price__amount">${priceNum}</p>
    <p class="price__currency">${priceCur}</p>`;
  const elementButtons = drawElement(itemContent, "div", "item__buttons");
  const quickView = drawElement(elementButtons, "a", "quickview button");
  quickView.dataset.index = index;
  quickView.href = "#";
  quickView.textContent = "Quick View";

  const addtoCart = drawElement(elementButtons, "a", "addtocart button");
  addtoCart.href = "#";
  addtoCart.textContent = "Add to Cart";
  addtoCart.dataset.index = index;

  // REFACTOR >> Need to join this object with variables
  booksData[index] = {};
  booksData[index].title = title;
  booksData[index].author = author;
  booksData[index].thumbnail = thumbnail;
  booksData[index].priceNum = priceNum;
  booksData[index].priceCur = priceCur;
  booksData[index].description = description;
  booksData[index].cartCount = 0;

  quickViewButtons.push(quickView);
  addToCartButtons.push(addtoCart);
  booksToDrag.push(book);
  // booksContainer.innerHTML += book;
}

// DRAG & DROP section ++++++++++++++++++++++++++++
// const cartData = {};
let totalCartCount = 0;
let price = 0;
const dragAndDrop = () => {
  // const bookToDrag = document.querySelectorAll(".library__item");
  let itemIndex;

  booksToDrag.forEach((book) => book.addEventListener("dragstart", (e) => {
    itemIndex = e.target.dataset.index;
  }));

  const dragOver = function (e) {
    e.preventDefault();
  };
  const dragEnter = function (e) {
    e.preventDefault();
    cartContainer.classList.add("hover");
  };
  const dragLeave = function () {
    cartContainer.classList.remove("hover");
  };
  const dragDrop = function () {
    booksData[itemIndex].cartCount += 1;
    price += Number(booksData[itemIndex].priceNum.toFixed(2));
    cartAmount.textContent = Math.floor(price * 100) / 100;
    cartCurrency.textContent = booksData[itemIndex].priceCur;
    cartItemsCount.classList.remove("hidden");
    totalCartCount += 1;
    cartItemsCount.textContent = totalCartCount;
  };
  cartContainer.addEventListener("dragover", dragOver);
  cartContainer.addEventListener("dragenter", dragEnter);
  cartContainer.addEventListener("dragleave", dragLeave);
  cartContainer.addEventListener("drop", dragDrop);

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      itemIndex = e.currentTarget.dataset.index;
      booksData[itemIndex].cartCount += 1;
      price += Number(booksData[itemIndex].priceNum.toFixed(2));
      cartAmount.textContent = Math.floor(price * 100) / 100;
      cartCurrency.textContent = booksData[itemIndex].priceCur;
      cartItemsCount.classList.remove("hidden");
      totalCartCount += 1;
      cartItemsCount.textContent = totalCartCount;
    });
  });

  quickViewButtons.forEach((button) => button.addEventListener("click", (e) => {
    const currentIndex = e.currentTarget.dataset.index;
    // console.log(booksData[currentIndex]);
    popup.classList.add("active");
    body.classList.add("lock");
    popup.innerHTML = ` <div class="popup__container">
                      <div class="popup__picture">
                          <img class="popup__image" src="${booksData[currentIndex].thumbnail}" alt="item image">
                      </div>
                      <div class="popup__content">
                        <h2 class="popupm__title">${booksData[currentIndex].title}</h2>
                        <h3 class="popup__author">${booksData[currentIndex].author}</h3>
                        <p class="popup__description">${booksData[currentIndex].description}</p>
                        <div class="popup__price">
                          <p class="price__amount">${booksData[currentIndex].priceNum}</p>
                          <p class="price__currency">${booksData[currentIndex].priceCur}</p>
                        </div>
                        <div class="close__button">
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      </div>`;

    const closeButton = document.querySelector(".close__button");
    closeButton.addEventListener("click", () => {
      popup.classList.remove("active");
      body.classList.remove("lock");
    });
    popup.addEventListener("click", (e) => {
      if (e.target.classList.contains("popup")) {
        // console.log(e.target);
        popup.classList.remove("active");
        body.classList.remove("lock");
      }
    });
  }));
};
// result >> cartData = array of added books; price = total cart price;
// UPDATE result >> booksData[index].cartCount shows count of added to cart books
// DRAG & Drop section ends ------------------------

// FUNCTION GETS books DATA FROM API BY ***ANY**** URL and DRAW books SECTION CONTENT
async function getApiData(url) {
  const response = await fetch(url);
  const data = await response.json();

  booksContainer.innerHTML = "";

  // console.log(data);
  const list = data.items;
  console.log(list);

  list.map((item, index) => getBooksData(item, index));
  dragAndDrop();
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
  // UNCOMMENT WHEN DONE ALERT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  drawContent(URL); // content for books section
};

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

// ON Press TYPES Button ACTION
booksTypesButtons.forEach((button) => button.addEventListener("click", (e) => {
  URL = basicURL + e.target.textContent + restParams + API_KEY;
  // console.log(URL);
  drawContent(URL);
}));

// ON PRESS ENTER ON INPUT ACTION
searchBox.addEventListener("change", changeContent);

// BUTTON SEARCH ACTION
searchButton.addEventListener("click", changeContent);
// ON INPUT CHANGE FOCUS - used unnamed function because i need "THIS" context
searchBox.addEventListener("input", function () {
  if (this.value !== "") {
    clearButton.classList.add("active");
    searchButton.classList.add("active");
  } else {
    clearButton.classList.remove("active");
    searchButton.classList.remove("active");
  }
});
// TO clear search input action - used unnamed function because i need "THIS" context
clearButton.addEventListener("click", function () {
  searchBox.value = "";
  this.classList.remove("active");
  searchButton.classList.remove("active");
});

cartContainer.addEventListener("mouseenter", (e) => {
  e.preventDefault();
  const cartItems = [];
  for (let i = 0; i < Object.keys(booksData).length; i += 1) {
    if (booksData[i].cartCount > 0) {
      const popupClose = document.createElement("div");
      popupClose.classList.add("cart__popup-close");
      popupClose.innerHTML = "<span>X</span>";
      cartItems.push(booksData[i]); // optional TODO check whether it necessary
      cartPopup.innerHTML += `
      <div class="cart__popup-item">
        <img src="${booksData[i].thumbnail}">
        <div class="cart__popup-title">
          <h2>${booksData[i].title}</h2>
          <h3>${booksData[i].author}</h3>
          <p>${booksData[i].priceNum} ${booksData[i].priceCur}</p>
        </div>
        <input placeholder="" value="${booksData[i].cartCount}">
        <div class="cart__popup-close">
        <span>X</span>
        </div>
      </div>
      `;
    }
  }

  // console.log(cartItems);
  if (cartItems.length > 0) {
    cartPopup.classList.remove("hide");
    const totalPrice = drawElement(cartPopup, "div", "cart__popup-price");
    totalPrice.innerHTML = `<p>Total price:</p><p>${price}</p><p>${cartItems[0].priceCur}</p>`;
    const cartSubmit = drawElement(cartPopup, "a", "button__checkout button");
    cartSubmit.textContent = "Checkout";
    body.classList.add("lock");
    cartSubmit.addEventListener("click", (e) => {
      booksContainer.style.display = "none";
      const form = drawElement(library, "form", "form__container");

      form.innerHTML = `<label for="name">Name</label>
                          <input class="name" id="name" type="text" placeholder="Name" minlength="3" required>
                        <label for="surname">Surname</label>
                          <input class="surname" id="surname" type="text" placeholder="Surname" minlength="3" required><br>
                        <label for="date">Choose date</label>
                          <input type="date" id="date" required><br>
                        <label for="street">Street</label>
                          <input class="street" id="street" type="text" placeholder="Street" minlength="3" required><br>
                        <label for="building">Building</label>
                          <input class="building" id="building" type="text" placeholder="Building" minlength="3" required>
                        <label for="room">Room</label>
                          <input class="room" id="room" type="text" placeholder="Room">
                        <fieldset>
                          <legend>Select a payment:</legend>
                          <div>
                            <input type="radio" id="cart" name="payment" value="cart" checked>
                            <label for="cart">Cart</label>
                          </div>
                          <div>
                            <input type="radio" id="cash" name="payment" value="cash">
                            <label for="cash">Cash</label>
                          </div>
                        </fieldset>
                        <fieldset>
                        <legend>Select a gift:</legend>
                        <div>
                          <input type="checkbox" id="pack" name="pack" checked>
                          <label for="pack">Pack as a gift</label>
                        </div>
                        <div>
                          <input type="checkbox" id="postcard" name="postcard" checked>
                          <label for="postcard">Add postcard</label>
                        </div>
                        <div>
                          <input type="checkbox" id="discount" name="discount">
                          <label for="discount">Add 5% discount to the next order</label>
                        </div>
                          <input type="checkbox" id="brand" name="brand">
                          <label for="brand">Branded T-shirt</label>
                        </div>
                      </fieldset>
        `;

      const nameInput = document.querySelector(".name");
      // console.log(nameInput);

      const confirmButton = drawElement(library, "button", "confirm button");
      confirmButton.disabled = true;
      confirmButton.textContent = "Confirm order";
    });
  }
});
cartContainer.addEventListener("mouseleave", () => {
  cartPopup.classList.add("hide");
  cartPopup.innerHTML = "";
  body.classList.remove("lock");
});
