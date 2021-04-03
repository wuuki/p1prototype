"use strict";
class Shape {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}
class Rectangle extends Shape {
    constructor(x, y, color, width, height) {
        super(x, y, color);
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    makeLong() {
        this.width *= 2;
    }
    clone() {
        return new Rectangle(this.x, this.y, this.color, this.width, this.height);
    }
}
class Circle extends Shape {
    constructor(x, y, color, radius) {
        super(x, y, color);
        this.radius = radius;
    }
    area() {
        return this.radius ** 2 * 3.14;
    }
    makeBig(rate) {
        this.radius *= rate;
    }
    clone() {
        return new Circle(this.x, this.y, this.color, this.radius);
    }
}
//дальше всякие тесты
let r1 = new Rectangle(1, 1, "red", 5, 7);
alert(r1.area());
r1.makeLong();
alert(r1.area());
let r1clone = r1.clone();
alert(r1clone.area());
r1clone.makeLong();
alert(r1.area());
alert(r1clone.area());