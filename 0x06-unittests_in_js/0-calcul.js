function calculateNumber(a, b) {
    let roundA =  a < 0 ? Math.ceil(a - 0.5) : Math.floor(a + 0.5);
    let roundB =  b < 0 ? Math.ceil(b - 0.5) : Math.floor(b + 0.5);
    return (roundA + roundB);
}

module.exports = calculateNumber;
