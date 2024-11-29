const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should return the sum of rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 3.5), 5);
        });

        it('should handle negative numbers', () => {
            assert.strictEqual(calculateNumber('SUM', -1.4, -3.5), -5);
        });

        it('should handle zero', () => {
            assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
        });

        it('should handle one zero', () => {
            assert.strictEqual(calculateNumber('SUM', 0, 5), 5);
        });

        it('should handle decimal input', () => {
            assert.strictEqual(calculateNumber('SUM', 1.6, 2.6), 5);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return the difference of rounded numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 3.4), 3);
        });

        it('should handle negative numbers', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -3.5), 3);
        });

        it('should handle zero', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 0, 0), 0);
        });

        it('should handle one zero', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5, 0), 5);
        });

        it('should handle decimal input', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.6), 3);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return the division result of rounded numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 10, 5), 2);
        });

        it('should handle negative numbers', () => {
            assert.strictEqual(calculateNumber('DIVIDE', -10, -5), 2);
        });

        it('should handle zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 0, 5), 0);
        });

        it('should handle division by zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
        });

        it('should handle decimal input', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 10.5, 2), 5.5);
        });
    });

    it('should throw an error for invalid type', () => {
        assert.throws(() => {
            calculateNumber('INVALID', 1, 2);
        }, Error);
    });
});
