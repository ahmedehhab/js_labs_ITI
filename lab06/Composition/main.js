import { Box } from "./Box.js";

const box1 = new Box(10, 20, 15, 'Cardboard',);
box1.addBook('javaScript basics', 12, 'Ahmed ehab', 250, ' A', 5);
box1.addBook('advanced JS', 15, 'ahmed ehab', 300, ' B', 3);

console.log(box1.toString()); 
console.log(`number of books in box1: ${box1.numOfBooks}`);

box1.deleteBook('javaScript basics');
console.log(`number of books in box1: ${box1.numOfBooks}`); 

