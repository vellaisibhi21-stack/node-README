const { add, greet } = require('../src/index');

describe('[feat-1] Greeter', () => {
  test('adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('greets by name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
