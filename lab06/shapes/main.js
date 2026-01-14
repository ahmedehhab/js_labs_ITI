import {Circle} from "./circle.js";
import {Rectangle} from "./Rectangle.js";
import {Square} from "./Square.js";


try {
    const myRectangle = new Rectangle(4, 5);
    console.log("area of Rectangle", myRectangle.calcArea());
    console.log("perimeter of Rectangle", myRectangle.calcPerimeter());
    console.log(myRectangle.toString());

    const anotherRectangle = new Rectangle(6, 7);
} catch (error) {
    console.error(error.message);
}


try{
    const mySquare = new Square(4);
    console.log("area of Square", mySquare.calcArea());
    console.log("perimeter of Square", mySquare.calcPerimeter());
    console.log(mySquare.toString());

    const anotherSquare = new Square(5);

}catch (error) {
    console.error(error.message);
}

const myCircle = new Circle(5);
console.log("area of Circle", myCircle.calcArea());
console.log("perimeter of Circle", myCircle.calcPerimeter());
console.log(myCircle.toString());

