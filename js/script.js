// Localstorage Books

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookForm = document.getElementById("form");
const bookAddBtn = document.getElementById('add');
const bookArray = [];
let index = 0;

function bookUpdate() {
  const bookList = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };

  
  localStorage.setItem("bookList", JSON.stringify(bookList));

  bookArray.push(bookList);
  index += 1;

  localStorage.setItem("bookObject", JSON.stringify(bookArray));

  const bookArrayBook = JSON.parse(localStorage.getItem('bookObject'))

  console.log(bookArray);
}

bookAddBtn.addEventListener("click", bookUpdate);



// List creation
const bookContainer = document.getElementById("list");

const bookContainerUl = document.createElement("ul");
bookContainerUl.className = "list-group list-group-numbered";

bookContainer.appendChild(bookContainerUl);

function showBook(e) {
  `
<li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
<div class="ms-2 me-auto">
    <h2 class="fw-bold">${bookArrayObject[e].title}</h2>
    <h3>${bookArrayObject[e].author}</h3>
</div>
<button type="button" class="btn btn-warning" id="book-id-${e}"> <i class="far fa-trash-alt"></i> </button>
</li>
`;
}
