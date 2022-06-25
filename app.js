class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.id = Date.now().toString();
  }

  static display() {
    const bookList = document.querySelector('#book-list');
    let gardenBooks = [];
    gardenBooks = gardenBooks.concat(JSON.parse(localStorage.getItem('gardenBooks')));
    gardenBooks.forEach((book) => {
      bookList.innerHTML += `
            <div class="book">
                  <p class="book-info">"${book.title}" by "${book.author}"</p>
                  <button id="${book.id}" class="delete">Delete</button>
            </div>
            `;
    });
  }

  static store() {
    let gardenBooks = [];
    const title = document.querySelector('#title-input').value;
    const author = document.querySelector('#author-input').value;
    if (title !== '' && author !== '') {
      const book = new Book(title, author);
      gardenBooks.push(book);
      gardenBooks = gardenBooks.concat(JSON.parse(localStorage.getItem('gardenBooks')));
      localStorage.setItem('gardenBooks', JSON.stringify(gardenBooks));
    }
  }
}

const addButton = document.querySelector('#add-button');
const title = document.querySelector('#title-input');
const author = document.querySelector('#author-input');

Book.display();

const deleteButton = document.querySelectorAll('.delete');
deleteButton.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    let gardenBooks = JSON.parse(localStorage.getItem('gardenBooks'));
    gardenBooks = gardenBooks.filter((book) => book.id !== e.target.id);
    localStorage.setItem('gardenBooks', JSON.stringify(gardenBooks));
    window.location.reload();
  });
});

Book.store();

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (title.value === '' || author.value === '') {
    e.preventDefault();
    const errorMessage = document.querySelector('#alert');
    errorMessage.textContent = 'Please fill every filed.';
  } else {
    e.preventDefault();
    Book.store();
    title.value = '';
    author.value = '';
    window.location.reload();
  }
});

const timeDisplay = document.querySelector('#time-slot');
 function displayTime() {
  timeDisplay.textContent = new Date();
}

setInterval(displayTime, 1000);