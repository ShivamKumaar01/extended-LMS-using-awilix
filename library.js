class Library{
    constructor({bookService}){
        this.bookService = bookService;
    }
    addBook(title,author,type){
        return this.bookService.addBook(title,author,type);
    }
    deleteBook(){
        return this.bookService.deleteBook();
    }
    displayBooks(type){
        return this.bookService.displayBooks(type);
    }
}
module.exports=Library;