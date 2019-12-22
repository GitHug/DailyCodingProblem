const hasSum = require('./problem1');

describe('has sum', () => {
  test('it has sum', () => {
    expect(hasSum([10, 15, 3, 7], 17)).toBe(true)
  })

  test('it does not have sum', () => {
    expect(hasSum([10, 15, 3, 7], 16)).toBe(false)
  })
})