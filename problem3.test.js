const { Node, serialize, deserialize } = require('./problem3')

describe('Problem 3', () => {
  test('test case #1', () => {
    const node = new Node('root', new Node('left', new Node('left.left')), new Node('right'))

    expect(deserialize(serialize(node)).left.left.val == 'left.left')
  })
})
