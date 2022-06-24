// WHAT TO DO? WHAT TO DO?

//first thing sholud be display

// need to ADD books
// with an event
//when the add button is clicked 
// const title = document.querySelector('#title-input').value;
// const author = document.querySelector('#author-name').value;
// let book = new Book(title, author);
// let gardenBooks = [];
// gardenBooks.push(book);
// // store the gardenBooks data to local storage immidiately
// store();


// need to DELETE books
// with an event
// when the delete button is clicked
//get the stored data from local storage to gardenBooks array
//remove the selected book. to do so, use filter() method instead of removeChild() method, because filter() was recommended
// like so >>> array = array.filter((item) => item.id !== event.targer.id);
// update storage
// may need to reload the page to completely update display


// need to STORE books


class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.id = Date.now().toString();
    }

    static display() {
        const bookList = document.querySelector('#book-list');
        let gardenBooks = JSON.parse(localStorage.getItem('gardenBooks'));
        gardenBooks.forEach(book => {
            bookList.innerHTML += `
            <div class="book">
                  <p>"${book.title}" by "${book.author}"</p>
                  <button id="${book.id} class="delete"">Delete</button>
            </div>
            `
        });
    }

    static add() {
        const addButton = document.querySelector('#add-button');
        addButton.addEventListener('click', () => {
            const title = document.querySelector('#title-input').value;
            const author = document.querySelector('#author-name').value;
            const book = new Book(title, author);
            const gardenBooks = [];
            gardenBooks.push(book);
            Book.store();
        });
    }

    static delete() {
    }

    static store() {

    }
}