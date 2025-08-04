import { Book } from './Book.js'

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year)
        this.fileFormat = fileFormat
    }

    get fileFormat() {
        return this._fileFormat
    }
    set fileFormat(value) {
        if (typeof value !== 'string' || value.trim() === '')
            throw new Error('Невірний формат файлу')
        this._fileFormat = value
    }

    printInfo() {
        super.printInfo()
        console.log(`Формат файлу: ${this.fileFormat}`)
    }

    static createFromBook(book, fileFormat) {
        return new EBook(book.title, book.author, book.year, fileFormat)
    }
}
