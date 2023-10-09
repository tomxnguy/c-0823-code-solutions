/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
    this.radius = radius;
  }

  describe() {
    return `${super.describe()}, Radius:${this.radius}`;
  }
}

const circle1 = new Circle(5);
circle1.describe();

console.log('circle describe: ', circle1.describe());
