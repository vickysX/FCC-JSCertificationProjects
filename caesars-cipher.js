function rot13(str) {
  let strArr = str.split(" ");
  console.log(strArr);
  strArr = strArr.map(word => word.split(""));
  console.log(strArr);
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      let regex = /\W/g;
      if (!regex.test(strArr[i][j])) {
        let conversion = strArr[i][j].charCodeAt(0);
        if (conversion - 13 < 65) {
          conversion += 13;
        } else {
          conversion -= 13;
        }
        strArr[i][j] = String.fromCharCode(conversion);
      }
    }
    strArr[i] = strArr[i].join("");
  }
  console.log(strArr);
  str = strArr.join(" ");
  console.log(str);
  return str;
}

rot13("SERR PBQR PNZC");
rot13("SERR YBIR?");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");