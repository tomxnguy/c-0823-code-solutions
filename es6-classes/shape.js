/* exported Shape */
class Shape {
  area;
  perimeter;
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  describe() {
    return `This area is ${this.area} and the perimeter is ${this.perimeter}`;
  }
}

const Shape1 = new Shape(15, 30);
Shape1.describe();

console.log('describe: ', Shape1.describe());
