import { Book } from './Book.js';
import { EBook } from './Ebook.js';

const book1 = new Book("Майстер і Маргарита", "М. Булгаков", 1967);
const book2 = new Book("Тіні забутих предків", "М. Коцюбинський", 1911);
const ebook1 = new EBook("1984", "Дж. Орвелл", 1949, "PDF");

book1.printInfo();
book2.printInfo();
ebook1.printInfo();

// Геттери / сеттери
book1.title = "Новий заголовок";
console.log("Оновлена назва:", book1.title);

// Найстаріша книга
const allBooks = [book1, book2, ebook1];
const oldest = Book.getOldestBook(allBooks);
console.log("Найдавніша книга:");
oldest.printInfo();

// Створення EBook з Book
const convertedEBook = EBook.createFromBook(book2, "EPUB");
convertedEBook.printInfo();
