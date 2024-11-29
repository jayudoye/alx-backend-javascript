const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers', () => {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });

    it('should handle negative numbers', () => {
        assert.strictEqual(calculateNumber(-1.4, -3.5), -5);
    });

    it('should handle zero', () => {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('should handle one zero', () => {
        assert.strictEqual(calculateNumber(0, 5), 5);
    });

    it('should handle decimal input', () => {
        assert.strictEqual(calculateNumber(1.6, 2.6), 5);
    });

    it('should handle large numbers', () => {
        assert.strictEqual(calculateNumber(9999999999.5, 0.5), 10000000001);
    });
});
