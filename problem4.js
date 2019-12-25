/**
 * Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
 * 
 * For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.
 * 
 * You can modify the input array in-place.
 */
const findLowestMissingPositiveInteger = array => {
  if (!array) return 1
  if (array.length === 1) return array[0] === 1 ? 2: 1

  let max = -1
  array.forEach(item => { if (item > max) max = item })
  if (max <= 0) return 1

  let numbers = new Array(max)

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && numbers[array[i] - 1] !== 1) {
      numbers[array[i] - 1] = 1
    }
  }

  let i = 0
  for (; i < numbers.length; i++) { 
    if (!numbers[i]) { 
      return i + 1; 
    } 
  } 

  return i + 1
}

module.exports = findLowestMissingPositiveInteger