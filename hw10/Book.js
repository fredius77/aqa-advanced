export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Геттери
    get title() { return this._title; }
    get author() { return this._author; }
    get year() { return this._year; }

    // Сеттери з валідацією
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') throw new Error('Невірна назва');
        this._title = value;
    }
    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') throw new Error('Невірний автор');
        this._author = value;
    }
    set year(value) {
        if (typeof value !== 'number' || value <= 0) throw new Error('Невірний рік');
        this._year = value;
    }

    printInfo() {
        console.log(`Назва: ${this.title}, Автор: ${this.author}, Рік: ${this.year}`);
    }

    static getOldestBook(books) {
        return books.reduce((oldest, book) => book.year < oldest.year ? book : oldest);
    }
}
