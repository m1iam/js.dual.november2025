function createStepCounter() {
  let steps = 0;
  
  return {
    step() {
      steps++;
    },
    getSteps() {
      return steps;
    }
  };
}

const counter1 = createStepCounter();
counter1.step();
counter1.step();
counter1.step();
console.log(counter1.getSteps());

const counter2 = createStepCounter();
counter2.step();
console.log(counter2.getSteps());

function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      console.log(`Внесено: ${amount}. Баланс: ${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log(`Недостатньо коштів! Баланс: ${balance}`);
      } else {
        balance -= amount;
        console.log(`Знято: ${amount}. Баланс: ${balance}`);
      }
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(200);
account.withdraw(2000);
console.log(`Поточний баланс: ${account.getBalance()}`);

function createGreeter(name) {
  return function() {
    console.log(`Привіт, ${name}!`);
  };
}

const greetOlya = createGreeter("Оля");
greetOlya();

const greetMax = createGreeter("Максим");
greetMax();

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
