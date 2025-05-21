
const { createContainer, asClass } = require('awilix');
const BookService = require('./service/book-service');
const Library = require('./library');

const container = createContainer();

container.register({
  bookService: asClass(BookService).singleton(),
  library: asClass(Library).singleton()
});

module.exports = container;

