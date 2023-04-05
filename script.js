//Book Class model
class Book {
    constructor(title, author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


//UI class - display books
class UI{
    static displayBooks(){
        const StoredBooks = [
            {
                title: "Book One",
                author: "writer 1",
                isbn: "12312"
            },
            {
                title: "Book Two",
                author: "writer 2",
                isbn: "1232134"
            }
        ];

        //Iterating over the books to add and append these books to HTML
        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));   
    }

    static addBookToList(book){
        const list = document.querySelector("#book-list");
        const row= document.createElement('tr'); 

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class = "btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }
}

//Store Class


//Events: Display book
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Events: Display Book


//Event Listener - emove book

