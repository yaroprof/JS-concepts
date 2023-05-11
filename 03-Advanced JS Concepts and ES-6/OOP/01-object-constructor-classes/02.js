class Book{
  constructor(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages; 
    this.isRead = isRead
  }
  myLibrary(){
    console.log(`This book is ${this.title} by ${this.author} with ${this.pages} pages `);
  }
}

const book1 = new Book(' 1984 ', ' D.Orwel ', 350)
book1.myLibrary()