'use strict'
const ps = require('prompt-sync')
const prompt = ps({ sigint: true })
const container = require('./container');
const library = container.resolve('library');

// library.addBook('abc', 'def', 'regular');
// library.addBook('Advanced Node.js', 'Jane Smith', 'premium');
// library.addBook('Global Algorithms', 'Alan Turing', 'global');

// library.displayBooks('regular');
console.log("Welcome in library managment system")
let isStart=true;
while(isStart){
    console.log("press r if u  are new here");
    console.log("press l if u want to login");
    const value=prompt();
    console.log(value);;
}
