const { car, cdr, cons } = require('./problem5')

describe('Problem 5', () => {
  test('testcase #1', () => {
    expect(car(cons(3, 4))).toBe(3)
  })

  test('testcase #2', () => {
    expect(cdr(cons(3, 4))).toBe(4)
  })
})