// Завдання 1
const user = {
  name: "Сергій",
  age: 30,
  greet() {
    console.log(`Привіт, мене звати ${this.name} і мені ${this.age} років.`);
  },
};

user.greet();

let greetUser = user.greet;

greetUser = user.greet.bind(user);
greetUser();

// Завдання 2
function introduce() {
  console.log(`Мене звуть ${this.name}, вік ${this.age}`);
}

const person = {
  name: "Тетяна",
  age: 28,
};

introduce.call(person);

// Завдання 3
function showFullNameAndCity(surname, city) {
  console.log(`${this.name} ${surname} з міста ${city}`);
}

const user2 = {
  name: "Андрій",
};

showFullNameAndCity.apply(user2, ["Іваненко", "Львів"]);

// Завдання 4
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(10));
console.log(triple(10));

// Завдання 5
const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log(`Збільшено: ${this.count}`);
  },
  decrement() {
    this.count--;
    console.log(`Зменшено: ${this.count}`);
  },
  show() {
    console.log(`Поточне значення: ${this.count}`);
  },
};

counter.increment();
counter.increment();
counter.increment();
counter.show();

let inc = counter.increment.bind(counter);
inc();
inc();
counter.show();


