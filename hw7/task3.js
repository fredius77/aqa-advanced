function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Аргументи мають бути числами");
    }

    if (denominator === 0) {
        throw new Error("Ділення на 0 неможливе");
    }

    return numerator / denominator;
}


try {
    console.log("Результат:", divide(10, 2));
} catch (error) {
    console.error("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log("Результат:", divide(10, 0));
} catch (error) {
    console.error("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}

try {
    console.log("Результат:", divide("abc", 5));
} catch (error) {
    console.error("Помилка:", error.message);
} finally {
    console.log("Робота завершена");
}
