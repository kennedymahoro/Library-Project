
let Main_Content:HTMLElement = document.querySelector("data-MainContent") as HTMLElement;
const Input_Book:HTMLInputElement = document.querySelector("data-inputBook") as HTMLInputElement;
const Input_Author:HTMLInputElement = document.querySelector("data-inputAuthor") as HTMLInputElement;
const Input_Page:HTMLInputElement = document.querySelector("data-inputPage") as HTMLInputElement;
const Input_Read_Checkbox:HTMLInputElement = document.querySelector("data-checkbox") as HTMLInputElement;
const EnterBtn:HTMLButtonElement = document.querySelector("data-enterBTN") as HTMLButtonElement;
class NewElement{
    Author:string
    Book:string
    Read:string
    Page:number
    constructor(Author:string,Book:string,Read:string,Page:number){
        this.Author = Author;
        this.Book = Book;
        this.Read = Read;
        this.Page = Page;
    }
    GetElement():string{
        return
        `<div class="CreatedElement" data-createdElement>
            <div class="CE_Author" data-CEAuthor>${this.Author}</div>
            <div class="CE_Book" data-CEBook>${this.Book}</div>
            <div class="CE_Page" data-CEPage>${this.Page} pages</div>
            <input type="checkbox" class="CE_Read" data-CERead disabled="disabled" checked="${this.Read}>
            <button class="CE_Button" data-Delete>Delete</button>
        </div>
        `
    }
}

EnterBtn.addEventListener('click',():void=>{
    alert("Hello")
    const BookValue:string = Input_Book.value;
    const AuthorValue:string = Input_Author.value;
    const PageValue:number = Number(Input_Page.value);
    const ReadValue:string = Input_Read_Checkbox.value;

    const CreatedElement = new NewElement(AuthorValue,BookValue,ReadValue,PageValue);
    //CreatedElement.GetElement(AuthorValue,BookValue,PageValue,ReadValue)
    //Main_Content.innerHTML = CreatedElement.GetElement()
    alert(CreatedElement.GetElement())
})
