class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this._fileFormat = fileFormat;
    }

    // Геттер і сеттер для fileFormat
    get fileFormat() { return this._fileFormat; }
    set fileFormat(value) {
        if (typeof value !== 'string' || value.trim() === '') throw new Error('Невірний формат файлу');
        this._fileFormat = value;
    }

    printInfo() {
        super.printInfo();
        console.log(`Формат файлу: ${this.fileFormat}`);
    }

    static createFromBook(bookInstance, fileFormat) {
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}

const book1 = new Book("Майстер і Маргарита", "М. Булгаков", 1967);
const book2 = new Book("Тіні забутих предків", "М. Коцюбинський", 1911);
const ebook1 = new EBook("1984", "Дж. Орвелл", 1949, "PDF");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

// Використання геттерів і сеттерів
book1.title = "Новий заголовок";
console.log("Оновлена назва:", book1.title);

// Знаходимо найдавнішу книгу
const allBooks = [book1, book2, ebook1];
const oldest = Book.getOldestBook(allBooks);
console.log("Найдавніша книга:");
oldest.printInfo();
// Створення EBook з Book
const convertedEBook = EBook.createFromBook(book2, "EPUB");
convertedEBook.printInfo();