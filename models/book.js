class Book{
    constructor(title,author){
        this.title=title;
        this.author=author;
        this.type='regular'
    }
}
class PremiumBook extends Book{
    constructor(title,author){
        super(title,author);
        this.type='premium'
    }

}
class GlobalBook extends Book{
    constructor(title,author){
        super(title,author);
        this.type='global'
    }
}
module.exports={Book,PremiumBook,GlobalBook}