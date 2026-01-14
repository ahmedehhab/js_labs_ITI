export  class Shape {
    static #count = 0;
    constructor() {
        if (new.target === Shape) {
            throw new Error("Cannot instantiate abstract class Shape directly.");
        }
        Shape.#count++;
    }
    static getCount() {
        return Shape.#count;
    }

    calcArea() { throw new Error("method  must be implemented"); }
    calcPerimeter() { throw new Error("method must be implemented"); }

    toString() {
        return `Area: ${this.calcArea().toFixed(2)}, Perimeter: ${this.calcPerimeter().toFixed(2)}`;
    }
}