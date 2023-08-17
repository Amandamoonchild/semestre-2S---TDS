class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    getTitle() {
        return `O título do livro é ${this.title}
        `
    }
    getAuthor() {
        return `O/A autor (a) é ${this.author}
        `
    }
    getPages() {
        return `A quantidade de páginas é ${this.pages}
        `
    }
}

const Book1 = new Book('O mundo de Sofia', 'Jostain Gaarden', 568);