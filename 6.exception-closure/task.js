// Задача #1

function parseCount(parseNumber) {
  let result = Number.parseFloat(parseNumber, 10);
  myError = new Error("Невалидное значение");
  if (Number.isNaN(Number.parseFloat(parseNumber))) {
    throw myError;
  } else {
    return result;
  }
}
function validateCount(toParse) {
  try {
    let result = parseCount(toParse);
    return result;
  } catch (myError) {
    console.log(myError);
    return myError;
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
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    const p = this.perimeter / 2;
    return Number(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
    );
  }
}
function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      },
    };
  }
  return new Triangle(a, b, c);
}
