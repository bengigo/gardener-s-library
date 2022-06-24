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


// need to DISPLAY books
// const bookList = document.querySelector('#book-list');
// let books = JSON.parse(localStorage.getItem("books"));
// books.forEach(book => {
//     bookList.textContent += `
//     <div class="book">
//       <p>"${book.title}" by "${book.author}"</p>
//       <button id="${book.id} class="delete"">Delete</button>
// </div>
//     `
// });




class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.id = Date.now().toString();
    }

    display() {
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

    add() {}

    delete() {

    }

    store() {

    }
}