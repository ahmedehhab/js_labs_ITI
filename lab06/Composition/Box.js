import { Book } from './Book.js';
export class Box {
    #height; #width; #length; #material; #content;

    constructor(height, width, length, material) {
        this.#height = height;
        this.#width = width;
        this.#length = length;
        this.#material = material;
        this.#content = []; // The array of book objects
    }

    addBook(title, chapters, author, pages, publisher, copies) {
        const newBook = new Book(title, chapters, author, pages, publisher, copies);
        this.#content.push(newBook);
    }

    get numOfBooks() {
        return this.#content.length;
    }

    deleteBook(title) {
        this.#content = this.#content.filter(book => book.title !== title);
    }

    toString() {
        const volume = this.#height * this.#width * this.#length;
        return `Box (${this.#material}): ${this.#height}x${this.#width}x${this.#length} (vol: ${volume}). ` +
               `currently stores ${this.numOfBooks} books in the content array`;
    }

    valueOf() {
        return this.numOfBooks;
    }
}