import demo from '../app';

test('function demo shoul return value', () => {
  const input = 'result';
  const expected = 'result';
  // const received = new Bowerman(input[0], input[1]);
  expect(demo(input)).toEqual(expected);
});