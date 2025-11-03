function printPowsOf2(number) {
  if (typeof number !== 'number' || number === null) {
    console.log("incorrect type");
    return;
  }

  let result = [];
  let pow = 1;
  
  while (pow <= number) {
    result.push(pow);
    pow = pow * 2;
  }
  
  console.log(result.join(', '));
}
console.log('Завдання 1');
printPowsOf2("302");
printPowsOf2(null);
printPowsOf2(128);
printPowsOf2(60);
