export default class Currency {
  constructor(code, name) {
    this.validateString(code, 'Code');
    this.validateString(name, 'Name');
    // eslint-disable-next-line no-underscore-dangle
    this._code = code;
    // eslint-disable-next-line no-underscore-dangle
    this._name = name;
  }

  set name(newName) {
    this.validateString(newName, 'Name');
    // eslint-disable-next-line no-underscore-dangle
    this._name = newName;
  }

  get name() {
    // eslint-disable-next-line no-underscore-dangle
    return this._name;
  }

  set code(newCode) {
    this.validateString(newCode, 'Code');
    // eslint-disable-next-line no-underscore-dangle
    this._code = newCode;
  }

  get code() {
    // eslint-disable-next-line no-underscore-dangle
    return this._code;
  }

  // Helper function to validate string
  // eslint-disable-next-line class-methods-use-this
  validateString(value, propertyName) {
    if (typeof value !== 'string') {
      throw new Error(`${propertyName} must be a string`);
    }
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
