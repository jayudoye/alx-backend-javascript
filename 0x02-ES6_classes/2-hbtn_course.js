export default class HolbertonCourse {
  constructor(name, length, students) {
    this.validateString(name, 'name');
    this.validateNumber(length, 'length');
    this.validateArray(students, 'students');
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
    // eslint-disable-next-line no-underscore-dangle
    this._length = length;
    // eslint-disable-next-line no-underscore-dangle
    this._students = students;
  }

  // Getter and Setter for 'name'
  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set name(newName) {
    this.validateString(newName, 'Name');
    // eslint-disable-next-line no-underscore-dangle
    this._name = newName;
  }

  // Getter and Setter for 'length'
  get length() {
    // eslint-disable-next-line no-underscore-dangle
    return this._length;
  }

  set length(newLength) {
    this.validateNumber(newLength, 'Length');
    // eslint-disable-next-line no-underscore-dangle
    this._length = newLength;
  }

  // Getter and Setter for 'students'
  get students() {
    // eslint-disable-next-line no-underscore-dangle
    return this._students;
  }

  set students(newStudents) {
    this.validateArray(newStudents, 'Students');
    // eslint-disable-next-line no-underscore-dangle
    this._students = newStudents;
  }

  // Helper function to validate string
  // eslint-disable-next-line class-methods-use-this
  validateString(value, propertyName) {
    if (typeof value !== 'string') {
      throw new Error(`${propertyName} must be a string`);
    }
  }

  // Helper function to validate number
  // eslint-disable-next-line class-methods-use-this
  validateNumber(value, propertyName) {
    if (typeof value !== 'number') {
      throw new Error(`${propertyName} must be a number`);
    }
  }

  // Helper function to validate array
  // eslint-disable-next-line class-methods-use-this
  validateArray(value, propertyName) {
    if (!Array.isArray(value)) {
      throw new Error(`${propertyName} must be an array`);
    }
  }
}
