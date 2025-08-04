const users = [
    { name: 'Олег', email: 'oleg@example.com', age: 25 },
    { name: 'Ірина', email: 'iryna@example.com', age: 30 },
    { name: 'Максим', email: 'max@example.com', age: 22 }
];

for (const { name, email, age } of users) {
    console.log('Ім\'я:', name);
    console.log('Email:', email);
    console.log('Вік:', age);
    console.log('-----');
}
