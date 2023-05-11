

class Book {
  constructor(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  // add & remove books
  addBook(book) {
    this.books.push(book);
  }
  removeBook(bookTitle){
    this.books = this.books.filter(book => book.title !== bookTitle)
  }

// find & toggle Title
  findBookTitle(bookTitle){
    return this.books.find(book => book.title === bookTitle)
  }
  toggleReadStatus(bookTitle){
    const book = this.findBookTitle(bookTitle)
    book.isRead = !book.isRead
  }

  listAllBooks() {
    console.log('List of all books in the library:');
    this.books.forEach((book) => {
      console.log(
        `- ${book.title} by ${book.author} (${book.pages} pages) - ${
          book.isRead ? 'Read' : 'Unread' } `,
      );
    });
  }
}

// створення екземпляру Library
const mylibrary = new Library();

mylibrary.addBook(new Book('1984', 'Orwell', 350, true));
mylibrary.addBook(new Book('Sea wolf', 'D.London', 450, false))

mylibrary.listAllBooks();

mylibrary.toggleReadStatus('Sea wolf')

// mylibrary.removeBook('1984')

mylibrary.listAllBooks();
