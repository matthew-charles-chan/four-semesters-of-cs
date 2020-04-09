/*

  Quicksort!
  
  Quicksort should grab a pivot from the end and then separate the list (not including the pivot)
  into two lists, smaller than the pivot and larger than the pivot. Call quickSort on both of those
  lists independently. Once those two lists come back sorted, concatenate the "left" (or smaller numbers)
  list, the pivot, and the "right" (or larger numbers) list and return that. The base case is when quickSort
  is called on a list with length less-than-or-equal-to 1. In the base case, just return the array given.
  
  As always, you can change describe to xdescribe to prevent the unit tests from running while you're coding.
  
  No visualization is provided so feel free to use your own debugging methods (like console.log).

*/

 const quickSort = (nums) => {
  // if array is 0 or 1 elements, return array as it is sorted
  if (nums.length <= 1) return nums;
  
  // choose last element as pivot
  const pivot = nums.pop();

  // create left and right arrays
  const left = [];
  const right = [];

  //  iterate through array, if num is smaller than pivot append left, vise-versa
  for (const num of nums) {
    num < pivot ? 
      left.push(num) :
      right.push(num);
   }
  
  // return sorted left, pivot, sorted right 
  return [...quickSort(left), pivot, ...quickSort(right)]
 }

const array = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
console.log(quickSort(array));