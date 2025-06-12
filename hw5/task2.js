let number = 7;
// for
console.log(`Таблиця множення для числа ${number} (for):`);

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}
// while
console.log(`\nТаблиця множення для числа ${number} (while):`);

let i = 1;
while (i <= 10) {
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
}
