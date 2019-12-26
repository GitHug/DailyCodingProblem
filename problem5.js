/**
 * cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns the first and last element
 * of that pair. For example, car(cons(3, 4)) returns 3, and cdr(cons(3, 4)) returns 4.
 *
 * Given this implementation of cons:
 *
 * def cons(a, b):
 *  def pair(f):
 *    return f(a, b)
 *      return pair
 *
 * Implement car and cdr.
 */
class Pair {
  constructor(first, last) {
    this.first = first
    this.last = last
  }
}

const cons = (a, b) => new Pair(a, b)

const car = pair => pair.first
const cdr = pair => pair.last

module.exports = { car, cdr, cons }
