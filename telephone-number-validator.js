/* * * * * * * 
* Questi esempi devono restituire true
* 555-555-5555
* (555)555-5555
* (555) 555-5555
* 555 555 5555
* 5555555555
* 1 555 555 5555
*
* * * * */

function checkNumber(str) {
    let validFormat = /^1?\s?\d{3}[-\s]?\d{3}[-\s]?\d{4}$|^1?\s?\({1}\d{3}\){1}[-\s]?\d{3}[-\s]?\d{4}$/;
    return validFormat.test(str);
}

console.log(checkNumber("1 555-555-5555"));
console.log(checkNumber("555-5555"));
console.log(checkNumber("5555555"));
console.log(checkNumber("1 555)555-5555"));
console.log(checkNumber("123**&!!asdf#"));
console.log(checkNumber("(6054756961)"));
console.log(checkNumber("2 (757) 622-7382"));
console.log(checkNumber("-1 (757) 622-7382"));
console.log(checkNumber("2 757 622-7382"));
console.log(checkNumber("11 555-555-5555"));
console.log(checkNumber("6054756961")); //true!
console.log(checkNumber("76054756961)"));