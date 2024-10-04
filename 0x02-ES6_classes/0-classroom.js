export default class ClassRoom {
  constructor(maxStudentsSize) {
    if (typeof maxStudentsSize !== 'number') {
      throw new Error('maxStudentsSize must be a number');
    }

    // eslint-disable-next-line no-underscore-dangle
    this._maxStudentsSize = maxStudentsSize;
  }
}
