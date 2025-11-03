function calculateWordsInString(string) {
  let count = 0;
  let inWord = false;
  
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      if (!inWord) {
        count++;
        inWord = true;
      }
    } else {
      inWord = false;
    }
  }
  
  console.log(count);
}
console.log('Завдання 4');
calculateWordsInString("Easy string for count");
calculateWordsInString("Easy");
calculateWordsInString("Some string with a triple   space");
calculateWordsInString("Some?  string, with a triple   space");
