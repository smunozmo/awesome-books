// Localstorage Books

const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookAddBtn = document.getElementById("add");

// List creation
const bookContainer = document.getElementById("list");
const bookContainerUl = document.createElement("ul");
bookContainerUl.className = "list-group list-group-numbered";
bookContainer.appendChild(bookContainerUl);

let bookArray = [];

if (localStorage.getItem("bookObject") !== null) {
  JSON.parse(localStorage.getItem("bookObject")).forEach((element) => {
    bookArray.push(element);
  });
} else {
  bookArray = [];
}

function showBook() {
  bookContainerUl.innerHTML = ""; // reset the content to avoid acumulation
  for (let e = 0; e < bookArray.length; e += 1) {
    bookContainerUl.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action p-4" id="${e}">
  <div class="ms-2 me-auto">
      <h2 class="fw-bold">${bookArray[e].title}</h2>
      <h3>${bookArray[e].author}</h3>
  </div>
  <button type="button" class="btn btn-warning fs-2" onclick="bookRemove(${e})"> <i class="far fa-trash-alt fs-2"></i> </button>
  </li>`;
  }
}

showBook(); // run the function to show the list on load

function bookUpdate() {
  const bookList = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };

  bookArray.push(bookList);
  localStorage.setItem("bookObject", JSON.stringify(bookArray));

  showBook();
}

function bookRemove(e) {
  bookArray.splice(e, 1);
  localStorage.setItem("bookObject", JSON.stringify(bookArray));
  showBook();
}

if (!bookArray) {
  // Avoid linter error
  bookRemove(0);
}

bookAddBtn.addEventListener("click", () => {
  if (bookTitle.value === "" || bookAuthor.value === "") {
    bookAddBtn.setCustomValidity("Oops! Please type an author and title.");
  } else {
    bookUpdate();
  }
});
