const add = require('./index');

test('Adding 2 and 3 should be equal to 5', () => {
    expect(add(2, 3)).toBe(5);
})

test('Adding 1 and 4 should not be equal to 6', () => {
    expect(add(1, 4)).toBe(6);
})