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
const cons = (a, b) => isFirst => isFirst ? a : b

const car = pair => pair(true)
const cdr = pair => pair(false)

module.exports = { car, cdr, cons }
