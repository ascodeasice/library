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
const readBtns=document.getElementsByClassName("readBtn");


class Book{
    constructor(title, author,pages,read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;
        }
}

function addBookToLibrary(title, author,pages,read){
    let book= new Book(title, author,pages,read);
    myLibrary.push(book);
}

function createText(text){
    const p=document.createElement("p");
    p.classList.add("cardText");
    p.innerText=text;
    return p;
}

function displayLibrary(){
    bookContainer.innerText="";
    for(let i=0;i<myLibrary.length;i++){
        const card=document.createElement("div");
        card.classList.add("card");

        //info of the card
        card.appendChild(createText("Title: "+myLibrary[i].title))
        card.appendChild(createText("Author: "+myLibrary[i].author))
        card.appendChild(createText("Pages: "+myLibrary[i].pages))
        card.appendChild(createText("Has read: "+myLibrary[i].read))

        //the button that change read status
        const readBtn=document.createElement("button");
        readBtn.classList.add("readBtn");
        readBtn.id="readBtn"+String(i);
        if(myLibrary[i].read=="yes")
            readBtn.innerText="Not read";
        else
            readBtn.innerText="Read";

        readBtn.addEventListener("click",function(){
            let index=readBtn.id.slice(-1);//last char of string
            myLibrary[index].read=(myLibrary[index].read=="yes"?"no":"yes");
            displayLibrary();
        })
    
        card.appendChild(readBtn)
        card.id="card"+ String(i);

        bookContainer.appendChild(card);
    }

    
}

function hideForm(){
    titleInput.value="";
    authorInput.value="";
    pagesInput.value=1;
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
    for(option of readOptions){
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
