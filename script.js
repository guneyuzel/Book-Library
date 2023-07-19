let myLibrary = [];
const addButton = document.getElementById("add-button");
const container = document.querySelector(".container");
const cards = document.querySelector(".cards");

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function capitalizeFirstLetter(str) {
  return str
    .split(" ")
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(" ");
}

var form = document.querySelector("form");
form.onsubmit = function () {
  let titleValue = document.getElementById("title").value;
  let authorValue = document.getElementById("author").value;
  let pagesValue = document.getElementById("pages").value;

  let newBook = new Book(titleValue, authorValue, pagesValue);
  myLibrary.push(newBook);

  let content = document.createElement("div");
  let title = document.createElement("h2");
  let author = document.createElement("p");
  let pages = document.createElement("p");
  let closeButton = document.createElement("img");

  closeButton.src = "Icons/close_dark.png";
  closeButton.onclick = function () {
    return this.parentNode.remove();
  };

  title.innerHTML = titleValue.toUpperCase();
  author.innerHTML = `Author:   ${capitalizeFirstLetter(authorValue)}`;
  pages.innerHTML = `Number of pages:   ${pagesValue}`;

  cards.appendChild(content);
  content.appendChild(closeButton);
  content.appendChild(title);
  content.appendChild(author);
  content.appendChild(pages);
  form.reset();
  return false;
};
