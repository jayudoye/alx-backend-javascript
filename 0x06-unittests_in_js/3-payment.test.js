const chai = require('chai');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./3-payment.js');

describe('sendPaymentRequestToApi ()', () => {
  const spyUtils = sinon.spy(Utils, 'calculateNumber');

  it('validate usage of the Utils function', () => {
    sendPaymentRequestToApi(100, 20);
    chai.expect(spyUtils.calledOnce).to.be.true;
    chai.expect(spyUtils.calledWith('SUM', 100, 20)).to.be.true;
    spyUtils.restore()
  });
});
