/* eslint-disable max-classes-per-file */
// Localstorage Books

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookAddBtn = document.getElementById('add');

// List creation
const bookContainer = document.getElementById('list');
const bookContainerUl = document.createElement('ul');
bookContainerUl.className = 'list-group list-group-numbered';
bookContainer.appendChild(bookContainerUl);

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
let bookArray = [];

if (localStorage.getItem('bookObject') !== null) {
  JSON.parse(localStorage.getItem('bookObject')).forEach((element) => {
    bookArray.push(element);
  });
} else {
  bookArray = [];
}

class Library {
  showBook(bookArray) {
    this.bookArray = bookArray;
    bookContainerUl.innerHTML = ''; // reset the content to avoid acumulation
    for (let e = 0; e < bookArray.length; e += 1) {
      bookContainerUl.innerHTML += `
    <li class="list-group-item d-flex justify-content-between align-items-start list-group-item-action p-4 ${e}">
    <div class="ms-2 me-auto">
    <h3 class="fw-bold">"${bookArray[e].title}" by ${bookArray[e].author}</h3>
    </div>
    <button type="button" class="btn btn-warning fs-2" onclick="a.bookRemove(${e}, a)"> <i class="far fa-trash-alt fs-2"></i> </button>
    </li>`;
    }
  }

  bookUpdate(x) {
    this.x = x;
    bookArray.push(x);
    localStorage.setItem('bookObject', JSON.stringify(bookArray));
    return bookArray;
  }

  bookRemove(e, j) {
    this.e = e;
    this.j = j;
    bookArray.splice(e, 1);
    localStorage.setItem('bookObject', JSON.stringify(bookArray));
    j.showBook(bookArray);
  }
}

const a = new Library();
a.showBook(bookArray);
bookAddBtn.addEventListener('click', () => {
  if (bookTitle.value === '' || bookAuthor.value === '') {
    bookAddBtn.setCustomValidity('Oops! Please type an author and title.');
  } else {
    const bookList = new Book(bookTitle.value, bookAuthor.value);
    a.bookUpdate(bookList);
    a.showBook(bookArray);
    document.getElementById('form').reset();
  }
});