// Завдання 1
function myIncludes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(myIncludes([1, 2, 3], 2));
console.log(myIncludes([1, 2, 3], 5));

// Завдання 2
let user = {};
user.name = "Соломія";
user.surname = "Мостова";
user.name = "Артем :)";
delete user.name;

// Завдання 3
let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert('2,3');
    break;
}

// Завдання 4
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let schedule = {};
alert(isEmpty(schedule));
schedule["8:30"] = "Вставай";
alert(isEmpty(schedule));

// Завдання 5
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2], [3, 4]));
console.log(mergeArrays(['a', 'b'], ['c']));

// Завдання 6
function myJoin(arr, separator = ",") {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    if (i < arr.length - 1) {
      result += separator;
    }
  }
  return result;
}

console.log(myJoin([1, 2, 3], "-"));
console.log(myJoin(["Hello", "world"], " "));
console.log(myJoin(["a", "b", "c"]));
