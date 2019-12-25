const findLowestMissingPositiveInteger = require('./problem4')

describe('Problem 4', () => {
  test('test case #1', () => {
    expect(findLowestMissingPositiveInteger([3, 4, -1, 1])).toBe(2)
  })

  test('test case #2', () => {
    expect(findLowestMissingPositiveInteger([1, 2, 0])).toBe(3)
  })

  test('test case #3', () => {
    expect(findLowestMissingPositiveInteger([1])).toBe(2)
  })

  test('test case #4', () => {
    expect(findLowestMissingPositiveInteger([2, 3, 7, 6, 8, -1, -10, 15])).toBe(1)
  })

  test('test case #5', () => {
    expect(findLowestMissingPositiveInteger([2, 3, -7, 6, 8, 1, -10, 15])).toBe(4)
  })

  test('test case #6', () => {
    expect(findLowestMissingPositiveInteger([1, 1, 0, -1, -2])).toBe(2)
  })
})