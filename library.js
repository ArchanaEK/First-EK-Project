console.log("Library of books")


let myLibrary = [];

function Book(authorName, title, numberOfPages, ifRead) {
  this.authorName = authorName
  this.title = title
  this.ifRead = ifRead
  this.numberOfPages = numberOfPages;
}



function addBookToLibrary() {

  let name = document.getElementsByTagName('form')[0].childNodes[4].value;

  const bookObj = {
    name: name,

  }
  myLibrary.push(bookObj);
  console.log(myLibrary[0])

}

function generateTable() {
  console.log(myLibrary.length)
  var addItem = document.getElementById("table1")

  for (let i = 0; i < myLibrary.length; i++) {
    const row = document.createElement("tr");


    let tr1 = document.createElement('tr')
    let thtitle = document.createElement("td")
    let thAuthorName = document.createElement("td")
    let thNumberOfPages = document.createElement("td")
    let thIsRead = document.createElement('td');

    thtitle.textContent = myLibrary[0].name;
    thAuthorName.textContent = myLibrary[0].name;
    thNumberOfPages.textContent = myLibrary[0].name;
    thIsRead.textContent = myLibrary[0].name;


    tr1.appendChild(thtitle)
    tr1.appendChild(thAuthorName)
    tr1.appendChild(thNumberOfPages)
    tr1.appendChild(thIsRead)
    addItem.appendChild(tr1);


    var deleteBtn = document.createElement('button')
    var editBtn = document.createElement('button');
    editBtn.textContent = 'edit'
    tr1.appendChild(editBtn);
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    deleteBtn.innerHTML = 'X'
    deleteBtn.style.backgroundColor = 'yellow'
    tr1.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', removeItem);

    function removeItem() {
      addItem.removeChild(tr1)
    }

    editBtn.addEventListener('click', editItem);

    function editItem(data) {

      if (data.target.textContent == 'edit') {
        tr1.childNodes[0].contentEditable = 'true'
        tr1.childNodes[1].contentEditable = 'true'
        tr1.childNodes[2].contentEditable = 'true'
        data.target.textContent = 'save'
      } else {
        tr1.childNodes[0].contentEditable = 'false'
        tr1.childNodes[1].contentEditable = 'false'
        tr1.childNodes[2].contentEditable = 'false'

        data.target.textContent = 'edit'


      }
    }
  }
}