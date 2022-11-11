const URL = "https://www.googleapis.com/books/v1/volumes?q=search-terms&key=";
const API_KEY = "AIzaSyDCuAG6erQNSx2GKW2X_EzAFD_uIXIlxqw";

fetch(URL + API_KEY)
  .then((response) => response.json())
  .then((result) => {
    // eslint-disable-next-line no-console
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });
