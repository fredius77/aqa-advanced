const car1 = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

const car2 = {
    brand: "Honda",
    model: "Civic",
    owner: "Олексій"
};


const car3 = {
    ...car1,
    ...car2
};

console.log("Об'єкт car3:", car3);
