/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */
class Circle extends Shape {
  constructor(radius) {
    super(Math.PI * radius * radius, 2 * Math.PI * radius);
  }

  describe() {
    return `The circles area is ${this.area} and the circles perimeter is ${this.perimeter}.`;
  }
}

const circle1 = new Circle(5);
circle1.describe();

console.log('circle describe: ', circle1.describe());
