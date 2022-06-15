var Main_Content = document.querySelector("data-MainContent");
var Input_Book = document.querySelector("data-inputBook");
var Input_Author = document.querySelector("data-inputAuthor");
var Input_Page = document.querySelector("data-inputPage");
var Input_Read_Checkbox = document.querySelector("data-checkbox");
var EnterBtn = document.querySelector("data-enterBTN");
var NewElement = /** @class */ (function () {
    function NewElement(Author, Book, Read, Page) {
        this.Author = Author;
        this.Book = Book;
        this.Read = Read;
        this.Page = Page;
    }
    NewElement.prototype.GetElement = function () {
        return;
        "<div class=\"CreatedElement\" data-createdElement>\n            <div class=\"CE_Author\" data-CEAuthor>".concat(this.Author, "</div>\n            <div class=\"CE_Book\" data-CEBook>").concat(this.Book, "</div>\n            <div class=\"CE_Page\" data-CEPage>").concat(this.Page, " pages</div>\n            <input type=\"checkbox\" class=\"CE_Read\" data-CERead disabled=\"disabled\" checked=\"").concat(this.Read, ">\n            <button class=\"CE_Button\" data-Delete>Delete</button>\n        </div>\n        ");
    };
    return NewElement;
}());
EnterBtn.addEventListener('click', function () {
    alert("Hello");
    var BookValue = Input_Book.value;
    var AuthorValue = Input_Author.value;
    var PageValue = Number(Input_Page.value);
    var ReadValue = Input_Read_Checkbox.value;
    var CreatedElement = new NewElement(AuthorValue, BookValue, ReadValue, PageValue);
    //CreatedElement.GetElement(AuthorValue,BookValue,PageValue,ReadValue)
    //Main_Content.innerHTML = CreatedElement.GetElement()
    alert(CreatedElement.GetElement());
});
