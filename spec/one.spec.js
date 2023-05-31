const { returnNumber } = require("../src/one")

describe("program", () => {
    let count = 0
    beforeEach(() => {
        count++
        console.log(count)
    })

    it("is greater than 10", () => {
        expect(returnNumber()).toBeGreaterThan(0)
    })
    it('is true', () => {
        expect(returnNumber()).toBeTruthy()
    })
    it('less than 100', () => {
        expect(returnNumber()).toBeLessThanOrEqual(100)
    })
    it('it is a number', () => {
        expect(returnNumber()).toMatch(/^\d+$/)
    })

    it('close to 10', () => {
        expect(returnNumber()).toBeCloseTo(10.01, 1)
    })
    it('is defined', () => {
        expect(returnNumber()).toBeDefined()
    })
    it('is not undefined', () => {
        expect(returnNumber()).not.toBeUndefined()
    })
})