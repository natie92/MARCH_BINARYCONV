const convertToBase10 = str =>
    str.startsWith("0x") ? parseInt(str) : parseInt(str.substring(2), 2);


console.log(convertToBase10("0b1010"));
console.log(convertToBase10("0b0011"));
