import Car from './10-car';

export default class EvCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    // eslint-disable-next-line no-underscore-dangle
    this._range = range;
  }

  // eslint-disable-next-line class-methods-use-this
  cloneCar() {
    // Create a new instance of the TestCar class with the same attribute values
    // eslint-disable-next-line no-underscore-dangle
    return new Car();
  }
}
