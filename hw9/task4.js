const person = {
    firstName: 'Андрій',
    lastName: 'Шевченко',
    age: 35
};

person.email = 'andriy.shevchenko@example.com';

delete person.age;

console.log('Оновлений об\'єкт person:', person);
