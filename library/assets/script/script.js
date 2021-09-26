//Booklist
let myLibrary = [];

//Book class
class Book {
  constructor(name, author, genre, numberOfPages, isRead, id) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;
    this.id = id;
  }

  addBookLibrary(book) {
    myLibrary.push(book);
  }
}

//a couple of books to start with
const fountainhead = new Book(
  "The Fountainhead",
  "Ayn Rand",
  "Fiction",
  "876",
  true,
  1
);
const dune = new Book(
  "Dune",
  "Frank Herbert",
  "Science-fiction",
  "655",
  true,
  2
);
const hamlet = new Book(
  "Hamlet",
  "William Shakespeare",
  "Tragedy",
  "190",
  false,
  3
);
fountainhead.addBookLibrary(fountainhead);
dune.addBookLibrary(dune);
hamlet.addBookLibrary(hamlet);

//Add Book modal
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

//Add Book
const addButton = document.querySelector(".add-btn");

function collectBookData() {
  const bookName = document.getElementById("bookName").value;
  const author = document.getElementById("author").value;
  const genre = document.getElementById("genre").value;
  const numOfPages = document.getElementById("numOfPages").value;
  let status = document.getElementById("status").value;
  const id = myLibrary.length + 1;
  if (status == "read") {
    status = true;
  } else {
    status = false;
  }
  const newBook = new Book(bookName, author, genre, numOfPages, status, id);
  newBook.addBookLibrary(newBook);
  const modal = addButton.closest(".modal");
  closeModal(modal);
  showBooks(myLibrary);
}

addButton.addEventListener("click", collectBookData);

//show booklist on DOM
function showBooks() {
  const allBooks = document.querySelector(".all-books");
  allBooks.innerHTML = null;
  myLibrary.map((book) => {
    allBooks.innerHTML += `
    <ul class="book-card">
  <li><b>Name:</b> ${book.name}</li>
  <li><b>Author:</b> ${book.author}</li>
  <li><b>Genre:</b> ${book.genre}</li>
  <li><b>Number of Pages:</b> ${book.numberOfPages}</li>
  <li><b>Status:</b> ${book.isRead ? "Read" : "Not Read"}</li>
  <button class="delete-btn" data-id=${book.id}> Delete Book </button>
  </ul>
  `;
  });

  //delete book
  const deleteButton = document.querySelectorAll(".delete-btn");

  function deleteBook(button) {
    myLibrary.filter((book) => {
      return book.id !== button.dataset.id;
    });
    showBooks();
  }

  deleteButton.forEach((button) => {
    button.addEventListener("click", () => deleteBook(button));
  });
}
showBooks();
