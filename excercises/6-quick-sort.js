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

const array = [10, 8, 2, 1, 6, 3, 9, 4, 7, 5];
console.log(quickSort(array));