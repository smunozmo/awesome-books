// Localstorage Books

const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const bookForm = document.getElementById('form');

function bookUpdate() {
  
  const bookList = {
    title: bookTitle.value,
    author: bookAuthor.value,
  };

  localStorage.setItem('bookList', JSON.stringify(bookList));

}

bookForm.addEventListener('input', bookUpdate);


console.log('hi');