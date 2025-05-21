
const container = require('./container');
const library = container.resolve('library');

library.addBook('abc', 'def', 'regular');
library.addBook('Advanced Node.js', 'Jane Smith', 'premium');
library.addBook('Global Algorithms', 'Alan Turing', 'global');

library.displayBooks('regular');
console.log('hellow')