import Car from './10-car';

export default class EvCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];
    return new Species(this.range);
  }
}
