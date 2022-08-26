console.log("Library of books")



let myLibrary = [];

function Book(authorName, title, numberOfPages, ifRead) {
    this.authorName = authorName
    this.title = title
    this.ifRead = ifRead
    this.numberOfPages = numberOfPages;
    this.info = function () {
        return `${ifRead}...this has been read`
    }
}

function addBookToLibrary() {
   
    
   let x= document.getElementsByTagName('form')[0].childNodes[4].value;
   console.log(x);

  
}
// addBookToLibrary()

