const PI = 3.14;
interface Shape {
    area?: number;
    type: 'circle'| 'rectangle'| 'rightTriangle'| 'square';
}
interface Circle extends Shape {
    radius : number;
    type: 'circle';
}
interface Rectangle extends Shape {
    length: number;
    width: number;
    type: 'rectangle';
}
interface RightTriangle extends Shape {
    height: number;
    base: number;
    type : 'rightTriangle';
   
}
interface Square extends Shape {
    type : 'square';
    width: number;
}

const  getArea = (shape: Shape) => {
    switch (shape.type){
        case 'circle':
            return getCircleArea(shape as Circle);
            case 'rectangle':
                return getRectangleArea(shape as Rectangle)
                case 'rightTriangle':
                    return getRightTriangleArea(shape as RightTriangle)
                    case 'square':
                        return getSquareArea(shape as Square)
    }
};
const getCircleArea = (circle: Circle): number => {
    const {radius} = circle;
    return radius * radius * PI;
};
const getRectangleArea = (rectangle : Rectangle): number => {
    const {length, width} = rectangle;
    return length * width;
};
const getRightTriangleArea = (rightTriangle: RightTriangle): number => {
    const {height, base} = rightTriangle;
    return (base* height)/2;
};
const getSquareArea = (square: Square): number => {
    const {width} = square;
    return getRectangleArea({length:width, type: 'rectangle', width});
};
const circle: Circle  = {radius: 4, type: 'circle'};
console.log({...circle, area: getCircleArea(circle)});

const rectangle: Rectangle  = {length: 7, width: 4, type:'rectangle'};
console.log({...rectangle, area: getRectangleArea(rectangle)});

const rightTriangle: RightTriangle  = {base: 9, height: 4, type:'rightTriangle'};
console.log({...rightTriangle, area: getRightTriangleArea(rightTriangle)});

const square: Square  = {width: 5, type: 'square'};
console.log({...square, area: getSquareArea(square)});



