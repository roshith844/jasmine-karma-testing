//first-jasmine-project/spec/helloWorld.spec.js

const helloWorld = require('../src/helloWorld.js');

describe("helloWorld", () => {
    it("returns hello world", () => {
      expect(helloWorld()).toBe("hello world");
    });
  });