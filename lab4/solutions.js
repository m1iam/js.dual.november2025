// Завдання 1
function unicFn(initialArray) {
  let result = [];
  for (let i = 0; i < initialArray.length; i++) {
    if (!result.includes(initialArray[i])) {
      result.push(initialArray[i]);
    }
  }
  console.log(result);
}

unicFn([2, 3, 1, 3, 3, 7]);
unicFn(["a", "b", "a", "c"]);

// Завдання 2
function isEvenArray(initialArray) {
  for (let i = 0; i < initialArray.length; i++) {
    if (initialArray[i] % 2 !== 0) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}

isEvenArray([1, 2, 3, 9]);
isEvenArray([2, 4, 6]);

// Завдання 3
function filterArray(initialArray) {
  let result = [];
  for (let i = 0; i < initialArray.length; i++) {
    if (typeof initialArray[i] === 'string' && initialArray[i] !== '') {
      result.push(initialArray[i]);
    }
  }
  console.log(result);
}

filterArray([2, "string", 3, "", "test"]);
filterArray(["hi", null, 5, "bye"]);

// Завдання 4
function findUser(initialObject) {
  let result = [];
  for (let name in initialObject) {
    let person = initialObject[name];
    if (person.city === "London" && person.age > 18) {
      result.push(name);
    }
  }
  console.log(result);
}

findUser({
  Max: { age: 23, city: "London" },
  Mike: { age: 20, city: "NY" },
  Anna: { age: 17, city: "London" },
});

// Завдання 5
function removeObj(arrayOfObj, keyName, value) {
  let result = [];
  for (let i = 0; i < arrayOfObj.length; i++) {
    if (arrayOfObj[i][keyName] !== value) {
      result.push(arrayOfObj[i]);
    }
  }
  console.log(result);
}

const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
removeObj(arr, "age", 2);
removeObj(arr, "year", 2);
