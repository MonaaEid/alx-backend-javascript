const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
    it("should return 4", function () {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it("should return 5", function () {
        assert.strictEqual(calculateNumber(1.9, 3), 5);
    });
    it("should return 5", function () {
        assert.strictEqual(calculateNumber(1, 3.9), 5);
    });
    it("should return 5", function () {
        assert.strictEqual(calculateNumber(1.4, 3.5), 5);
    });
    it("should return 6", function () {
        assert.strictEqual(calculateNumber(1.4, 3.5, 'ROUND_DOWN'), 4);
    });
    it("should return 5", function () {
        assert.strictEqual(calculateNumber(1.5, 3.5, 'ROUND_UP'), 5);
    });
    it("should return 6", function () {
        assert.strictEqual(calculateNumber(1.6, 3.5, 'ROUND_UP'), 6);
    });
    it("should return 6", function () {
        assert.strictEqual(calculateNumber(1.4, 3.5, 'ROUND_HALF_DOWN'), 5);
    });
    it("should return 5", function () {
        assert.strictEqual(calculateNumber(1.5, 3.5, 'ROUND_HALF_UP'), 5);
    });
    it("should return 5", function () {
        assert.strictEqual(calculateNumber(1.6, 3.5, 'ROUND_HALF_UP'), 5);
    });
    it("should return 5", function () {
        assert.strictEqual(calculateNumber(1.4, 3.5, 'ROUND_HALF_EVEN'), 5);
    });
    it("should return 6", function () {
        assert.strictEqual(calculateNumber(1.5, 3.5, 'ROUND_HALF_EVEN'), 6);
    });
    it("should return 6", function () {
        assert.strictEqual(calculateNumber(1.6, 3.5, 'ROUND_HALF_EVEN'), 6);
    });
    it("should return 6", function () {
        assert.strictEqual(calculateNumber(1.2, 3.7, 'ROUND_HALF_EVEN'), 5);
    });
    it("should return 5", function () {
        assert.strictEqual(calculateNumber(1.5, 3.5, 'ROUND_HALF_DOWN'), 5);
    });
    it("should return 5", function () {
        assert.strictEqual(calculateNumber(1.6, 3.5, 'ROUND_HALF_DOWN'), 5);
    });
    it("should return 5", function () {
        assert.strictEqual(calculateNumber(1.4, 3.5, 'ROUND_HALF_UP'), 5);
    });
});