// Задача #1

function parseCount(value) {
  if (isNaN(Number.parseFloat(value))) {
    throw new Error("невалидное значение");
  }
  return Number.parseFloat(value);
}
function validateCount(value) {
  try {
    return parseCount(value);
  } catch (error) {
    return error;
  }
}
// Задача #2
class Triangle {
  constructor(a, b, c) {
    if (a + b < c || b + c < a || a + c < b) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  get perimetr() {
    return this.a + this.b + this.c;
  }
  get area() {
    const perimetr = this.a + this.b + this.c;
    const p = perimetr / 2;
    return Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
    );
  }
}
function getTriangle(a, b, c) {
  try {
    new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "ошибочка!!! Треугольник не существует";
      },
      get perimeter() {
        return "ошибочка!!! Треугольник не существует";
      },
    };
  }
  return new Triangle(a, b, c);
}
