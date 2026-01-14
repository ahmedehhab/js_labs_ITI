export class Book {
    #title;
    #numofChapters;
    #author;
    #numofPages;
    #publisher;
    #numofCopies;

    constructor(title, chapters, author, pages, publisher, copies) {
        this.#title = title;
        this.#numofChapters = chapters;
        this.#author = author;
        this.#numofPages = pages;
        this.#publisher = publisher;
        this.#numofCopies = copies;
    }

    get title() {
        return this.#title;
    }
}