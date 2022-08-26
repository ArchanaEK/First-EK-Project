// function Book(authorName, title, numberOfPages, ifRead) {
//     this.authorName = authorName
//     this.title = title
//     this.ifRead =ifRead
//     this.numberOfPages=numberOfPages;

//     this.info=function(){
//         return `${ifRead}...this has been read`
//     }
// }


  
//   const book1 = new Book('steve', 'paradox','19',"yes")
//   const book2 = new Book('jhon steve', 'constant','836','no');
//   console.log(book2.info())
//  console.log(book1.authorName);
//  console.log(book2.ifRead);
//  console.log(book1.title);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 const myDate = new Date();
let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

// Date.prototype
// Object { }
// null
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Student() {
}

Student.prototype.sayName = function() {
  console.log(this.name)
}


function EighthGrader(name) {
  this.name = name
  this.grade = 8
}

// don't do this!!!
EighthGrader.prototype = Object.create(Student.prototype)

function NinthGrader(name) {
  this.name = name
  this.grade = 9
}

// // noooo! not again!
NinthGrader.prototype = Object.create(Student.prototype)

NinthGrader.prototype.sayName = function() {console.log("HAHAHAHAHAHA")}

const carl = new NinthGrader("carl")
// console.log(carl.sayName())
carl.sayName() //uh oh! this logs "HAHAHAHAHAHA" because we edited the sayName function!