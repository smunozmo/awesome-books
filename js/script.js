// Localstorage Books

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookForm = document.getElementById("form");

function bookUpdate() {
  const bookList = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };

  localStorage.setItem("bookList", JSON.stringify(bookList));
}

bookForm.addEventListener("input", bookUpdate);

console.log("hi");

// List creation
const bookContainer = document.getElementById("list");

const bookContainerUl = document.createElement("ul");
bookContainerUl.className = "list-group list-group-numbered";

bookContainer.appendChild(bookContainerUl);

function showBook(e) {
  `
<li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action">
<div class="ms-2 me-auto">
    <h2 class="fw-bold">${bookArray[e].title}</h2>
    <h3>${bookArray[e].author}</h3>
</div>
<button type="button" class="btn btn-warning"> <i class="far fa-trash-alt"></i> </button>
</li>
`;
}
