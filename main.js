function convertToRoman(num) {
 const romanNum = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
 };

  let number = '';
  for (let key in romanNum){
    while (num >= romanNum[key]){
      number += key;
      num -=romanNum[key];
    }
  }
 return number;
}

convertToRoman(36);
