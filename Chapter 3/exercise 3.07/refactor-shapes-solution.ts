const PI = 3.14;
interface Shape {
  area?: number;
  type: "circle" | "rectangle" | "rightTriangle" | "square";
}
interface Circle extends Shape {
  radius: number;
  type: "circle";
}
interface Rectangle extends Shape {
  length: number;
  width: number;
  type: "rectangle";
}
interface RightTriangle extends Shape {
  height: number;
  base: number;
  type: "rightTriangle";
}
interface Square extends Shape {
  type: "square";
  width: number;
}

const getArea = (shape: Shape) => {
  switch (shape.type) {
    case "circle":
      return getCircleArea1(shape as Circle);
    case "rectangle":
      return getRectangleArea1(shape as Rectangle);
    case "rightTriangle":
      return getRightTriangleArea1(shape as RightTriangle);
    case "square":
      return getSquareArea1(shape as Square);
  }
};
const getCircleArea1 = (circle: Circle): number => {
  const { radius } = circle;
  return radius * radius * PI;
};
const getRectangleArea1 = (rectangle: Rectangle): number => {
  const { length, width } = rectangle;
  return length * width;
};
const getRightTriangleArea1 = (rightTriangle: RightTriangle): number => {
  const { height, base } = rightTriangle;
  return (base * height) / 2;
};
const getSquareArea1 = (square: Square): number => {
  const { width } = square;
  return getRectangleArea1({ length: width, type: "rectangle", width });
};
const circle: Circle = { radius: 4, type: "circle" };
console.log({ ...circle, area: getCircleArea1(circle) });
const rectangle: Rectangle = { length: 7, width: 4, type: "rectangle" };
console.log({ ...rectangle, area: getRectangleArea1(rectangle) });
const rightTriangle: RightTriangle = {
  base: 9,
  height: 4,
  type: "rightTriangle",
};
console.log({ ...rightTriangle, area: getRightTriangleArea1(rightTriangle) });

const square: Square = { width: 5, type: "square" };
console.log({ ...square, area: getSquareArea1(square) });
