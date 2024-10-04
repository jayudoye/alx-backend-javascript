export default class HolbertonClass {
  constructor(size, location) {
    // eslint-disable-next-line no-underscore-dangle
    this._size = size;
    // eslint-disable-next-line no-underscore-dangle
    this._location = location;
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      // eslint-disable-next-line no-underscore-dangle
      return this._size;
    }
    if (hint === 'string') {
      // eslint-disable-next-line no-underscore-dangle
      return this._location;
    }
    return null;
  }
}
