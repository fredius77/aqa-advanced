async function fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (!response.ok) {
        throw new Error('Помилка при отриманні TODO');
    }
    return await response.json();
}

async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) {
        throw new Error('Помилка при отриманні USER');
    }
    return await response.json();
}

async function handleAll() {
    try {
        const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
        console.log("Результат Promise.all:");
        console.log("Todo:", todo);
        console.log("User:", user);
    } catch (error) {
        console.error("Помилка при Promise.all:", error.message);
    }
}

async function handleRace() {
    try {
        const result = await Promise.race([fetchTodo(), fetchUser()]);
        console.log("Результат Promise.race:");
        console.log(result);
    } catch (error) {
        console.error("Помилка при Promise.race:", error.message);
    }
}

handleAll();
handleRace();
