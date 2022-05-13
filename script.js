let myLibrary=[];
const newBookBtn= document.getElementById("newBookBtn");
const bookContainer=document.getElementById("bookContainer");
const form = document.getElementById("popUpForm");
const submitBtn= document.getElementById("submitBtn");
const titleInput=document.getElementById("title")
const authorInput=document.getElementById("author")
const pagesInput=document.getElementById("pages");
const readOptions=document.getElementsByName("read");
const cancelBtn=document.getElementById("cancelBtn");


function Book(title, author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(title, author,pages,read){
    let book= new Book(title, author,pages,read);
    myLibrary.push(book);
    const card=document.createElement("div");
    card.classList.add("card");
    bookContainer.appendChild(card);
}

function displayLibrary(){
}

function hideForm(){
    titleInput.value="";
    authorInput.value="";
    pagesInput.value=0;
    form.style.visibility="hidden";
}

newBookBtn.addEventListener("click",function(){
    form.style.visibility="visible";
})

submitBtn.addEventListener("click",function(){
    let title=titleInput.value;
    let author=authorInput.value;
    let pages=pagesInput.value;
    let read="no";
    for(option in readOptions){
        if(option.checked)
            read=option.value;
    }
    if(title!=""&&author!=""){
        addBookToLibrary(title,author,pages,read);
        hideForm();
    }
    displayLibrary();
})

cancelBtn.addEventListener("click",function(){
    hideForm();
})