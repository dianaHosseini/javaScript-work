"use strict"

// ----- Array of book object with properties: name (string), auther (string), pages (number), isRead (boolean)
const books = [
    { name: "Asshole No More", author: "Xavier Crement", pages: 100, isRead: false },
    { name: "The Whisper Man", author: "Alex North", pages: 310, isRead: true },
]

// ----- Function to display each book status using template strings
function BookLibrary(library) {
    for (let i = 0; i < books.length; i++) {
        const element = books[i];    

        // ----- Create message based on read status using ternary operator 
        let message = !element.isRead
        ? `${element.name} by ${element.author} has been read😍😍`
        : `${element.name} by ${element.author} is unread🙁🙁`

        console.log(message);
    }
}

// ----- Call function to show books
BookLibrary(books)