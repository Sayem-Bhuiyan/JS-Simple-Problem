function paperRequirments(book1, book2, book3){
    let book1Page = book1 * 100;
    let book2Page = book2 * 200;
    let book3Page = book3 * 300;
    let totalPage = book1Page + book2Page + book3Page;
    return totalPage;
}

const bookCopy = paperRequirments(2, 5, 4);
console.log(bookCopy);