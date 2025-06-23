const firstArray = ['a', 'b', 'c'];
const secondArray = [1, 2, 3];

const mergedArray = [...firstArray, ...secondArray];


console.log('Перший масив:', firstArray);
console.log('Другий масив:', secondArray);
console.log('Об’єднаний масив:', mergedArray);

//2
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

const sortedList = [...numbersList].sort((a, b) => a - b);

console.log('Оригінальний numbersList:', numbersList);
console.log('Відсортований sortedList:', sortedList);