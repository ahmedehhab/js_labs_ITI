import { Shape } from "./shape.js";

export class Rectangle extends Shape {
    #width;
    #height;
    static #rectangleInstanceCount = 0;
    constructor(width, height) {
        if(Rectangle.#rectangleInstanceCount >= 1){
            throw new Error("Only one instance of Rectangle is allowed.");
        }
        Rectangle.#rectangleInstanceCount+=1;
        super();
        this.#width = width;
        this.#height = height;
    }

    calcArea() {
        return this.#width * this.#height;
    }

    calcPerimeter() {
        return 2 * (this.#width + this.#height);
    }
}