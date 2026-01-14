const arr=["apple","strawberry","banana","orange","mango"];

let isString=arr.every(el=>typeof el =="string");
console.log(isString);

let startWithA=arr.some(el=>el.startsWith('a'));
console.log(startWithA);

let newArray=arr.filter(el=>el.startsWith('b')||el.startsWith('s'));
console.log(newArray);

let likeFruite= arr.map(el=>`i like ${el}`);
console.log(likeFruite);