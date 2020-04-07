/* 
Given two sorted arrays, find the median element between the two arrays

ex. 
Given:
ar1 = [1,3,5,7]
ar2 = [2,4,9]

Return: 4
*/

const findMedian = (ar1, ar2) => {
  const results = [];
  const medianIndex = Math.floor((ar1.length + ar2.length)/2);
  while(results.length <= medianIndex) {
    ar1[0] <= ar2[0] ?
      results.push(ar1.shift()):
      results.push(ar2.shift());
  }
  return results[medianIndex]
}

const ar1 = [1,3,5,7]
const ar2 = [2,4,9]

console.log(findMedian(ar1, ar2))