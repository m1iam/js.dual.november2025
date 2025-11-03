// Запитуємо ім'я та вік
let userName = prompt("Введіть ваше ім'я:");
let userAge = prompt("Введіть ваш вік:");

// Створюємо об'єкт
let user = {
    name: userName,
    age: Number(userAge) // перетворюємо в число
};

// Виводимо в консоль
console.log(`Ім'я: ${user.name}, вік: ${user.age}`);

// Перевірка віку
if (user.age < 18) {
    console.log("Доступ заборонено");
} else {
    console.log("Доступ дозволено");
}
