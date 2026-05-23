

class Shape{
    constructor(color) {
        this.color = color;
    }

    paint() {
        console.log("painting with color " + this.color);
        
    }

    area() {
        throw new Error("override the area method")
    }
}


class Rectangle extends Shape{
    constructor(h, w, color) {
        super(color)
        this.h = h;
        this.w = w;
    }

    area() {
        return (this.h * this.w);
    }

    paint() {
        console.log("the color painted is like " , this.color);
        
    }

    static whoami() { // the static means we cant call it from obj, call it from the class
        console.log("i am rectangle");
        
    }
}

class Circle extends Shape {
    constructor(r, color) {
        super(color)
        this.r = r;
    }

    area() {
        return 3.14 * this.r * this.r;
    }

}























let r1 = new Rectangle(3, 4, "red")
const ans = r1.area()
console.log(ans);
r1.paint()

// Rectangle.whoami() // like this 

// this variable takes the shape of the curr obj