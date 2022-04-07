const solution = require('./solution');

test('Test Case 1', () => {
  const input = [5, 7, 1, 1, 2, 3, 22];
  const expected = 20;

  expect(solution(input)).toEqual(expected);
});
test('Test Case 2', () => {
  const input = [1, 1, 1, 1, 1];
  const expected = 6;

  expect(solution(input)).toEqual(expected);
});
test('Test Case 3', () => {
  const input = [1, 5, 1, 1, 1, 10, 15, 20, 100];
  const expected = [];

  expect(solution(input)).toEqual(expected);
});
