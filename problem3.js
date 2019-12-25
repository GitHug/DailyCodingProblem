/**
 * Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.
 * 
 * For example, given the following Node class
 * 
 * class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
 *
 * The following test should pass:
 *
 * node = Node('root', Node('left', Node('left.left')), Node('right'))
 * assert deserialize(serialize(node)).left.left.val == 'left.left'        
 */
class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const serialize = node => {
  const array = []
  preOrderTraverse(node, array)

  return array.join(' ')
}

const preOrderTraverse = (node, array) => {
  if (!node) { 
    array.push(-1)
    return
  }

  array.push(node.val)
  preOrderTraverse(node.left, array)
  preOrderTraverse(node.right, array)
}

const deserialize = s => {
  if (!s || s.length === 0) return null

  const vals = s.split(' ')

  return deserializeTree(vals, 0)
}

const deserializeTree = (vals, i) => {
  if (!vals[i] || vals[i] === -1) return null

  const root = new Node(vals[i], deserializeTree(vals, i + 1), deserializeTree(vals, i + 2))

  return root
} 

module.exports = { Node, serialize, deserialize }