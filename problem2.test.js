const problem2 = require('./problem2')

describe('Problem 2', () => {
  it('returns an empty array', () => {
    expect(problem2([])).toEqual([])
  })

  it('returns an array containing a single element', () => {
    expect(problem2([5])).toEqual([5])
  })

  test('test case #1', () => {
    expect(problem2([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24])
  })

  test('test case #2', () => {
    expect(problem2([3, 2, 1])).toEqual([2, 3, 6])
  })
})