class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}
class Display {
    add(book) {
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
        <td>${book.name}</td>
        <td>${book.author}</td>
        <td>${book.type}</td>
    </tr>`;
        tableBody.innerHTML += uiString;
    }

    class() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();

    }
    validate(book) {
        if (book.name.lenght < 2 || book.author.lenght < 2) {
            return false;
        } else {
            return true;
        }
    }
    show(type, displayMessage) {
        let message = document.getElementById('message');
        let boldText
        if (type == "success") {
            boldText = "Success";
        } else {
            boldText = "Error";
        }
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
<strong>Message:</strong>${message}
<buttong type="button" class="closes"> date-dismiss="alert" aria-lable="close">
<span aria-hidden="true">&times;</span> 
        </button> 
        </div>`;
        setTimeout(function() {
            message.innerHTML = ""
        }, 5000);
    }
}
// Add submit event listner to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('sumbit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have sumbitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let fiction = document.getElementById('fiction').value;
    let fictionprograming = document.getElementById('fictionprograming').value;
    let cooking = document.getElementById('cooking').value;

    if (fiction.checked) {
        type = fiction.value;
    } else if (programing.checked) {
        type = programing.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', "You book has been successfully added");
    } else {
        display.show('damger', "Sorry you cannot add this book");
    }

    e.preventDefault();


}