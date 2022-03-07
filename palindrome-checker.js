function palindrome(str) {
  let arr = str.split("");
  //console.log(arr);
  arr = arr.map(letter => letter.toLowerCase());
  let alphaNum = /[a-z]|[0-9]/;
  arr = arr.filter(el => alphaNum.test(el));
  //console.log(arr);
  let i = 0;
  let j = arr.length - 1;
  while (i < j && j > i) {
    if (arr[i] != arr[j]) return false;
    i++;
    j--;
  }
  /*if (arr.length % 2 === 0) {
    while (i < arr.length / 2 && j > arr.length / 2 - 1) {
      if (arr[i] != arr[j]) return false;
      i++;
      j--;
    }
  } else {
    while (i < (arr.length - 1) / 2 && j > (arr.length - 1) / 2) {
      if (arr[i] != arr[j]) return false;
      i++;
      j--;
    }
  }*/
  return true;
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("1 eye for of 1 eye.")); 