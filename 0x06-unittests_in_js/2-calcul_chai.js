function calculateNumber(type, a, b) {
    let roundedA =  a < 0 ? Math.ceil(a - 0.5) : Math.floor(a + 0.5);
    let roundedB =  b < 0 ? Math.ceil(b - 0.5) : Math.floor(b + 0.5);

     switch (type) {
        case 'SUM':
            return roundedA + roundedB;
        case 'SUBTRACT':
            return roundedA - roundedB;
        case 'DIVIDE':
            if (roundedB === 0) {
                return 'Error';
            }
            return roundedA / roundedB;
        default:
            throw new Error('Invalid type');
    }
}

module.exports = calculateNumber;
