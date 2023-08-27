import { log } from "console";
class Shape {
    info(): string {
        return "This is a Shape"
    }
    draw() {
        console.log('drawing a shape');
    }
}

class Rectangle extends Shape{
    width: number;
    hight: number;

    constructor(width: number, hight:number ){
        super()
        this.width = width;
        this.hight = hight;
    }
    area():void {
        this.hight * this.width
    }
    info(): string {
        return "This is a Recktangle"
    }
}

class Square extends Rectangle {
    constructor(width: number){
        super(width,width)
    }
    area(): number {
       return this.width**2
    }
}

class ColoredRectangle extends Rectangle {
    color: string;
    constructor(width: number, hight: number, color: string){
        super(width, hight)
        this.color = color
    }
    info(): string {
        return "this is a rectengle in color : " + this.color;
    }
}


class Circle extends Shape {
    draw() {
        console.log('drawing a circle');
    }
}

class Triangle extends Shape {
    draw() {
        console.log('drawing a triangle');
    }
}

class Square1 extends Shape {
    draw() {
        console.log('drawing a square');
    }
}

function renderShapes(shapes: Shape[]) {
    for (const shape of shapes) {
        shape.draw();
    }
}

const shapesArray: Shape[] = [new Circle(), new Triangle(), new Square1()];
renderShapes(shapesArray);


// let shape = new Shape()
// let infoShape = shape.info()
// console.log(infoShape);
// let rec = new Rectangle (2,3)
// console.log(rec)
// let recInfo = rec.info()
// console.log(recInfo)
// let square = new Square(3)
// let sh = square.area()
// console.log(square)
// console.log(sh);
// let coloredRec = new ColoredRectangle(3,4,"red") 
// let coloredRecInfo = coloredRec.info()
// console.log(coloredRecInfo);




    
