let myLibrary = [];

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
}

function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

function printLibrary() {
  for (let i = 0; i < myLibrary.length; i++){
    console.log(myLibrary[i]);
  }
}