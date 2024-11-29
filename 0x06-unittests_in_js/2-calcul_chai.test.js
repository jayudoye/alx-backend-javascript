const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should return the sum of rounded numbers', () => {
            expect(calculateNumber('SUM', 1.4, 3.5)).to.equal(5);
        });

        it('should handle negative numbers', () => {
            expect(calculateNumber('SUM', -1.4, -3.5)).to.equal(-5);
        });

        it('should handle zero', () => {
            expect(calculateNumber('SUM', 0, 0)).to.equal(0);
        });

        it('should handle one zero', () => {
            expect(calculateNumber('SUM', 0, 5)).to.equal(5);
        });

        it('should handle decimal input', () => {
            expect(calculateNumber('SUM', 1.6, 2.6)).to.equal(5);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should return the difference of rounded numbers', () => {
            expect(calculateNumber('SUBTRACT', 5.5, 3.4)).to.equal(3);
        });

        it('should handle negative numbers', () => {
            expect(calculateNumber('SUBTRACT', -1.4, -3.5)).to.equal(3);
        });

        it('should handle zero', () => {
            expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
        });

        it('should handle one zero', () => {
            expect(calculateNumber('SUBTRACT', 5, 0)).to.equal(5);
        });

        it('should handle decimal input', () => {
            expect(calculateNumber('SUBTRACT', 5.5, 2.6)).to.equal(3);
        });
    });

    describe('DIVIDE operation', () => {
        it('should return the division result of rounded numbers', () => {
            expect(calculateNumber('DIVIDE', 10, 5)).to.equal(2);
        });

        it('should handle negative numbers', () => {
            expect(calculateNumber('DIVIDE', -10, -5)).to.equal(2);
        });

        it('should handle zero', () => {
            expect(calculateNumber('DIVIDE', 0, 5)).to.equal(0);
        });

        it('should handle division by zero', () => {
            expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
        });

        it('should handle decimal input', () => {
            expect(calculateNumber('DIVIDE', 10.5, 2)).to.equal(5.5);
        });
    });

    it('should throw an error for invalid type', () => {
        expect(() => calculateNumber('INVALID', 1, 2)).to.throw(Error);
    });
});
