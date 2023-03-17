const sumHandshake = require('./task.js');

describe("Amount of handshakes:", () => {
    test("check with exact equality", () => {
        expect(sumHandshake(10)).toBe(45);
    })

    test("check the value of an object", () => {
        expect(sumHandshake(3)).toEqual(3);
    })

    test("a value is true in a boolean context", () => {
        expect(sumHandshake(7)).toBeTruthy();
    })

    test("a value is false in a boolean context", () => {
        expect(sumHandshake()).toBeFalsy();
    })

    test("amount of handshakes is more than...", () => {
        expect(sumHandshake(5)).toBeGreaterThan(8);
    })

    test("amount of handshakes is less than...", () => {
        expect(sumHandshake(7)).toBeLessThan(28);
    })
})