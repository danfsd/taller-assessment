const solution = require('./solution');

test('Test Case 1', () => {
  const input = [1, 2, 3, 5, 6, 8, 9];
  const expected = [1, 4, 9, 25, 36, 64, 81];

  expect(solution(input)).toEqual(expected);
});
test('Test Case 2', () => {
  const input = [-2, -1];
  const expected = [1, 4];

  expect(solution(input)).toEqual(expected);
});
test('Test Case 3', () => {
  const input = [-10, -5, 0, 5, 10];
  const expected = [0, 25, 25, 100, 100];

  expect(solution(input)).toEqual(expected);
});