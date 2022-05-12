let myLibrary=[];

function Book(title, author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(title, author,pages,read){
    let book= new Book(title, author,pages,read);
    myLibrary.push(book);
}

function displayLibrary(){
    //TODO change it to 
    myLibrary.forEach(book=>console.log(book.title,book.author,book.pages,book.read))
}

function getCard(book){
    const card=document.createElement("div");
}

const newBookBtn= document.getElementById("newBookBtn");
const bookContainer=document.getElementById("bookContainer");

newBookBtn.addEventListener("click",function(){
    //pop up form
    //addBookToLibrary(data from the form);
    //displayLibrary();
})

addBookToLibrary("a","b",1,false);
addBookToLibrary("a","b",1,true);
displayLibrary();