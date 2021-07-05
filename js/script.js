// Localstorage Books

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookForm = document.getElementById("form");
const bookAddBtn = document.getElementById("add");


// let bookArray = [JSON.parse(localStorage.getItem("bookObject"))];
let bookArray = [];

 if (localStorage.getItem("bookObject") !== null) {
JSON.parse(localStorage.getItem("bookObject")).forEach(element => {
  bookArray.push(element);
});

 console.log(JSON.parse(localStorage.getItem("bookObject")));
 } else {
 bookArray = [];
}

function bookUpdate() {
  const bookList = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };

  console.log(bookArray);
  
  
  bookArray.push(bookList);
  
  localStorage.setItem("bookObject", JSON.stringify(bookArray));
  
 
  
function showBook(e) {
  return `
  <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
  <div class="ms-2 me-auto">
      <h2 class="fw-bold">${bookArray[e].title}</h2>
      <h3>${bookArray[e].author}</h3>
  </div>
  <button type="button" class="btn btn-warning" id="book-id-${e}"> <i class="far fa-trash-alt"></i> </button>
  </li>`;
} 

for (let index = 0; index < bookArray.length; index++) {
  bookContainerUl.innerHTML += showBook(index);
}

 }

bookAddBtn.addEventListener("click", bookUpdate);



// List creation
const bookContainer = document.getElementById("list");

const bookContainerUl = document.createElement("ul");
bookContainerUl.className = "list-group list-group-numbered";

bookContainer.appendChild(bookContainerUl);



