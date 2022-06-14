
const Main_Content:HTMLDivElement = document.querySelector("data-content") as HTMLDivElement;
const Input_Book:HTMLInputElement = document.querySelector("data-inputBook") as HTMLInputElement;
const Input_Author:HTMLInputElement = document.querySelector("data-inputAuthor") as HTMLInputElement;
const Input_Page:HTMLInputElement = document.querySelector("data-inputPage") as HTMLInputElement;
const Input_Read_Checkbox:HTMLInputElement = document.querySelector("data-checkbox") as HTMLInputElement;

class NewElement{
    Author:string;
    Book:string;
    Page:number;
    Read:boolean;

    constructor(){
        this.Author;
        this.Book;
        this.Read;
        this.Page;
    }
    GetElement(){
        return
        `<div class="CreatedElement" data-createdElement>
            <div class="CE_Author" data-CEAuthor>${this.Author}</div>
            <div class="CE_Book" data-CEBook>${this.Book}</div>
            <div class="CE_Page" data-CEPage>${this.Page}</div>
            <input type="checkbox" class="CE_Read" data-CERead>${this.Read} pages</input>
            <button class="CE_Button" data-Delete>Delete</button>
        </div>
        
        `
    }
}
