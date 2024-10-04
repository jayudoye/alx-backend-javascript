class Car {
  constructor(brand, motor, color) {
    // eslint-disable-next-line no-underscore-dangle
    this._brand = brand;
    // eslint-disable-next-line no-underscore-dangle
    this._motor = motor;
    // eslint-disable-next-line no-underscore-dangle
    this._color = color;
  }

  cloneCar() {
    // Create a new instance of the TestCar class with the same attribute values
    // eslint-disable-next-line no-underscore-dangle
    return new this.constructor(this._brand, this._motor, this._color);
  }
}

export default Car;
