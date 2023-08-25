interface Book {
    author: string;
    title: string;
    pages?: number;
    isRead?: boolean;

}
function showBook(book: Book){
    console.log(`${book.author} wrote ${book.title}`);
    if (book.isRead !== undefined){
        console.log(` i have ${book.isRead ? "read" : "not read"} this book`);

    }
}
function setPages(book: Book, pages: number){
    book.pages = pages;
}
function readBook(book: Book) {
    book.isRead = true;
}
const mobyDick: Book = {
    author: "Herman Melville",
    title: "Moby Dick",
}
const warAndPeace = {
    author: "Leo Tolstoy",
    title : "War and peace",
    isRead: false
}
setPages(warAndPeace, 1225);
showBook(warAndPeace);
showBook(mobyDick);
readBook(mobyDick);
