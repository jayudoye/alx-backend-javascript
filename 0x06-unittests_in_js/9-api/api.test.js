const request = require("request");
const {describe, it} = require("mocha");
const expect = require("chai").expect;

describe("Index page", function() {
  const url = {
	  url: "http://localhost:7865/",
	  method: "GET"
  }
  it("correct status code", function(done) {
	  request(url, function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
    });
  });
  it("correct content", function(done) {
	  request(url, function(err, res, body) {
	    expect(body).to.equal("Welcome to the payment system");
	    done();
	  });
  });
});

describe("Cart page", function() {
  it("correct status code for correct url", function(done) {
	  request.get("http://localhost:7865/cart/12", function(err, res, body) {
	    expect(res.statusCode).to.equal(200);
	    done();
	  });
  });
  it("correct content for correct url", function(done) {
	  request.get("http://localhost:7865/cart/12", function(err, res, body) {
	    expect(body).to.contain("Payment methods for cart 12");
	    done();
	  });
  });
  it("correct status code for incorrect url", function(done) {
	  request.get("http://localhost:7865/cart/kim", function(err, res, body) {
	    expect(res.statusCode).to.equal(404);
	    done();
	  });
  });
});
