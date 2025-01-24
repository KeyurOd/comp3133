
const calculator = require("../app/calculator.js"); 
const { expect } = require("chai");

describe("Calculator Tests", function () {
    it("add(5,2) expected result 7 PASS", function () {
        expect(calculator.add(5, 2)).to.equal(7);
    });

    it("add(5,2) expected result 8 FAIL", function () {
        expect(calculator.add(5, 2)).to.equal(8);
    });

    it("sub(5, 2) expected result 3 PASS", function () {
        expect(calculator.sub(5, 2)).to.equal(3);
    });

    it("sub(5,2) expected result 5 FAIL", function () {
        expect(calculator.sub(5, 2)).to.equal(5);
    });

    it("mul(5, 2) expected result 10 PASS", function () {
        expect(calculator.mul(5, 2)).to.equal(10);
    });

    it("mul(5,2) expected result 12 FAIL", function () {
        expect(calculator.mul(5, 2)).to.equal(12);
    });

    it("div(10, 2) expected result 5 PASS", function () {
        expect(calculator.div(10, 2)).to.equal(5);
    });

    it("div(10,2) expected result 2 FAIL", function () {
        expect(calculator.div(10, 2)).to.equal(2);
    });
});
