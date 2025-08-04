function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1').then(
        (response) => {
            if (!response.ok) {
                throw new Error('Помилка при отриманні TODO');
            }
            return response.json();
        }
    );
}

function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1').then(
        (response) => {
            if (!response.ok) {
                throw new Error('Помилка при отриманні USER');
            }
            return response.json();
        }
    );
}

Promise.all([fetchTodo(), fetchUser()])
    .then(([todo, user]) => {
        console.log('Результат Promise.all:');
        console.log('Todo:', todo);
        console.log('User:', user);
    })
    .catch((error) => {
        console.error('Помилка при Promise.all:', error.message);
    });

Promise.race([fetchTodo(), fetchUser()])
    .then((result) => {
        console.log('Результат Promise.race:');
        console.log(result);
    })
    .catch((error) => {
        console.error('Помилка при Promise.race:', error.message);
    });
