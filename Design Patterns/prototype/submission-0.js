class Shape {
    /**
     * @return {Shape}
     */
    clone() {
       return this;
    }
}

/**
 * @param {number} width
 * @param {number} height
 * @return {Rectangle}
 */
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    /**
     * @return {number}
     */
    getWidth() {
        return this.width;
    }

    /**
     * @return {number}
     */
    getHeight() {
        return this.height;
    }

    /**
     * @return {Shape}
     */
    clone() {
        // Write your code here
        const h = this.getHeight();
        const w = this.getWidth();
        const rectangle = new Rectangle(w,h);
        return rectangle;
    }
}

/**
 * @param {number} length
 * @return {Square}
 */
class Square extends Shape {
    constructor(length) {
        super();
        this.length = length;
    }

    /**
     * @return {number}
     */
    getLength() {
        return this.length;
    }

    /**
     * @return {Shape}
     */
    clone() {
        // Write your code here
        const l = this.getLength();
        const sq = new Square(l);
        return sq;
    }
}

class Test {
    /**
     * @param {Shape[]} shapes
     * @return {Shape[]}
     */
    cloneShapes(shapes) {
        // Write your code here
        const clonedarr = []
        for(let shape of shapes){
            clonedarr.push(shape.clone());
        }
        return clonedarr;
    }
}
