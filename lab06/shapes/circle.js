import {Shape} from "./shape.js";    
export  class Circle extends Shape {
    #radius;
    constructor(radius) {
        super();
        this.#radius = radius;
    }

    calcArea() {
        return Math.PI * Math.pow(this.#radius, 2);
    }

    calcPerimeter() {
        return 2 * Math.PI * this.#radius;
    }
}