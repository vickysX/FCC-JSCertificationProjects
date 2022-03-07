function convertToRoman(num) {
    let arr = [];
    if (num === 1 || num === 4 || num === 5 || num === 9 || num === 10 || num === 40 || num === 50 || num === 90 || num === 100 || num === 400 || num === 500 || num === 900 || num === 1000) {
        arr.push(num);
    } else if (num > 1 && num < 10 && num != 4 && num != 5 && num != 9) {
        if (num > 1 && num < 4) {
            for (let i = 0; i < num; i++) {
                arr.push(1);
            }
        } else if (num > 5 && num < 9) {
            arr.push(5);
            for (let i = 0; i < num - 5; i++) {
                arr.push(1);
            }
        }
    } else if (num > 10 && num < 100) {
        let tens = num - num % 10;
        if (tens > 10 && tens < 40) {
            for (let i = 0; i < tens / 10; i++) {
                arr.push(10);
            }
        } else if (tens > 50 && tens < 90) {
            arr.push(50);
            for (let i = 0; i < (tens - 50) / 10; i++) {
                arr.push(10);
            }
        } else if (tens === 10 || tens === 40 || tens === 50 || tens === 90) {
            arr.push(tens);
        }
        let units = num % 10;
        if (units > 1 && units < 4) {
            for (let i = 0; i < units; i++) {
                arr.push(1);
            }
        } else if (units > 5 && units < 9) {
            arr.push(5);
            for (let i = 0; i < units - 5; i++) {
                arr.push(1);
            }
        } else if (units === 1 || units === 4 || units === 5 || units === 9) {
            arr.push(units);
        }
    } else if (num > 100 && num < 1000) {
        let hundreds = num - num % 100;
        if (hundreds > 100 && hundreds < 400) {
            for (let i = 0; i < hundreds / 100; i++) {
                arr.push(100);
            }
        } else if (hundreds > 500 & hundreds < 900) {
            arr.push(500);
            for (let i = 0; i < (hundreds - 500) / 100; i++) {
                arr.push(100);
            }
        } else if (hundreds === 100 || hundreds === 400 || hundreds === 500 || hundreds === 900) {
            arr.push(hundreds);
        }
        let tens = num % 100 - num % 10;
        if (tens > 10 && tens < 40) {
            for (let i = 0; i < tens / 10; i++) {
                arr.push(10);
            }
        } else if (tens > 50 && tens < 90) {
            arr.push(50);
            for (let i = 0; i < (tens - 50) / 10; i++) {
                arr.push(10);
            }
        } else if (tens === 10 || tens === 40 || tens === 50 || tens === 90) {
            arr.push(tens);
        }
        let units = num % 10;
        if (units > 1 && units < 4) {
            for (let i = 0; i < units; i++) {
                arr.push(1);
            }
        } else if (units > 5 && units < 9) {
            arr.push(5);
            for (let i = 0; i < units - 5; i++) {
                arr.push(1);
            }
        } else if (units === 1 || units === 4 || units === 5 || units === 9) {
            arr.push(units);
        }
    } else if (num > 1000) {
        let thousands = num - num % 1000;
        if (thousands > 1000 && thousands < 4000) {
            for (let i = 0; i < thousands / 1000; i++) {
                arr.push(1000);
            }
        } else if (thousands === 1000) {
            arr.push(thousands);
        }
        let hundreds = num % 1000 - num % 100;
        if (hundreds > 100 && hundreds < 400) {
            for (let i = 0; i < hundreds / 100; i++) {
                arr.push(100);
            }
        } else if (hundreds > 500 & hundreds < 900) {
            arr.push(500);
            for (let i = 0; i < (hundreds - 500) / 100; i++) {
                arr.push(100);
            }
        } else if (hundreds === 100 || hundreds === 400 || hundreds === 500 || hundreds === 900) {
            arr.push(hundreds);
        }
        let tens = num % 100 - num % 10;
        if (tens > 10 && tens < 40) {
            for (let i = 0; i < tens / 10; i++) {
                arr.push(10);
            }
        } else if (tens > 50 && tens < 90) {
            arr.push(50);
            for (let i = 0; i < (tens - 50) / 10; i++) {
                arr.push(10);
            }
        } else if (tens === 10 || tens === 40 || tens === 50 || tens === 90) {
            arr.push(tens);
        }
        let units = num % 10;
        if (units > 1 && units < 4) {
            for (let i = 0; i < units; i++) {
                arr.push(1);
            }
        } else if (units > 5 && units < 9) {
            arr.push(5);
            for (let i = 0; i < units - 5; i++) {
                arr.push(1);
            }
        } else if (units === 1 || units === 4 || units === 5 || units === 9) {
            arr.push(units);
        }
    }
    console.log(arr);
    let romNum;
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case 1:
                arr[i] = "I";
                break;
            case 4:
                arr[i] = "IV";
                break;    
            case 5:
                arr[i] = "V";
                break;
            case 9:
                arr[i] = "IX";
                break;
            case 10:
                arr[i] = "X";
                break;
            case 40:
                arr[i] = "XL";
                break;
            case 50:
                arr[i] = "L";
                break;
            case 90:
                arr[i] = "XC";
                break;
            case 100:
                arr[i] = "C";
                break;
            case 400:
                arr[i] = "CD";
                break;
            case 500:
                arr[i] = "D";
                break;
            case 900:
                arr[i] = "CM";
                break;
            case 1000:
                arr[i] = "M";
                break;
        }
    }
    romNum = arr.join("");
    return romNum;
}
  
console.log(convertToRoman(7));
console.log(convertToRoman(36));
console.log(convertToRoman(100));
console.log(convertToRoman(649));
console.log(convertToRoman(1006));
console.log(convertToRoman(798));
console.log(convertToRoman(97));
console.log(convertToRoman(68));
console.log(convertToRoman(16));
console.log(convertToRoman(5));
console.log(convertToRoman(189));
