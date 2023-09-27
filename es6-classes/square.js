/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(width) {
    super(width * width, 4 * width);
  }

  describe() {
    return `The squares area is ${this.area} and the squares perimeter is ${this.perimeter}.`;
  }
}

const square1 = new Square(5);
square1.describe();

console.log('square describe: ', square1.describe());
