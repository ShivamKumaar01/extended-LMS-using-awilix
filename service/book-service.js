
const { Book, PremiumBook, GlobalBook } = require('../models/book');

class BookService {
  constructor() {
    this.books = [];
  }

  addBook(title, author, type) {
    let book;
    if (type === 'regular') {
      book = new Book(title, author);
    } else if (type === 'premium') {
      book = new PremiumBook(title, author);
    } else {
      book = new GlobalBook(title, author);
    }
    this.books.push(book);
  }

  deleteBook(title) {
    const index = this.books.findIndex((book) => book.title.toLowerCase() === title.toLowerCase());
    if (index !== -1) {
      this.books.splice(index, 1);
    } else {
      console.log("Book not found");
    }
  }

  displayBooks(type) {
    if (this.books.length === 0) {
      console.log("No books available");
      return;
    }

    this.books.forEach((book) => {
      if (!type || book.type === type) {
        console.log(`${book.title} (${book.type}) by ${book.author}`);
      }
    });
  }
}

module.exports = BookService;
