function Book(authorName, title, numberOfPages, ifRead) {
    this.authorName = authorName
    this.title = title
    this.ifRead =ifRead
    this.numberOfPages=numberOfPages;
}

  
  const book1 = new Book('steve', 'paradox','19',"yes")
  const book2 = new Book('jhon steve', 'constant','836','no');
 console.log(book1.authorName);
 console.log(book2.ifRead);
 console.log(book1.title);