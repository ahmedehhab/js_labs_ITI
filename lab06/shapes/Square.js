import { Shape } from "./shape.js";
export class Square extends Shape {
    static #squareInstanceCount = 0;
    #sideLength;
    constructor(sideLength) {
        if(Square.#squareInstanceCount >= 1){
            throw new Error("Only one instance of Square is allowed.");
        }
        Square.#squareInstanceCount+=1;
        super();
        this.#sideLength = sideLength;
    }

    calcArea() {
        return Math.pow(this.#sideLength, 2);
    }

    calcPerimeter() {
        return 4 * this.#sideLength;
    }
}   