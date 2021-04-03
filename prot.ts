abstract class Shape {
    x:number;
    y:number;
    color:string;

    constructor (x:number, y:number,color:string) {
        this.x=x;
        this.y=y;
        this.color=color;
    }
    abstract clone():Shape;
}

class Rectangle extends Shape {
    width:number;
    height:number;

    constructor (x:number, y:number, color:string, width:number, height:number) {
        super(x,y,color);
        this.width=width;
        this.height=height;
    }    
    area():number {
        return this.width * this.height;
    }
    makeLong():void {
        this.width *=2;
    }
    clone():Rectangle {
        return new Rectangle (this.x, this.y, this.color, this.width, this.height);
    }
}

class Circle extends Shape {
    radius:number;
    
    constructor (x:number, y:number, color:string, radius:number) {
        super(x,y,color);
        this.radius=radius;
    }
    area():number {
        return this.radius**2 * 3.14;
    }
    makeBig(rate:number):void {
        this.radius *= rate;
    }
    clone():Circle {
        return new Circle (this.x, this.y, this.color, this.radius);
    }
}

//дальше всякие тесты
let r1 = new Rectangle(1,1,"red",5,7);
alert(r1.area());
r1.makeLong();
alert(r1.area());
let r1clone = r1.clone();
alert(r1clone.area());
r1clone.makeLong();
alert(r1.area());
alert(r1clone.area());
