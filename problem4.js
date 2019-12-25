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