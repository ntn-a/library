let myLibrary = [];
const btn = document.querySelector(".add");
const form = document.querySelector(".form");
const exit = document.querySelector(".exit");
const submit = document.querySelector(".submit");
const title = document.querySelector(".title");
const author = document.querySelector(".author");
const pages = document.querySelector(".pages");
const main = document.querySelector(".main")
const book = document.querySelector(".book");

btn.addEventListener("click", () => {
  form.classList.toggle("active");
})

exit.addEventListener("click", () => {
  form.classList.toggle("active");
})

submit.addEventListener("click", () => {
  entry = new Book()
  entry.setTitle(title.value);
  entry.setAuthor(author.value);
  entry.setPages(pages.value);
  addBookToLibrary(entry);
  for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
  }
  displayBooks();
  form.classList.toggle("active");
})

class Book {
  constructor() {
    this.title = "";
    this.author = "";
    this.pages = 0;
    this.read = false;
  }
  setTitle(newTitle) {
    this.title = newTitle; 
  }
  setAuthor(newAuthor) {
    this.author = newAuthor;
  }
  setPages(newPages) {
    this.pages = newPages;
  }
  setRead(newRead) {
    this.read = newRead;
  }
  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author
  }
  getPages() {
    return this.pages;
  }
  getRead() {
    return this.read;
  }
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

function clearDisplay() {
  var divsToRemove = document.querySelectorAll(".book");
  for (let i = 0; i < divsToRemove.length; i++){
    divsToRemove[i].remove();
  }
}

function displayBooks() {
  clearDisplay();
  for (var i = 0; i < myLibrary.length; i++) {
    const content = document.createElement("div");
    content.classList.add("book");
    content.textContent = myLibrary[i].title;
    main.appendChild(content);
  }
}