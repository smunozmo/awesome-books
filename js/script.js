// Localstorage Books

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookAddBtn = document.getElementById("add");

// List creation
const bookContainer = document.getElementById("list");
const bookContainerUl = document.createElement("ul");
bookContainerUl.className = "list-group list-group-numbered";
bookContainer.appendChild(bookContainerUl);

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
let bookArray = new Array();

if (localStorage.getItem("bookObject") !== null) {
  JSON.parse(localStorage.getItem("bookObject")).forEach((element) => {
    bookArray.push(element);
  });
} else {
  bookArray = [];
}

class Library {
  showBook(bookArray) {
    bookContainerUl.innerHTML = ""; // reset the content to avoid acumulation
    for (let e = 0; e < bookArray.length; e += 1) {
      bookContainerUl.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action p-4">
    <div class="ms-2 me-auto">
    <h2 class="fw-bold">${bookArray[e].title}</h2>
    <h3>${bookArray[e].author}</h3>
    </div>
    <button type="button" class="btn btn-warning fs-2" onclick="a.bookRemove(${e})"> <i class="far fa-trash-alt fs-2"></i> </button>
    </li>`;
    }
  }

  bookUpdate(x) {
    bookArray.push(x);
    localStorage.setItem("bookObject", JSON.stringify(bookArray));
    return bookArray;
  }

  bookRemove(e) {
    bookArray.splice(e, 1);
    localStorage.setItem("bookObject", JSON.stringify(bookArray));
  }
}

let a = new Library();
a.showBook(bookArray);
bookAddBtn.addEventListener("click", () => {
  if (bookTitle.value === "" || bookAuthor.value === "") {
    bookAddBtn.setCustomValidity("Oops! Please type an author and title.");
  } else {
    bookList = new Book(bookTitle.value, bookAuthor.value);
    a.bookUpdate(bookList);
    a.showBook(bookArray);
  }
});
