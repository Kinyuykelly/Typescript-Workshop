"use strict";
function showBook(book) {
    console.log("".concat(book.author, " wrote ").concat(book.title));
    if (book.isRead !== undefined) {
        console.log(" i have ".concat(book.isRead ? "read" : "not read", " this book"));
    }
}
function setPages(book, pages) {
    book.pages = pages;
}
function readBook(book) {
    book.isRead = true;
}
var mobyDick = {
    author: "Herman Melville",
    title: "Moby Dick",
};
var warAndPeace = {
    author: "Leo Tolstoy",
    title: "War and peace",
    isRead: false
};
setPages(warAndPeace, 1225);
showBook(warAndPeace);
showBook(mobyDick);
readBook(mobyDick);
